'use client';

import { siteConfig } from "@/lib/config"
import Link from "next/link"
import { useLanyard } from "react-use-lanyard"
import { useEffect, useMemo, useState } from "react";
import { formatElapsedTime, formatTime } from "@/lib/time";
import { getStatusColor, getStatusText } from "@/lib/status";
import { useTranslations } from "next-intl";
import { Progress } from "../ui/progress";
import { Marquee } from "./spotify-marquee";
import Image from 'next/image'

export default function DiscordCard() {
    const { loading, status: data } = useLanyard({
        userId: siteConfig.discordId,
        socket: true,
    })

    const [playerElapsed, setPlayerElapsed] = useState(0)
    const [playerTotal, setPlayerTotal] = useState(0)
    const [formattedActivityTime, setFormattedActivityTime] = useState("")

    const t = useTranslations();

    useEffect(() => {
        if (data?.listening_to_spotify && data.spotify || soundcloud) {
            const start = data?.spotify?.timestamps.start || soundcloud?.timestamps?.start
            const end = data?.spotify?.timestamps.end || soundcloud?.timestamps?.end

            if (!start || !end) return
            setPlayerTotal(end - start)

            const updateElapsed = () => {
                const now = Date.now()
                setPlayerElapsed(now - start)
            }

            updateElapsed()
            const interval = setInterval(updateElapsed, 1000)

            return () => clearInterval(interval)
        }
    }, [data])

    const mainActivity = useMemo(
        () => data?.activities.find((activity) => activity.name !== "Spotify"),
        [data]
    )

    const soundcloud = useMemo(() => {
        if (!data?.activities) return null;

        return data.activities.find((activity) =>
            activity.assets?.large_image?.toLowerCase().includes("sndcdn")
        ) ?? null;
    }, [data]);

    const soundcloudCoverUrl = useMemo(() => {
        if (!soundcloud?.assets?.large_image) return null
        const raw = soundcloud.assets.large_image

        const parts = raw.split("https/")
        if (parts.length > 1) {
            return `https://${parts[1]}`
        }

        return null
    }, [soundcloud])

    useEffect(() => {
        if (!mainActivity?.timestamps?.start) return

        const updateFormattedTime = () => {
            if (!mainActivity?.timestamps?.start) return
            setFormattedActivityTime(formatElapsedTime(mainActivity.timestamps.start!))
        }

        updateFormattedTime()
        const interval = setInterval(updateFormattedTime, 1000)

        return () => clearInterval(interval)
    }, [mainActivity])

    const spotifyProgress = playerTotal
        ? Math.min(100, Math.max(0, (playerElapsed / playerTotal) * 100))
        : 0

    const currentTime = formatTime(playerElapsed)
    const totalTime = formatTime(playerTotal)

    if (loading) {
        return (
            <div className="dark:bg-neutral-900 bg-neutral-100 rounded-lg flex items-center p-4 gap-4 border">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
                <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-32" />
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-24" />
                    <div className="h-2 bg-gray-200 rounded animate-pulse w-full" />
                </div>
            </div>
        )
    }

    if (!data) {
        return (
            <div className="dark:bg-neutral-900 bg-neutral-100 rounded-lg flex items-center p-4 gap-4 border">
                <svg role="img" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <title>Discord</title>
                    <path
                        className="fill-[#5865F2]"
                        d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                    />
                </svg>
                <div>
                    <p className="text-red-500">Discord Fehler</p>
                </div>
            </div>
        )
    }

    const { discord_user, discord_status, spotify, listening_to_spotify } = data
    const avatarUrl = `https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png?size=128`

    return (
        <Link href={`https://discordapp.com/users/${siteConfig.discordId}`} target="_blank" rel="noopener noreferrer">
            <div className="relative dark:bg-neutral-900 bg-neutral-100 rounded-lg flex items-start p-4 gap-4 dark:hover:bg-neutral-700 hover:bg-neutral-200 border hover:border-gray-500 transition select-none">

                {(soundcloudCoverUrl || spotify?.album_art_url) && (
                    <>
                        <Image
                            src={soundcloudCoverUrl || spotify.album_art_url}
                            alt="SoundCloud Artwork"
                            fill
                            className="object-cover rounded-lg opacity-30"
                            sizes="300px"
                        />

                        <div className="absolute inset-0 bg-black/40 rounded-lg" />
                    </>
                )}

                <div className="absolute top-2 right-2 opacity-80">
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Discord</title>
                        <path
                            className="fill-[#5865F2]"
                            d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                        />
                    </svg>
                </div>

                <div className="relative flex-shrink-0">
                    <Image
                        src={avatarUrl || "https://archive.org/download/discordprofilepictures/discordgrey.png"}
                        alt={`${discord_user.global_name || discord_user.username} Avatar`}
                        className="w-12 h-12 rounded-full"
                        width={48}
                        height={48}
                    />

                    <div className="absolute -bottom-1 -right-0">
                        <span className="relative flex h-4 w-4">
                            <span
                                className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${getStatusColor(
                                    discord_status
                                )}`}
                            ></span>
                            <span
                                className={`relative inline-flex rounded-full h-4 w-4 ${getStatusColor(discord_status)}`}
                            ></span>
                        </span>
                    </div>
                </div>

                <div className="flex-1 min-w-0 space-y-1 z-10">
                    <div className="overflow-hidden">
                        <p className="text-neutral-900 dark:text-white leading-tight">
                            {discord_user.global_name || discord_user.username}
                        </p>
                    </div>

                    {listening_to_spotify && spotify ? (
                        <div className="space-y-1">
                            <Marquee song={spotify.song} artist={spotify.artist} />
                            <div className="space-y-1">
                                <Progress value={spotifyProgress} className="h-1" />
                                <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-500">
                                    <span>{currentTime}</span>
                                    <span>{totalTime}</span>
                                </div>
                            </div>
                        </div>
                    ) : soundcloud ? (
                        <div className="space-y-1">
                            <Marquee song={soundcloud.details!} artist={soundcloud.name} />
                            <div className="space-y-1">
                                <Progress value={spotifyProgress} className="h-1" />
                                <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-500">
                                    <span>{currentTime}</span>
                                    <span>{totalTime}</span>
                                </div>
                            </div>
                        </div>
                    ) : mainActivity ? (
                        <div className="space-y-1">
                            <div className="overflow-hidden">
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm whitespace-nowrap">
                                    🎮 {mainActivity.name}
                                </p>
                            </div>

                            <div className="space-y-0.5">
                                {mainActivity.state && (
                                    <p className="text-xs text-neutral-500 dark:text-neutral-500 truncate">{mainActivity.state}</p>
                                )}
                                {mainActivity.details && (
                                    <p className="text-xs text-neutral-500 dark:text-neutral-500 truncate">{mainActivity.details}</p>
                                )}
                                {mainActivity.timestamps?.start && (
                                    <p className="text-xs text-neutral-500 dark:text-neutral-500">
                                        {t("discord.activity.since")} {formattedActivityTime}
                                    </p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">{getStatusText(discord_status)}</p>
                    )}
                </div>
            </div>
        </Link>
    )
}
