"use client";

import { motion } from "framer-motion";
import { MoveRight, Flame, Leaf, Moon, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroParallax from "@/components/HeroParallax";
import TiltCard from "@/components/TiltCard";
import Magnetic from "@/components/Magnetic";
import TextReveal from "@/components/TextReveal";
import HorizontalScroll from "@/components/HorizontalScroll";
import MarqueeText from "@/components/MarqueeText";
import CountUp from "@/components/CountUp";

export default function Home() {
  return (
    <div className="min-h-screen pb-0 group/main relative overflow-hidden bg-transparent">
      
      <HeroParallax />

      {/* Marquee Band */}
      <section className="relative z-20 py-6 border-y border-stone-200/50 overflow-hidden bg-white/30 backdrop-blur-sm">
        <MarqueeText
          text="DHARMA · ASHTANGA · HATHA · YIN · MEDITACIJA · PRANAYAMA · AERIAL · YOGA NIDRA"
          speed={25}
          className="text-stone-300 text-sm md:text-base font-serif tracking-[0.15em]"
        />
      </section>

      {/* Text Reveal Section */}
      <section className="relative z-20 py-32 md:py-48 px-6 md:px-12 max-w-6xl mx-auto">
        <TextReveal 
          text="Više od yoge. DharmaWay je utočište gdje se tradicija Sri Dharma Mittra lineage susreće s modernim pristupom — grade fizičku snagu, fleksibilnost i duhovni rast."
          className="text-stone-800"
        />
      </section>

      {/* Bento Grid Section */}
      <section className="relative z-20 py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-16 bg-brand-300" />
            <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">Doživljaj</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 tracking-tight">
            Naš <span className="italic text-brand-600 font-light">Prostor</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {/* Large image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative group"
          >
            <Image src="https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/61453493-10216036135951232-1584069434383794176-o.jpg" alt="DharmaWay Studio" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-brand-300 text-[10px] tracking-[0.3em] uppercase">Interijer</span>
              <h3 className="text-white text-2xl md:text-3xl font-serif mt-1">Utočište u srcu Zagreba</h3>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-1 row-span-1 rounded-[2rem] bg-brand-800 p-6 flex flex-col justify-between text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-600/30 blur-[60px] rounded-full pointer-events-none group-hover:bg-brand-500/40 transition-colors duration-700" />
            <span className="text-brand-200 text-[10px] tracking-[0.3em] uppercase relative z-10">Tjedno</span>
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-serif">30+</div>
              <div className="text-brand-200/70 text-sm font-light">satova prakse</div>
            </div>
          </motion.div>

          {/* Medium image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative group"
          >
            <Image src="https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/53800908-2343387525939909-4177148908482330624-n.jpg" alt="Meditacija" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-white/70 text-xs font-light">Meditacija</span>
            </div>
          </motion.div>

          {/* Quote card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 row-span-1 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/60 p-6 flex flex-col justify-center"
          >
            <p className="font-serif italic text-stone-700 text-lg leading-relaxed">
              &ldquo;Yoga is 99% practice and 1% theory.&rdquo;
            </p>
            <p className="text-stone-400 text-xs mt-3 tracking-widest uppercase">— Sri K. Pattabhi Jois</p>
          </motion.div>

          {/* Ashtanga image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative group"
          >
            <Image src="https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/395077904-18231176248246331-2536801684369716765-n.jpeg" alt="Ashtanga" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-white/70 text-xs font-light">Ashtanga</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll Programs */}
      <section className="relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-wrap items-end justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-16 bg-brand-300" />
                <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">Naša Praksa</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 tracking-tight">
                Putevi <span className="italic text-brand-600 font-light">Yoge</span>
              </h2>
            </div>
            <Magnetic>
              <Link href="/programi" className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-stone-900 border-b border-stone-900 pb-1 hover:text-brand-600 hover:border-brand-600 transition-colors">
                Svi Programi <MoveRight size={14} />
              </Link>
            </Magnetic>
          </motion.div>
        </div>
        <HorizontalScroll />
      </section>

      {/* Stats Section */}
      <section className="relative z-20 py-32 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <CountUp end={30} suffix="+" label="Satova Tjedno" />
          <CountUp end={15} suffix="+" label="Instruktora" />
          <CountUp end={200} prefix="" suffix="h" label="RYT Akademija" />
          <CountUp end={7} suffix="" label="Dana u Tjednu" />
        </div>
      </section>

      {/* Reverse Marquee */}
      <section className="relative z-20 py-4 border-y border-stone-200/50 overflow-hidden bg-white/30 backdrop-blur-sm">
        <MarqueeText
          text="YOGA CENTAR · YOGA AKADEMIJA · ZAGREB · UL. GRADA MAINZA 24 · DHARMA MITTRA LINEAGE"
          speed={30}
          reverse
          className="text-brand-400/40 text-lg md:text-xl font-serif tracking-[0.2em] italic"
        />
      </section>

      {/* Programs Grid */}
      <section className="relative z-20 py-32 px-4 max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-wrap items-end justify-between mb-16 gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-16 bg-brand-300" />
              <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">Odaberite</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Temeljni <span className="italic text-brand-700">Programi</span></h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <ProgramCard 
             title="DharmaWay Yoga" 
             desc="Sekvence u tradiciji Sri Dharma Mittre — razine I do IV za izgradnju snage, fleksibilnosti i duhovnog rasta." 
             href="/programi" 
             Icon={Flame}
             delay={0}
             highlight
           />
           <ProgramCard 
             title="Ashtanga Yoga" 
             desc="Mysore stil, Primary Led klase i programi za početnike. Disciplina koja transformira tijelo i um." 
             href="/programi" 
             Icon={Leaf}
             delay={0.1}
           />
           <ProgramCard 
             title="Meditacija & Yin" 
             desc="Vipassana, Yoga Nidra, Pranayama i Yin Yoga — putevi prema unutarnjem miru i dubokoj regeneraciji." 
             href="/programi" 
             Icon={Moon}
             delay={0.2}
           />
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="relative z-20 py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-brand-500 font-sans tracking-[0.3em] uppercase text-xs mb-4 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-brand-200 after:h-px after:w-12 after:bg-brand-200">
            Cjenik
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Članarine & <span className="italic text-brand-700">Paketi</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Drop-in", price: "15€", desc: "Pojedinačni sat", highlight: false },
            { name: "4 sata", price: "40€", desc: "Mjesečna kartica", highlight: false },
            { name: "8 satova", price: "60€", desc: "Mjesečna kartica", highlight: false },
            { name: "Neograničeno", price: "85€", desc: "Mjesečna pretplata", highlight: true },
          ].map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <TiltCard>
                <div className={`rounded-[2rem] p-8 border h-full flex flex-col items-center text-center transition-all duration-500 group
                  ${plan.highlight 
                    ? 'bg-brand-800 text-white border-brand-700 shadow-[0_20px_50px_rgba(192,126,24,0.15)]' 
                    : 'bg-white/60 backdrop-blur-2xl border-white/60 text-stone-900 shadow-lg'
                  }`}
                >
                  <span className={`text-xs tracking-[0.3em] uppercase mb-4 ${plan.highlight ? 'text-brand-200' : 'text-brand-500'}`}>
                    {plan.name}
                  </span>
                  <div className={`text-5xl font-serif mb-2 group-hover:scale-105 transition-transform duration-500 ${plan.highlight ? 'text-white' : 'text-stone-900'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-sm font-light mb-6 ${plan.highlight ? 'text-brand-100/80' : 'text-stone-500'}`}>
                    {plan.desc}
                  </p>
                  {plan.highlight && (
                    <span className="text-[10px] tracking-widest uppercase bg-brand-600 text-brand-100 px-4 py-1.5 rounded-full">
                      Najpopularniji
                    </span>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-stone-400 text-sm font-light">
            Studenti & umirovljenici: neograničeno 60€ / 8 satova 50€ • Godišnja: 850€ (redovna) / 600€ (studenti) • MultiSport prihvaćamo
          </p>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-20 w-full mb-32 px-4 max-w-7xl mx-auto">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
           className="w-full bg-stone-900 rounded-[3rem] p-12 md:p-20 overflow-hidden relative flex flex-col md:flex-row items-center justify-between text-stone-50 border border-stone-800 shadow-2xl group gap-12"
         >
            <div className="absolute inset-0 bg-brand-900/20 mix-blend-color-burn opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-400/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand-500/20 transition-colors duration-1000" />
            


            <div className="max-w-lg z-20 flex flex-col">
              <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">Ul. Grada Mainza 24, Zagreb</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-4">Započnite Svoj <br/><span className="italic text-brand-300">Yoga Put</span></h2>
              <p className="text-white/50 font-light text-sm leading-relaxed mb-8 max-w-md">
                Pridružite se zajednici od 15+ učitelja i stotina praktičara. 
                Bez iskustva — samo otvoreno srce.
              </p>
            </div>

            <Magnetic>
               <Link href="/kontakt" className="z-20 px-10 py-5 bg-white text-stone-950 rounded-full font-semibold uppercase tracking-[0.2em] text-xs inline-flex items-center gap-4 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-500 group/btn flex-shrink-0">
                  Rezervirajte Termin <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:bg-brand-50 transition-all duration-500"><ArrowRight size={14} className="text-brand-600" /></div>
               </Link>
            </Magnetic>
         </motion.div>
      </section>

    </div>
  );
}

function ProgramCard({ title, desc, href, Icon, delay, highlight = false }: any) {
  return (
    <motion.div
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-50px" }}
       transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard>
        <Link 
          href={href} 
          className={`block w-full h-full rounded-[2rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden relative group/card border
            ${highlight ? 'bg-brand-900 text-white border-brand-800' : 'bg-white/60 backdrop-blur-2xl text-stone-900 border-white/60'}
          `}
        >
          <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none
            ${highlight ? 'bg-gradient-to-br from-brand-800 to-transparent' : 'bg-gradient-to-br from-brand-50 to-transparent'}
          `} />
          
          <div className={`mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl group-hover/card:scale-110 group-hover/card:-rotate-12 transition-all duration-500
            ${highlight ? 'bg-white/10 text-brand-200 border border-white/20' : 'bg-brand-50 text-brand-600 border border-brand-100'}
          `}>
            <Icon strokeWidth={1} size={32} />
          </div>
          
          <h3 className={`font-serif text-3xl mb-4 group-hover/card:-translate-y-1 transition-transform duration-500
            ${highlight ? 'text-white' : 'text-stone-900'}
          `}>{title}</h3>
          
          <p className={`leading-relaxed text-sm mb-12 line-clamp-3 font-light
            ${highlight ? 'text-brand-100/80' : 'text-stone-500'}
          `}>{desc}</p>
          
          <span className={`text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-3 group-hover/card:gap-5 transition-all
            ${highlight ? 'text-brand-300' : 'text-brand-600'}
          `}>
            Detaljnije <MoveRight size={14} className="group-hover/card:translate-x-1 transition-transform" />
          </span>
        </Link>
      </TiltCard>
    </motion.div>
  );
}
