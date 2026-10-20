"use client";

import { funnelStages } from "@/data/funnel";

export default function FunnelDiagram() {
  const stages = funnelStages;
  
  // Calculate positions for funnel shape
  const funnelWidth = 300;
  const funnelHeight = 400;
  const stageHeight = funnelHeight / stages.length;

  return (
    <div className="w-full max-w-2xl mx-auto my-12">
      <div className="relative">
        {/* Funnel Shape */}
        <svg
          className="w-full h-auto"
          viewBox={`0 0 ${funnelWidth} ${funnelHeight + 50}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Conversion funnel diagram"
        >
          {/* Funnel outline */}
          <path
            d={`M0 0 L${funnelWidth / 2} ${funnelHeight} L${funnelWidth} 0 Z`}
            fill="url(#funnelGradient)"
            stroke="#121B22"
            strokeWidth="2"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C2AC92" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#121B22" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          
          {/* Stage separators */}
          {stages.map((_, index) => (
            <line
              key={`separator-${index}`}
              x1="0"
              y1={(index + 1) * stageHeight}
              x2={funnelWidth - (funnelWidth * (index + 1) / stages.length)}
              y2={(index + 1) * stageHeight}
              stroke="#898C91"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
          ))}
        </svg>
        
        {/* Stage Labels */}
        <div className="absolute inset-0 flex flex-col justify-between items-center text-center pointer-events-none">
          {stages.map((stage, index) => {
            const yPosition = (index + 0.5) * stageHeight;
            const widthAtThisLevel = funnelWidth * (1 - index / stages.length);
            const textWidth = widthAtThisLevel * 0.8;
            
            return (
              <div
                key={`label-${stage.id}`}
                className="absolute flex flex-col items-center"
                style={{
                  top: `${yPosition}px`,
                  transform: 'translateY(-50%)',
                }}
              >
                <span className="font-montserrat font-600 text-ink-navy text-xs md:text-sm uppercase tracking-wider">
                  {stage.funnelPosition}
                </span>
                <span className="font-cormorant font-500 text-ink-navy text-sm md:text-base mt-1">
                  {stage.stage}
                </span>
                <span className="font-montserrat text-bronze text-xs mt-1">
                  Objective: {stage.objective}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Conversion Metrics Table */}
      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="bg-ink-navy">
              <th className="font-montserrat font-600 text-cream text-sm uppercase tracking-wider p-4 text-left">
                Stage
              </th>
              <th className="font-montserrat font-600 text-cream text-sm uppercase tracking-wider p-4 text-left">
                Conversion Measured
              </th>
              <th className="font-montserrat font-600 text-cream text-sm uppercase tracking-wider p-4 text-left">
                Objective
              </th>
              <th className="font-montserrat font-600 text-cream text-sm uppercase tracking-wider p-4 text-left">
                Funnel Position
              </th>
            </tr>
          </thead>
          <tbody>
            {stages.map((stage, index) => (
              <tr
                key={stage.id}
                className={`border-b border-stone ${index % 2 === 0 ? 'bg-cream' : 'bg-stone/50'}`}
              >
                <td className="font-montserrat text-ink-navy p-4">{stage.stage}</td>
                <td className="font-montserrat text-ink-navy p-4">{stage.conversion}</td>
                <td className="font-montserrat font-600 text-champagne p-4">{stage.objective}</td>
                <td className="font-montserrat text-bronze p-4">{stage.funnelPosition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="font-montserrat text-bronze text-sm mt-4 text-center">
        *These are target benchmarks, not guaranteed results
      </p>
    </div>
  );
}
