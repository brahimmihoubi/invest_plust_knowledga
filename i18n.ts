import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About us',
        members: 'Members',
        experts: 'Experts',
        projects: 'Investments Projects',
        method: 'Work method',
        investisor: 'Investisor',
        partners: 'Partners',
        achievements: 'Achievements',
        join: 'Join us'
      },
      hero: {
        title: 'The Next Generation of',
        highlight: 'Business Intelligence',
        subtitle: 'InvestPlus combines advanced analytics with the power of Gemini to transform your raw data into actionable growth strategies.',
        join: 'Join the Waitlist',
        admin: 'Admin View'
      },
      footer: {
        privacy: 'Privacy',
        terms: 'Terms',
        status: 'Status',
        rights: '© 2024 InvestPlus Inc. All rights reserved.'
      },
      about: {
        title: 'About us',
        content: 'Content for About us section will be provided by user.'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        about: 'À propos',
        members: 'Membres',
        experts: 'Experts',
        projects: 'Projets d\'investissement',
        method: 'Méthode de travail',
        investisor: 'Investisseur',
        partners: 'Partenaires',
        achievements: 'Réalisations',
        join: 'Rejoignez-nous'
      },
      hero: {
        title: 'La Prochaine Génération de',
        highlight: 'Business Intelligence',
        subtitle: 'InvestPlus combine des analyses avancées avec la puissance de Gemini pour transformer vos données brutes en stratégies de croissance concrètes.',
        join: 'Rejoindre la liste d\'attente',
        admin: 'Vue Admin'
      },
      footer: {
        privacy: 'Confidentialité',
        terms: 'Conditions',
        status: 'Statut',
        rights: '© 2024 InvestPlus Inc. Tous droits réservés.'
      },
      about: {
        title: 'À propos de nous',
        content: 'Le contenu de la section À propos sera fourni par l\'utilisateur.'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        about: 'من نحن',
        members: 'الأعضاء',
        experts: 'الخبراء',
        projects: 'مشاريع الاستثمار',
        method: 'طريقة العمل',
        investisor: 'المستثمر',
        partners: 'الشركاء',
        achievements: 'الإنجازات',
        join: 'انضم إلينا'
      },
      hero: {
        title: 'الجيل القادم من',
        highlight: 'ذكاء الأعمال',
        subtitle: 'تجمع InvestPlus بين التحليلات المتقدمة وقوة Gemini لتحويل بياناتك الخام إلى استراتيجيات نمو قابلة للتطوير.',
        join: 'انضم إلى قائمة الانتظار',
        admin: 'عرض المسؤول'
      },
      footer: {
        privacy: 'الخصوصية',
        terms: 'الشروط',
        status: 'الحالة',
        rights: '© 2024 InvestPlus Inc. جميع الحقوق محفوظة.'
      },
      about: {
        title: 'من نحن',
        content: 'سيتم توفير محتوى قسم "من نحن" من قبل المستخدم.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

// Handle RTL
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;
