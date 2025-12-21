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
        more_about: 'Know more about our company',
        join_now: 'Join us'
      },
      footer: {
        privacy: 'Privacy',
        terms: 'Terms',
        status: 'Status',
        rights: '© 2024 InvestPlus Inc. All rights reserved.'
      },
      about: {
        title: 'About us',
        content: 'InvestPlus is a leading platform in investment and business intelligence, combining deep expertise with cutting-edge technology to help our partners achieve sustainable growth.'
      },
      members: {
        title: 'Members',
        content: 'Our team consists of elite talents committed to excellence and innovation in everything we provide.'
      },
      experts: {
        title: 'Experts',
        content: 'We take pride in a wide network of international consultants and experts who provide precise strategic insights.'
      },
      projects: {
        title: 'Investment Projects',
        content: 'We offer revolutionary opportunities in sustainable energy, technology, and real estate, carefully selected to ensure the best returns.'
      },
      method: {
        title: 'Work Method',
        content: 'We adopt a scientific methodology that starts with precise data analysis and ends with the implementation of integrated growth strategies.'
      },
      investisor: {
        title: 'Investor',
        content: 'We provide investors with the tools and data necessary to make informed decisions that enhance their investment portfolios.'
      },
      partners: {
        title: 'Partners',
        content: 'We believe in the power of strategic partnerships to build a prosperous and inclusive economic future.'
      },
      achievements: {
        title: 'Achievements',
        content: 'A proven track record of success in managing major portfolios and launching large-scale projects across continents.'
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
      },
      register: {
        page_title: 'Join InvestPlus',
        page_subtitle: 'Experience the next generation of business intelligence.',
        title: 'Join the waitlist',
        subtitle: 'Get early access to our AI features and join 2,000+ other companies.',
        name: 'Full Name',
        name_placeholder: 'Jane Doe',
        email: 'Work Email',
        email_placeholder: 'jane@company.com',
        company: 'Company Name',
        company_placeholder: 'Acme Inc.',
        button: 'Register for Early Access',
        success_title: 'Welcome aboard!',
        success_message: 'Your registration was successful. We will contact you soon.'
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
        more_about: 'En savoir plus sur notre entreprise',
        join_now: 'Rejoignez-nous'
      },
      footer: {
        privacy: 'Confidentialité',
        terms: 'Conditions',
        status: 'Statut',
      },
      about: {
        title: 'À propos de nous',
        content: 'InvestPlus est une plateforme leader dans l\'investissement et l\'intelligence d\'affaires, combinant une expertise approfondie et une technologie de pointe pour aider nos partenaires à atteindre une croissance durable.'
      },
      members: {
        title: 'Membres',
        content: 'Notre équipe est composée de talents d\'élite engagés dans l\'excellence et l\'innovation dans tout ce que nous fournissons.'
      },
      experts: {
        title: 'Experts',
        content: 'Nous sommes fiers d\'un large réseau de consultants et d\'experts internationaux qui fournissent des informations stratégiques précises.'
      },
      projects: {
        title: 'Projets d\'investissement',
        content: 'Nous offrons des opportunités révolutionnaires dans l\'énergie durable, la technologie et l\'immobilier, soigneusement sélectionnées pour assurer les meilleurs rendements.'
      },
      method: {
        title: 'Méthode de travail',
        content: 'Nous adoptons une méthodologie scientifique qui commence par une analyse précise des données et se termine par la mise en œuvre de stratégies de croissance intégrées.'
      },
      investisor: {
        title: 'Investisseur',
        content: 'Nous fournissons aux investisseurs les outils et les données nécessaires pour prendre des décisions éclairées qui améliorent leurs portefeuilles d\'investissement.'
      },
      partners: {
        title: 'Partenaires',
        content: 'Nous croyons au pouvoir des partenariats stratégiques pour construire un avenir économique prospère et inclusif.'
      },
      achievements: {
        title: 'Réalisations',
        content: 'Un historique de succès avéré dans la gestion de portefeuilles majeurs et le lancement de projets de grande envergure à travers les continents.'
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
      },
      register: {
        page_title: 'Rejoindre InvestPlus',
        page_subtitle: 'Découvrez la prochaine génération de business intelligence.',
        title: 'Rejoindre la liste d\'attente',
        subtitle: 'Bénéficiez d\'un accès anticipé à nos fonctionnalités d\'IA et rejoignez plus de 2000 autres entreprises.',
        name: 'Nom complet',
        name_placeholder: 'Jean Dupont',
        email: 'Email professionnel',
        email_placeholder: 'jean@entreprise.com',
        company: 'Nom de l\'entreprise',
        company_placeholder: 'Entreprise S.A.',
        button: 'S\'inscrire pour l\'accès anticipé',
        success_title: 'Bienvenue à bord !',
        success_message: 'Votre inscription a été réussie. Nous vous contacterons bientôt.'
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
        more_about: 'تعرف أكثر على شركتنا',
        join_now: 'انضم إلينا'
      },
      footer: {
        privacy: 'الخصوصية',
        terms: 'الشروط',
        status: 'الحالة',
        rights: '© 2024 InvestPlus Inc. جميع الحقوق محفوظة.'
      },
      about: {
        title: 'من نحن',
        content: 'InvestPlus هي منصة رائدة في مجال الاستثمار وذكاء الأعمال، نجمع بين الخبرة العميقة والتقنيات المتطورة لمساعدة شركائنا على تحقيق نمو مستدام.'
      },
      members: {
        title: 'الأعضاء',
        content: 'فريقنا يتكون من نخبة الكفاءات الملتزمة بالتميز والابتكار في كل ما نقدمه من خدمات وحلول.'
      },
      experts: {
        title: 'الخبراء',
        content: 'نفتخر بشبكة واسعة من المستشارين والخبراء الدوليين الذين يقدمون رؤى استراتيجية دقيقة.'
      },
      projects: {
        title: 'مشاريع الاستثمار',
        content: 'نقدم فرص ثورية في مجالات الطاقة المستدامة، التكنولوجيا، والعقارات، مختارة بعناية لضمان أفضل العوائد.'
      },
      method: {
        title: 'طريقة العمل',
        content: 'نعتمد منهجية علمية تبدأ بالتحليل الدقيق للبيانات وتنتهي بتنفيذ استراتيجيات نمو متكاملة.'
      },
      investisor: {
        title: 'المستثمر',
        content: 'نوفر للمستثمرين الأدوات والبيانات اللازمة لاتخاذ قرارات مدروسة تعزز محافظهم الاستثمارية.'
      },
      partners: {
        title: 'الشركاء',
        content: 'نؤمن بقوة الشراكات الاستراتيجية لبناء مستقبل اقتصادي مزدهر وشامل.'
      },
      achievements: {
        title: 'الإنجازات',
        content: 'سجل حافل من النجاحات في إدارة المحافظ الكبرى وإطلاق المشاريع الضخمة عبر القارات.'
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
      },
      register: {
        page_title: 'انضم إلى InvestPlus',
        page_subtitle: 'اختبر الجيل القادم من ذكاء الأعمال.',
        title: 'انضم إلى قائمة الانتظار',
        subtitle: 'احصل على وصول مبكر لميزات الذكاء الاصطناعي لدينا وانضم إلى أكثر من 2000 شركة أخرى.',
        name: 'الاسم الكامل',
        name_placeholder: 'محمد أحمد',
        email: 'البريد الإلكتروني للعمل',
        email_placeholder: 'name@company.com',
        company: 'اسم الشركة',
        company_placeholder: 'شركة المساهمة',
        button: 'سجل للحصول على وصول مبكر',
        success_title: 'أهلاً بك معنا!',
        success_message: 'تم تسجيلك بنجاح. سنتواصل معك قريبًا.'
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
      order: ['localStorage', 'querystring', 'cookie', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'investplus_lng',
      caches: ['localStorage'],
    },
  });

// Set initial RTL state and handle changes
const updateHtmlAttributes = (lng: string) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
};

// Apply on initial load
const currentLng = i18n.language || localStorage.getItem('investplus_lng') || 'en';
updateHtmlAttributes(currentLng);

// Handle language changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('investplus_lng', lng);
  updateHtmlAttributes(lng);
});

export default i18n;
