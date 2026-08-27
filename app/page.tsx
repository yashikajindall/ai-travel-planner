"use client";

import { useState } from "react";
export default function Home() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            AI Travel Planner
          </h1>

          <p className="text-slate-600">
            Tell us where you want to go and your budget, and we&apos;ll build
            your trip for you.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8">
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Destination
            </label>

            <input
            type="text"
            placeholder="e.g. Paris"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Budget
            </label>

            <input
              type="number"
              placeholder="e.g. 1200"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <button
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition">
            Plan My Trip
          </button>
          <p className="mt-4 text-sm text-slate-500">
  Destination: {destination} | Budget: {budget}
</p>
        </div>
      </div>
    </main>
  );
}