import Link from 'next/link';
import { ArrowLeft, Clock, Info, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Magnetic from '@/components/Magnetic';

// Simulacija podataka (kasnije spojivo na CMS)
const programData: Record<string, any> = {
  "dharma-1": {
    title: "DharmaWay Yoga I",
    subtitle: "Temeljna praksa za sve",
    level: "Početnici",
    duration: "75 min",
    image: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/230921-3756-r-2-102-david-and-jelena-by-ellard-vasen-photos-app-c1-2048x1365-jpg_orig.webp",
    description: "Dharma I je prvi korak u autentičnu DharmaWay tradiciju. Ovaj sat je idealan za totalne početnike, ali i naprednije koji žele proći asane temeljito i smireno. Uključuje osnovne Surya Namaskar varijacije, pripremu za inverzije i temeljne vježbe disanja.",
    benefits: [
      "Povećanje fleksibilnosti i ravnoteže",
      "Smanjenje stresa i tjeskobe",
      "Upoznavanje s osnovnim sekvencama",
      "Duboka vođena relaksacija na kraju sata"
    ]
  },
  "dharma-2": {
    title: "DharmaWay Yoga II",
    subtitle: "Korak dalje",
    level: "Srednja",
    duration: "75 min",
    image: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/57348179-2364475437164451-4390689768996864000-n.jpg",
    description: "Za one koji već poznaju osnove. Uključuje Shiva Namaskar sekvence, duža zadržavanja u asanama, i naprednije tehnike balansiranja. Povezujemo dah s pokretom (vinyasa style) uz tradicionalne Hatha elemente.",
    benefits: [
      "Izgradnja snage cijelog tijela",
      "Razvoj koncentracije (Dharana)",
      "Pripreme za zahtjevnije asane",
      "Dinamičnija praksa"
    ]
  },
  "dharma-3-4": {
    title: "DharmaWay Yoga III-IV",
    subtitle: "Napredna Praksa",
    level: "Napredna",
    duration: "90 min",
    image: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/230921-3756-r-2-102-david-and-jelena-by-ellard-vasen-photos-app-c1-2048x1365-jpg_orig.webp",
    description: "Za iskusne praktičare. Kompleksne serije, duboka otvaranja kukova i ramena, inverzije, i suptilne tehnike pranayame. Praksa koja pomiče granice ega i tijela.",
    benefits: [
      "Majstorstvo nad tjelesnom formom",
      "Dubok rad s energijom (Prana)",
      "Spiritualno usmjeravanje",
      "Psihofizička otpornost"
    ]
  },
  "ashtanga": {
    title: "Ashtanga Yoga",
    subtitle: "Tradicija Mysorea",
    level: "Sve razine",
    duration: "75-90 min",
    image: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/395077904-18231176248246331-2536801684369716765-n.jpeg",
    description: "Snažna praksa temeljena na sinkronizaciji daha i pokreta kroz točno određeni slijed poza (Primary Series). Nudimo Ashtanga Mysore (gdje svaki prakticira svojim tempom) i Led klase (vođeni sat).",
    benefits: [
      "Intenzivna detoksikacija tijela",
      "Izgradnja vatre (Agni) i snage",
      "Meditacija u pokretu",
      "Snažna kardiovaskularna aktivnost"
    ]
  },
  "hatha": {
    title: "Hatha Yoga",
    subtitle: "Klasični pristup",
    level: "Sve razine",
    duration: "75 min",
    image: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/972c7501-7cf2-40d4-a589-f8254acd9a1f_orig.jpeg",
    description: "Pure Hatha praksa – fokusira se na statične asane uz dulja zadržavanja i smireno disanje (Pranayama). Tradicionalni pristup po učenjima Swami Sivanande i klasičnih yoga tekstova.",
    benefits: [
      "Aktivacija parasimpatičkog sustava",
      "Smanjenje napetosti u zglobovima",
      "Dubinska povezanost daha i tijela",
      "Idealan temelj za svaku yogu"
    ]
  },
  "yin": {
    title: "Yin Yoga",
    subtitle: "Umjetnost popuštanja",
    level: "Sve razine",
    duration: "60-75 min",
    image: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/972c7501-7cf2-40d4-a589-f8254acd9a1f_orig.jpeg",
    description: "U potpunoj suprotnosti od dinamičnih stilova, Yin Yoga se izvodi na podu s pozicijama koje se drže od 3 do 5 minuta. Radimo na vezivnim tkivima, ligamentima i meridijanima po kineskoj medicini.",
    benefits: [
      "Povećanje opsega pokreta",
      "Otpuštanje duboko ukorenjenih trauma",
      "Hlađenje tijela i živčanog sustava",
      "Razvoj strpljenja"
    ]
  },
  "meditacija": {
    title: "Meditacija & Pranayama",
    subtitle: "Put prema unutra",
    level: "Sve razine",
    duration: "60 min",
    image: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/53800908-2343387525939909-4177148908482330624-n.jpg",
    description: "Sat posvećen tehnikama koje smiruju 'vritti' (fluktuacije) uma. Kroz tehnike Pranayama čistimo energetske kanale (Nadi Shodhana, Kapalabhati), a zatim primjenjujemo metode poput Vipassane i Yoga Nidre.",
    benefits: [
      "Kristalna bistrina uma",
      "Oslobađanje od nesanice",
      "Aktivacija pinealne žlijezde",
      "Spiritualno buđenje"
    ]
  },
  "default": {
    title: "Yoga Program",
    subtitle: "DharmaWay Praxis",
    level: "Sve razine",
    duration: "60 min",
    image: "https://www.dharmawayyoga.com/uploads/1/2/4/2/124267651/editor/61453493-10216036135951232-1584069434383794176-o.jpg",
    description: "Autentičan program našeg centra usmjeren na holistički razvoj. Sve naše klase osmišljene su kako bi podržale osobni rast, tjelesnu vitalnost i duhovni mir.",
    benefits: [
      "Holistički pristup zdravlju",
      "Profesionalno vodstvo",
      "Povezanost sa zajednicom",
      "Transformacija uma i tijela"
    ]
  }
};

export default function ProgramDetail({ params }: { params: { slug: string } }) {
  const data = programData[params.slug] || programData["default"];

  return (
    <main className="min-h-screen bg-transparent pt-32 pb-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <Link href="/programi" className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-600 transition-colors text-sm font-medium mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Natrag na Programe
        </Link>

        {/* Hero image for program */}
        <div className="w-full h-[40vh] md:h-[50vh] rounded-[2rem] overflow-hidden relative shadow-2xl mb-12">
          <Image src={data.image} alt={data.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 flex gap-3">
             <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs tracking-widest uppercase font-medium border border-white/30 truncate flex items-center gap-1.5">
               <Info size={12} /> {data.level}
             </span>
             <span className="px-3 py-1 bg-brand-500/80 backdrop-blur-md rounded-full text-white text-xs tracking-widest uppercase font-medium border border-brand-400/50 truncate flex items-center gap-1.5">
               <Clock size={12} /> {data.duration}
             </span>
          </div>
        </div>

        {/* Content */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand-300" />
            <span className="text-brand-500 text-[10px] tracking-[0.4em] uppercase font-semibold">{data.subtitle}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 tracking-tight leading-tight mb-8">
            {data.title}
          </h1>
          <p className="text-lg text-stone-600 font-light leading-relaxed mb-12 w-full md:w-5/6">
            {data.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl p-8">
               <h3 className="text-xl font-serif text-stone-900 mb-6">Što ćete ostvariti?</h3>
               <ul className="space-y-4">
                 {data.benefits.map((benefit: string, idx: number) => (
                   <li key={idx} className="flex items-start gap-3">
                     <CheckCircle2 size={18} className="text-brand-500 flex-shrink-0 mt-0.5" />
                     <span className="text-stone-600 font-light text-sm leading-relaxed">{benefit}</span>
                   </li>
                 ))}
               </ul>
             </div>
             
             <div className="bg-stone-900 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center">
               <h3 className="text-2xl font-serif mb-4">Pridružite se</h3>
               <p className="text-stone-400 font-light text-sm mb-8">Pogledajte raspored i pronađite savršen termin za vašu praksu.</p>
               <Magnetic>
                 <Link href="/raspored" className="inline-block bg-white text-stone-900 px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase hover:text-brand-700 hover:shadow-lg transition-all duration-300">
                   Vidi Raspored
                 </Link>
               </Magnetic>
             </div>
          </div>
        </div>

      </div>
    </main>
  );
}
