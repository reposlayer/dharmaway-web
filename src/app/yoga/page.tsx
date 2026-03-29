"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, Heart, Wind, Moon } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const yogaTypes = [
  {
    title: "Ashtanga Vinyasa",
    description: "Dinamična i snažna praksa koja usklađuje dah s pokretom kroz fiksni slijed asana.",
    icon: Wind,
    price: "15€ / Drop-in"
  },
  {
    title: "Pranayama",
    description: "Drevne tehnike disanja koje povećavaju vitalnu energiju i smiruju živčani sustav.",
    icon: Sparkles,
    price: "U sklopu sata"
  },
  {
    title: "Yoga Nidra",
    description: "Duboka vođena relaksacija, poznata kao 'yogi san', za potpuno obnavljanje tijela i uma.",
    icon: Moon,
    price: "Specijalni termini"
  }
];

export default function YogaPage() {
  return (
    <main className="min-h-screen bg-transparent pt-28 pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-200/20 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-400/10 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-brand-300" />
              <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">Svjesni Pokret</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-8 tracking-tight leading-[0.85]">
              Vratite se <br /> <span className="italic font-light text-brand-600">Sebi</span>
            </h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed max-w-md mb-10">
              U Studiju Harā prakticiramo tradiciju kroz suvremeni pristup. Naši satovi su prostor za istraživanje, 
              jačanje i duboku relaksaciju.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="px-6 py-3 bg-white border border-stone-100 rounded-full shadow-sm text-sm font-medium text-stone-600 flex items-center gap-3">
                 <Heart size={16} className="text-brand-500" /> Za sve razine
               </div>
               <div className="px-6 py-3 bg-white border border-stone-100 rounded-full shadow-sm text-sm font-medium text-stone-600 flex items-center gap-3">
                 <Wind size={16} className="text-brand-500" /> Fokus na dah
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <Image 
              src="https://studiohara.hr/wp-content/uploads/2020/06/59858711_467075197369575_2069720443212005376_n-e1604421390492.jpg" 
              alt="Yoga u Studiju Hara" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-900/10 pointer-events-none" />
          </motion.div>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {yogaTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white/60 backdrop-blur-xl border border-white p-10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(138,154,91,0.1)] transition-all duration-700 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <type.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">{type.title}</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
                {type.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-600">{type.price}</span>
                <Magnetic>
                  <button className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-brand-600 transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 bg-stone-900 rounded-[4rem] text-center relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/10 blur-[100px] rounded-full" />
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Pridružite nam se na prostirci</h2>
             <p className="text-stone-400 font-light mb-10">Osjetite snagu Ashatnge i mirnoću vodenih relaksacija u samom centru Zagreba.</p>
             <Magnetic>
               <button className="px-10 py-5 bg-brand-500 text-white rounded-full text-xs tracking-widest uppercase font-semibold hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/20">
                 Rezerviraj Termin
               </button>
             </Magnetic>
           </div>
        </motion.div>
      </div>
    </main>
  );
}
