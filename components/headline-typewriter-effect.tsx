"use client";

import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";

export function HeadlineTypewriterEffect() {
    const words = [
        {
            text: "Hello, Dev 👋",
        },
        {
            text: "Ready to code?",
        },
        {
            text: "Build something cool!",
        },
        {
            text: "Debug mode: ON",
        },
        {
            text: "Keep pushing!",
        },
        {
            text: "\"Hello World!\"",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center text-white">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
