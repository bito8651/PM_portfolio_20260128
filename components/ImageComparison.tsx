
import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

interface ImageComparisonProps {
  before: string;
  after: string;
  onViewAfter: (url: string) => void;
}

export const ImageComparison: React.FC<ImageComparisonProps> = ({ before, after, onViewAfter }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div className="space-y-4">
      <div 
        ref={containerRef}
        className="relative aspect-square w-full rounded-xl overflow-hidden cursor-ew-resize select-none border border-slate-200 shadow-sm"
        onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
        onTouchMove={handleMove}
        onMouseDown={handleMove}
      >
        {/* Before Image */}
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* After Image Container */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (sliderPosition / 100)}%` }} />
        </div>

        {/* Divider Line */}
        <div 
          className="absolute inset-y-0 w-1 bg-white shadow-md z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-slate-300 rounded-full" />
              <div className="w-1 h-3 bg-slate-300 rounded-full" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none">After</div>
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none">Before</div>
      </div>
      
      <button 
        onClick={() => onViewAfter(after)}
        className="w-full flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-3 rounded-lg transition-colors border border-indigo-200"
      >
        <Search size={18} />
        查看修圖後大圖
      </button>
    </div>
  );
};
