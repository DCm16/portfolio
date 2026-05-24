"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, MessageSquare } from "lucide-react";
import { useTyped } from "@/hooks/useTyped";
import { TYPED_PHRASES, HERO_STATS } from "@/constants";
import { useEffect, useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const typed = useTyped(TYPED_PHRASES);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

   const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-14"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] rounded-full -top-24 -right-24 opacity-20"
          style={{ background: "#5865f2", filter: "blur(80px)" }}
        />
        <motion.div
          animate={{ y: [0, 18, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute w-[300px] h-[300px] rounded-full bottom-16 -left-16 opacity-20"
          style={{ background: "#23a55a", filter: "blur(80px)" }}
        />
        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute w-[200px] h-[200px] rounded-full top-1/2 left-1/3 opacity-15"
          style={{ background: "#eb459e", filter: "blur(70px)" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left */}
          <div>
            {/* Status */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2.5 mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#23a55a] opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#23a55a]"></span>
              </span>
              <span className="text-[#23a55a] text-[13px] font-semibold font-mono">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-2px] leading-[1.05] mb-3"
            >
              <span className="text-[#f2f3f5]">Stefon</span>
              <br />
              <span className="text-[#5865f2]">Hickman</span>
            </motion.h1>

            {/* Typed */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-[clamp(1rem,2.5vw,1.3rem)] text-[#b5bac1] mb-5 font-light min-h-[2rem]"
            >
              {typed}
              <span className="text-[#5865f2] animate-pulse">|</span>
            </motion.p>

            {/* Description */}
            <motion.p
              {...fadeUp(0.4)}
              className="text-[#80848e] text-[15px] max-w-[480px] mb-8 leading-[1.75]"
            >
              I craft premium web experiences with modern technologies. Obsessed with clean code,
              beautiful interfaces, and delightful user interactions.
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-7">
              <motion.button
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(88,101,242,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("skills")}
                className="inline-flex items-center gap-2 bg-[#5865f2] hover:bg-[#4752c4] text-white font-semibold px-6 py-3 rounded-lg text-[14px] transition-colors"
              >
                ⚡ View My Work <ArrowRight size={15} />
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 bg-transparent border border-white/[0.1] hover:bg-[#313338] hover:border-[#5865f2]/40 text-white font-semibold px-6 py-3 rounded-lg text-[14px] transition-all"
              >
                <MessageSquare size={15} /> Contact Me
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp(0.6)} className="flex gap-2.5">
              {[
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 border border-white/[0.08] rounded-lg bg-[#313338] text-[#b5bac1] hover:text-[#5865f2] hover:border-[#5865f2]/40 hover:bg-[#5865f2]/10 flex items-center justify-center transition-all"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.7)}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/[0.06]"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-[1.6rem] font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-[12px] text-[#80848e] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div
                className="w-56 h-56 rounded-3xl flex items-center justify-center text-[5rem] border-2 border-[#5865f2]/40"
                style={{
                  background: "linear-gradient(135deg, #5865f2, #eb459e)",
                  boxShadow: "0 0 60px rgba(88,101,242,0.35)",
                }}
              >
                👨‍💻
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#2b2d31] border border-white/[0.08] rounded-lg px-3 py-1.5 text-[12px] font-mono font-semibold text-[#23a55a] flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#23a55a] inline-block"></span>
                Online — Building stuff
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
