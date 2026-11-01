"use client";

import { funnelStages } from "@/data/funnel";

const desktopWidths = [
  "sm:w-full",
  "sm:w-[93%]",
  "sm:w-[86%]",
  "sm:w-[79%]",
  "sm:w-[72%]",
];

const stageBackgrounds = [
  "#FDF9F6",
  "#F5EFE9",
  "#ECE3DA",
  "#DED1C3",
  "#CDB9A3",
];

export default function FunnelDiagram() {
  const stages = funnelStages;

  return (
    <div className="w-full max-w-3xl mx-auto my-12">
      {/* Responsive, centered funnel bands. Labels live inside each band,
          rather than being absolutely positioned over a scaled SVG. */}
      <div
        className="flex flex-col items-center gap-2 px-0 sm:px-3"
        aria-label="Five-stage conversion funnel"
      >
        {stages.map((stage, index) => (
          <div
            key={stage.id}
            className={`w-full ${desktopWidths[index]} min-h-[104px] sm:min-h-[112px] rounded-[14px] border border-ink-navy/10 shadow-sm flex flex-col items-center justify-center text-center py-4 px-3 sm:px-6 transition-[width] duration-300`}
            style={{ backgroundColor: stageBackgrounds[index] }}
          >
            <p className="font-montserrat font-600 text-ink-navy/65 text-[10px] sm:text-xs uppercase tracking-[0.14em]">
              Stage {stage.id} · {stage.funnelPosition}
            </p>
            <h3 className="font-cormorant font-500 text-ink-navy text-xl sm:text-2xl leading-tight mt-1">
              {stage.stage}
            </h3>
            <p className="font-montserrat text-bronze text-xs sm:text-sm mt-1">
              Objective: {stage.objective}
            </p>
          </div>
        ))}
      </div>

      {/* Conversion Metrics Table */}
      <div className="mt-10 overflow-x-auto rounded-[12px] border border-stone">
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
                className={`border-b border-stone ${index % 2 === 0 ? "bg-cream" : "bg-stone/50"}`}
              >
                <td className="font-montserrat text-ink-navy p-4">{stage.stage}</td>
                <td className="font-montserrat text-ink-navy p-4">{stage.conversion}</td>
                <td className="font-montserrat font-600 text-bronze p-4">{stage.objective}</td>
                <td className="font-montserrat text-bronze p-4">{stage.funnelPosition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="font-montserrat text-cream/60 text-xs mt-4 text-center">
        *These are target benchmarks, not guaranteed results
      </p>
    </div>
  );
}
