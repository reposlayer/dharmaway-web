"use client";

import { motion } from 'framer-motion';
import { Target, Heart, ShieldCheck, Zap, GraduationCap, Globe } from 'lucide-react';
import Image from 'next/image';
import TiltCard from '@/components/TiltCard';
import CountUp from '@/components/CountUp';
import MarqueeText from '@/components/MarqueeText';
import TextReveal from '@/components/TextReveal';

export default function ONamaPage() {
  const values = [
    { icon: Heart, title: "Lineage & Tradicija", text: "Praksa utemeljena u autentičnoj Sri Dharma Mittra liniji. Poštujemo i čuvamo drevnu mudrost yoge." },
    { icon: Target, title: "Osobni Pristup", text: "Sekvence prilagođene razini svakog polaznika — od potpunog početnika do naprednog praktičara." },
    { icon: ShieldCheck, title: "Certificirani Učitelji", text: "Oliva Vrbanek (RYT500) i tim od 15+ certificiranih instruktora sa stotinama sati edukacije." },
    { icon: GraduationCap, title: "Yoga Akademija", text: "Akreditirana RTY200 ustanova za obrazovanje odraslih (Učilište Sensa) u sklopu centra." },
    { icon: Globe, title: "Međunarodni Rad", text: "Gostujući učitelji, retreati (Bali, Indija) i intenzivi s priznatim imenima poput Davida Robsona." },
    { icon: Zap, title: "Zajednica", text: "Više od prostora za vježbanje — DharmaWay je zajednica koja njeguje rast, podršku i autentičnost." },
  ];

  const teachers = [
    { name: "Oliva Vrbanek", role: "Osnivačica, RYT500", desc: "1000h Dharma & Ashtanga Yoga. Nositelj DharmaWay vizije i lineage.", initials: "OV" },
    { name: "Mislav", role: "Ashtanga Instruktor", desc: "Specijaliziran za Mysore stil i Primary Series voditelje.", initials: "M" },
    { name: "Dea", role: "DharmaWay Yoga", desc: "Vodi DharmaWay I razinu s fokusom na pripravne sekvence.", initials: "D" },
    { name: "Danijela", role: "Hatha Yoga", desc: "Tradicionalni Hatha pristup s naglaskom na Pure Hatha praksu.", initials: "Da" },
    { name: "Tanja", role: "Yin Yoga", desc: "Specijalizirana za duboku regenerativnu Yin praksu.", initials: "T" },
    { name: "Kala Das", role: "Aerial Yoga", desc: "Inovativni pristup yogi u zraku za dekompresiju i slobodu.", initials: "KD" },
  ];

  return (
    <main className="min-h-screen bg-transparent pt-28 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-300/10 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-400/5 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        {/* Hero section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
           <div className="flex items-center gap-4 mb-6">
             <div className="h-px w-16 bg-brand-300" />
             <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">Naša Priča</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 tracking-tight leading-[0.9]">
             DharmaWay <br /> <span className="font-light italic text-brand-600">Yoga Centar</span>
           </h1>
           <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed mb-12">
             <p>DharmaWay Yoga Centar & Yoga Akademija Zagreb (YAZ) rođen je iz duboke predanosti autentičnoj praksi. 
                Osnovan od strane Olive Vrbanek (RYT500, 1000h Dharma & Ashtanga Yoga), centar je utočište za sve koji 
                traže istinsku transformaciju kroz yogu.</p>
             <p>Naša filozofija temelji se na dubokom poštovanju tradicije i lineage Sri Dharma Mittre. 
                Fokusiramo se na sekvence koje grade fizičku snagu, fleksibilnost, koncentraciju i duhovni rast — 
                daleko od površnih trendova, bliže esenciji drevne prakse.</p>
           </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-brand-200/20 rounded-[3rem] animate-float pointer-events-none" />
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative border border-white/40 shadow-[0_30px_80px_rgba(192,126,24,0.12)]">
               <Image src="https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/published/66766618-906496663046160-7921562722923472486-n.jpg" alt="DharmaWay Yoga Studio Zagreb" fill className="object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-brand-100/5" />
               <div className="absolute inset-x-8 bottom-8 bg-white/40 backdrop-blur-2xl p-6 rounded-2xl border border-white/50">
                 <p className="text-stone-800 italic font-serif text-lg leading-relaxed text-center">
                   &ldquo;Yoga is the journey of the self, through the self, to the self.&rdquo;
                 </p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Stats with CountUp */}
        <div className="mb-32 py-20 border-y border-stone-200/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <CountUp end={30} suffix="+" label="Satova Tjedno" />
            <CountUp end={15} suffix="+" label="Instruktora" />
            <CountUp end={1000} suffix="h" label="Edukacija Olive" />
            <CountUp end={200} prefix="" suffix="h" label="RYT Akademija" />
          </div>
        </div>

        {/* Text Reveal Philosophy */}
        <div className="mb-32 max-w-5xl mx-auto">
          <TextReveal 
            text="Ne podučavamo samo asane. Gradimo ljude. Svaka sekvenca, svaki dah, svaka meditacija — korak je bliže istini o sebi. To je DharmaWay."
            className="text-stone-800"
          />
        </div>

        {/* Values */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
           className="mb-32"
        >
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-16 bg-brand-300" />
              <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">Naše Vrijednosti</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">Postulati <span className="italic text-brand-600 font-light">DharmaWay</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                key={i}
              >
                <TiltCard>
                  <div className="bg-white/60 backdrop-blur-xl border border-white shadow-xl rounded-2xl p-8 h-full hover:bg-white transition-colors duration-500 group">
                     <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110">
                       <v.icon strokeWidth={1.5} size={24} />
                     </div>
                     <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:text-brand-800 transition-colors">{v.title}</h3>
                     <p className="text-stone-600 font-light text-sm leading-relaxed">{v.text}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="py-4 border-y border-stone-200/50 overflow-hidden mb-32 -mx-4 md:-mx-8">
          <MarqueeText
            text="OLIVA · MISLAV · DEA · DANIJELA · TANJA · KALA DAS · ANDRIJA · SUNDARANANDA · IVA · DORIS"
            speed={20}
            className="text-stone-300 text-sm font-serif tracking-[0.15em]"
          />
        </div>

        {/* Teachers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-16 bg-brand-300" />
              <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">Naš Tim</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">Instruktori & <span className="italic text-brand-600 font-light">Vodiči</span></h2>
            <p className="text-stone-500 font-light mt-4 max-w-xl">
              Certificirani učitelji s dugogodišnjim iskustvom u vodećim yoga tradicijama.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="bg-white/50 backdrop-blur-xl border border-white/80 shadow-lg rounded-2xl p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-100 to-brand-50 border-2 border-brand-200/50 flex items-center justify-center text-brand-700 mb-6 text-xl font-serif font-light group-hover:from-brand-200 group-hover:to-brand-100 transition-all duration-500 group-hover:scale-105">
                    {t.initials}
                  </div>
                  <h3 className="text-xl font-serif text-stone-900 mb-1 group-hover:text-brand-800 transition-colors">{t.name}</h3>
                  <p className="text-xs tracking-widest uppercase text-brand-600 font-semibold mb-4">{t.role}</p>
                  <p className="text-stone-500 font-light text-sm leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
