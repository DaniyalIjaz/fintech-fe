"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ImageStats(props: { imgSrc: string | Blob | undefined; }) {
    return (
        <CardContainer className="inter-var w-full flex justify-center">
            <CardBody
                className="
                    relative group/card w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
                    px-4 sm:px-6 py-4 sm:py-6 
                    border rounded-2xl
                    backdrop-blur-[10px] 
                    bg-gradient-to-tr from-white/15 to-white/5 
                    dark:hover:shadow-2xl 
                    shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
                    bg-gray-50 dark:bg-background
                    items-center justify-center
                "
            >
                <CardItem translateZ="100" className="w-full">
                    <img
                        src={props.imgSrc}
                        height="1000"
                        width="1000"
                        className="w-full h-auto max-h-60 sm:max-h-72 md:max-h-80 rounded-xl object-cover group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

                <div className="flex justify-center mt-6">
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="
                            relative px-6 py-2 font-mono font-bold rounded-full
                            transition-colors duration-300 ease-linear
                            bg-black text-white
                            before:absolute before:right-1/2 before:top-1/2 before:-z-[1]
                            before:h-3/4 before:w-2/3 before:origin-bottom-left 
                            before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping
                            before:rounded-full before:bg-black
                            hover:bg-gray-800 hover:before:bg-gray-800

                            dark:bg-white dark:text-black 
                            dark:before:bg-white dark:hover:bg-gray-100 dark:hover:before:bg-gray-100
                        "
                    >
                        Book Now
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
