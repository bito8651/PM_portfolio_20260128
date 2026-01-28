
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, imageUrl, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white hover:text-slate-300 transition-colors bg-white/10 p-2 rounded-full"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <img 
        src={imageUrl} 
        alt="Fullscreen view" 
        className="max-w-full max-h-full object-contain shadow-2xl rounded-sm transition-transform animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
