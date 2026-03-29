"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 120, skewY: 4 },
    visible: { 
      opacity: 1, 
      y: 0, 
      skewY: 0,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={containerRef} className="relative min-h-[100vh] w-full overflow-hidden flex flex-col">
      
      {/* Ambient light blobs */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-brand-200/20 via-brand-100/15 to-transparent blur-[120px] rounded-full pointer-events-none mix-blend-multiply z-0" 
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tl from-accent-200/10 via-brand-100/10 to-transparent blur-[100px] rounded-full pointer-events-none mix-blend-multiply z-0" 
      />

      {/* Main content grid */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-16 pt-28 md:pt-36 lg:pt-0 gap-8 lg:gap-0">
        
        {/* LEFT: Typography */}
        <motion.div 
          style={{ y: yText, opacity }}
          className="flex-1 flex flex-col justify-center lg:pr-12 w-full"
        >
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-brand-400" />
            <span className="text-brand-600 text-[10px] tracking-[0.4em] uppercase font-semibold flex items-center gap-2">
              <Sparkles size={10} /> Autentična Wellness & Yoga Oaza
            </span>
          </motion.div>

          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[12vw] md:text-[8vw] lg:text-[5.5vw] font-serif text-stone-900 leading-[0.88] tracking-tight"
          >
            <div className="overflow-hidden pb-2">
              <motion.div variants={itemVariants} className="origin-bottom-left">
                Pronađi
              </motion.div>
            </div>
            <div className="overflow-hidden pb-2 ml-[5vw] lg:ml-[3vw]">
              <motion.div variants={itemVariants}>
                <span className="italic font-light text-brand-600">Svoju</span>
              </motion.div>
            </div>
            <div className="overflow-hidden pb-2 ml-[10vw] lg:ml-[6vw]">
              <motion.div variants={itemVariants} className="origin-bottom-left">
                Ravnotežu<span className="text-brand-400">.</span>
              </motion.div>
            </div>
          </motion.h1>

          {/* Subtext + CTA */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-col sm:flex-row items-start gap-8"
          >
            <motion.p variants={fadeUp} className="text-stone-500 font-light text-base md:text-lg leading-relaxed max-w-sm">
              Utočište u srcu Zagreba za autentičnu njegu. Organska kozmetika, rituali i svjesni pokret yoge.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Magnetic>
                <Link href="/programi" className="group relative inline-flex items-center gap-5 px-3 py-3 pr-8 bg-stone-900 text-stone-50 rounded-full overflow-hidden text-xs uppercase tracking-[0.25em] font-semibold border border-stone-800 shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(138,154,91,0.25)] transition-all duration-700">
                  <div className="absolute inset-0 bg-brand-600 rounded-full translate-y-[110%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                  <div className="relative z-10 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-600 transition-colors duration-500">
                    <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-500" />
                  </div>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500 whitespace-nowrap">Istraži Usluge</span>
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Hero Image */}
        <motion.div 
          style={{ y: yImage }}
          className="flex-1 w-full lg:w-auto flex items-center justify-center relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] lg:max-w-none lg:w-[32vw]"
          >
            {/* Decorative ring behind */}
            <div className="absolute -inset-4 md:-inset-8 border border-brand-200/30 rounded-[3rem] animate-float pointer-events-none" />
            <div className="absolute -inset-8 md:-inset-14 border border-brand-100/20 rounded-[3.5rem] animate-float-delay pointer-events-none" />
            
            <motion.div 
              style={{ scale, rotate: imageRotate }}
              className="aspect-[3/4] rounded-[2.5rem] overflow-hidden relative shadow-[0_30px_100px_rgba(138,154,91,0.15)] border border-white/40"
            >
              <Image 
                src="https://studiohara.hr/wp-content/uploads/2023/11/69022747_1719472214864032.jpg" 
                alt="Studio Hara Atmosfera" 
                fill 
                className="object-cover" 
                priority 
                sizes="(max-width: 768px) 100vw, 32vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-brand-100/10 mix-blend-multiply" />
            </motion.div>

            {/* Floating quote card */}
            <motion.div 
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-6 md:-left-16 bottom-12 md:bottom-20 bg-white/70 backdrop-blur-2xl border border-white/60 p-6 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] max-w-[240px] animate-float-delay"
            >
              <div className="text-brand-500 mb-3">✦</div>
              <p className="text-stone-700 font-serif italic text-sm leading-relaxed">
                &ldquo;Ljepota je u jednostavnosti i harmoniji s prirodom.&rdquo;
              </p>
              <p className="text-stone-400 text-[10px] tracking-widest uppercase mt-2">Studio Harā</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-stone-400 text-[9px] tracking-[0.3em] uppercase">Otkrijte više</span>
          <div className="w-px h-8 bg-gradient-to-b from-brand-400/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
