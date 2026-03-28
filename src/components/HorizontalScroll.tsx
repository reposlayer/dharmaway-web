"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ScrollItem {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  slug?: string;
}

const items: ScrollItem[] = [
  {
    src: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/230921-3756-r-2-102-david-and-jelena-by-ellard-vasen-photos-app-c1-2048x1365-jpg_orig.webp",
    title: "DharmaWay",
    subtitle: "Sekvence I—IV",
    description: "Jedinstveni sustav u tradiciji Sri Dharma Mittre koji gradi fizičku snagu, fleksibilnost i duhovni rast kroz progresivne razine.",
    slug: "dharma"
  },
  {
    src: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/395077904-18231176248246331-2536801684369716765-n.jpeg",
    title: "Ashtanga",
    subtitle: "Mysore & Led",
    description: "Disciplina koja transformira. Jutarnji Mysore od 07:00, Primary Led klase i programi za početnike do naprednih.",
    slug: "ashtanga"
  },
  {
    src: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/53800908-2343387525939909-4177148908482330624-n.jpg",
    title: "Meditacija",
    subtitle: "Vipassana · Nidra · Pranayama",
    description: "Tišina uma je vrata prema beskonačnosti. Kultivacija unutarnjeg mira kroz drevne tehnike svjesnog disanja.",
    slug: "meditacija"
  },
  {
    src: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/972c7501-7cf2-40d4-a589-f8254acd9a1f_orig.jpeg",
    title: "Yin Yoga",
    subtitle: "Duboka Regeneracija",
    description: "Tiha, meditativna praksa na dubokim vezivnim tkivima. Predaja koja otvara vrata transformaciji.",
    slug: "yin"
  },
  {
    src: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/57348179-2364475437164451-4390689768996864000-n.jpg",
    title: "Zajednica",
    subtitle: "Više od Studija",
    description: "DharmaWay je zajednica koja njeguje rast, podršku i autentičnost. 30+ satova tjedno, 15+ instruktora.",
    slug: "zajednica"
  },
];

export default function HorizontalScroll() {
  return (
    <section className="relative z-20 py-16 md:py-24">
      {/* Scrollable row — natural horizontal overflow, no scroll hijack */}
      <div className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-6 snap-x snap-mandatory scrollbar-none" style={{ scrollbarWidth: 'none' }}>
        {items.map((item, i) => (
          <Card key={i} item={item} index={i} />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-6 gap-1.5">
        {items.map((_, i) => (
          <div key={i} className="w-8 h-0.5 rounded-full bg-stone-300/50" />
        ))}
      </div>
    </section>
  );
}

function Card({ item, index }: { item: ScrollItem; index: number }) {
  const content = (
    <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.08)] block w-full h-full cursor-pointer">
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 82vw, (max-width: 1200px) 42vw, 32vw"
        quality={90}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
      
      {/* Number */}
      <div className="absolute top-6 right-8 text-white/15 font-serif text-7xl md:text-8xl leading-none select-none pointer-events-none">
        0{index + 1}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9 flex flex-col">
        <span className="text-brand-300 text-[10px] tracking-[0.4em] uppercase font-semibold mb-2">
          {item.subtitle}
        </span>
        <h3 className="text-2xl md:text-4xl font-serif text-white mb-3 tracking-tight group-hover:text-brand-200 transition-colors duration-700">
          {item.title}
        </h3>
        <p className="text-white/50 font-light text-sm leading-relaxed max-w-sm group-hover:text-white/70 transition-colors duration-700">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative w-[82vw] md:w-[42vw] lg:w-[32vw] h-[65vh] md:h-[70vh] flex-shrink-0 snap-center"
    >
      {item.slug === 'zajednica' ? (
        <Link href="/o-nama" className="w-full h-full block">
          {content}
        </Link>
      ) : (
        <Link href={`/programi/${item.slug}`} className="w-full h-full block">
          {content}
        </Link>
      )}
    </motion.div>
  );
}
