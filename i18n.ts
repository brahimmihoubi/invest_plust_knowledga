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
        join: 'Join us',
        announcements: 'Latest Announcements'
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
      },
      members: {
        title: 'Members',
        content: 'Content for Members section will be provided by user.'
      },
      experts: {
        title: 'Experts',
        content: 'Content for Experts section will be provided by user.'
      },
      projects: {
        title: 'Investments Projects',
        content: 'Content for Investments Projects section will be provided by user.'
      },
      method: {
        title: 'Work method',
        content: 'Content for Work method section will be provided by user.'
      },
      investisor: {
        title: 'Investisor',
        content: 'Content for Investisor section will be provided by user.'
      },
      partners: {
        title: 'Partners',
        content: 'Content for Partners section will be provided by user.'
      },
      achievements: {
        title: 'Achievements',
        content: 'Content for Achievements section will be provided by user.'
      },
      news: {
        announcement_1: {
          title: 'New Investment Project Launched',
          content: 'We are excited to announce our newest solar energy initiative in North Africa. Join the preliminary review now.'
        },
        announcement_2: {
          title: 'Strategic Partnership with Gemini',
          content: 'InvestPlus has officially integrated Gemini 1.5 Pro for even deeper data analysis and real-time insights.'
        },
        announcement_3: {
          title: 'Upcoming Expert Webinar',
          content: 'Don\'t miss our live session on Market Trends 2026. Register through the admin portal.'
        }
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
        join: 'Rejoignez-nous',
        announcements: 'Dernières Annonces'
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
      },
      about: {
        title: 'À propos de nous',
        content: 'Le contenu de la section À propos sera fourni par l\'utilisateur.'
      },
      members: {
        title: 'Membres',
        content: 'Le contenu de la section Membres sera fourni par l\'utilisateur.'
      },
      experts: {
        title: 'Experts',
        content: 'Le contenu de la section Experts sera fourni par l\'utilisateur.'
      },
      projects: {
        title: 'Projets d\'investissement',
        content: 'Le contenu de la section Projets sera fourni par l\'utilisateur.'
      },
      method: {
        title: 'Méthode de travail',
        content: 'Le contenu de la section Méthode sera fourni par l\'utilisateur.'
      },
      investisor: {
        title: 'Investisseur',
        content: 'Le contenu de la section Investisseur sera fourni par l\'utilisateur.'
      },
      partners: {
        title: 'Partenaires',
        content: 'Le contenu de la section Partenaires sera fourni par l\'utilisateur.'
      },
      achievements: {
        title: 'Réalisations',
        content: 'Le contenu de la section Réalisations sera fourni par l\'utilisateur.'
      },
      news: {
        announcement_1: {
          title: 'Nouveau projet d\'investissement lancé',
          content: 'Nous sommes ravis d\'annoncer notre nouvelle initiative d\'énergie solaire en Afrique du Nord. Rejoignez l\'examen préliminaire maintenant.'
        },
        announcement_2: {
          title: 'Partenariat stratégique avec Gemini',
          content: 'InvestPlus a officiellement intégré Gemini 1.5 Pro pour une analyse de données encore plus approfondie.'
        },
        announcement_3: {
          title: 'Webinaire d\'experts à venir',
          content: 'Ne manquez pas notre session en direct sur les tendances du marché 2026. Inscrivez-vous via le portail admin.'
        }
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
        join: 'انضم إلينا',
        announcements: 'آخر الإعلانات'
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
      },
      members: {
        title: 'الأعضاء',
        content: 'سيتم توفير محتوى قسم الأعضاء من قبل المستخدم.'
      },
      experts: {
        title: 'الخبراء',
        content: 'سيتم توفير محتوى قسم الخبراء من قبل المستخدم.'
      },
      projects: {
        title: 'مشاريع الاستثمار',
        content: 'سيتم توفير محتوى قسم مشاريع الاستثمار من قبل المستخدم.'
      },
      method: {
        title: 'طريقة العمل',
        content: 'سيتم توفير محتوى قسم طريقة العمل من قبل المستخدم.'
      },
      investisor: {
        title: 'المستثمر',
        content: 'سيتم توفير محتوى قسم المستثمر من قبل المستخدم.'
      },
      partners: {
        title: 'الشركاء',
        content: 'سيتم توفير محتوى قسم الشركاء من قبل المستخدم.'
      },
      achievements: {
        title: 'الإنجازات',
        content: 'سيتم توفير محتوى قسم الإنجازات من قبل المستخدم.'
      },
      news: {
        announcement_1: {
          title: 'إطلاق مشروع استثماري جديد',
          content: 'يسعدنا الإعلان عن أحدث مبادرتنا للطاقة الشمسية في شمال أفريقيا. انضم إلى المراجعة الأولية الآن.'
        },
        announcement_2: {
          title: 'شراكة استراتيجية مع Gemini',
          content: 'دمجت InvestPlus رسميًا Gemini 1.5 Pro لتحليل أعمق للبيانات ورؤى فورية.'
        },
        announcement_3: {
          title: 'ندوة خبراء قادمة',
          content: 'لا تفوت جلستنا المباشرة حول اتجاهات السوق 2026. سجل عبر بوابة المسؤول.'
        }
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
