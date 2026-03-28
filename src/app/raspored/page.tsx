"use client";

import { motion } from "framer-motion";
import { Clock, CalendarRange, ChevronRight } from "lucide-react";
import { useState } from "react";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";

const scheduleData = [
  {
    day: "Ponedjeljak",
    shortDay: "Pon",
    classes: [
      { time: "07:00 - 08:15", name: "Ashtanga Mysore", instructor: "Oliva", type: "Ashtanga", level: "Sve razine" },
      { time: "09:30 - 10:45", name: "DharmaWay Yoga I", instructor: "Dea", type: "DharmaWay", level: "Početnici" },
      { time: "17:00 - 18:15", name: "Hatha Yoga", instructor: "Danijela (Damayanti)", type: "Hatha", level: "Sve razine" },
      { time: "18:30 - 19:45", name: "DharmaWay Yoga II", instructor: "Oliva", type: "DharmaWay", level: "Napredni poč." },
      { time: "20:00 - 21:00", name: "Yin Yoga", instructor: "Tanja", type: "Yin", level: "Sve razine" },
    ]
  },
  {
    day: "Utorak",
    shortDay: "Uto",
    classes: [
      { time: "07:00 - 08:15", name: "Ashtanga Primary Led", instructor: "Mislav", type: "Ashtanga", level: "Srednja" },
      { time: "09:30 - 10:45", name: "DharmaWay Yoga I", instructor: "Sundarananda", type: "DharmaWay", level: "Početnici" },
      { time: "17:00 - 18:15", name: "Aerial Yoga", instructor: "Kala Das", type: "Aerial", level: "Sve razine" },
      { time: "18:30 - 19:45", name: "DharmaWay Yoga III-IV", instructor: "Oliva", type: "DharmaWay", level: "Napredni" },
      { time: "20:00 - 21:00", name: "Meditacija & Pranayama", instructor: "Iva", type: "Meditacija", level: "Sve razine" },
    ]
  },
  {
    day: "Srijeda",
    shortDay: "Sri",
    classes: [
      { time: "07:00 - 08:15", name: "Ashtanga Mysore", instructor: "Oliva", type: "Ashtanga", level: "Sve razine" },
      { time: "09:30 - 10:45", name: "Hatha Yoga", instructor: "Dragica", type: "Hatha", level: "Sve razine" },
      { time: "17:00 - 18:15", name: "DharmaWay Yoga II", instructor: "Andrija", type: "DharmaWay", level: "Napredni poč." },
      { time: "18:30 - 19:45", name: "Yoga Wheel", instructor: "Bojan", type: "Wheel", level: "Sve razine" },
      { time: "20:00 - 21:00", name: "Yoga Nidra", instructor: "Doris", type: "Meditacija", level: "Sve razine" },
    ]
  },
  {
    day: "Četvrtak",
    shortDay: "Čet",
    classes: [
      { time: "07:00 - 08:15", name: "Ashtanga Primary Led", instructor: "Mislav", type: "Ashtanga", level: "Srednja" },
      { time: "09:30 - 10:45", name: "DharmaWay Yoga I", instructor: "Igor", type: "DharmaWay", level: "Početnici" },
      { time: "17:00 - 18:15", name: "Yin Yoga", instructor: "Rea", type: "Yin", level: "Sve razine" },
      { time: "18:30 - 19:45", name: "DharmaWay Yoga III-IV", instructor: "Oliva", type: "DharmaWay", level: "Napredni" },
      { time: "20:00 - 21:00", name: "Vipassana Meditacija", instructor: "Mija", type: "Meditacija", level: "Sve razine" },
    ]
  },
  {
    day: "Petak",
    shortDay: "Pet",
    classes: [
      { time: "07:00 - 08:15", name: "Ashtanga Mysore", instructor: "Oliva", type: "Ashtanga", level: "Sve razine" },
      { time: "09:30 - 10:45", name: "Hatha Yoga", instructor: "Dora", type: "Hatha", level: "Sve razine" },
      { time: "17:00 - 18:15", name: "DharmaWay Yoga II", instructor: "Jasna", type: "DharmaWay", level: "Napredni poč." },
      { time: "18:30 - 20:00", name: "DharmaWay Yoga III-IV", instructor: "Oliva", type: "DharmaWay", level: "Napredni" },
    ]
  },
  {
    day: "Subota",
    shortDay: "Sub",
    classes: [
      { time: "09:00 - 10:30", name: "Ashtanga Primary Led", instructor: "Mislav", type: "Ashtanga", level: "Srednja" },
      { time: "11:00 - 12:15", name: "DharmaWay Yoga II", instructor: "Oliva", type: "DharmaWay", level: "Napredni poč." },
    ]
  },
  {
    day: "Nedjelja",
    shortDay: "Ned",
    classes: [
      { time: "10:00 - 11:30", name: "DharmaWay Yoga (Online Zoom)", instructor: "Oliva", type: "Online", level: "Sve razine" },
    ]
  }
];

