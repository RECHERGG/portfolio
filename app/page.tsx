import type {Metadata} from "next";
import Home from "@/components/home";
import {PersonalTimeline} from "@/components/personal-timeline";
import TechStack from "@/components/techstack";

export const metadata: Metadata = {
    title: "jtobaben.me | Home"
};

{/* TODO: Responsive Design */
}
export default function HomePage() {
    return (
        <div className="min-h-screen px-12 select-none flex flex-col items-center">
            <div className="w-full">
                <Home/>
            </div>

            <div className="w-full mt-[65vh]">
            <PersonalTimeline/>
            </div>

            <div className="w-full mt-16">
                <TechStack/>
            </div>
        </div>
    );
}
