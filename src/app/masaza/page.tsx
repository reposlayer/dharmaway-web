"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, HeartPulse, HandMetal, Waves } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const massages = [
  {
    title: "Shiatsu",
    description: "Tradicionalna japanska tehnika koja koristi pritisak prstiju za uravnoteženje protoka energije.",
    icon: HandMetal,
    price: "50€ - 75€"
  },
  {
    title: "Terapeutska Masaža",
    description: "Ciljani pristup rješavanju mišićne napetosti i bolova uzrokovanih stresom ili držanjem.",
    icon: HeartPulse,
    price: "45€ - 80€"
  },
  {
    title: "Deep Relax Ritual",
    description: "Ekskluzivna masaža toplim uljima za potpuno otpuštanje nakupljene napetosti u tijelu.",
    icon: Waves,
    price: "55€ - 90€"
  }
];

export default function MasazaPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-28 pb-24 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-200/20 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-brand-400/10 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-brand-400" />
              <span className="text-brand-600 text-[10px] tracking-[0.4em] uppercase font-semibold">Umijeće Dodira</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-8 tracking-tight leading-[0.85]">
              Rituali <br /> <span className="italic font-light text-brand-600">Dodira</span>
            </h1>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="flex-1 max-w-sm mb-4"
          >
            <p className="text-lg text-stone-500 font-light leading-relaxed">
              Svaka masaža u Studio Harā je unikatan čin balansa. Spoj stručnosti i iskrenog suosjećanja za vaše tijelo.
            </p>
          </motion.div>
        </div>

        {/* Feature Case Study Style */}
        <div className="grid lg:grid-cols-2 gap-px bg-stone-200 rounded-[3rem] overflow-hidden border border-stone-200 shadow-2xl mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-16 md:p-24 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 lowercase italic">Shiatsu Balans</h2>
            <p className="text-stone-500 font-light leading-relaxed mb-10">
              Shiatsu tretman provodi Luka, naš stručnjak za holistički pristup tijelu. Kroz tretman u udobnoj odjeći, na podu ili stolu, 
              vraćamo fluidnost vašem sustavu i otapamo emocionalnu napetost pohranjenu u tkivima.
            </p>
            <ul className="space-y-6 mb-12">
               {[
                 "Poticanje cirkulacije & limfe",
                 "Rješavanje blokada u meridijanima",
                 "Duboko smirenje živaca",
                 "Personalizirani pristup problemu"
               ].map((benefit, idx) => (
                 <li key={idx} className="flex items-center gap-4 text-stone-700 font-light text-sm">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-500" /> {benefit}
                 </li>
               ))}
            </ul>
            <Magnetic>
              <button className="self-start px-8 py-4 bg-stone-900 text-white rounded-full text-[10px] tracking-widest uppercase font-semibold hover:bg-brand-600 transition-colors">
                Istraži Tretman
              </button>
            </Magnetic>
          </motion.div>
          <div className="relative h-[600px] lg:h-auto">
            <Image 
              src="https://studiohara.hr/wp-content/uploads/2020/06/59989810_467075040702924_4660134787754124622_n-e1604421374363.jpg" 
              alt="Masaža Atmosfera" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Other Massages Slider (Grid) */}
        <div className="grid md:grid-cols-3 gap-8">
           {massages.map((item, i) => (
             <motion.div
               key={item.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.1 }}
               className="bg-white p-12 rounded-[3.5rem] border border-stone-100 shadow-[0_15px_45px_rgba(0,0,0,0.02)] hover:shadow-[0_45px_90px_rgba(138,154,91,0.1)] hover:-translate-y-3 transition-all duration-700 group"
             >
               <div className="text-brand-300 mb-8 transition-colors group-hover:text-brand-500">
                 <item.icon size={42} strokeWidth={1} />
               </div>
               <h3 className="text-2xl font-serif text-stone-800 mb-4">{item.title}</h3>
               <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">{item.description}</p>
               <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                 <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-600">{item.price}</span>
                 <Magnetic>
                   <button className="text-stone-900 group-hover:text-brand-600 transition-colors">
                     <ArrowRight size={20} />
                   </button>
                 </Magnetic>
               </div>
             </motion.div>
           ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-40 bg-brand-50 rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 border border-brand-100/50">
           <div className="max-w-md">
             <h3 className="text-4xl font-serif text-stone-900 mb-6 italic">Poklonite si vrijeme.</h3>
             <p className="text-stone-500 font-light">Osjetite zašto naši klijenti Studio Haru zovu svojom oazom mira u centru Zagreba.</p>
           </div>
           <Magnetic>
             <button className="px-12 py-6 bg-stone-900 text-white rounded-full text-xs tracking-widest uppercase font-semibold hover:bg-brand-600 transition-colors shadow-2xl">
               Rezerviraj Termin
             </button>
           </Magnetic>
        </div>
      </div>
    </main>
  );
}
