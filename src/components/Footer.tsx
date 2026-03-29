import Link from "next/link";
import { MoveRight, ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-stone-900 text-stone-300 border-t border-stone-800 overflow-hidden">


      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Top CTA row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-stone-800">
          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-white tracking-tight leading-tight">
              Spremni za <span className="italic text-brand-400 font-light">prvu praksu?</span>
            </h3>
            <p className="text-stone-500 text-sm font-light mt-2">Pridružite se — bez iskustva, samo otvoreno srce.</p>
          </div>
          <Magnetic>
            <Link href="/kontakt" className="group inline-flex items-center gap-4 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full text-xs tracking-widest uppercase font-semibold hover:bg-white hover:text-stone-900 transition-all duration-500">
              Započnite <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </Magnetic>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm py-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="text-2xl font-serif tracking-[0.15em] uppercase text-stone-50 mb-2 block">
              Dharma<span className="text-brand-400">Way</span>
            </Link>
            <p className="leading-relaxed opacity-60 max-w-xs text-sm font-light">
              Yoga Centar & Yoga Akademija Zagreb. Tradicija Sri Dharma Mittra lineage.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-stone-50 font-sans tracking-widest text-[10px] uppercase mb-6 border-b border-stone-800 pb-2">Otkrijte</h4>
            <ul className="space-y-3">
              {[
                { href: "/programi", label: "Programi & Satovi" },
                { href: "/radionice", label: "Edukacije & Radionice" },
                { href: "/raspored", label: "Tjedni Raspored" },
                { href: "/o-nama", label: "Naša Priča" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand-400 transition-colors group flex items-center gap-2">
                    {item.label}
                    <MoveRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-stone-50 font-sans tracking-widest text-[10px] uppercase mb-6 border-b border-stone-800 pb-2">Kontakt</h4>
            <ul className="space-y-3 font-light">
              <li className="flex gap-2">
                <span className="opacity-40 min-w-14 text-xs">Adresa:</span>
                <a href="https://maps.google.com/?q=Ulica+Grada+Mainza+24+Zagreb" target="_blank" className="hover:text-white transition-colors flex-1 text-sm">
                  Ulica Grada Mainza 24, 10000 Zagreb
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <span className="opacity-40 min-w-14 text-xs">Telefon:</span>
                <a href="tel:+385992188014" className="hover:text-white transition-colors text-sm">099 218 8014</a>
              </li>
              <li className="flex gap-2 items-center">
                <span className="opacity-40 min-w-14 text-xs">Email:</span>
                <a href="mailto:info@dharmawayyoga.com" className="hover:text-white transition-colors break-all text-sm">info@dharmawayyoga.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Action */}
          <div className="bg-stone-800/40 p-6 border border-stone-700/50 rounded-2xl flex flex-col justify-between">
            <div>
              <h4 className="font-serif text-lg text-white mb-1.5">Započnite praksu?</h4>
              <p className="text-xs opacity-60 mb-6 font-light leading-relaxed">Pridružite nam se na uvodnom satu i osjetite DharmaWay iskustvo.</p>
            </div>
            <Link href="/kontakt" className="group flex items-center gap-2 text-brand-400 text-xs tracking-widest uppercase font-semibold hover:text-brand-300 transition-all">
              Započnite <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 text-xs flex flex-col md:flex-row justify-between items-center opacity-40 gap-4">
          <p>&copy; {new Date().getFullYear()} DharmaWay Yoga Centar. Sva prava pridržana.</p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/dharmawayyoga" target="_blank" className="hover:text-white hover:opacity-100 transition-all">Facebook</a>
            <a href="https://www.instagram.com/dharmawayyoga" target="_blank" className="hover:text-white hover:opacity-100 transition-all">Instagram</a>
            <a href="https://www.youtube.com/@dharmawayyoga" target="_blank" className="hover:text-white hover:opacity-100 transition-all">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
