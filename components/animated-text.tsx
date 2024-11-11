"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts: string[] = [
    "Web Development Enthusiast 🌐",
    "Passionate about Open Source Projects 💻",
    "Lifelong Learner 📚",
    "Currently Exploring Machine Learning 🤖",
    "Coffee Lover ☕️",
    "Always Looking for Collaboration 🤝"
];

export default function AnimatedText() {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [charIndex, setCharIndex] = useState<number>(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting && charIndex < texts[index].length) {
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + texts[index][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, 50);
        } else if (!isDeleting && charIndex === texts[index].length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <motion.h2
            className="text-4xl font-semibold text-white mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {displayedText}
        </motion.h2>
    );
}