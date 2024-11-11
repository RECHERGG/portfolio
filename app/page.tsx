import type {Metadata} from "next";
import Home from "@/components/home";

export const metadata: Metadata = {
    title: "jtobaben.me | Home"
};

{/* TODO: Responsive Design */}
export default function HomePage() {
    return (
        <div className="flex items-center justify-center min-h-screen px-12 select-none">
            <Home />
        </div>
    );
}
