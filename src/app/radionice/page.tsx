"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, MoveRight, GraduationCap, Globe, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import TiltCard from '@/components/TiltCard';
import Magnetic from '@/components/Magnetic';

export default function RadionicePage() {
  const radionice = [
    {
      id: "akademija-rty200",
      title: "Yoga Akademija RTY200",
      date: "Upisi u tijeku",
      location: "DharmaWay Centar, Zagreb",
      description: "Akreditirana ustanova za obrazovanje odraslih (Učilište Sensa). Postanite certificirani yoga instruktor kroz sveobuhvatan 200-satni program koji pokriva asane, filozofiju, anatomiju i metodiku podučavanja.",
      status: "Prijave otvorene",
      available: true,
      featured: true
    },
    {
      id: "ashtanga-robson",
      title: "Ashtanga Intensive s Davidom Robsonom & Jelenom Vesić",
      date: "Prosinac 2025",
      location: "DharmaWay Centar, Zagreb",
      description: "Intenzivni vikend s priznatim međunarodnim Ashtanga učiteljem Davidom Robsonom i Jelenom Vesić. Produbite svoj Mysore stil i Primary Series razumijevanje.",
      status: "Uskoro prijave",
      available: false
    },
    {
      id: "bali-retreat",
      title: "DharmaWay Bali Retreat",
      date: "Siječanj 2026",
      location: "Bali, Indonezija",
      description: "Tjedni retreat u srcu Balija. Svakodnevna praksa, meditacija, kulturno uranjanje i duhovni rast u paradizikalnom okruženju. Vodi Oliva Vrbanek.",
      status: "Prijave otvorene",
      available: true
    },
    {
      id: "kundalini-workshop",
      title: "Kundalini Yoga Radionica",
      date: "Kontinuirano",
      location: "DharmaWay Centar, Zagreb",
      description: "Intenzivna radionica fokusirana na buđenje Kundalini energije. Kombinacija kriyi, meditacije, mantre i pranayame za duboku transformativnu praksu.",
      status: "Prijave otvorene",
      available: true
    },
    {
      id: "vedic-astrology",
      title: "Djotiš — Vedska Astrologija",
      date: "Po dogovoru",
      location: "DharmaWay Centar, Zagreb",
      description: "Uvod u vedsku astrologiju (Jyotish). Razumijevanje kozmičkih utjecaja na osobni život, drevna mudrost koja nadopunjuje yoga praksu.",
      status: "Prijave otvorene",
      available: true
    },
    {
      id: "yin-yoga-intensive",
      title: "Yin Yoga Intensive",
      date: "Periodično",
      location: "DharmaWay Centar, Zagreb",
      description: "Produbite razumijevanje Yin prakse — meridianski sustav, fascia, dugotrajne drže i meditativni aspekti. Za praktičare i buduće instruktore.",
      status: "Uskoro",
      available: false
    }
  ];

  return (
    <main className="min-h-screen pt-28 pb-24 relative overflow-hidden bg-transparent">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-200/15 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-brand-300" />
            <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">Produbite Znanje</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 tracking-tight leading-[0.9]">
            Edukacije & <br/><span className="font-light italic text-brand-600">Retreati</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl font-light leading-relaxed">
            Od akreditirane RTY200 Yoga Akademije do međunarodnih intenziva i retreata — 
            rastite kao praktičar i učitelj.
          </p>
        </motion.div>

        {/* Featured Academy Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="relative bg-stone-900 rounded-[2.5rem] p-8 md:p-14 border border-stone-800 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-800/20 via-transparent to-transparent pointer-events-none" />

            
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-brand-400/20 text-brand-300 text-[10px] tracking-widest uppercase font-semibold border border-brand-400/30">
                    <Star size={10} className="inline mr-1 -mt-0.5" /> Prijave Otvorene
                  </span>
                  <span className="text-stone-500 text-sm flex items-center gap-2">
                    <MapPin size={14} className="text-brand-400" /> Zagreb
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 tracking-tight leading-tight">
                  Yoga Akademija <span className="italic text-brand-300 font-light">RTY200</span>
                </h2>
                <p className="text-white/50 font-light text-base md:text-lg leading-relaxed max-w-xl mb-8">
                  Akreditirana ustanova za obrazovanje odraslih (Učilište Sensa). 
                  Postanite certificirani yoga instruktor kroz sveobuhvatan 200-satni program.
                </p>
                <Magnetic>
                  <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 rounded-full font-semibold tracking-widest uppercase text-xs hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-500 group/btn">
                    Saznaj Više <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Magnetic>
              </div>
              
              <div className="hidden md:flex w-40 h-40 rounded-full border border-white/10 items-center justify-center bg-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-700 flex-shrink-0">
                <GraduationCap className="w-12 h-12 text-brand-200/60 group-hover:text-brand-200 transition-colors duration-700" strokeWidth={1} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other workshops grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {radionice.filter(r => !r.featured).map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              key={item.id}
            >
              <TiltCard>
                <div className="group bg-white/50 backdrop-blur-xl border border-white/60 rounded-2xl p-7 md:p-8 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(192,126,24,0.08)] transition-all duration-700 flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="flex flex-wrap items-center gap-3 mb-5 relative z-10">
                    <span className={`px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold border
                      ${item.available 
                        ? 'bg-brand-50 text-brand-700 border-brand-100' 
                        : 'bg-stone-100 text-stone-400 border-stone-200'
                      }`}>
                      {item.status}
                    </span>
                    <div className="flex items-center gap-1.5 text-stone-400 text-xs">
                      <Calendar size={13} className="text-brand-400" /> {item.date}
                    </div>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-serif text-stone-900 mb-3 group-hover:text-brand-800 transition-colors relative z-10">{item.title}</h2>
                  
                  <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-4 relative z-10">
                    {item.location.includes('Bali') ? <Globe size={13} className="text-brand-400" /> : <MapPin size={13} className="text-brand-400" />}
                    {item.location}
                  </div>
                  
                  <p className="text-stone-600 font-light text-sm leading-relaxed mb-8 flex-grow relative z-10">
                    {item.description}
                  </p>

                  <button 
                    disabled={!item.available}
                    className={`mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold tracking-widest uppercase text-[10px] transition-all duration-500 relative z-10 w-fit
                      ${item.available 
                        ? 'bg-stone-900 text-white hover:bg-brand-600 hover:shadow-lg hover:-translate-y-0.5' 
                        : 'bg-stone-100 text-stone-400 cursor-not-allowed'}`}
                  >
                    {item.available ? 'Prijavi Se' : 'Uskoro'}
                    {item.available && <MoveRight size={13} />}
                  </button>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
