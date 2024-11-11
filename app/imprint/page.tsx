import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "tobaben.dev | Imprint",
    robots: "noindex, nofollow",
};

export default function ImprintPage() {
    return (
        <BackgroundBeamsWithCollision className="flex flex-grow select-none">
            <div className="flex flex-col items-start h-screen p-12">
                <h2 className="text-4xl relative z-20 md:text-5xl lg:text-7xl font-bold text-left text-white font-sans tracking-tight mb-6">
                    <div
                        className="relative inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div
                            className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">Imprint</span>
                        </div>
                        <div
                            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">Imprint</span>
                        </div>
                    </div>
                </h2>

                <div className="text-left text-white">
                    <p className="text-lg">Contact</p>
                    <p className="text-sm">Joel Tobaben</p>
                    <p className="text-sm">E-Mail: <a className="text-blue-500 hover:cursor-pointer" href="mailto: contact@jtobaben.me">contact@jtobaben.me</a></p>

                    <br/>
                    <p className="text-lg">For further information, please contact me via email with a valid reason.</p>
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
}
