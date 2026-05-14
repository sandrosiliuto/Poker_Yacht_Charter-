import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Anchor, MapPin, Phone, MessageCircle, Info, Star, Clock, Users, ExternalLink, Globe } from 'lucide-react';
import { useLanguage, Language } from './LanguageContext';
import { EXCURSIONS, REVIEWS } from './constants';

const WHATSAPP_LINK = "https://wa.me/34689097829?text=Hola,%20quisiera%20pedir%20informaci%C3%B3n%20para%20reservar%20el%20Poker%20Yacht...";

// --- Components ---

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; flag: string }[] = [
    { code: 'es', flag: '🇪🇸' },
    { code: 'en', flag: '🇬🇧' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
    { code: 'ru', flag: '🇷🇺' },
    { code: 'zh', flag: '🇨🇳' },
    { code: 'ja', flag: '🇯🇵' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Anchor className="text-amber-400 size-8" />
          <span className="text-white font-bold text-xl tracking-tighter">POKER YACHT</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {Object.entries(t.nav).map(([key, value]) => (
            <a key={key} href={`#${key}`} className="text-slate-200 hover:text-amber-400 transition-colors font-medium text-sm lg:text-base">
              {value}
            </a>
          ))}
          <div className="flex items-center gap-2 border-l border-slate-700 pl-4 ml-4">
             {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`text-xl opacity-60 hover:opacity-100 transition-opacity ${language === l.code ? 'opacity-100 scale-125' : ''}`}
                  title={l.code.toUpperCase()}
                >
                  {l.flag}
                </button>
             ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
           <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-800 text-white p-4"
          >
            <div className="flex flex-col gap-4">
              {Object.entries(t.nav).map(([key, value]) => (
                <a key={key} href={`#${key}`} onClick={() => setIsOpen(false)} className="text-lg border-b border-slate-700 pb-2">
                  {value}
                </a>
              ))}
              <div className="grid grid-cols-4 gap-2 pt-2">
                {languages.map((l) => (
                  <button key={l.code} onClick={() => { setLanguage(l.code); setIsOpen(false); }} className="p-2 bg-slate-700 rounded text-center">
                    {l.flag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with an overlay instead of full video for better initial load */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=2670"
          alt="Luxury Yacht Sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-200 mb-10 font-light"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-green-500/20"
          >
            <MessageCircle className="size-6" />
            {t.hero.cta}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

const YachtSection = () => {
  const { t } = useLanguage();
  return (
    <section id="yacht" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">{t.yacht.title}</h2>
            <p className="text-xl text-amber-600 font-medium">{t.yacht.specs}</p>
            <div className="grid grid-cols-2 gap-4 text-slate-600">
               <div className="flex items-center gap-2">
                  <Info className="text-slate-400 size-5" />
                  <span>Design Italiano</span>
               </div>
               <div className="flex items-center gap-2">
                  <Users className="text-slate-400 size-5" />
                  <span>11 Guests Max</span>
               </div>
               <div className="flex items-center gap-2">
                  <Clock className="text-slate-400 size-5" />
                  <span>Flybridge + Solarium</span>
               </div>
               <div className="flex items-center gap-2">
                  <Anchor className="text-slate-400 size-5" />
                  <span>11,99m Length</span>
               </div>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl flex gap-4 items-center">
               <div className="size-16 rounded-full bg-slate-200 overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1544161515-4af6b1d8d16e?auto=format&fit=crop&q=80&w=200" alt="Captain Felipe" className="w-full h-full object-cover" />
               </div>
               <div>
                  <h4 className="font-bold text-lg text-slate-900">{t.yacht.captain}</h4>
                  <p className="text-slate-600 text-sm">{t.yacht.captainDesc}</p>
               </div>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
               <img
                src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=2072"
                alt="Azimut 39 Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-400 p-8 rounded-2xl shadow-xl hidden md:block">
              <span className="text-4xl font-bold text-slate-900">LUXO</span>
              <p className="font-medium text-slate-800">Italian Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Excursions = () => {
  const { t, language } = useLanguage();
  return (
    <section id="excursions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.excursions.title}</h2>
          <p className="text-slate-600 text-lg">{t.excursions.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {EXCURSIONS.map((ex) => (
             <div key={ex.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400&sig=${ex.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={ex.title[language as keyof typeof ex.title] || ex.title['es']}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-900">
                    {ex.duration}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{ex.title[language as keyof typeof ex.title] || ex.title['es']}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {ex.desc[language === 'es' ? 'es' : 'en']}
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-50">
                    <span className="text-slate-400 text-sm">A partir de</span>
                    <span className="text-3xl font-bold text-amber-600">{ex.price}</span>
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    className="w-full mt-6 flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Reserva <ExternalLink className="size-4" />
                  </a>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Whales = () => {
    const { t } = useLanguage();
    return (
      <section id="whales" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 C 20 20 80 80 100 50 V 100 H 0 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516629910306-03f75359a7f3?auto=format&fit=crop&q=80&w=1000"
                alt="Whales in Tenerife"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t.whales.title}</h2>
              <div className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                <h4 className="text-amber-400 font-bold text-xl mb-4">{t.whales.policy}</h4>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {t.whales.responsibility}
                </p>
                <div className="mt-8 flex gap-8">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-white block">99%</span>
                    <span className="text-slate-400 text-sm">Avistamientos</span>
                  </div>
                  <div className="text-center border-l border-white/10 pl-8">
                    <span className="text-4xl font-bold text-white block">+20</span>
                    <span className="text-slate-400 text-sm">Especies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

const DemandHeatmap = () => {
  const { t } = useLanguage();
  const times = ['9:00', '12:00', '15:00', '18:00'];
  const levels = [
    { color: 'bg-green-500', label: 'Medium-High availability' },
    { color: 'bg-orange-500', label: 'High demand' },
    { color: 'bg-red-500', label: 'Very high demand' }
  ];

  return (
    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Clock className="text-amber-500" /> {t.booking.demandTitle}
      </h3>
      <div className="grid grid-cols-4 gap-2 mb-8">
        {['Morning', 'Noon', 'Afternoon', 'Sunset'].map((label, idx) => (
          <div key={label} className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-slate-400">{times[idx]}</span>
            <div className={`h-12 rounded-lg ${idx === 1 || idx === 3 ? 'bg-red-500' : idx === 2 ? 'bg-orange-500' : 'bg-green-500'} transition-opacity hover:opacity-80 cursor-help`} />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {levels.map((l) => (
          <div key={l.label} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <div className={`size-3 rounded-full ${l.color}`} />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const Booking = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">{t.booking.title}</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="size-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.nav.contact}</h4>
                  <p className="text-slate-600">{t.contact.address}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="size-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.contact.schedule}</h4>
                  <p className="text-slate-600">Daily service all year round</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="size-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp / Direct</h4>
                  <p className="text-slate-600">+34 689 09 78 29</p>
                </div>
              </div>
            </div>
            <div className="mt-12 h-64 bg-slate-100 rounded-3xl overflow-hidden grayscale contrast-125 border border-slate-200">
               {/* Embed Map Mockup - actual maps skill could be used for real implementation if user needs it later */}
               <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
                alt="Map Placeholder"
                className="w-full h-full object-cover opacity-50"
               />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <MapPin className="text-amber-500 size-12" strokeWidth={3} />
               </div>
            </div>
          </div>
          <div className="space-y-8">
            <DemandHeatmap />
            <div className="bg-slate-900 p-10 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">Reserva Inmediata</h3>
              <p className="text-slate-400 mb-8">Escribe a Felipe por WhatsApp para confirmar disponibilidad en tiempo real.</p>
              <a
                href={WHATSAPP_LINK}
                className="block w-full text-center py-5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="size-8" />
                {t.booking.whatsappCta}
              </a>
              <p className="text-center text-xs text-slate-500 mt-4">Respuesta media: &lt; 5 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
    const { t } = useLanguage();
    return (
      <section id="reviews" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.nav.reviews}</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-amber-400 text-amber-400 size-6" />)}
            </div>
            <p className="text-slate-600 mt-2">Sólo experiencias de 5 estrellas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="fill-amber-400 text-amber-400 size-4" />)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">
                    {review.name[0]}
                  </div>
                  <span className="font-bold text-slate-900">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

const Footer = () => {
    return (
      <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 space-y-4">
               <div className="flex items-center gap-2">
                <Anchor className="text-amber-400 size-6" />
                <span className="text-white font-bold text-xl tracking-tighter">POKER YACHT</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Luxury yacht charters based in Puerto Colón. Sustainable whale watching and private events in the heart of Tenerife South.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Sitemap</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#excursions" className="hover:text-amber-400 transition-colors">Excursions</a></li>
                <li><a href="#whales" className="hover:text-amber-400 transition-colors">Whale Watching</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="size-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-all"><Globe /></a>
                <a href={WHATSAPP_LINK} className="size-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-green-500 transition-all"><MessageCircle /></a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Poker Yacht Charter Tenerife. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center"
    >
      <MessageCircle className="size-8" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">Online</span>
    </motion.a>
  );
};

export default function AppContent() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <YachtSection />
        <Excursions />
        <Whales />
        <Reviews />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
