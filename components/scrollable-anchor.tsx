"use client";

import {usePathname} from "next/navigation";
import React, {useEffect, useRef} from "react";

type IScrollableAnchorProps = {
    id: string;
    children: React.ReactNode;
};

export const ScrollableAnchor: React.FC<IScrollableAnchorProps> = ({ id, children }) => {
    const pathname = usePathname()
    const hashMatchRegex = useRef(new RegExp(/(?<=#)\w*/));
    const scrollTargetElementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const match = pathname.match(hashMatchRegex.current);
        if (match && match[0] === id) {
            scrollTargetElementRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    }, [id, pathname]);

    return (
        <div id={id} ref={scrollTargetElementRef}>
            {children}
        </div>
    );
};