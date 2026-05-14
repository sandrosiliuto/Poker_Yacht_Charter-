import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'fr' | 'it' | 'ru' | 'zh' | 'ja';

interface TranslationStrings {
  nav: {
    home: string;
    yacht: string;
    excursions: string;
    whales: string;
    reviews: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  yacht: {
    title: string;
    specs: string;
    captain: string;
    captainDesc: string;
  };
  excursions: {
    title: string;
    subtitle: string;
    classic: string;
    premium: string;
    elite: string;
    party: string;
    romantic: string;
    teambuilding: string;
  };
  booking: {
    title: string;
    whatsappCta: string;
    demandTitle: string;
    hours: string;
    season: string;
  };
  whales: {
    title: string;
    policy: string;
    responsibility: string;
  };
  contact: {
    title: string;
    address: string;
    schedule: string;
  };
}

const translations: Record<Language, TranslationStrings> = {
  es: {
    nav: { home: 'Inicio', yacht: 'Yate', excursions: 'Excursiones', whales: 'Avistamiento', reviews: 'Reseñas', contact: 'Contacto' },
    hero: { title: 'Vive la experiencia más exclusiva del Atlántico', subtitle: 'Tu yate privado en Tenerife', cta: 'Reserva por WhatsApp' },
    yacht: { title: 'Nuestro Yate - Poker Yacht', specs: 'Azimut 39 • 11.99m • 11 Pasajeros', captain: 'Capitán Felipe', captainDesc: 'Experto conocedor de la costa de Tenerife, nacido en la isla.' },
    excursions: { title: 'Excursiones y Actividades', subtitle: 'Navega hacia lo inolvidable', classic: 'Paseo Privado Clásico', premium: 'Experiencia Premium', elite: 'Aventura Élite', party: 'Fiesta Privada', romantic: 'Cena Romántica', teambuilding: 'Team Building' },
    booking: { title: 'Reserva tu Fecha', whatsappCta: 'Chatear por WhatsApp', demandTitle: 'Disponibilidad y Demanda', hours: 'Horas del día', season: 'Temporada' },
    whales: { title: 'Avistamiento de Cetáceos', policy: 'Política Responsable', responsibility: 'Respetamos el hábitat natural siguiendo el código de conducta de Canarias.' },
    contact: { title: 'Ubicación y Contacto', address: 'Puerto Colón, Pantalán 6, Costa Adeje', schedule: 'Lunes - Domingo, 9:00 - 20:00' }
  },
  en: {
    nav: { home: 'Home', yacht: 'Our Yacht', excursions: 'Excursions', whales: 'Whales', reviews: 'Reviews', contact: 'Contact' },
    hero: { title: 'The Most Exclusive Atlantic Experience', subtitle: 'Your Private Yacht in Tenerife', cta: 'Book via WhatsApp' },
    yacht: { title: 'Our Yacht - Poker Yacht', specs: 'Azimut 39 • 11.99m • 11 Passengers', captain: 'Captain Felipe', captainDesc: 'Expert knower of the Tenerife coast, born on the island.' },
    excursions: { title: 'Excursions & Activities', subtitle: 'Sail towards the unforgettable', classic: 'Classic Private Trip', premium: 'Premium Experience', elite: 'Elite Adventure', party: 'Private Party', romantic: 'Romantic Sunset', teambuilding: 'Team Building' },
    booking: { title: 'Book Your Date', whatsappCta: 'Chat via WhatsApp', demandTitle: 'Availability & Demand', hours: 'Time of day', season: 'Season' },
    whales: { title: 'Whale Watching', policy: 'Responsible Policy', responsibility: 'We respect the natural habitat following the Canary Islands code of conduct.' },
    contact: { title: 'Location & Contact', address: 'Puerto Colon, Gate 6, Costa Adeje', schedule: 'Monday - Sunday, 9:00 - 20:00' }
  },
  fr: {
    nav: { home: 'Accueil', yacht: 'Le Yacht', excursions: 'Excursions', whales: 'Baleines', reviews: 'Avis', contact: 'Contact' },
    hero: { title: 'L\'expérience atlantique la plus exclusive', subtitle: 'Votre yacht privé à Tenerife', cta: 'Réserver par WhatsApp' },
    yacht: { title: 'Notre Yacht - Poker Yacht', specs: 'Azimut 39 • 11.99m • 11 Passagers', captain: 'Capitaine Felipe', captainDesc: 'Expert de la côte de Tenerife, né sur l\'île.' },
    excursions: { title: 'Excursions et Activités', subtitle: 'Naviguez vers l\'inoubliable', classic: 'Balade Privée Classique', premium: 'Expérience Premium', elite: 'Aventure Élite', party: 'Fête Privée', romantic: 'Dîner Romantique', teambuilding: 'Team Building' },
    booking: { title: 'Réservez votre date', whatsappCta: 'Chat WhatsApp', demandTitle: 'Disponibilité et Demande', hours: 'Heures', season: 'Saison' },
    whales: { title: 'Observation des Cétacés', policy: 'Politique Responsable', responsibility: 'Nous respectons l\'habitat naturel en suivant le code de conduite des Canaries.' },
    contact: { title: 'Lieu et Contact', address: 'Puerto Colon, Ponton 6, Costa Adeje', schedule: 'Lundi - Dimanche, 9h00 - 20h00' }
  },
  it: {
    nav: { home: 'Home', yacht: 'Nostro Yacht', excursions: 'Escursioni', whales: 'Balene', reviews: 'Recensioni', contact: 'Contatto' },
    hero: { title: 'L\'esperienza atlantica più esclusiva', subtitle: 'Il tuo yacht privato a Tenerife', cta: 'Prenota via WhatsApp' },
    yacht: { title: 'Nostro Yacht - Poker Yacht', specs: 'Azimut 39 • 11.99m • 11 Passeggeri', captain: 'Capitano Felipe', captainDesc: 'Esperto della costa di Tenerife, nato sull\'isola.' },
    excursions: { title: 'Escursioni e Attività', subtitle: 'Naviga verso l\'indimenticabile', classic: 'Tour Privato Classico', premium: 'Esperienza Premium', elite: 'Avventura Elite', party: 'Festa Privata', romantic: 'Cena Romantica', teambuilding: 'Team Building' },
    booking: { title: 'Prenota la tua data', whatsappCta: 'Chat su WhatsApp', demandTitle: 'Disponibilità e Domanda', hours: 'Orari', season: 'Stagione' },
    whales: { title: 'Avvistamento Balene', policy: 'Politica Responsabile', responsibility: 'Rispettiamo l\'habitat naturale seguendo il codice di condotta delle Canarie.' },
    contact: { title: 'Posizione e Contatto', address: 'Puerto Colon, Pontile 6, Costa Adeje', schedule: 'Lunedì - Domenica, 9:00 - 20:00' }
  },
  ru: {
    nav: { home: 'Главная', yacht: 'Наша яхта', excursions: 'Экскурсии', whales: 'Киты', reviews: 'Отзывы', contact: 'Контакт' },
    hero: { title: 'Самый эксклюзивный отдых на Атлантике', subtitle: 'Ваша частная яхта на Тенерифе', cta: 'Забронировать в WhatsApp' },
    yacht: { title: 'Наша яхта - Poker Yacht', specs: 'Azimut 39 • 11.99м • 11 Пассажиров', captain: 'Капитан Фелипе', captainDesc: 'Эксперт по побережью Тенерифе, родился на острове.' },
    excursions: { title: 'Экскурсии и программы', subtitle: 'Плывите навстречу незабываемому', classic: 'Классическая прогулка', premium: 'Премиум отдых', elite: 'Элитное приключение', party: 'Частная вечеринка', romantic: 'Романтический ужин', teambuilding: 'Тимбилдинг' },
    booking: { title: 'Забронировать дату', whatsappCta: 'Написать в WhatsApp', demandTitle: 'Доступность и спрос', hours: 'Время дня', season: 'Сезон' },
    whales: { title: 'Наблюдение за китами', policy: 'Ответственная политика', responsibility: 'Мы уважаем естественную среду обитания в соответствии с кодексом Канарских островов.' },
    contact: { title: 'Местоположение', address: 'Пуэрто Колон, Порт 6, Коста Адехе', schedule: 'Пн - Вс, 9:00 - 20:00' }
  },
  zh: {
    nav: { home: '首页', yacht: '游艇介绍', excursions: '海上行程', whales: '观鲸之旅', reviews: '客户评价', contact: '联系我们' },
    hero: { title: '大西洋最尊贵的体验', subtitle: '特内里费岛您的专属私人游艇', cta: '通过 WhatsApp 预订' },
    yacht: { title: '我们的游艇 - Poker Yacht', specs: 'Azimut 39 • 11.99米 • 11人容量', captain: '船长费利佩', captainDesc: '特内里费海岸专家，生于斯长于斯。' },
    excursions: { title: '海上行程与活动', subtitle: '驶向难以忘怀的精彩', classic: '经典私人航行', premium: '尊享体验课程', elite: '精英冒险之旅', party: '私人派对定制', romantic: '浪漫日落晚餐', teambuilding: '团队建设活动' },
    booking: { title: '预约日期', whatsappCta: 'WhatsApp 咨询', demandTitle: '预订热度与余位', hours: '时间段', season: '季节' },
    whales: { title: '观赏野生鲸豚', policy: '环保方针', responsibility: '我们遵循加那利群岛行为准则，尊重海洋生物及其自然栖息地。' },
    contact: { title: '地理位置与联系', address: '阿德赫海岸 Puerto Colon, 6号码头', schedule: '周一至周日，9:00 - 20:00' }
  },
  ja: {
    nav: { home: 'ホーム', yacht: 'ヨット紹介', excursions: 'エクスカーション', whales: 'ホエールウォッチ', reviews: 'レビュー', contact: 'お問い合わせ' },
    hero: { title: '大西洋で最も贅沢な体験を', subtitle: 'テネリフェ島のプライベートヨット', cta: 'WhatsAppで予約' },
    yacht: { title: 'Poker Yacht - 自慢のヨット', specs: 'Azimut 39 • 11.99m • 定員11名', captain: 'キャプテン・フェリペ', captainDesc: 'テネリフェ島出身、現地の海を知り尽くしたエキスパート。' },
    excursions: { title: 'アクティビティ一覧', subtitle: '忘れられない航海へ', classic: 'クラシック貸切プラン', premium: 'プレミアム体験', elite: 'エリートアドベンチャー', party: 'プライベートパーティー', romantic: 'ロマンチックディナー', teambuilding: 'チームビルディング' },
    booking: { title: '予約・空き状況', whatsappCta: 'WhatsAppでチャット', demandTitle: '混雑状況とおすすめ', hours: '時間帯', season: 'シーズン' },
    whales: { title: 'ホエールウォッチング', policy: '責任ある観光', responsibility: 'カナリア諸島の行動規範に従い、自然環境を尊重しています。' },
    contact: { title: 'アクセス・連絡先', address: 'プエルト・コロン 6番ゲート、コスタ・アデヘ', schedule: '月曜日〜日曜日、9:00 - 20:00' }
  }
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStrings;
} | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
