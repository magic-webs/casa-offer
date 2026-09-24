"use client";

import { useState } from "react";
import {
  TreePine,
  Calendar,
  MapPin,
  Tag,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Compass,
  PhoneCall,
  Clock,
  Waves,
  Coffee,
  Activity,
  Trees,
  Footprints,
} from "lucide-react";

export default function Features() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plotSize: "500 Sq. Yards",
    preferredTime: "11am to 1pm",
  });
  const [submitted, setSubmitted] = useState(false);

  const plotOptions = [
    {
      size: "500 Sq. Yards",
      approx: "~4,500 Sq. Ft.",
      idealFor: "Charming Boutique Nature Cottage",
      tag: "Special 50% Event Offer",
      popular: false,
      discount: "50% OFF* Event Price",
      features: [
        "Exclusive single-day launch event discount of 50%*",
        "Private garden lawn with fruit groves & serene forest backdrop",
        "Direct access to township eco-trails & clubhouse",
        "Freehold registry & immediate possession guarantee",
      ],
    },
    {
      size: "1,000 Sq. Yards",
      approx: "~9,000 Sq. Ft.",
      idealFor: "Luxury Nature Villa with Private Pool & Courtyard",
      tag: "Most Preferred Plot Option",
      popular: true,
      discount: "50% OFF* Event Price",
      features: [
        "Exclusive single-day launch event discount of 50%*",
        "Expansive footprint for custom private pool & shaded deck",
        "Panoramic Corbett forest views & private orchard zone",
        "Dedicated solar-ready underground utilities & premium boundary",
      ],
    },
  ];

  const townshipAmenities = [
    {
      icon: <Coffee className="w-5 h-5 text-emerald-800" />,
      title: "Resort-Style Clubhouse",
      desc: "Fine dining, heated indoor pools, wellness spa, cigar lounge, and concierge services.",
    },
    {
      icon: <Footprints className="w-5 h-5 text-amber-700" />,
      title: "Wildlife Safari & Trails",
      desc: "Guided nature walks, birdwatching zones, and private access to Corbett forest periphery.",
    },
    {
      icon: <Activity className="w-5 h-5 text-teal-800" />,
      title: "Holistic Sports & Recreation",
      desc: "Tennis courts, archery, yoga pavilions amidst ancient sal trees and open-air gymnasium.",
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-800" />,
      title: "Gated Eco-Township",
      desc: "24x7 multi-tier security, perimeter surveillance, 100% power backup, and pure groundwater.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappNumber = "919971172574";
    const text = `*New Event Registration - Casa Corbett*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Plot Size:* ${formData.plotSize}\n` +
      `*Preferred Slot:* ${formData.preferredTime}\n\n` +
      `I'd like to claim my 50% OFF Event Invite!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-900 relative z-20 font-sans">
      {/* 50% OFF EVENT HERO BANNER / COUNTDOWN STRIP */}
      <section id="offer" className="py-8 sm:py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-4 sm:-mt-6">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 text-white p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden border border-emerald-800/40">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-amber-400 text-stone-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                <Tag className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                <span>Limited Event Only Pricing</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-light font-serif text-white tracking-tight leading-snug sm:leading-tight">
                Exclusive 50% OFF* On Premium Plots
              </h2>
              <p className="text-stone-300 text-xs sm:text-base font-light max-w-2xl leading-relaxed">
                Join us for the premier event of <strong>Casa Corbett</strong>. Secure your dream holiday home plot at unprecedented 50% discount* rates available strictly during the single-day launch event in Delhi.
              </p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-amber-200">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
                  <span>Sunday, 11 October 2026</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-stone-200">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span>Holiday Inn, Mayur Vihar, Delhi</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-stone-200">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
                  <span>11:00 AM Onwards</span>
                </div>
              </div>

              {/* Shifted Register Button and terms below left side content */}
              <div className="pt-2 flex flex-col items-start gap-2">
                <a
                  href="#event-pass"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs sm:text-base font-bold tracking-wide shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 text-center whitespace-nowrap"
                >
                  <span>Register for 50% Off* Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-[10px] sm:text-[11px] text-stone-400 font-mono">
                  *Terms &amp; conditions apply.
                </span>
              </div>
            </div>

            {/* Right Column: Holiday Inn Venue Image */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src="/holiday-inn.png"
                  alt="Holiday Inn, Mayur Vihar, Delhi - Event Venue"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 font-medium text-[11px] sm:text-xs">
                    Event Venue: Holiday Inn, Delhi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOWNSHIP OVERVIEW / THE VISION */}
      <section id="about" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
              <TreePine className="w-3.5 h-3.5" />
              <span>THE 600+ ACRE MASTERPLAN</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light font-serif text-stone-900 leading-tight">
              A serene nature retreat, minutes from Jim Corbett National Park.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              Spread across more than <strong>600 pristine acres</strong> in Ramnagar near Jim Corbett, Casa Corbett is master-planned as an ultra-low-density resort township. It blends virgin forest canopy, clean mountain breeze, and refined resort amenities to build your peaceful weekend sanctuary.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-stone-200">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200 shadow-sm text-center">
                <p className="text-xl sm:text-3xl font-serif text-emerald-900 font-normal">600+</p>
                <p className="text-[9px] sm:text-xs text-stone-500 font-semibold uppercase tracking-wider mt-0.5 sm:mt-1">Acres</p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200 shadow-sm text-center">
                <p className="text-xl sm:text-3xl font-serif text-amber-700 font-normal">50%</p>
                <p className="text-[9px] sm:text-xs text-stone-500 font-semibold uppercase tracking-wider mt-0.5 sm:mt-1">Launch Offer*</p>
              </div>
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200 shadow-sm text-center">
                <p className="text-xl sm:text-3xl font-serif text-emerald-900 font-normal">500–1k</p>
                <p className="text-[9px] sm:text-xs text-stone-500 font-semibold uppercase tracking-wider mt-0.5 sm:mt-1">Sq. Yards</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {townshipAmenities.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-700/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-stone-900 mb-2 font-serif">{item.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLOT SIZES SECTION (500 to 1000 Sq. Yards) */}
      <section id="plots" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-200">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3 h-3 text-amber-700" />
            <span>500 to 1000 Sq. Yards Event Offer</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-light font-serif text-stone-900">
            Exclusive Offer Plot Options
          </h2>
          <p className="text-xs sm:text-base text-stone-600 font-light">
            The exclusive 50% discount is applicable strictly on 500 Sq. Yards to 1000 Sq. Yards plots during the single-day event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {plotOptions.map((plot, i) => (
            <div
              key={i}
              className={`rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-300 flex flex-col justify-between relative bg-white border ${plot.popular
                ? "border-emerald-800 shadow-xl ring-2 ring-emerald-800/20"
                : "border-stone-200 shadow-sm hover:shadow-lg hover:border-stone-300"
                }`}
            >
              {plot.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-emerald-900 text-amber-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                  Most Preferred Plot Option
                </span>
              )}

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {plot.tag}
                  </span>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-md">
                    {plot.discount}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-normal font-serif text-stone-900">{plot.size}</h3>
                <p className="text-xs text-stone-500 font-mono mt-1">{plot.approx}</p>
                <p className="text-xs sm:text-sm font-medium text-emerald-950 mt-2 sm:mt-3">{plot.idealFor}</p>

                <div className="my-4 sm:my-6 h-px bg-stone-100" />

                <ul className="space-y-2.5 sm:space-y-3 text-xs text-stone-600 font-light">
                  {plot.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-stone-100">
                <a
                  href="#event-pass"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${plot.popular
                    ? "bg-emerald-900 hover:bg-emerald-950 text-amber-200 shadow-md"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-900"
                    }`}
                >
                  <span>Inquire for {plot.size}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT PASS & REGISTRATION SECTION */}
      <section id="event-pass" className="w-full py-12 sm:py-24 bg-[#FAF8F5] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
            {/* Left Content Card with form-bgimage.png strictly as its background */}
            <div className="lg:col-span-7 relative rounded-2xl sm:rounded-[32px] overflow-hidden p-5 sm:p-10 lg:p-12 flex flex-col justify-between border border-stone-200/90 shadow-2xl min-h-[460px] sm:min-h-[580px]">
              {/* Image exclusively behind left side content shifted 40px left */}
              <img
                src="/form-bgimage.png"
                alt="Holiday Inn Venue"
                className="absolute top-0 bottom-0 -left-20 h-full w-[calc(100%+80px)] max-w-none object-cover z-0"
              />
              {/* Soft readability tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 z-0" />

              {/* Left Top Content */}
              <div className="relative z-10 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-amber-400 text-stone-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                  <Calendar className="w-3.5 h-3.5 text-stone-950" />
                  <span>PHYSICAL EVENT PASS</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light font-serif text-white leading-tight sm:leading-[1.14] tracking-tight">
                  Secure Your <br />
                  <span className="font-normal text-amber-300 font-serif italic">50% OFF*</span> <br />
                  Event Invitation
                </h2>

                <p className="text-stone-200 text-xs sm:text-base leading-relaxed max-w-lg font-light">
                  Entry to the exclusive price launch at Holiday Inn, Delhi is by prior registration only. Register your details to receive your personalized digital event pass.
                </p>

                {/* Event Details Cards */}
                <div className="space-y-2.5 sm:space-y-3 pt-2 max-w-lg">
                  <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-sm text-white">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 shadow">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Sunday, 11 October 2026</p>
                      <p className="text-[10px] sm:text-[11px] text-stone-300">11:00 AM onwards (Slot allocation on confirmation)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-sm text-white">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center shrink-0 shadow">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Holiday Inn, Mayur Vihar, Delhi</p>
                      <p className="text-[10px] sm:text-[11px] text-stone-300">Grand Ballroom &bull; Dedicated Valet Parking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left Bottom Feature Badges */}
              <div className="relative z-10 flex flex-wrap items-center gap-3 sm:gap-5 pt-4 sm:pt-6 border-t border-white/15 text-[11px] sm:text-xs font-medium text-stone-200">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Tag className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Exclusive Event Pricing</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Shield className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Personalized Event Pass</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Limited Seats Register Now</span>
                </div>
              </div>
            </div>

            {/* Right Card: Register Form */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-2xl p-5 sm:p-8">
                {submitted ? (
                  <div className="py-8 sm:py-12 flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-900 text-amber-200 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-medium text-emerald-950">Pass Reserved!</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm">
                      Thank you! Our Team will connect shortly with your confirmed event pass for <strong>11 October 2026</strong> at Holiday Inn, Delhi.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-3xl font-serif font-light text-stone-900">
                        Register Now
                      </h3>
                      <p className="text-[11px] sm:text-xs text-stone-500 mt-1">
                        Get Your Digital Event Pass Instantly
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rajesh Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-stone-50/80 border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-850 focus:border-emerald-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 mb-1">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-stone-50/80 border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-850 focus:border-emerald-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 mb-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="rajesh@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-stone-50/80 border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-850 focus:border-emerald-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 mb-1">
                          Interested Plot Size (50% Event Offer)
                        </label>
                        <select
                          value={formData.plotSize}
                          onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                          className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-stone-50/80 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-850 focus:border-emerald-800 cursor-pointer"
                        >
                          <option value="500 Sq. Yards">500 Sq. Yards </option>
                          <option value="1000 Sq. Yards">1,000 Sq. Yards </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-stone-700 mb-1.5">
                          Preferred Timing Slot (11 October 2026)
                        </label>
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {[
                            "11am to 1pm",
                            "1pm to 3pm",
                            "3pm to 5pm",
                            "5pm to 7pm",
                          ].map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setFormData({ ...formData, preferredTime: slot })}
                              className={`py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-medium border transition-all flex items-center justify-center gap-1 sm:gap-1.5 ${formData.preferredTime === slot
                                ? "bg-emerald-900 text-amber-200 border-emerald-900 shadow-sm font-semibold"
                                : "bg-stone-50/80 text-stone-700 border-stone-200 hover:bg-stone-100"
                                }`}
                            >
                              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                              <span className="truncate">{slot}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 sm:py-4 rounded-xl bg-emerald-900 hover:bg-emerald-950 text-amber-200 text-xs sm:text-sm font-bold tracking-wide shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Claim 50% OFF* Event Invite</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <p className="text-[10px] sm:text-[11px] text-stone-500 text-center flex items-center justify-center gap-1 pt-1">
                        <Shield className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span>Your details are strictly confidential. No spam guaranteed.</span>
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & DISTANCES */}
      <section id="location" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200">
            <h4 className="text-sm sm:text-base font-serif font-semibold text-stone-900 mb-1">Jim Corbett Safari Gates</h4>
            <p className="text-xs text-stone-500 mb-2 sm:mb-3">Bijrani, Dhela &amp; Jhirna Safari Zones</p>
            <p className="text-xl sm:text-2xl font-serif text-emerald-900">15 – 25 Mins</p>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200">
            <h4 className="text-sm sm:text-base font-serif font-semibold text-stone-900 mb-1">Ramnagar Railway Station</h4>
            <p className="text-xs text-stone-500 mb-2 sm:mb-3">Direct connectivity with Delhi NCR trains</p>
            <p className="text-xl sm:text-2xl font-serif text-emerald-900">20 Mins</p>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm sm:text-base font-serif font-semibold text-stone-900 mb-1">Delhi NCR Highway Drive</h4>
            <p className="text-xs text-stone-500 mb-2 sm:mb-3">Via Delhi-Meerut Expressway &amp; Moradabad Bypass</p>
            <p className="text-xl sm:text-2xl font-serif text-emerald-900">4.5 Hours</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-stone-800">CASA CORBETT</span>
          <span>&bull;</span>
          <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
