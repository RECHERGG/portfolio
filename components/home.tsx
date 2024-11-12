"use client";

import {motion} from "framer-motion";
import {HeadlineTypewriterEffect} from "@/components/headline-typewriter-effect";
import Background from "@/components/background";
import {GitHubLogoIcon} from "@radix-ui/react-icons";

export default function Home() {
    return (
        <Background>
            <motion.div
                className="flex flex-col justify-center items-center"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -50}}
                transition={{duration: 0.5}}
            >
                <motion.h1
                    className="text-5xl font-bold text-white mb-2"
                    initial={{scale: 0.8}}
                    animate={{scale: 1}}
                    transition={{duration: 0.5}}
                >
                    <HeadlineTypewriterEffect/>
                </motion.h1>

                <motion.p
                    className="text-lg text-gray-300 max-w-md text-center"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    I’m Joel,
                    a {Math.floor((Date.now() - new Date("2008-02-10").getTime()) / (365.25 * 24 * 60 * 60 * 1000))}-year-old
                    Fullstack Developer with a passion for crafting innovative web
                    applications.
                    In my
                    free time, I love exploring new technologies and building projects that challenge my skills.
                </motion.p>

                <motion.div
                    className="mt-10"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -50}}
                    transition={{duration: 0.5}}
                >
                    <a href="https://github.com/RECHERGG" target="_blank">
                        <button
                            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span
                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <GitHubLogoIcon className="mr-2"/> Follow me on Github!
                        </span>
                        </button>
                    </a>
                </motion.div>
            </motion.div>
        </ Background>
    )
}