const typeColors: Record<string, string> = {
  "DharmaWay": "bg-brand-500 text-white",
  "Ashtanga": "bg-accent-500 text-white",
  "Hatha": "bg-stone-600 text-white",
  "Yin": "bg-brand-400 text-white",
  "Meditacija": "bg-stone-500 text-white",
  "Aerial": "bg-accent-400 text-white",
  "Wheel": "bg-brand-300 text-brand-900",
  "Online": "bg-brand-700 text-white",
};

const typeDots: Record<string, string> = {
  "DharmaWay": "bg-brand-500",
  "Ashtanga": "bg-accent-500",
  "Hatha": "bg-stone-600",
  "Yin": "bg-brand-400",
  "Meditacija": "bg-stone-400",
  "Aerial": "bg-accent-400",
  "Wheel": "bg-brand-300",
  "Online": "bg-brand-700",
};

export default function RasporedPage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <main className="min-h-screen bg-transparent pt-28 pb-24 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-200/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-stone-400/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-brand-300" />
            <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">30+ Satova Tjedno</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 tracking-tight leading-[0.9]">
            Tjedni <span className="italic font-light text-brand-600">Raspored</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl font-light leading-relaxed">
            Od jutarnjih Mysore satova u 07:00 do večernjih meditacija u 21:00 — pronađite savršen termin za svoju praksu. 
          </p>
          <p className="text-sm text-stone-400 mt-3 font-light">
            Online: Nedjelja Dharma klasa preko Zoom-a (Meeting ID: 611 997 2066) + YouTube snimke
          </p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none"
        >
          {scheduleData.map((dayData, idx) => (
            <button
              key={dayData.day}
              onClick={() => setActiveDay(idx)}
              className={`px-5 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-400 whitespace-nowrap flex-shrink-0
                ${activeDay === idx 
                  ? 'bg-stone-900 text-white shadow-lg shadow-stone-900/20' 
                  : 'bg-white/60 text-stone-500 hover:bg-white hover:text-stone-900 border border-stone-200/50'
                }
              `}
            >
              <span className="hidden md:inline">{dayData.day}</span>
              <span className="md:hidden">{dayData.shortDay}</span>
              <span className={`ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-[9px] ${activeDay === idx ? 'bg-white/20' : 'bg-stone-100'}`}>
                {dayData.classes.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Schedule List */}
        <motion.div 
          key={activeDay}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-3"
        >
          {scheduleData[activeDay].classes.map((cls, classIdx) => (
            <motion.div 
              key={classIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: classIdx * 0.06 }}
              className="group bg-white/70 backdrop-blur-xl border border-stone-100 p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 overflow-hidden relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: `var(--tw-${typeDots[cls.type]})`}}>
              </div>
              <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${typeDots[cls.type]} rounded-full`} />
              
              <div className="flex items-center gap-5 md:w-[180px] flex-shrink-0 pl-3">
                <div className="flex items-center justify-center p-2.5 bg-brand-50 border border-brand-100 text-brand-600 rounded-xl">
                  <Clock size={18} className="group-hover:rotate-12 transition-transform" />
                </div>
                <div className="text-stone-900 font-medium tracking-wide text-sm">
                  {cls.time}
                </div>
              </div>
              
              <div className="flex-1 pl-3 md:pl-0">
                <h3 className="text-lg font-serif text-stone-800 group-hover:text-brand-700 transition-colors">{cls.name}</h3>
                <p className="text-sm font-light text-stone-400 mt-0.5">{cls.instructor}</p>
              </div>
              
              <div className="flex items-center gap-2 pl-3 md:pl-0 flex-shrink-0">
                <span className={`px-3 py-1 text-[10px] font-semibold uppercase tracking-widest rounded-full ${typeColors[cls.type] || "bg-stone-50 text-stone-500"}`}>
                  {cls.type}
                </span>
                <span className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-stone-500 bg-stone-50 border border-stone-200 rounded-full hidden sm:inline-block">
                  {cls.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-6 bg-white/50 backdrop-blur border border-white/60 rounded-2xl"
        >
          <h3 className="text-sm font-semibold tracking-widest uppercase text-stone-400 mb-4">Legenda</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${typeDots[type]}`} />
                <span className="text-xs text-stone-600">{type}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <Magnetic>
            <Link href="/kontakt" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-brand-600 hover:shadow-lg transition-all duration-500">
              Rezerviraj Termin <ChevronRight size={14} />
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </main>
  );
}
