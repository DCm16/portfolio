"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;


  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };
  
  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 h-14 bg-glass border-b border-white/[0.06] flex items-center justify-between px-6"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 font-bold text-[17px] tracking-tight select-none">
          <div className="w-8 h-8 rounded-full bg-[#5865f2] flex items-center justify-center text-sm font-bold text-white font-mono">
            AD
          </div>
          <span>Alex.dev</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  "text-sm font-medium px-3 py-1.5 rounded-md border transition-all duration-200",
                  isActive
                    ? "text-white bg-[#313338] border-white/10"
                    : "text-[#b5bac1] border-transparent hover:text-white hover:bg-[#313338] hover:border-white/[0.06]"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#contact")}
            className="hidden md:inline-flex bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm font-semibold px-4 py-1.5 rounded-md transition-colors"
          >
            Hire Me
          </motion.button>
          <button
            className="md:hidden text-[#b5bac1] hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-[#2b2d31] border-b border-white/[0.06] px-6 py-3 flex flex-col gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-[#b5bac1] hover:text-white hover:bg-[#313338] px-3 py-2.5 rounded-md text-[15px] font-medium transition-all"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-2 bg-[#5865f2] text-white text-sm font-semibold py-2.5 px-4 rounded-md"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
