"use client";

import {motion} from "framer-motion";
import {HeadlineTypewriterEffect} from "@/components/headline-typewriter-effect";
import Background from "@/components/background";

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
                    <HeadlineTypewriterEffect />
                </motion.h1>

                <motion.p
                    className="text-lg text-gray-300 max-w-md text-center"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    I’m Joel, a {Math.floor((Date.now() - new Date("2008-02-10").getTime()) / (365.25 * 24 * 60 * 60 * 1000))}-year-old Fullstack Developer with a passion for crafting innovative web
                    applications.
                    In my
                    free time, I love exploring new technologies and building projects that challenge my skills.
                </motion.p>
            </motion.div>
        </ Background>
    )
}