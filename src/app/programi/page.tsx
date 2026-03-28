"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MoveRight, Flame, Waves, Moon, Sun, AlignStartVertical, Wind, Sparkles, Heart, ArrowRight } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import Magnetic from '@/components/Magnetic';
import MarqueeText from '@/components/MarqueeText';

export default function Programi() {
  const programs = [
    { title: 'DharmaWay Yoga I', slug: 'dharma-1', icon: Flame, desc: 'Razina za početnike. Upoznavanje s DharmaWay sekvencama, temeljne asane i disanje.', level: 'Početnici', color: 'from-brand-400/20 to-brand-100/10' },
    { title: 'DharmaWay Yoga II', slug: 'dharma-2', icon: Flame, desc: 'Napredni početnici. Dublje sekvence za izgradnju snage i fleksibilnosti.', level: 'Srednja', color: 'from-brand-500/20 to-brand-200/10' },
    { title: 'DharmaWay Yoga III-IV', slug: 'dharma-3-4', icon: Flame, desc: 'Srednja i napredna razina. Kompleksne sekvence za duhovno produbljivanje prakse.', level: 'Napredna', color: 'from-brand-600/20 to-brand-300/10' },
    { title: 'Ashtanga Yoga', slug: 'ashtanga', icon: Waves, desc: 'Mysore stil i Primary Led klase. Tradicionalna samodisciplina iz Mysorea.', level: 'Sve razine', color: 'from-accent-400/20 to-accent-100/10' },
    { title: 'Hatha Yoga', slug: 'hatha', icon: Sun, desc: 'Pure Hatha — 24 pozdrava suncu i 12 glavnih asana. Tradicionalni pristup.', level: 'Sve razine', color: 'from-stone-400/20 to-stone-100/10' },
    { title: 'Yin Yoga', slug: 'yin', icon: Moon, desc: 'Tiha, meditativna praksa koja radi na dubokim vezivnim tkivima. Duboka regeneracija.', level: 'Sve razine', color: 'from-brand-300/20 to-brand-50/10' },
    { title: 'Meditacija & Pranayama', slug: 'meditacija', icon: Wind, desc: 'Vipassana, Yoga Nidra i tehnike Pranayame za kultivaciju unutarnjeg mira.', level: 'Sve razine', color: 'from-stone-300/20 to-stone-50/10' },
    { title: 'Aerial Yoga', slug: 'aerial', icon: AlignStartVertical, desc: 'Yoga u zraku pomoću svilenih hamaka. Dekompresija kralježnice i sloboda pokreta.', level: 'Sve razine', color: 'from-accent-300/20 to-accent-50/10' },
    { title: 'Yoga Wheel', slug: 'yoga-wheel', icon: Sparkles, desc: 'Rad s yoga kotačem za otvaranje prsnog koša, fleksibilnost i balans.', level: 'Sve razine', color: 'from-brand-200/20 to-brand-50/10' },
    { title: 'Online Yoga', slug: 'online', icon: Heart, desc: 'Live Dharma satovi preko Zooma nedjeljom + snimljene sesije na YouTubeu za sve razine.', level: 'Sve razine', color: 'from-brand-400/20 to-brand-100/10' },
  ];

  return (
    <main className="min-h-screen bg-transparent pt-28 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-300/10 blur-[150px] rounded-full pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-400/5 blur-[150px] rounded-full pointer-events-none mix-blend-multiply" />

      {/* Hero header with image */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 mb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-brand-300" />
              <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">Pronađite Svoj Put</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 tracking-tight leading-[0.9]">
              Programi <br/><span className="italic font-light text-brand-600">& Satovi</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-md font-light leading-relaxed mb-8">
              Od DharmaWay sekvenci po tradiciji Sri Dharma Mittre do Ashtanga Mysore stila — 
              istražite raznolikost naše ponude s više od 30 satova tjedno.
            </p>
            <Magnetic>
              <Link href="/raspored" className="group inline-flex items-center gap-4 px-3 py-3 pr-8 bg-stone-900 text-stone-50 rounded-full text-xs uppercase tracking-[0.25em] font-semibold hover:shadow-[0_20px_60px_rgba(192,126,24,0.25)] transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-600 rounded-full translate-y-[110%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-600 transition-colors duration-500">
                  <ArrowRight size={15} className="group-hover:-rotate-45 transition-transform duration-500" />
                </div>
                <span className="relative z-10">Pogledaj Raspored</span>
              </Link>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <Image src="https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/57348179-2364475437164451-4390689768996864000-n.jpg" alt="DharmaWay Yoga Praksa" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-50/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee divider */}
      <div className="py-4 border-y border-stone-200/50 overflow-hidden bg-white/30 backdrop-blur-sm mb-16">
        <MarqueeText
          text="DHARMA I · DHARMA II · DHARMA III-IV · ASHTANGA MYSORE · HATHA · YIN · PRANAYAMA · AERIAL · YOGA WHEEL"
          speed={25}
          className="text-stone-300 text-xs font-serif tracking-[0.15em]"
        />
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.06 }}
              key={program.slug}
            >
              <TiltCard>
                <Link
                  href={`/programi/${program.slug}`}
                  className="group relative bg-white/40 backdrop-blur-3xl rounded-3xl p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(192,126,24,0.08)] flex flex-col h-full overflow-hidden transition-all duration-700 w-full block"
                >
                   <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                   
                   <div className="flex items-start justify-between mb-6 relative z-10">
                     <div className="w-14 h-14 rounded-2xl bg-white/80 border border-stone-100 shadow-sm flex items-center justify-center text-brand-500 group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500">
                       <program.icon strokeWidth={1.5} size={26} />
                     </div>
                     <span className="px-3 py-1 text-[10px] tracking-widest uppercase bg-stone-100/80 text-stone-500 rounded-full border border-stone-200/50">
                       {program.level}
                     </span>
                   </div>

                   <h2 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-brand-800 transition-colors drop-shadow-sm relative z-10">{program.title}</h2>
                   <p className="text-sm text-stone-500 font-light leading-relaxed mb-8 flex-grow relative z-10">{program.desc}</p>
                   
                   <div className="mt-auto pt-4 inline-flex items-center gap-3 text-brand-600 font-semibold tracking-widest uppercase text-xs relative z-10">
                     Saznaj više <div className="p-2 rounded-full bg-brand-50 group-hover:bg-brand-100 transition-colors"><MoveRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
                   </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
