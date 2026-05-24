"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader, FadeIn } from "@/components/shared/SectionWrapper";
import { ACHIEVEMENTS } from "@/constants";
import type { Achievement } from "@/types";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const variantStyles: Record<Achievement["variant"], string> = {
  gold: "bg-yellow-400/10 border-yellow-400/25",
  blurple: "bg-[#5865f2]/10 border-[#5865f2]/25",
  green: "bg-[#23a55a]/10 border-[#23a55a]/25",
  pink: "bg-pink-500/10 border-pink-500/25",
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="bg-[#1e1f22]">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          tag="// achievements"
          title="Unlocked"
          subtitle="Milestones, awards, and challenges conquered on the dev journey."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((ach, i) => (
            <FadeIn key={ach.title} delay={0.05 + (i % 4) * 0.1}>
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(88,101,242,0.4)" }}
                className="flex gap-3.5 p-5 bg-[#313338] border border-white/[0.06] rounded-xl cursor-default transition-all"
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border", variantStyles[ach.variant])}>
                  {ach.icon}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white mb-1">{ach.title}</div>
                  <div className="text-[12px] text-[#b5bac1] leading-relaxed">{ach.description}</div>
                  <div className="text-[11px] text-[#5865f2] font-mono font-semibold mt-2">{ach.year}</div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
