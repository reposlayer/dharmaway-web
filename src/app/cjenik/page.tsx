"use client";

import { motion } from "framer-motion";
import { MoveRight, Star, Heart } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const prices = {
  yoga: [
    { name: "Pojedinačni sat (Drop-in)", price: "15€" },
    { name: "Mjesečna članarina (2x tjedno)", price: "65€" },
    { name: "Mjesečna članarina (Neograničeno)", price: "110€" },
    { name: "Privatni sat (60 min)", price: "50€" },
  ],
  masaze: [
    { name: "Shiatsu (60 / 90 min)", price: "55€ / 80€" },
    { name: "Terapeutska (45 / 60 min)", price: "45€ / 65€" },
    { name: "Deep Relax (60 / 90 min)", price: "60€ / 85€" },
    { name: "Manualna limfna drenaža (60 min)", price: "60€" },
  ],
  tretmani: [
    { name: "Analiza kože & savjetovanje", price: "20€ / 0€*" },
    { name: "Organski tretman lica (60 min)", price: "55€" },
    { name: "Anti-age ritual (75 min)", price: "75€" },
    { name: "Detox tretman tijela", price: "70€" },
  ]
};

export default function CjenikPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-28 pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-200/20 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-400/10 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-20">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-brand-400" />
              <span className="text-brand-600 text-[10px] tracking-[0.4em] uppercase font-semibold">Ulaganje u Sebe</span>
              <div className="h-px w-10 bg-brand-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-8 tracking-tight">
              Naš <span className="italic font-light text-brand-600">Cjenik</span>
            </h1>
            <p className="text-stone-500 font-light max-w-lg mx-auto leading-relaxed">
              Transparentno i pošteno. Cijene odražavaju kvalitetu sastojaka i stručnost našeg tima.
            </p>
          </motion.div>
        </div>

        {/* Pricing Sections */}
        <div className="space-y-32">
          {Object.entries(prices).map(([category, items], sectionIdx) => (
            <motion.section 
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: sectionIdx * 0.1 }}
            >
              <div className="flex items-center gap-8 mb-12">
                 <h2 className="text-3xl md:text-4xl font-serif text-stone-800 capitalize italic pb-2 border-b-2 border-brand-500/30 min-w-40">{category}</h2>
                 <div className="h-px flex-grow bg-stone-200" />
              </div>
              
              <div className="grid gap-4">
                {items.map((item, i) => (
                  <div 
                    key={item.name} 
                    className="flex items-end justify-between py-6 border-b border-stone-200 group hover:border-brand-300 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg md:text-xl font-serif text-stone-800 group-hover:text-brand-700 transition-colors">{item.name}</h4>
                    </div>
                    <div className="flex flex-col items-end min-w-32">
                      <span className="text-2xl font-serif text-stone-900 group-hover:scale-110 transition-transform">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Note */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-24 p-8 bg-white/50 backdrop-blur rounded-3xl border border-stone-200 text-stone-400 text-xs font-light tracking-wide text-center"
        >
          *Analiza kože je besplatna uz kupnju bilo kojeg tretmana. Cijene su izražene u eurima s uključenim PDV-om.
        </motion.div>

        {/* CTA */}
        <div className="mt-32 flex flex-col items-center">
           <Magnetic>
             <button className="px-16 py-6 bg-stone-900 text-white rounded-full text-xs tracking-widest uppercase font-semibold hover:bg-brand-600 transition-colors shadow-2xl flex items-center gap-4 group">
               Zakažite Termin <MoveRight className="group-hover:translate-x-2 transition-transform" size={18} />
             </button>
           </Magnetic>
        </div>
      </div>
    </main>
  );
}
