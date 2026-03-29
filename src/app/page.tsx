"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, Sparkles, Heart, Leaf } from "lucide-react";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroParallax from "@/components/HeroParallax";
import Magnetic from "@/components/Magnetic";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <HeroParallax />

      {/* Philosophy Section */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 opacity-20 pointer-events-none">
          <span className="text-[20vw] font-serif italic text-stone-300 leading-none">Esencija</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-brand" />
              <span className="text-brand text-[10px] tracking-[0.5em] uppercase font-bold">Harā Filozofija</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif text-stone-900 mb-10 tracking-tight leading-[0.85]">
              Povratak <br /> <span className="italic font-light text-brand">Esenciji.</span>
            </h2>
            <p className="text-xl text-stone-500 font-light leading-relaxed mb-16 max-w-lg">
              Studio Harā nije samo mjesto za njegu tijela. To je prostor u kojem se susreću tradicija, 
              priroda i suvremena znanja o balansu. Kroz organsku kozmetiku vlastite proizvodnje 
              i drevne discipline yoga i masaže, vraćamo vas u vaš centar.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="group">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                  <Leaf size={20} className="transition-transform group-hover:rotate-12" />
                </div>
                <h4 className="font-serif text-xl mb-3">100% Organski</h4>
                <p className="text-stone-400 text-sm font-light leading-relaxed">Vlastita proizvodnja bez kompromisa, inspirirana prirodom.</p>
              </div>
              <div className="group">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                  <Heart size={20} className="transition-transform group-hover:scale-110" />
                </div>
                <h4 className="font-serif text-xl mb-3">Holistički Pristup</h4>
                <p className="text-stone-400 text-sm font-light leading-relaxed">Gledamo tijelo kao neraskidivu cjelinu duha i materije.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-[12px] border-white/50 backdrop-blur-sm"
          >
            <Image 
              src="https://studiohara.hr/wp-content/uploads/2023/11/69022747_1719472214864032.jpg" 
              alt="Nature Philosophy" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand/5 mix-blend-multiply" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid (Bento) */}
      <section className="py-40 bg-stone-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_100%)] opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
           <div className="text-center mb-32">
              <span className="text-brand text-[10px] tracking-[0.6em] uppercase font-bold mb-6 block">Istražite Rituale</span>
              <h2 className="text-6xl md:text-8xl font-serif text-stone-900 mb-10 leading-[0.85] tracking-tight text-balance">Usluge vama <br /> <span className="italic font-light text-brand">prilagođene</span></h2>
              <div className="h-px w-24 bg-stone-200 mx-auto" />
           </div>
           
           <div className="grid md:grid-cols-12 gap-8 md:h-[900px]">
              <motion.a 
                href="/tretmani"
                className="md:col-span-8 relative rounded-[4rem] overflow-hidden group shadow-2xl"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image src="https://studiohara.hr/wp-content/uploads/2020/06/97267851_100963698274973_970377470983128598_n-e1604421411211.jpg" alt="Treatments" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-16 left-16 text-white max-w-md">
                   <h3 className="text-5xl font-serif mb-6 leading-tight">Organski <br /> Tretmani</h3>
                   <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold group-hover:gap-6 transition-all">Istraži Ritual <MoveRight size={18} /></span>
                </div>
              </motion.a>
              
              <motion.a 
                href="/yoga"
                className="md:col-span-4 relative rounded-[4rem] overflow-hidden group shadow-xl"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image src="https://studiohara.hr/wp-content/uploads/2020/06/59858711_467075197369575_2069720443212005376_n-e1604421390492.jpg" alt="Yoga" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-12 left-12 text-white">
                   <h3 className="text-4xl font-serif mb-4">Yoga & Dah</h3>
                   <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold">Satovi <MoveRight size={14} /></span>
                </div>
              </motion.a>
              
              <motion.a 
                href="/masaza"
                className="md:col-span-4 relative rounded-[4rem] overflow-hidden group shadow-xl"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image src="https://studiohara.hr/wp-content/uploads/2020/06/59989810_467075040702924_4660134787754124622_n-e1604421374363.jpg" alt="Massage" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-12 left-12 text-white">
                   <h3 className="text-4xl font-serif mb-4">Shiatsu & <br /> Masaža</h3>
                   <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold">Istraži <MoveRight size={14} /></span>
                </div>
              </motion.a>
              
              <motion.div 
                className="md:col-span-8 bg-stone-900 rounded-[4rem] p-16 md:p-24 flex flex-col justify-center text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 blur-[100px] group-hover:bg-brand/30 transition-colors duration-1000" />
                <Sparkles className="mb-10 text-brand animate-pulse" size={48} />
                <h3 className="text-5xl md:text-6xl font-serif mb-10 leading-[0.9] text-balance">Počnite svoje <br /> putovanje k balansu.</h3>
                <div className="flex gap-4">
                   <Magnetic>
                     <Link href="/kontakt" className="px-12 py-6 bg-brand text-white rounded-full text-xs font-bold tracking-[0.3em] uppercase hover:bg-brand-light transition-all shadow-2xl shadow-brand/20">
                       Rezerviraj Termin
                     </Link>
                   </Magnetic>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}