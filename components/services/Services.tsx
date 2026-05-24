"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper, SectionHeader, FadeIn } from "@/components/shared/SectionWrapper";
import { SERVICES } from "@/constants";

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-[#2b2d31]">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          tag="// services"
          title="What I Offer"
          subtitle="End-to-end solutions tailored to your vision — from pixel to production."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 16px 48px rgba(88,101,242,0.22)" }}
                className="relative bg-[#313338] border border-white/[0.06] rounded-2xl p-6 h-full flex flex-col hover:border-[#5865f2]/40 overflow-hidden transition-all cursor-default group"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5865f2]/0 to-transparent group-hover:from-[#5865f2]/[0.06] transition-all duration-300 pointer-events-none rounded-2xl" />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-[#5865f2]/15 border border-[#5865f2]/25 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-[#5865f2]/25 group-hover:border-[#5865f2]/50 transition-all"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-[17px] font-bold mb-2.5">{service.title}</h3>
                  <p className="text-[13px] text-[#b5bac1] leading-[1.7] flex-1 mb-5">
                    {service.description}
                  </p>

                  <button className="inline-flex items-center gap-1.5 text-[#5865f2] text-[13px] font-semibold group/link hover:gap-3 transition-all">
                    {service.cta} <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
