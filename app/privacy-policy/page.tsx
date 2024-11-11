import type {Metadata} from "next";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision";
import React from "react";

export const metadata: Metadata = {
    title: "jtobaben.me | Privacy Policy",
    robots: "noindex, nofollow",
};

export default function PrivacyPolicyPage() {
    return (
        <BackgroundBeamsWithCollision className="flex flex-grow select-none min-h-[70rem]">
            <div className="flex flex-col items-start p-12 mx-auto max-w-3xl h-[120vh]">
                <h2 className="text-4xl relative z-20 md:text-5xl lg:text-7xl font-bold text-left text-white font-sans tracking-tight mb-6">
                    <div className="relative inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span>Privacy Policy</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                </h2>

                <div className="text-left text-white space-y-4 max-w-prose">
                    <h3 className="text-2xl font-bold">Introduction</h3>
                    <p>This Privacy Policy outlines the data we collect and handle on this portfolio website. We are
                        committed to protecting your privacy and ensuring that your personal data is handled
                        securely.</p>

                    <h3 className="text-2xl font-bold">Data Collection</h3>
                    <p>We do not collect, store, or process any personal data through this website. This portfolio is
                        designed solely for informational purposes, showcasing personal work and art. No cookies,
                        tracking technologies, or user analytics are used.</p>

                    <h3 className="text-2xl font-bold">Contact Information</h3>
                    <p>If you choose to reach out via email, please be aware that your email address and any details
                        provided will only be used to respond to your inquiry. We do not store this data for any other
                        purposes. If you would like to request the deletion of your email data, please contact us
                        directly.</p>

                    <h3 className="text-2xl font-bold">Your Rights</h3>
                    <p>Since this website does not collect personal data, there are no stored data records associated
                        with visitors. If you have any concerns or would like to inquire about your data rights, feel
                        free to contact us. You have the right to request information about any data that may have been
                        stored (if applicable), and to request its deletion.</p>

                    <h3 className="text-2xl font-bold">Changes to this Policy</h3>
                    <p>We may update this Privacy Policy periodically. Please review this page occasionally to stay
                        informed of any changes. Any changes will be reflected with an updated &#34;Last change&#34; date
                        below.</p>

                    <h3 className="text-2xl font-bold">Contact</h3>
                    <p>Joel Tobaben<br/>E-Mail: <a className="text-blue-500 hover:cursor-pointer"
                                                   href="mailto: contact@jtobaben.me">contact@jtobaben.me</a></p>

                    <br/>
                    <p className="text-xs">Last change: 05.11.2024</p>
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
}