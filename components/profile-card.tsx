'use client';
import { Linkedin, Send } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export default function ProfileCard() {
    const t = useTranslations();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center">
                    <div className="flex flex-col gap-1">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl font-extrabold"
                        >
                            {t("profile.introduction.firstLine")}
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-2xl font-extrabold text-gray-400"
                        >
                            {t("profile.introduction.secondLine")}
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-2xl font-extrabold text-gray-400"
                        >
                            {t("profile.introduction.thirdLine")}
                        </motion.h1>
                    </div>
                </CardHeader>
                <CardContent>
                    <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link href={`mailto:${siteConfig.links.mail}`} target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button variant="outline" size="icon" className="hover:cursor-pointer">
                                    <motion.div
                                        whileHover={{ rotate: 15 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Send />
                                    </motion.div>
                                </Button>
                            </motion.div>
                        </Link>

                        <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" size="icon" className="hover:cursor-pointer">
                                    <Linkedin className="size-5" />
                                </Button>
                            </motion.div>
                        </Link>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="hover:cursor-pointer">
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>GitHub</title>
                                        <path className="fill-black dark:fill-white" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="hover:cursor-pointer">
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>X</title>
                                        <path className="fill-black dark:fill-white" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                    </svg>
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div >
    );
}