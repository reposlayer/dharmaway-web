"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  {
    src: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/230921-3756-r-2-102-david-and-jelena-by-ellard-vasen-photos-app-c1-2048x1365-jpg_orig.webp",
    title: "SNAGA",
    subtitle: "DHARMA YOGA",
    poem: "Sekvence koje grade fizičku snagu i fleksibilnost duha.",
    y: "0px",
  },
  {
    src: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/395077904-18231176248246331-2536801684369716765-n.jpeg",
    title: "DISCIPLINA",
    subtitle: "ASHTANGA YOGA",
    poem: "Mysore stil i Primary Led — put prema samodisciplini.",
    y: "80px",
  },
  {
    src: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/53800908-2343387525939909-4177148908482330624-n.jpg",
    title: "MEDITACIJA",
    subtitle: "VIPASSANA & NIDRA",
    poem: "Tišina uma je vrata prema beskonačnom miru.",
    y: "-40px",
  },
  {
    src: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/972c7501-7cf2-40d4-a589-f8254acd9a1f_orig.jpeg",
    title: "PREDAJA",
    subtitle: "YIN YOGA",
    poem: "Kroz duboku opuštenost dolazimo do transformacije.",
    y: "40px",
  },
  {
    src: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/61453493-10216036135951232-1584069434383794176-o.jpg",
    title: "PROSTOR",
    subtitle: "NAŠ DOM",
    poem: "Utočište u srcu Zagreba za autentičnu praksu.",
    y: "-80px",
  }
];

export default function InteractiveGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative z-20 py-32 md:py-48 w-full max-w-[1400px] mx-auto px-4 md:px-8 overflow-hidden">
      <div className="text-center mb-32">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
         >
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 tracking-tight leading-[1.1] drop-shadow-sm">
              Putevi <span className="italic text-brand-600/80 font-light mix-blend-multiply">Prakse</span>
            </h2>
         </motion.div>
      </div>

      <div className="flex flex-col gap-24 md:gap-48 relative">
        {images.map((item, i) => (
          <GalleryCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function GalleryCard({ item, index }: { item: any, index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none -z-10 mix-blend-multiply opacity-5 ${isEven ? 'left-0' : 'right-0'}`}>
         <h3 className="text-[15vw] font-serif text-brand-900/20 whitespace-nowrap hidden md:block">
            {item.title}
         </h3>
      </div>

      <div 
        className="w-full md:w-3/5 aspect-[4/5] object-cover relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(235,180,84,0.12)] group"
        style={{ transform: `translateY(${item.y})` }}
      >
        <motion.div 
          className="w-full h-full relative origin-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover filter sepia-[0.08] transition-all duration-1000 group-hover:sepia-0 group-hover:brightness-105"
            sizes="(max-width: 768px) 100vw, 60vw"
            quality={90}
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-brand-200/10 via-stone-900/5 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none" />
      </div>

      <div className="w-full md:w-2/5 flex flex-col justify-center relative space-y-6 md:space-y-8 z-10 px-4 md:px-0">
         <span className="text-brand-400 font-sans tracking-[0.4em] uppercase text-xs flex items-center gap-4 before:h-[1px] before:w-12 before:bg-brand-300">
           Pogled 0{index + 1}
         </span>
         <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900">
           {item.title}
         </h3>
         <p className="text-stone-500 font-light text-lg md:text-xl leading-relaxed italic">
           &ldquo;{item.poem}&rdquo;
         </p>
      </div>
    </motion.div>
  );
}
