"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bus, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen w-full bg-[#0F172A] text-[#F8FAFC] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1E293B] rounded-2xl border border-slate-700/80 p-8 shadow-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white mb-6 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-9 h-9 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 flex items-center justify-center">
            <Bus className="w-4 h-4" />
          </div>
          <span className="font-bold text-lg text-white">
            Uni<span className="text-teal-400">Transit</span>
          </span>
        </div>

        <h1 className="text-2xl font-bold text-white">Sign In</h1>
        <p className="text-sm text-slate-400 mt-1 mb-6">
          Unified login for Students, Drivers, and Admins.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="loginId"
              className="block text-xs font-medium text-slate-300 mb-1.5"
            >
              Campus ID or Email
            </label>
            <input
              id="loginId"
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
              htmlFor="loginPassword"
              className="block text-xs font-medium text-slate-300 mb-1.5"
            >
              Password
            </label>
            <input
              id="loginPassword"
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
  );
}
