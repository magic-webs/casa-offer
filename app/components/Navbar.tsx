"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notice Bar with 50% OFF Scheme */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 text-amber-200 text-xs py-2.5 px-4 text-center font-medium tracking-wide shadow-md flex items-center justify-center gap-2 flex-wrap border-b border-emerald-800/30">
        <span className="inline-flex items-center gap-1 bg-amber-400 text-stone-950 px-2 py-0.5 rounded font-bold text-[10px] tracking-wider uppercase shadow-sm">
          Special Event Offer
        </span>
        <span>
          <strong>50% OFF*</strong> on Selected Plots &bull; Exclusive Launch Event on{" "}
          <span className="underline font-semibold">11 October 2026</span> at Holiday Inn, Mayur Vihar, Delhi
        </span>
        <a
          href="#event-pass"
          className="ml-2 inline-flex items-center text-white underline text-[11px] font-semibold hover:text-amber-300"
        >
          Claim Invite &rarr;
        </a>
      </div>
    </header>
  );
}
