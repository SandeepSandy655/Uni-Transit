"use client";

import React, { useState } from "react";
import { Bus, ArrowRight, X } from "lucide-react";

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#0F172A] text-[#F8FAFC] flex flex-col justify-between relative overflow-hidden">
      {/* Full-Screen Subtle Isometric Background Grid Lines (Blends Across the Entire Viewport) */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="iso-bg-grid"
            width="160"
            height="92.376"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 160 46.188 L 80 92.376 L 0 46.188 Z"
              fill="none"
              stroke="#94A3B8"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#iso-bg-grid)" />
      </svg>

      {/* Soft Ambient Radial Glow Behind Hero Visual */}
      <div
        className="pointer-events-none absolute top-1/2 right-[8%] -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-teal-500/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[10%] w-[420px] h-[420px] rounded-full bg-amber-500/5 blur-[120px]"
        aria-hidden="true"
      />

      {/* Full-Width Top Navigation Bar */}
      <header className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 flex items-center justify-center">
            <Bus className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Uni<span className="text-teal-400">Transit</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
          <a
            href="#home"
            className="text-white relative after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-0.5 after:bg-teal-400 after:rounded-full"
          >
            Home
          </a>
          <a href="#routes" className="hover:text-white transition">
            Routes
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsLoginOpen(true)}
          className="px-6 py-2.5 rounded-full bg-teal-500 text-slate-950 text-sm font-semibold hover:bg-teal-400 transition shadow-lg shadow-teal-500/15"
        >
          Login
        </button>
      </header>

      {/* Full-Screen Main Split Hero Section */}
      <main className="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 py-8">
        {/* Left Column: Full-Scale Typography & Unified Login Action */}
        <div className="lg:col-span-6 space-y-7">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/70 text-slate-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Unified Campus Transit Portal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl xl:text-[64px] font-bold tracking-tight text-white leading-[1.08]">
            College Bus Route &amp;{" "}
            <span className="text-teal-400">Seat Allotment</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            A unified platform to check campus shuttle routes and manage
            semester seat allotments. Students, drivers, and administrators sign
            in through the same portal.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setIsLoginOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-teal-500 text-slate-950 text-base font-semibold hover:bg-teal-400 transition shadow-xl shadow-teal-500/20"
            >
              <span>Get Started / Login</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-4 flex items-center gap-6 text-sm text-slate-400">
            <span>Single login for:</span>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700/60 text-slate-200 text-xs font-medium">
                Student
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700/60 text-slate-200 text-xs font-medium">
                Driver
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700/60 text-slate-200 text-xs font-medium">
                Admin
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Full-Bleed Frameless Isometric Route Screen & Shuttle Bus */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <svg
            viewBox="0 0 640 500"
            className="w-full max-w-[640px] h-auto overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Isometric Route Map and College Shuttle Bus"
          >
            <defs>
              <linearGradient
                id="roadFade"
                x1="440"
                y1="275"
                x2="70"
                y2="485"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#1E293B" stopOpacity="1" />
                <stop offset="75%" stopColor="#1E293B" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>

              <linearGradient
                id="screenSurface"
                x1="380"
                y1="50"
                x2="560"
                y2="400"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>

              <linearGradient
                id="headlightGlow"
                x1="255"
                y1="380"
                x2="110"
                y2="465"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Isometric Street Grid Lines Blending into the Dark Canvas */}
            <g stroke="#1E293B" strokeWidth="2">
              <line x1="60" y1="340" x2="390" y2="150" />
              <line x1="130" y1="410" x2="510" y2="190" />
              <line x1="210" y1="470" x2="610" y2="240" />
              <line x1="160" y1="200" x2="500" y2="395" />
              <line x1="80" y1="265" x2="395" y2="445" />
            </g>

            {/* Isometric Roadway Extending Out from the Map Panel */}
            <polygon
              points="60,465 420,258 490,298 130,505"
              fill="url(#roadFade)"
            />
            <line
              x1="60"
              y1="465"
              x2="420"
              y2="258"
              stroke="#334155"
              strokeWidth="2"
            />
            <line
              x1="130"
              y1="505"
              x2="490"
              y2="298"
              stroke="#334155"
              strokeWidth="2"
            />
            <line
              x1="95"
              y1="485"
              x2="455"
              y2="278"
              stroke="#64748B"
              strokeWidth="2.5"
              strokeDasharray="12 12"
              strokeLinecap="round"
            />

            {/* Isometric Upright Smartphone / Route Display Frame */}
            <g>
              {/* 3D Side Bezel */}
              <path
                d="M548,124 L564,115 C572,111 578,117 578,128 L578,392 C578,402 572,408 564,412 L548,421 Z"
                fill="#090D16"
                stroke="#334155"
                strokeWidth="1.5"
              />
              {/* Main Skewed Phone Body */}
              <path
                d="M376,42 C376,28 386,23 398,30 L544,114 C556,121 565,137 565,150 L565,405 C565,418 556,424 544,417 L398,333 C386,326 376,310 376,297 Z"
                fill="#090D16"
                stroke="#334155"
                strokeWidth="2"
              />
              {/* Inner Map Screen */}
              <path
                d="M386,55 C386,45 394,41 402,46 L538,124 C546,129 553,140 553,150 L553,392 C553,402 546,406 538,401 L402,323 C394,318 386,307 386,297 Z"
                fill="url(#screenSurface)"
              />

              {/* Subtle Waterway & Map Grid Inside Phone Screen */}
              <path
                d="M425,59 L445,122 L420,195 L422,334 L404,324 L402,185 L425,118 L406,50 Z"
                fill="#14B8A6"
                fillOpacity="0.16"
              />
              <line
                x1="386"
                y1="130"
                x2="553"
                y2="226"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1="386"
                y1="195"
                x2="553"
                y2="291"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1="386"
                y1="260"
                x2="553"
                y2="356"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1="442"
                y1="68"
                x2="442"
                y2="346"
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1="496"
                y1="100"
                x2="496"
                y2="378"
                stroke="#334155"
                strokeWidth="1.5"
              />

              {/* Active Campus Shuttle Route Line & Stops Inside Screen */}
              <polyline
                points="524,152 524,222 470,192 470,268 490,296 490,348 446,322"
                fill="none"
                stroke="#2DD4BF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="524" cy="152" r="7" fill="#2DD4BF" />
              <circle cx="524" cy="222" r="7" fill="#2DD4BF" />
              <circle cx="470" cy="192" r="7" fill="#2DD4BF" />

              {/* Highlighted Active Stop Hub */}
              <ellipse
                cx="480"
                cy="282"
                rx="13"
                ry="16"
                transform="rotate(-25 480 282)"
                fill="#0F172A"
                stroke="#F8FAFC"
                strokeWidth="3"
              />
              <ellipse
                cx="480"
                cy="282"
                rx="6"
                ry="8"
                transform="rotate(-25 480 282)"
                fill="#2DD4BF"
              />

              <circle cx="490" cy="348" r="7" fill="#2DD4BF" />

              {/* Minimal Floating Circular Map Icons Left of Phone */}
              <g transform="translate(332, 105)">
                <ellipse
                  cx="0"
                  cy="0"
                  rx="16"
                  ry="20"
                  transform="rotate(-20)"
                  fill="#1E293B"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                <path
                  d="M-5,0 L5,0 M1,-4 L5,0 L1,4"
                  stroke="#2DD4BF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g transform="translate(332, 160)">
                <ellipse
                  cx="0"
                  cy="0"
                  rx="16"
                  ry="20"
                  transform="rotate(-20)"
                  fill="#1E293B"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                <circle cx="0" cy="-2" r="4" stroke="#F8FAFC" strokeWidth="1.8" />
                <path d="M0,3 L0,7" stroke="#F8FAFC" strokeWidth="1.8" strokeLinecap="round" />
              </g>
              <g transform="translate(332, 215)">
                <ellipse
                  cx="0"
                  cy="0"
                  rx="16"
                  ry="20"
                  transform="rotate(-20)"
                  fill="#1E293B"
                  stroke="#334155"
                  strokeWidth="1.5"
                />
                <rect x="-5" y="-5" width="4" height="4" rx="1" fill="#94A3B8" />
                <rect x="1" y="-5" width="4" height="4" rx="1" fill="#2DD4BF" />
                <rect x="-5" y="1" width="4" height="4" rx="1" fill="#2DD4BF" />
                <rect x="1" y="1" width="4" height="4" rx="1" fill="#94A3B8" />
              </g>
            </g>

            {/* Isometric College Shuttle Bus on the Roadway */}
            <g>
              {/* Soft Headlight Beams */}
              <polygon
                points="242,388 110,464 145,484 262,400"
                fill="url(#headlightGlow)"
              />
              <polygon
                points="274,406 145,484 182,502 294,418"
                fill="url(#headlightGlow)"
              />

              {/* Bus Shadow */}
              <polygon
                points="232,396 385,306 442,340 288,430"
                fill="#020617"
                opacity="0.6"
              />

              {/* Bus Front Face */}
              <polygon
                points="238,328 296,362 296,412 238,378"
                fill="#F59E0B"
              />
              {/* Windshield */}
              <polygon
                points="244,336 290,363 290,389 244,362"
                fill="#0F172A"
                stroke="#38BDF8"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              {/* Headlights */}
              <circle cx="247" cy="375" r="3.5" fill="#FEF08A" />
              <circle cx="286" cy="398" r="3.5" fill="#FEF08A" />

              {/* Bus Side Face */}
              <polygon
                points="296,362 430,284 430,334 296,412"
                fill="#D97706"
              />
              {/* Trim Line */}
              <polygon
                points="296,389 430,311 430,318 296,396"
                fill="#0F172A"
                opacity="0.8"
              />

              {/* Passenger Windows & Double Door */}
              <polygon
                points="392,312 420,296 420,317 392,333"
                fill="#0F172A"
              />
              <polygon
                points="352,335 382,318 382,356 352,373"
                fill="#090D16"
                stroke="#FDE68A"
                strokeWidth="1"
              />
              <line
                x1="367"
                y1="326"
                x2="367"
                y2="364"
                stroke="#F59E0B"
                strokeWidth="1.5"
              />
              <polygon
                points="306,362 342,341 342,362 306,383"
                fill="#0F172A"
              />

              {/* Bus Roof */}
              <polygon
                points="238,328 372,250 430,284 296,362"
                fill="#FBBF24"
              />
              <polygon
                points="340,278 374,258 396,271 362,291"
                fill="#1E293B"
              />

              {/* Wheels */}
              <ellipse
                cx="322"
                cy="397"
                rx="11"
                ry="14"
                transform="rotate(25 322 397)"
                fill="#090D16"
                stroke="#475569"
                strokeWidth="2.5"
              />
              <ellipse
                cx="322"
                cy="397"
                rx="5"
                ry="7"
                transform="rotate(25 322 397)"
                fill="#CBD5E1"
              />
              <ellipse
                cx="402"
                cy="350"
                rx="11"
                ry="14"
                transform="rotate(25 402 350)"
                fill="#090D16"
                stroke="#475569"
                strokeWidth="2.5"
              />
              <ellipse
                cx="402"
                cy="350"
                rx="5"
                ry="7"
                transform="rotate(25 402 350)"
                fill="#CBD5E1"
              />
            </g>
          </svg>
        </div>
      </main>

      {/* Subtle Bottom Bar */}
      <footer className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-5 flex items-center justify-between text-xs text-slate-500">
        <span>UniTransit • College Bus Route &amp; Seat Allotment</span>
        <span>Unified Portal v1.0</span>
      </footer>

      {/* Unified Login Modal (Same Login for Student, Driver, Admin) */}
      {isLoginOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md rounded-2xl bg-[#1E293B] border border-slate-700/80 p-7 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-teal-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>Unified Portal Access</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Sign In</h2>
              <p className="text-sm text-slate-400 mt-1">
                Students, Drivers, and Admins use the same login below.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="userId"
                  className="block text-xs font-medium text-slate-300 mb-1.5"
                >
                  Campus ID or Email
                </label>
                <input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter your ID or Email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 transition"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-slate-300 mb-1.5"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-5 rounded-xl bg-teal-500 text-slate-950 text-sm font-semibold hover:bg-teal-400 transition mt-2"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
