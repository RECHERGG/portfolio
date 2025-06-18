'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MarqueeProps {
  song: string
  artist: string
}

export const Marquee = ({ song, artist }: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const text = `🎵 ${song} - ${artist}`;

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.scrollWidth;
        setShouldAnimate(textWidth > containerWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden whitespace-nowrap h-6 rounded flex items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        ref={textRef}
        className={`text-sm dark:text-gray-300 text-gray-700 inline-block transition-transform duration-300 ${shouldAnimate
            ? 'animate-marquee'
            : ''
          }`}
        style={{
          animationDuration: shouldAnimate ? '8s' : undefined,
          animationIterationCount: shouldAnimate ? 'infinite' : undefined,
          animationTimingFunction: 'linear',
          animationDirection: 'alternate',
          animationPlayState: shouldAnimate && isHovered ? 'paused' : 'running'
        }}
      >
        {text}
      </span>

      <style jsx>{`
              @keyframes marquee {
                  0% {
                      transform: translateX(0);
                  }
                  100% {
                      transform: translateX(calc(-100% + ${containerRef.current?.offsetWidth || 200}px));
                  }
              }
              
              .animate-marquee {
                  animation-name: marquee;
              }
          `}</style>
    </div>
  );
};
