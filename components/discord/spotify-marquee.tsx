'use client';

import React from 'react';

interface MarqueeProps {
    song: string
    artist: string
}

export const Marquee = ({ song, artist }: MarqueeProps) => {
    const text = `🎵 ${song} - ${artist}`

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap h-6">
      <div className="inline-block animate-loop-scroll">
        <span className="text-sm text-muted-foreground">{text}</span>
      </div>
    </div>
  )
}

export default Marquee;
