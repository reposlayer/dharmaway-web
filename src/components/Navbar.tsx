"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/yoga", label: "Yoga" },
    { href: "/tretmani", label: "Tretmani" },
    { href: "/masaza", label: "Masaža" },
    { href: "/cjenik", label: "Cjenik" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="fixed top-0 w-full z-[100] flex justify-center mt-6 px-4 md:px-0 pointer-events-none"
      >
        <div 
          className={`pointer-events-auto flex justify-between items-center transition-all duration-700 ease-[0.16,1,0.3,1] rounded-full overflow-hidden
            ${isScrolled 
              ? "bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_8px_40px_rgba(138,154,91,0.12)] px-6 py-3 w-full max-w-4xl" 
              : "bg-transparent border-transparent px-8 py-5 w-full max-w-7xl"
            }
          `}
        >
          <Magnetic>
            <Link href="/" className="text-xl md:text-2xl font-serif tracking-[0.15em] uppercase text-stone-900 group">
              <span className="group-hover:text-brand-500 transition-colors duration-500">Studio</span>
              <span className="text-brand-600 group-hover:text-brand-400 transition-colors duration-500 ml-2">Harā</span>
            </Link>
          </Magnetic>
          
          <div className="hidden md:flex gap-8 font-sans text-[10px] tracking-[0.25em] uppercase items-center font-semibold">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Magnetic key={link.href}>
                  <Link 
                    href={link.href}
                    className={`relative px-2 py-2 group transition-all duration-500 flex flex-col items-center
                      ${isActive ? "text-brand-600" : "text-stone-600 hover:text-stone-900"}
                    `}
                  >
                    {link.label}
                    <span 
                      className={`absolute -bottom-1 w-1 h-1 rounded-full transition-all duration-500
                        ${isActive 
                          ? "bg-brand-500 opacity-100 scale-100 shadow-[0_0_8px_rgba(138,154,91,0.8)]" 
                          : "bg-brand-300 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100"
                        }
                      `} 
                    />
                  </Link>
                </Magnetic>
              );
            })}
          </div>

          <button 
            className="md:hidden p-2 text-stone-900 transition-transform active:scale-95 z-50 pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 min-h-screen bg-white/90 backdrop-blur-3xl z-[200] flex flex-col pt-24 px-8 overflow-hidden pointer-events-auto"
          >
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-200/30 blur-[100px] rounded-full pointer-events-none" />
            
            <button 
              className="absolute top-8 right-8 p-4 text-stone-500 hover:text-stone-900 transition-colors z-[210]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <div className="flex flex-col gap-8 text-4xl font-serif tracking-widest mt-16 relative z-10">
              {links.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block hover:text-brand-600 transition-colors relative group"
                  >
                    <span className="font-sans text-sm text-brand-300 absolute -left-8 top-2 opacity-50">0{idx + 1}</span>
                    <span className="">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}