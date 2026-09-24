"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  MapPin,
  Tag,
  ArrowRight,
  ChevronDown,
  Sparkles,
  TreePine,
  ShieldCheck,
} from "lucide-react";

const TOTAL_FRAMES = 50;

export default function FrameHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const darkOverlayRef = useRef<HTMLDivElement>(null);

  // Initial scroll button & pill in the center
  const initialCenterRef = useRef<HTMLDivElement>(null);

  // Center Hero Content that appears at the END of frames
  const endHeroCenterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images: HTMLImageElement[] = [];
    const currentFrame = { frame: 0 };

    const renderFrame = (index: number) => {
      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      if (cw === 0 || ch === 0 || iw === 0 || ih === 0) return;

      const canvasRatio = cw / ch;
      const imgRatio = iw / ih;

      let drawWidth = cw;
      let drawHeight = ch;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawHeight = ch;
        drawWidth = ch * imgRatio;
        offsetX = (cw - drawWidth) / 2;
      } else {
        drawWidth = cw;
        drawHeight = cw / imgRatio;
        offsetY = (ch - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      renderFrame(Math.round(currentFrame.frame));
    };

    window.addEventListener("resize", handleResize);

    // Populate and eagerly start loading all frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const frameNum = String(i).padStart(3, "0");
      const img = new Image();
      img.src = `/hero-section-frames/frame_${frameNum}.jpg`;
      img.onload = () => {
        if (i === 1) {
          handleResize();
          renderFrame(0);
        }
      };
      images.push(img);
    }

    // Force immediate initial resize and render
    handleResize();

    let scrollTriggerInstance: ScrollTrigger | null = null;
    let tlInstance: gsap.core.Timeline | null = null;

    if (containerRef.current) {
      // Timeline with dedicated holding/pin phase so the final frame stays fixed with the message
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=320%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tlInstance = tl;
      scrollTriggerInstance = tl.scrollTrigger || null;

      // 1. Initial centered scroll prompt fades out on start
      if (initialCenterRef.current) {
        tl.to(
          initialCenterRef.current,
          {
            opacity: 0,
            scale: 0.95,
            y: -20,
            duration: 0.1,
            ease: "power1.out",
          },
          0
        );
      }

      // 2. Play frames from 0 to 49 across the first 0 to 0.55 timeline span
      tl.to(
        currentFrame,
        {
          frame: TOTAL_FRAMES - 1,
          snap: "frame",
          ease: "none",
          duration: 0.55,
          onUpdate: () => {
            renderFrame(Math.round(currentFrame.frame));
          },
        },
        0
      );

      // 3. Subtle dark backdrop overlay fades in as frames reach conclusion (0.45 to 0.60)
      if (darkOverlayRef.current) {
        tl.fromTo(
          darkOverlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.15, ease: "power2.out" },
          0.45
        );
      }

      // 4. Center Hero Text smoothly fades in at the end of frames (0.50 to 0.62)
      if (endHeroCenterRef.current) {
        tl.fromTo(
          endHeroCenterRef.current,
          {
            opacity: 0,
            y: 35,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.15,
            ease: "power2.out",
          },
          0.50
        );
      }

      // 5. STICK / HOLD PINNED PHASE (0.62 to 1.0)
      // The hero section remains fixed and sticky so users can comfortably view, read, and interact
      // whether scrolling fast or slowly, before releasing into the rest of the page.
      tl.to({}, { duration: 0.40 }, 0.60);

      ScrollTrigger.refresh();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      if (tlInstance) tlInstance.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#FAF8F5] text-stone-900 select-none"
    >
      {/* Background fallback image: shows instantly from frame_001.jpg */}
      <img
        src="/hero-section-frames/frame_001.jpg"
        alt="Casa Corbett Preview"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Canvas rendering frames over the fallback image */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Elegant dark tint overlay that fades in exclusively when frames finish */}
      <div
        ref={darkOverlayRef}
        className="pointer-events-none absolute inset-0 bg-stone-950/50 backdrop-blur-[2px] z-10 opacity-0 transition-opacity"
      />

      {/* BOTTOM CENTER INITIAL SCROLL PROMPT */}
      <div
        ref={initialCenterRef}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none p-2 sm:p-4 w-full max-w-sm sm:max-w-md text-center"
      >
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-xl text-[11px] sm:text-xs font-medium text-stone-800">
          <TreePine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
          <span className="truncate">600+ Acre Resort-Style Township &bull; Corbett</span>
        </div>

        <div className="flex flex-col items-center gap-2 animate-bounce mt-1">
          <div className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-900 text-amber-200 shadow-2xl text-[10px] sm:text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 sm:gap-2 border border-emerald-700/50">
            <span>Scroll Down to Enter</span>
            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
          </div>
        </div>
      </div>

      {/* CENTER HERO CONTENT — Revealed and stays STUCK/PINNED at the END of frames */}
      <div
        ref={endHeroCenterRef}
        className="absolute inset-0 z-30 flex items-center justify-center p-3 sm:p-6 md:p-8 opacity-0 pointer-events-auto overflow-y-auto"
      >
        <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.25)] my-auto max-h-[92vh] overflow-y-auto">
          {/* 50% OFF scheme highlight pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-950 text-[10px] sm:text-xs font-bold mb-2.5 sm:mb-4 shadow-sm">
            <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-800 fill-amber-800 shrink-0" />
            <span className="tracking-wide">SPECIAL EVENT OFFER &bull; 50% OFF*</span>
          </div>

          {/* Main Requested Heading in Center */}
          <h1
            style={{ WebkitTextStroke: "1px #004433", textShadow: "0 2px 10px rgba(0,68,51,0.3)" }}
            className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#ebd197] leading-[1.18] tracking-tight font-serif mb-2.5 sm:mb-4"
          >
            “Exclusive 50% OFF* on Premium Plots”
          </h1>

          {/* Subtitle & Key Township Specs */}
          <p className="text-xs sm:text-base md:text-lg text-stone-700 max-w-2xl font-normal leading-relaxed mb-4 sm:mb-6">
            Casa Corbett is a <strong>600+ acre</strong> resort-style holiday home township near Jim Corbett, Ramnagar. Special Event Offer plots from <strong>500 to 1000 Sq. Yards</strong> designed for serene weekend living.
          </p>

          {/* Event Offer Card & CTAs */}
          <div className="w-full max-w-2xl bg-stone-50 border border-stone-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-inner mb-3.5 sm:mb-5">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div className="text-center sm:text-left space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-900">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
                  <span>Launch Event: 11 October 2026</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[11px] sm:text-xs text-stone-600">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500 shrink-0" />
                  <span>Holiday Inn, Mayur Vihar, Delhi</span>
                </div>
              </div>

              <a
                href="#event-pass"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-emerald-900 hover:bg-emerald-950 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>Claim 50% Event Pass</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Small Feature Footnote */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-8 text-[11px] sm:text-xs font-medium text-stone-600">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" /> Freehold Plots (500–1000 Sq. Yards)
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" /> Resort Clubhouse &amp; 5-Star Amenities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
