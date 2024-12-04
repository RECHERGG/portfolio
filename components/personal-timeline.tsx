"use client";

import Image, {StaticImageData} from "next/image";
import React, {useState} from "react";
import { Timeline } from "@/components/ui/timeline";

import polocloudDashboardPreview from "@/public/polocloud-dashboard-preview.png"

import nextpizzaImageOne from "@/public/nextpizza-1.png";
import nextpizzaImageTwo from "@/public/nextpizza-2.png";
import nextpizzaImageThree from "@/public/nextpizza-3.png";
import nextpizzaImageFour from "@/public/nextpizza-4.png";

export function PersonalTimeline() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

    const openModal = (imageSrc: StaticImageData) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const data = [
        {
            title: "Jun 16, 2024",
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I began working on <a className="font-bold text-blue-500 underline" href={"https://github.com/HttpMarco/polocloud"} target={"_blank"}>PoloCloud</a>, an open-source project that aims to provide a simple and easy-to-use cloud platform for Minecraft servers.
                        Since then, I support the project in my free time and work on new features and improvements.
                    </p>

                    <div>
                        <p className="text-neutral-200 text-xs md:text-sm font-normal">
                            This is a preview of the upcoming dashboard for PoloCloud. <br/>
                        </p>

                        <Image
                            src={polocloudDashboardPreview}
                            alt="PoloCloud Dashboard Preview"
                            className="rounded-lg object-cover w-full shadow-lg cursor-pointer"
                            onClick={() => openModal(polocloudDashboardPreview)}
                        />
                        <p className="text-gray-400 text-xs mt-2">* Note: The image shown here was not created by me. I primarily worked on the cloud system, REST API, and additional modules/addons.</p>
                    </div>
                </div>
            ),
        },
        {
            title: "Mar 8, 2024",
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        This project was created during my internship. I was responsible for the development of the frontend and backend of the application. In the time I worked on this project, I learned a lot about the development of web applications and the use of modern technologies.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[nextpizzaImageOne, nextpizzaImageTwo, nextpizzaImageThree, nextpizzaImageFour].map((img: StaticImageData, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt="Project screenshot"
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg cursor-pointer"
                                onClick={() => openModal(img)}
                            />
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "Nov 26, 2021",
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I joined Github as a developer and started working on my first projects. I learned a lot about Git and Github and how to use it to collaborate with other developers.
                    </p>
                </div>
            ),
        },
        {
            title: "The Start",
            content: (
                <div>
                    <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Even as a child I was interested in technology and computers. I started programming at the age of 12 and have been learning new things ever since. Sometimes I put more time into it, sometimes less, but I never lost my passion for it.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline data={data} />

            {isModalOpen && selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <Image
                            src={selectedImage}
                            alt="Enlarged project screenshot"
                            width={1620}
                            height={1200}
                            className="rounded-lg max-h-[90vh] max-w-[90vw]"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
