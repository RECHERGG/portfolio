"use client";

import { cn } from "@/lib/utils";
import {motion, stagger, useAnimate, useAnimationControls, useInView} from "framer-motion";
import {useEffect, useState} from "react";

export const TypewriterEffect = ({
                                     words,
                                     className,
                                     cursorClassName,
                                 }: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    display: "inline-block",
                    opacity: 1,
                    width: "fit-content",
                },
                {
                    duration: 0.3,
                    delay: stagger(0.1),
                    ease: "easeInOut",
                }
            );
        }
    }, [animate, isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <motion.span
                                    initial={{}}
                                    key={`char-${index}`}
                                    className={cn(
                                        `dark:text-white text-black opacity-0 hidden`,
                                        word.className
                                    )}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </motion.div>
        );
    };
    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}
        >
            {renderWords()}
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

export const TypewriterEffectSmooth = ({
                                           words,
                                           className,
                                           cursorClassName,
                                       }: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const controls = useAnimationControls();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setIsMounted(true);

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    useEffect(() => {
        const animateWords = async () => {
            for (let i = 0; i < words.length; i++) {
                setCurrentWordIndex(i);

                if (!isMounted) {
                    break;
                }

                await controls.start({
                    width: "fit-content",
                    opacity: 1,
                    transition: { duration: 2 },
                });

                const timeout = new Promise((resolve) => {
                    const id = setTimeout(resolve, 5000);
                    setTimeoutId(id);
                });
                await timeout;

                if (!isMounted) {
                    break;
                }

                await controls.start({
                    width: "0%",
                    opacity: 0,
                    transition: { duration: 2 },
                });
            }

            if (isMounted) {
                animateWords();
            }
        };

        if (isMounted) {
            animateWords();
        }
    }, [controls, words, isMounted]);

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                className="overflow-hidden"
                initial={{opacity: 0, width: "0%"}}
                animate={controls}
                style={{
                    whiteSpace: "nowrap",
                }}
            >
        <span
            className={cn(
                "text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold",
                words[currentWordIndex]?.className
            )}
        >
          {words[currentWordIndex]?.text}
        </span>
            </motion.div>
            <motion.span
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};