
import React, { useEffect } from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

interface PdfModalProps {
  isOpen: boolean;
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, pdfUrl, title, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/90 animate-in fade-in duration-200">
      <div className="w-full h-full md:w-[90vw] md:h-[90vh] bg-white flex flex-col md:rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h3 className="font-semibold text-slate-800 truncate pr-4">{title}</h3>
          <div className="flex items-center gap-3">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1 text-sm font-medium"
            >
              <ExternalLink size={18} />
              <span className="hidden sm:inline">新視窗開啟</span>
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="flex-1 bg-slate-100 relative">
          <iframe 
            src={pdfUrl} 
            className="w-full h-full border-none"
            title={title}
          />
          {/* Fallback overlay for browsers that might block iframe PDFs */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg pointer-events-auto">
              <p className="mb-4 text-slate-600">如果無法自動預覽，請點擊下方按鈕</p>
              <a 
                href={pdfUrl} 
                download
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download size={20} />
                下載 PDF 檔案
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
