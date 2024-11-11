"use client";

import {Spotlight} from "@/components/ui/spotlight";
import React from "react";

export default function Background({ children }: { children: React.ReactNode }) {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-!0 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="h-screen w-full bg-black-100 bg-grid-white/[0.04] flex items-center justify-center absolute top-0 left-0 fade-out"
                 style={{
                     maskImage: 'radial-gradient(circle at center, rgba(0, 0, 0, 1), transparent 60%)',
                     WebkitMaskImage: 'radial-gradient(circle at center, rgba(0, 0, 0, 1), transparent 60%)',
                 }}>
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}