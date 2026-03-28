"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, MoveRight, Phone, Clock, ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import TiltCard from '@/components/TiltCard';
import Magnetic from '@/components/Magnetic';

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-transparent pt-28 pb-24 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-200/15 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-400/5 blur-[150px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
           <div>
             <div className="flex items-center gap-4 mb-6">
               <div className="h-px w-16 bg-brand-300" />
               <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">Javite Nam Se</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 tracking-tight leading-[0.9]">
               Počnite svoju <br /> <span className="font-light italic text-brand-600">praksu</span>
             </h1>
             <p className="text-lg text-stone-600 font-light leading-relaxed max-w-md">
               Otvoreni smo za sva pitanja o satovima, terminima, članarinama i individualnim potrebama. 
               Pridružite se zajednici od preko 15 učitelja i stotina praktičara.
             </p>
           </div>
           
           <div className="space-y-6 text-stone-700 font-light">
             {[
               { icon: MapPin, label: "Adresa", value: "Ulica Grada Mainza 24, 10000 Zagreb", href: "https://maps.google.com/?q=Ulica+Grada+Mainza+24+Zagreb", external: true },
               { icon: Phone, label: "Telefon", value: "099 218 8014", href: "tel:+385992188014", external: false },
               { icon: Mail, label: "Email", value: "info@dharmawayyoga.com", href: "mailto:info@dharmawayyoga.com", external: false },
             ].map((item, i) => (
               <motion.a  
                 key={item.label}
                 href={item.href}
                 target={item.external ? "_blank" : undefined}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                 className="flex items-center gap-5 group hover:text-brand-700 transition-colors p-4 -ml-4 rounded-2xl hover:bg-white/50 cursor-pointer"
               >
                 <div className="w-12 h-12 rounded-xl bg-white border border-stone-100 shadow-sm flex items-center justify-center text-brand-500 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 flex-shrink-0">
                   <item.icon strokeWidth={1.5} size={20} />
                 </div>
                 <div>
                   <div className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-1">{item.label}</div>
                   <div className="text-base font-serif group-hover:text-brand-600 transition-colors">{item.value}</div>
                 </div>
               </motion.a>
             ))}

             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="flex items-center gap-5 p-4 -ml-4"
             >
               <div className="w-12 h-12 rounded-xl bg-white border border-stone-100 shadow-sm flex items-center justify-center text-brand-500 flex-shrink-0">
                 <Clock strokeWidth={1.5} size={20} />
               </div>
               <div>
                 <div className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-1">Radno Vrijeme</div>
                 <div className="text-base font-serif">Pon - Pet: 07:00 - 21:00</div>
                 <div className="text-sm font-light text-stone-500">Sub: 09:00 - 12:30 • Ned: Online satovi</div>
               </div>
             </motion.div>
           </div>

           {/* Social + Online */}
           <div className="flex flex-col gap-6">
             <div className="flex gap-3">
               {[
                 { label: "Facebook", href: "https://www.facebook.com/dharmawayyoga" },
                 { label: "Instagram", href: "https://www.instagram.com/dharmawayyoga" },
               ].map((social) => (
                 <a key={social.label} href={social.href} target="_blank" className="px-5 py-2.5 rounded-full border border-stone-200 bg-white text-stone-600 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm font-medium">
                   {social.label} <ExternalLink size={12} />
                 </a>
               ))}
             </div>
             
             <div className="bg-brand-50/50 backdrop-blur border border-brand-100 rounded-2xl p-5">
               <h3 className="font-serif text-base text-stone-900 mb-1.5 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Online Yoga
               </h3>
               <p className="text-sm text-stone-600 font-light leading-relaxed">
                 Live Dharma klase nedjeljom putem Zoom-a.
                 <span className="font-medium text-brand-700 block mt-1">Meeting ID: 611 997 2066</span>
               </p>
             </div>
           </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="lg:sticky lg:top-32"
          >
            <TiltCard>
              <form className="bg-white/60 backdrop-blur-2xl border border-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" />
                
                <h3 className="text-2xl font-serif text-stone-900 mb-2 tracking-tight">Pošaljite Upit</h3>
                <p className="text-stone-400 text-sm font-light mb-8">Odgovaramo unutar 24 sata</p>
                
                <div className="space-y-5 relative z-20 font-light">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-500 font-semibold mb-2 ml-1">Vaše Ime</label>
                    <input type="text" className="w-full bg-white border border-stone-200 rounded-xl px-5 py-3.5 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/50 transition-all text-stone-800 placeholder:text-stone-300 text-sm" placeholder="Ana Anić" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-500 font-semibold mb-2 ml-1">E-mail Adresa</label>
                    <input type="email" className="w-full bg-white border border-stone-200 rounded-xl px-5 py-3.5 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/50 transition-all text-stone-800 placeholder:text-stone-300 text-sm" placeholder="ana@primjer.com" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-500 font-semibold mb-2 ml-1">Interesirate se za</label>
                    <select className="w-full bg-white border border-stone-200 rounded-xl px-5 py-3.5 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/50 transition-all text-stone-800 text-sm">
                      <option>DharmaWay Yoga</option>
                      <option>Ashtanga Yoga</option>
                      <option>Hatha Yoga</option>
                      <option>Yin Yoga</option>
                      <option>Aerial Yoga</option>
                      <option>Meditacija & Pranayama</option>
                      <option>Yoga Akademija (RTY200)</option>
                      <option>Privatni sat</option>
                      <option>Ostalo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-500 font-semibold mb-2 ml-1">Poruka</label>
                    <textarea rows={3} className="w-full bg-white border border-stone-200 rounded-xl px-5 py-3.5 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100/50 transition-all text-stone-800 placeholder:text-stone-300 resize-none text-sm" placeholder="Zanima me..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-stone-900 text-white rounded-xl px-6 py-4 font-semibold tracking-widest uppercase text-xs flex items-center justify-center gap-3 hover:bg-brand-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/btn">
                    Pošalji Poruku <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </TiltCard>

            {/* Quick Info */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/50 backdrop-blur border border-white/80 rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-serif text-brand-700 mb-1">15€</div>
                <div className="text-[10px] tracking-widest uppercase text-stone-500 font-medium">Drop-in sat</div>
              </div>
              <div className="bg-white/50 backdrop-blur border border-white/80 rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-serif text-brand-700 mb-1">45€</div>
                <div className="text-[10px] tracking-widest uppercase text-stone-500 font-medium">Privatni sat</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-[2rem] overflow-hidden h-[300px] md:h-[400px] relative border border-stone-200 shadow-lg"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.1!2d15.97!3d45.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUlica+Grada+Mainza+24%2C+Zagreb!5e0!3m2!1shr!2shr!4v1"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'saturate(0.8) contrast(1.1)' }} 
            allowFullScreen 
            loading="lazy"
            className="absolute inset-0"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-xl rounded-xl px-5 py-3 border border-white/60 shadow-md">
            <p className="text-sm font-serif text-stone-900">📍 Ulica Grada Mainza 24, Zagreb</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
