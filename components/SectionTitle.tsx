
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-800 tracking-tight border-b-2 border-[#0B2A4A] inline-block pb-2">
        {title}
      </h2>
      {subtitle && <p className="text-slate-500 mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  );
};
