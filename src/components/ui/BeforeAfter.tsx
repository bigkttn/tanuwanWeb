"use client";
import { useState, useRef } from "react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    let clientX = 0;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none touch-none"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleMove(e);
      }}
      onTouchMove={handleMove}
      onMouseDown={handleMove}
    >
      {/* After Image (Base) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
      />
      <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-xs font-bold text-white z-20 pointer-events-none">หลังทำ</div>
      
      {/* Before Image (Overlay with clip-path) */}
      <img 
        src={beforeImage} 
        alt="Before" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />
      <div 
        className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded text-xs font-bold text-white z-20 pointer-events-none transition-opacity"
        style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
      >
        ก่อนทำ
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none flex items-center justify-center z-30"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-gray-400" />
            <div className="w-0.5 h-3 bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
