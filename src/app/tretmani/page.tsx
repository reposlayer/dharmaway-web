"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, Flower, ShieldCheck, Zap } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const treatments = [
  {
    title: "Organska Kozmetika",
    description: "Vlastita proizvodnja 100% prirodne kozmetike bazirane na ljekovitim biljkama i hladno prešanim uljima.",
    icon: Flower,
    price: "40€ - 80€"
  },
  {
    title: "Analiza Kože",
    description: "Personalizirani pristup svakom klijentu uz stručnu dijagnozu i preporuku rituala njege.",
    icon: ShieldCheck,
    price: "Besplatno uz tretman"
  },
  {
    title: "Anti-age Rituali",
    description: "Intenzivna njega zrele kože uz pomoć prirodnih antioksidansa i ručnih tehnika revitalizacije.",
    icon: Zap,
    price: "65€ - 85€"
  }
];

export default function TretmaniPage() {
  return (
    <main className="min-h-screen bg-stone-50 pt-28 pb-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-brand-200/20 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-300/10 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-brand-400" />
              <span className="text-brand-600 text-[10px] tracking-[0.4em] uppercase font-semibold">Ljepota iz Prirode</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-8 tracking-tight leading-[0.9]">
              Organska <br /> <span className="italic font-light text-brand-600">Simfonija</span>
            </h1>
            <p className="text-xl text-stone-500 font-light leading-relaxed">
              Vjerujemo u čistoću i snagu prirode. Naši tretmani lica koriste isključivo organsku kozmetiku 
              vlastite proizvodnje, poliranu do savršenstva kroz godine iskustva.
            </p>
          </motion.div>
        </div>

        {/* Hero Gallery Grid */}
        <div className="grid md:grid-cols-12 gap-6 mb-32 h-[500px] md:h-[650px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="md:col-span-8 relative rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://studiohara.hr/wp-content/uploads/2020/06/97267851_100963698274973_970377470983128598_n-e1604421411211.jpg" 
              alt="Tretman Lica" 
              fill 
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:col-span-4 relative rounded-[3rem] overflow-hidden shadow-xl"
          >
            <Image 
              src="https://studiohara.hr/wp-content/uploads/2023/11/69022747_1719472214864032.jpg" 
              alt="Organski proizvodi" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Treatment Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {treatments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group"
            >
              <div className="aspect-square bg-white rounded-[3rem] p-12 border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col items-start justify-between hover:shadow-[0_30px_60px_rgba(138,154,91,0.12)] hover:-translate-y-2 transition-all duration-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-brand-100 group-hover:text-brand-200 transition-colors">
                  <item.icon size={80} strokeWidth={0.5} />
                </div>
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-brand-500/20">
                  <item.icon size={22} strokeWidth={2} />
                </div>
                <div className="relative z-10 w-full">
                  <h3 className="text-3xl font-serif text-stone-900 mb-4">{item.title}</h3>
                  <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-600">{item.price}</span>
                    <Magnetic>
                      <button className="text-stone-900 hover:text-brand-600 transition-colors">
                        <ArrowRight size={20} />
                      </button>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Block */}
        <div className="mt-40 grid md:grid-cols-2 gap-20 items-center">
           <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="h-80 relative rounded-[2rem] overflow-hidden translate-y-12">
                  <Image src="https://studiohara.hr/wp-content/uploads/2023/11/69022747_1719472214864032.jpg" alt="Nature" fill className="object-cover" />
                </div>
                <div className="h-80 relative rounded-[2rem] overflow-hidden">
                  <Image src="https://studiohara.hr/wp-content/uploads/2020/06/59858711_467075197369575_2069720443212005376_n-e1604421390492.jpg" alt="Botanicals" fill className="object-cover" />
                </div>
             </div>
           </div>
           <div className="order-1 md:order-2">
             <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">Zašto naša kozmetika čini razliku?</h2>
             <div className="space-y-8">
               {[
                 { q: "100% Prirodno", a: "Svi sastojci potječu iz čiste prirode, bez parabena, sulfata i umjetnih boja." },
                 { q: "Vlastita Receptura", a: "Sandra Tiljak Matej osobno razvija svaku formulu na temelju dugogodišnjeg terapeutskog iskustva." },
                 { q: "Etika & Održivost", a: "Proizvodnja je usmjerena na minimalan utjecaj na okoliš i maksimalnu dobrobit za kožu." }
               ].map((item, idx) => (
                 <div key={idx} className="border-b border-stone-200 pb-6">
                   <h4 className="text-lg font-serif text-stone-800 mb-2">{item.q}</h4>
                   <p className="text-stone-500 font-light text-sm">{item.a}</p>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </main>
  );
}
