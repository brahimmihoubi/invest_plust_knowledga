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
        method: 'Work Method',
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
        contact_title: 'Contact Info',
        address: 'Al-Amal Cooperative, Zeralda, Algiers',
        rights: '© 2024 InvestPlus Inc. All rights reserved.'
      },
      about: {
        badge: 'Who We Are',
        title: 'About us',
        content: 'InvestPlus is a leading platform in investment and business intelligence, combining deep expertise with cutting-edge technology to help our partners achieve sustainable growth.',
        stats: {
          years: { value: '15+', label: 'Years Experience' },
          projects: { value: '500+', label: 'Projects Completed' },
          investors: { value: '10K+', label: 'Active Investors' },
          countries: { value: '45+', label: 'Countries Served' }
        },
        features: {
          expertise: {
            title: 'Deep Expertise',
            description: 'Our team brings decades of combined experience in finance, technology, and strategic consulting to deliver exceptional results.'
          },
          technology: {
            title: 'Cutting-Edge Technology',
            description: 'We leverage AI-powered analytics and advanced data science to provide insights that drive informed decision-making.'
          },
          support: {
            title: '24/7 Support',
            description: 'Our dedicated support team is always available to assist you with personalized guidance and expert consultation.'
          }
        },
        mission: {
          title: 'Our Mission',
          description: 'To empower businesses and investors worldwide with intelligent solutions that transform data into actionable strategies, driving sustainable growth and long-term success.'
        }
      },
      members: {
        badge: 'Our Team',
        title: 'Members',
        content: 'Our team consists of elite talents committed to excellence and innovation in everything we provide.',
        roles: {
          leadership: { title: 'Leadership Team', description: 'Visionary leaders driving strategic direction and growth', count: '12+' },
          analysts: { title: 'Financial Analysts', description: 'Expert analysts providing deep market insights', count: '35+' },
          advisors: { title: 'Strategic Advisors', description: 'Seasoned advisors with global expertise', count: '20+' },
          operations: { title: 'Operations Team', description: 'Dedicated professionals ensuring seamless execution', count: '45+' }
        },
        values: {
          excellence: { icon: '⭐', title: 'Excellence', description: 'Committed to delivering exceptional results in every project' },
          innovation: { icon: '💡', title: 'Innovation', description: 'Embracing cutting-edge solutions and creative thinking' },
          integrity: { icon: '🤝', title: 'Integrity', description: 'Operating with transparency, honesty, and ethical standards' }
        }
      },
      experts: {
        badge: 'Our Expertise',
        title: 'Experts',
        content: 'We take pride in a wide network of international consultants and experts who provide precise strategic insights.',
        areas: {
          finance: { title: 'Financial Experts', description: 'Specialists in investment banking, portfolio management, and financial planning', count: '25+ Experts' },
          technology: { title: 'Technology Consultants', description: 'Tech innovators driving digital transformation and AI integration', count: '18+ Consultants' },
          legal: { title: 'Legal Advisors', description: 'Expert lawyers ensuring compliance and protecting your interests', count: '15+ Advisors' },
          market: { title: 'Market Analysts', description: 'Analysts providing real-time market intelligence and trends', count: '30+ Analysts' },
          sustainability: { title: 'Sustainability Experts', description: 'Specialists in ESG and sustainable investment strategies', count: '12+ Experts' },
          realestate: { title: 'Real Estate Specialists', description: 'Property experts with deep knowledge of global markets', count: '20+ Specialists' }
        },
        credentials: {
          title: 'Expert Credentials',
          description: 'Our experts hold prestigious certifications and have proven track records',
          certifications: { value: '200+', label: 'Professional Certifications' },
          publications: { value: '150+', label: 'Research Publications' },
          awards: { value: '50+', label: 'Industry Awards' },
          experience: { value: '500+', label: 'Years Combined Experience' }
        }
      },
      projects: {
        badge: 'Investment Opportunities',
        title: 'Investment Projects',
        content: 'We offer revolutionary opportunities in sustainable energy, technology, and real estate, carefully selected to ensure the best returns.',
        categories: {
          renewable: { title: 'Renewable Energy', description: 'Solar, wind, and clean energy projects driving sustainable future', count: '45 Active Projects', roi: 'ROI: 18-25%' },
          technology: { title: 'Technology & AI', description: 'Cutting-edge tech startups and AI-driven innovations', count: '32 Active Projects', roi: 'ROI: 22-35%' },
          realestate: { title: 'Real Estate', description: 'Premium commercial and residential development projects', count: '28 Active Projects', roi: 'ROI: 15-20%' },
          healthcare: { title: 'Healthcare', description: 'Medical facilities and healthcare technology investments', count: '18 Active Projects', roi: 'ROI: 16-22%' },
          infrastructure: { title: 'Infrastructure', description: 'Large-scale infrastructure and urban development', count: '22 Active Projects', roi: 'ROI: 14-19%' },
          agriculture: { title: 'AgriTech', description: 'Smart farming and agricultural technology solutions', count: '15 Active Projects', roi: 'ROI: 17-24%' }
        },
        portfolio: {
          title: 'Portfolio Performance',
          description: 'Our investment portfolio demonstrates consistent growth and strong returns',
          total_value: { value: '$2.5B+', label: 'Total Portfolio Value' },
          active_projects: { value: '160+', label: 'Active Projects' },
          avg_return: { value: '21.5%', label: 'Average Annual Return' },
          success_rate: { value: '94%', label: 'Success Rate' }
        }
      },
      method: {
        badge: 'Our Process',
        title: 'Work Method',
        content: 'We adopt a scientific methodology that starts with precise data analysis and ends with the implementation of integrated growth strategies.',
        steps: {
          analysis: { title: 'Data Analysis', description: 'Comprehensive analysis of market trends, financial data, and business metrics to identify opportunities.' },
          strategy: { title: 'Strategy Development', description: 'Creating customized investment strategies aligned with your goals and risk tolerance.' },
          implementation: { title: 'Implementation', description: 'Executing the strategy with precision, leveraging our network and technological infrastructure.' },
          monitoring: { title: 'Performance Monitoring', description: 'Continuous tracking of key performance indicators and real-time adjustments as needed.' },
          optimization: { title: 'Optimization', description: 'Regular refinement and optimization to maximize returns and minimize risks.' }
        },
        cta: { text: 'Ready to experience our proven methodology?', button: 'Start Your Journey' }
      },
      investisor: {
        badge: 'For Investors',
        title: 'Investor',
        content: 'We provide investors with the tools and data necessary to make informed decisions that enhance their investment portfolios.',
        tools: {
          analytics: { title: 'Advanced Analytics', description: 'Real-time data analysis and market intelligence dashboards' },
          portfolio: { title: 'Portfolio Management', description: 'Comprehensive tools to track and optimize your investments' },
          insights: { title: 'AI-Powered Insights', description: 'Intelligent recommendations based on market trends and data' },
          reports: { title: 'Detailed Reports', description: 'In-depth performance reports and investment analysis' }
        },
        benefits: {
          transparency: { title: 'Full Transparency', description: 'Complete visibility into all investments, fees, and performance metrics with real-time updates' },
          security: { title: 'Bank-Level Security', description: 'Your investments are protected with enterprise-grade security and insurance coverage' },
          flexibility: { title: 'Investment Flexibility', description: 'Choose from diverse investment options and customize your portfolio to match your goals' },
          support: { title: 'Dedicated Support', description: 'Personal investment advisors available 24/7 to guide your investment journey' }
        },
        cta: { title: 'Ready to Start Investing?', description: 'Join thousands of successful investors who trust us with their financial future', button: 'Get Started Today' }
      },
      partners: {
        badge: 'Partnerships',
        title: 'Partners',
        content: 'We believe in the power of strategic partnerships to build a prosperous and inclusive economic future.',
        types: {
          strategic: { title: 'Strategic Partners', description: 'Long-term collaborations driving mutual growth', count: '50+ Partners' },
          financial: { title: 'Financial Institutions', description: 'Leading banks and financial service providers', count: '35+ Institutions' },
          technology: { title: 'Technology Partners', description: 'Innovative tech companies powering our platform', count: '28+ Companies' },
          academic: { title: 'Academic Partners', description: 'Universities and research institutions', count: '15+ Institutions' }
        },
        benefits: {
          title: 'Partnership Benefits',
          description: 'Collaborate with us to unlock new opportunities and accelerate growth',
          network: { icon: '🌐', title: 'Global Network', description: 'Access to our extensive network of investors, experts, and industry leaders' },
          resources: { icon: '📚', title: 'Shared Resources', description: 'Leverage our technology, research, and market intelligence' },
          growth: { icon: '📈', title: 'Accelerated Growth', description: 'Joint ventures and co-investment opportunities for rapid expansion' }
        },
        cta: { text: 'Interested in partnering with us?', button: 'Explore Partnership Opportunities' }
      },
      achievements: {
        badge: 'Our Success',
        title: 'Achievements',
        content: 'A proven track record of success in managing major portfolios and launching large-scale projects across continents.',
        timeline: {
          title: 'Our Journey',
          '2010': { title: 'Company Founded', description: 'Started with a vision to revolutionize investment management' },
          '2015': { title: 'Global Expansion', description: 'Expanded operations to 20+ countries across 4 continents' },
          '2020': { title: 'Billion Dollar Milestone', description: 'Reached $1B+ in assets under management' },
          '2025': { title: 'Industry Leader', description: 'Recognized as a top investment platform globally' }
        },
        awards: {
          title: 'Awards & Recognition',
          description: 'Honored by leading industry organizations for excellence and innovation',
          innovation: { title: 'Innovation Award', year: '2024' },
          excellence: { title: 'Excellence in Finance', year: '2023' },
          sustainability: { title: 'Sustainability Leader', year: '2024' },
          leadership: { title: 'Best Leadership Team', year: '2023' }
        },
        impact: {
          title: 'Our Global Impact',
          description: 'Creating positive change through responsible investment and sustainable growth',
          capital: { value: '$2.5B+', label: 'Capital Deployed' },
          jobs: { value: '50K+', label: 'Jobs Created' },
          communities: { value: '200+', label: 'Communities Impacted' },
          sustainability: { value: '1M+', label: 'Tons CO₂ Reduced' }
        }
      },
      news: {
        announcement_2: {
          title: 'New Investment Project Launched',
          content: 'We are excited to announce our newest solar energy initiative in North Africa. Join the preliminary review now.'
        },
        announcement_3: {
          title: 'Upcoming Expert Webinar',
          content: 'Don\'t miss our live session on Market Trends 2026. Register through the admin portal.'
        },
        watch_video: 'Watch Video'
      },
      register: {
        page_title: 'Submit Your Project',
        page_subtitle: 'Connect with world-class investors to fund your vision.',
        title: 'Project Submission',
        subtitle: 'Fill in the details to get your project reviewed by our experts.',
        name: 'Contact Person Name',
        name_placeholder: 'John Doe',
        email: 'Contact Email',
        email_placeholder: 'john@startup.com',
        company: 'Project/Startup Name',
        company_placeholder: 'My Innovation Inc.',
        sector: 'Sector',
        funding_goal: 'Funding Goal ($)',
        location: 'Location',
        description: 'Project Abstract',
        button: 'Submit Project',
        success_title: 'Project Submitted!',
        success_message: 'Your project has been received. Our analysts will review it shortly.'
      },
      forms: {
        partner: {
          title: 'Partner Registration',
          subtitle: 'Join our ecosystem of strategic partners.',
          type: 'Partnership Type',
          website: 'Company Website',
          message: 'Message',
          types: { strategic: 'Strategic', financial: 'Financial', technology: 'Technology', academic: 'Academic' }
        },
        member: {
          title: 'Join Our Team',
          subtitle: 'Apply as an Expert or Employee.',
          role: 'Role',
          specialization: 'Specialization',
          linkedin: 'LinkedIn Profile'
        },
        investor: {
          title: 'Investor Registration',
          subtitle: 'Access exclusive investment opportunities.',
          type: 'Investor Type',
          portfolioSize: 'Portfolio Size',
          sectors: 'Interested Sectors',
          ranges: { small: '$10k - $50k', medium: '$50k - $250k', large: '$250k+' },
          phone: 'Phone Number',
          company_name: 'Firm/Organization Name',
          accredited: 'I certify that I am an accredited investor',
          sector_options: { tech: 'Technology', real_estate: 'Real Estate', energy: 'Energy', healthcare: 'Healthcare', finance: 'Finance' }
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
        more_about: 'En savoir plus',
        join_now: 'Rejoignez-nous'
      },
      footer: {
        privacy: 'Confidentialité',
        terms: 'Conditions',
        status: 'Statut',
        contact_title: 'Infos Contact',
        address: 'Coopérative Al-Amal, Zéralda, Alger',
        rights: '© 2024 InvestPlus Inc. Tous droits réservés.'
      },
      about: {
        badge: 'Qui Nous Sommes',
        title: 'À propos de nous',
        content: 'InvestPlus est une plateforme leader dans l\'investissement et l\'intelligence d\'affaires.',
        stats: {
          years: { value: '15+', label: 'Années d\'Expérience' },
          projects: { value: '500+', label: 'Projets Réalisés' },
          investors: { value: '10K+', label: 'Investisseurs Actifs' },
          countries: { value: '45+', label: 'Pays Desservis' }
        },
        features: {
          expertise: { title: 'Expertise Approfondie', description: 'Des décennies d\'expérience combinée en finance et technologie.' },
          technology: { title: 'Technologie de Pointe', description: 'Analyses IA et science des données avancée.' },
          support: { title: 'Support 24/7', description: 'Équipe dédiée disponible pour une assistance personnalisée.' }
        },
        mission: {
          title: 'Notre Mission',
          description: 'Autonomiser les entreprises et investisseurs avec des solutions intelligentes.'
        }
      },
      members: {
        badge: 'Notre Équipe',
        title: 'Membres',
        content: 'Notre équipe est composée de talents d\'élite engagés dans l\'excellence.',
        roles: {
          leadership: { title: 'Direction', description: 'Leaders visionnaires guidant la stratégie', count: '12+' },
          analysts: { title: 'Analystes Financiers', description: 'Experts fournissant des insights marché', count: '35+' },
          advisors: { title: 'Conseillers Stratégiques', description: 'Conseillers avec expertise mondiale', count: '20+' },
          operations: { title: 'Opérations', description: 'Professionnels assurant une exécution fluide', count: '45+' }
        },
        values: {
          excellence: { icon: '⭐', title: 'Excellence', description: 'Engagement envers des résultats exceptionnels' },
          innovation: { icon: '💡', title: 'Innovation', description: 'Adoption de solutions de pointe' },
          integrity: { icon: '🤝', title: 'Intégrité', description: 'Transparence et normes éthiques' }
        }
      },
      experts: {
        badge: 'Notre Expertise',
        title: 'Experts',
        content: 'Un vaste réseau de consultants et d\'experts internationaux.',
        areas: {
          finance: { title: 'Experts Financiers', description: 'Spécialistes en banque d\'investissement', count: '25+ Experts' },
          technology: { title: 'Consultants Tech', description: 'Innovateurs en transformation numérique', count: '18+ Consultants' },
          legal: { title: 'Conseillers Juridiques', description: 'Experts en conformité', count: '15+ Conseillers' },
          market: { title: 'Analystes Marché', description: 'Intelligence de marché en temps réel', count: '30+ Analystes' },
          sustainability: { title: 'Experts Durabilité', description: 'Spécialistes en stratégies ESG', count: '12+ Experts' },
          realestate: { title: 'Spécialistes Immo', description: 'Experts du marché immobilier mondial', count: '20+ Spécialistes' }
        },
        credentials: {
          title: 'Certifications',
          description: 'Nos experts détiennent des certifications prestigieuses',
          certifications: { value: '200+', label: 'Certifications Pro' },
          publications: { value: '150+', label: 'Publications' },
          awards: { value: '50+', label: 'Prix de l\'Industrie' },
          experience: { value: '500+', label: 'Années d\'Expérience' }
        }
      },
      projects: {
        badge: 'Opportunités',
        title: 'Projets d\'Investissement',
        content: 'Opportunités révolutionnaires en énergie durable, techno et immobilier.',
        categories: {
          renewable: { title: 'Énergie Renouvelable', description: 'Projets solaires et éoliens durables', count: '45 Projets', roi: 'ROI: 18-25%' },
          technology: { title: 'Technologie & IA', description: 'Startups tech et innovations IA', count: '32 Projets', roi: 'ROI: 22-35%' },
          realestate: { title: 'Immobilier', description: 'Développement commercial et résidentiel', count: '28 Projets', roi: 'ROI: 15-20%' },
          healthcare: { title: 'Santé', description: 'Installations médicales et techno santé', count: '18 Projets', roi: 'ROI: 16-22%' },
          infrastructure: { title: 'Infrastructure', description: 'Grands projets et développement urbain', count: '22 Projets', roi: 'ROI: 14-19%' },
          agriculture: { title: 'AgriTech', description: 'Solutions agricoles intelligentes', count: '15 Projets', roi: 'ROI: 17-24%' }
        },
        portfolio: {
          title: 'Performance',
          description: 'Notre portefeuille démontre une croissance constante',
          total_value: { value: '$2.5B+', label: 'Valeur Totale' },
          active_projects: { value: '160+', label: 'Projets Actifs' },
          avg_return: { value: '21.5%', label: 'Rendement Annuel' },
          success_rate: { value: '94%', label: 'Taux de Succès' }
        }
      },
      method: {
        badge: 'Notre Processus',
        title: 'Méthode de Travail',
        content: 'Une méthodologie scientifique de l\'analyse à l\'exécution.',
        steps: {
          analysis: { title: 'Analyse Données', description: 'Analyse complète des tendances du marché' },
          strategy: { title: 'Stratégie', description: 'Création de stratégies d\'investissement personnalisées' },
          implementation: { title: 'Mise en Œuvre', description: 'Exécution précise avec notre réseau' },
          monitoring: { title: 'Suivi', description: 'Suivi continu des indicateurs clés' },
          optimization: { title: 'Optimisation', description: 'Raffinement régulier pour maximiser les rendements' }
        },
        cta: { text: 'Prêt à découvrir notre méthode ?', button: 'Commencer' }
      },
      investisor: {
        badge: 'Pour Investisseurs',
        title: 'Investisseur',
        content: 'Outils et données pour des décisions éclairées.',
        tools: {
          analytics: { title: 'Analyses Avancées', description: 'Tableaux de bord d\'intelligence de marché' },
          portfolio: { title: 'Gestion Portefeuille', description: 'Outils complets de suivi' },
          insights: { title: 'Insights IA', description: 'Recommandations intelligentes' },
          reports: { title: 'Rapports Détaillés', description: 'Analyses approfondies de performance' }
        },
        benefits: {
          transparency: { title: 'Transparence Totale', description: 'Visibilité complète sur tous les investissements' },
          security: { title: 'Sécurité Bancaire', description: 'Protection de niveau entreprise' },
          flexibility: { title: 'Flexibilité', description: 'Options d\'investissement diverses' },
          support: { title: 'Support Dédié', description: 'Conseillers personnels disponibles 24/7' }
        },
        cta: { title: 'Prêt à investir ?', description: 'Rejoignez des milliers d\'investisseurs.', button: 'Commencer' }
      },
      partners: {
        badge: 'Partenariats',
        title: 'Partenaires',
        content: 'Nous croyons au pouvoir des partenariats stratégiques.',
        types: {
          strategic: { title: 'Partenaires Stratégiques', description: 'Collaborations à long terme', count: '50+' },
          financial: { title: 'Institutions Financières', description: 'Banques et services financiers', count: '35+' },
          technology: { title: 'Partenaires Techno', description: 'Entreprises tech innovantes', count: '28+' },
          academic: { title: 'Partenaires Académiques', description: 'Universités et recherche', count: '15+' }
        },
        benefits: {
          title: 'Avantages',
          description: 'Collaborez pour débloquer de nouvelles opportunités',
          network: { icon: '🌐', title: 'Réseau Mondial', description: 'Accès à notre vaste réseau' },
          resources: { icon: '📚', title: 'Ressources Partagées', description: 'Technologie et intelligence de marché' },
          growth: { icon: '📈', title: 'Croissance Accélérée', description: 'Co-investissement et expansion' }
        },
        cta: { text: 'Intéressé par un partenariat ?', button: 'Explorer' }
      },
      achievements: {
        badge: 'Nos Succès',
        title: 'Réalisations',
        content: 'Un historique de succès avéré à travers les continents.',
        timeline: {
          title: 'Notre Parcours',
          '2010': { title: 'Fondation', description: 'Début de notre vision' },
          '2015': { title: 'Expansion Mondiale', description: 'Opérations dans 20+ pays' },
          '2020': { title: 'Milliard de Dollars', description: '$1B+ d\'actifs sous gestion' },
          '2025': { title: 'Leader de l\'Industrie', description: 'Reconnaissance mondiale' }
        },
        awards: {
          title: 'Prix & Reconnaissance',
          description: 'Honorés par les leaders de l\'industrie',
          innovation: { title: 'Prix Innovation', year: '2024' },
          excellence: { title: 'Excellence Finance', year: '2023' },
          sustainability: { title: 'Leader Durabilité', year: '2024' },
          leadership: { title: 'Meilleure Direction', year: '2023' }
        },
        impact: {
          title: 'Impact Global',
          description: 'Changement positif par l\'investissement responsable',
          capital: { value: '$2.5B+', label: 'Capital Déployé' },
          jobs: { value: '50K+', label: 'Emplois Créés' },
          communities: { value: '200+', label: 'Communautés' },
          sustainability: { value: '1M+', label: 'Tonnes CO₂ Réduites' }
        }
      },
      news: {
        announcement_2: {
          title: 'Nouveau projet d\'investissement lancé',
          content: 'Nous sommes ravis d\'annoncer notre nouvelle initiative d\'énergie solaire en Afrique du Nord. Rejoignez l\'examen préliminaire maintenant.'
        },
        announcement_3: {
          title: 'Webinaire d\'experts à venir',
          content: 'Ne manquez pas notre session en direct sur les tendances du marché 2026. Inscrivez-vous via le portail admin.'
        },
        watch_video: 'Regarder la vidéo'
      },
      register: {
        page_title: 'Soumettre votre Projet',
        page_subtitle: 'Connectez-vous avec des investisseurs pour financer votre vision.',
        title: 'Soumission de Projet',
        subtitle: 'Remplissez les détails pour faire examiner votre projet.',
        name: 'Nom du Contact',
        name_placeholder: 'Jean Dupont',
        email: 'Email de Contact',
        email_placeholder: 'jean@startup.com',
        company: 'Nom du Projet/Startup',
        company_placeholder: 'Mon Innovation Inc.',
        sector: 'Secteur',
        funding_goal: 'Objectif de Financement ($)',
        location: 'Localisation',
        description: 'Résumé du Projet',
        button: 'Soumettre le Projet',
        success_title: 'Projet Soumis !',
        success_message: 'Votre projet a été reçu. Nos analystes l\'examineront sous peu.'
      },
      forms: {
        partner: {
          title: 'Inscription Partenaire',
          subtitle: 'Rejoignez notre écosystème de partenaires.',
          type: 'Type de Partenariat',
          website: 'Site Web',
          message: 'Message',
          types: { strategic: 'Stratégique', financial: 'Financier', technology: 'Technologique', academic: 'Académique' }
        },
        member: {
          title: 'Rejoindre l\'équipe',
          subtitle: 'Postulez en tant qu\'Expert ou Employé.',
          role: 'Rôle',
          specialization: 'Spécialisation',
          linkedin: 'Profil LinkedIn'
        },
        investor: {
          title: 'Inscription Investisseur',
          subtitle: 'Accédez à des opportunités exclusives.',
          type: 'Type d\'Investisseur',
          portfolioSize: 'Taille du Portefeuille',
          sectors: 'Secteurs d\'intérêt',
          ranges: { small: '10k$ - 50k$', medium: '50k$ - 250k$', large: '250k$+' },
          phone: 'Numéro de téléphone',
          company_name: 'Nom de l\'organisation',
          accredited: 'Je certifie être un investisseur accrédité',
          sector_options: { tech: 'Technologie', real_estate: 'Immobilier', energy: 'Énergie', healthcare: 'Santé', finance: 'Finance' }
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
        more_about: 'تعرف أكثر',
        join_now: 'انضم إلينا'
      },
      footer: {
        privacy: 'الخصوصية',
        terms: 'الشروط',
        status: 'الحالة',
        contact_title: 'معلومات الاتصال',
        address: 'تعاونية الأمل بزرالدة، الجزائر العاصمة',
        rights: '© 2024 InvestPlus Inc. جميع الحقوق محفوظة.'
      },
      about: {
        badge: 'من نحن',
        title: 'من نحن',
        content: 'InvestPlus هي منصة رائدة في مجال الاستثمار وذكاء الأعمال.',
        stats: {
          years: { value: '+15', label: 'سنوات خبرة' },
          projects: { value: '+500', label: 'مشروع منجز' },
          investors: { value: '+10K', label: 'مستثمر نشط' },
          countries: { value: '+45', label: 'دولة' }
        },
        features: {
          expertise: { title: 'خبرة عميقة', description: 'عقود من الخبرة المشتركة في المالية والتكنولوجيا.' },
          technology: { title: 'تكنولوجيا متطورة', description: 'تحليلات مدعومة بالذكاء الاصطناعي وعلوم البيانات.' },
          support: { title: 'دعم 24/7', description: 'فريق دعم مخصص للمساعدة الشخصية.' }
        },
        mission: {
          title: 'مهمتنا',
          description: 'تمكين الشركات والمستثمرين بحلول ذكية.'
        }
      },
      members: {
        badge: 'فريقنا',
        title: 'الأعضاء',
        content: 'فريقنا يتكون من نخبة الكفاءات الملتزمة بالتميز.',
        roles: {
          leadership: { title: 'القيادة', description: 'قادة برؤية ثاقبة يوجهون الاستراتيجية', count: '+12' },
          analysts: { title: 'المحللون الماليون', description: 'خبراء يقدمون رؤى عميقة للسوق', count: '+35' },
          advisors: { title: 'المستشارون الاستراتيجيون', description: 'مستشارون ذوي خبرة عالمية', count: '+20' },
          operations: { title: 'فريق العمليات', description: 'محترفون يضمنون التنفيذ السلس', count: '+45' }
        },
        values: {
          excellence: { icon: '⭐', title: 'التميز', description: 'الالتزام بتحقيق نتائج استثنائية' },
          innovation: { icon: '💡', title: 'الابتكار', description: 'تبني حلول متطورة وأفكار إبداعية' },
          integrity: { icon: '🤝', title: 'النزاهة', description: 'العمل بشفافية ومعايير أخلاقية' }
        }
      },
      experts: {
        badge: 'خبراتنا',
        title: 'الخبراء',
        content: 'نفتخر بشبكة واسعة من المستشارين والخبراء الدوليين.',
        areas: {
          finance: { title: 'خبراء المال', description: 'متخصصون في الخدمات المصرفية الاستثمارية', count: '+25 خبير' },
          technology: { title: 'مستشارو التكنولوجيا', description: 'مبتكرون في التحول الرقمي', count: '+18 مستشار' },
          legal: { title: 'المستشارون القانونيون', description: 'خبراء في الامتثال وحماية المصالح', count: '+15 مستشار' },
          market: { title: 'محللو السوق', description: 'ذكاء السوق والاتجاهات في الوقت الفعلي', count: '+30 محلل' },
          sustainability: { title: 'خبراء الاستدامة', description: 'متخصصون في استراتيجيات ESG', count: '+12 خبير' },
          realestate: { title: 'أخصائيو العقارات', description: 'خبراء في الأسواق العقارية العالمية', count: '+20 أخصائي' }
        },
        credentials: {
          title: 'الاعتمادات',
          description: 'خبراؤنا يحملون شهادات مرموقة',
          certifications: { value: '+200', label: 'شهادة مهنية' },
          publications: { value: '+150', label: 'بحث منشور' },
          awards: { value: '+50', label: 'جائزة صناعية' },
          experience: { value: '+500', label: 'سنة خبرة' }
        }
      },
      projects: {
        badge: 'الفرص',
        title: 'مشاريع الاستثمار',
        content: 'فرص ثورية في الطاقة المستدامة والتكنولوجيا والعقارات.',
        categories: {
          renewable: { title: 'الطاقة المتجددة', description: 'مشاريع الطاقة الشمسية وطاقة الرياح', count: '45 مشروع', roi: 'عائد: 18-25%' },
          technology: { title: 'التكنولوجيا والذكاء الاصطناعي', description: 'شركات ناشئة وابتكارات', count: '32 مشروع', roi: 'عائد: 22-35%' },
          realestate: { title: 'العقارات', description: 'تطوير تجاري وسكني', count: '28 مشروع', roi: 'عائد: 15-20%' },
          healthcare: { title: 'الرعاية الصحية', description: 'مرافق طبية وتكنولوجيا صحية', count: '18 مشروع', roi: 'عائد: 16-22%' },
          infrastructure: { title: 'البنية التحتية', description: 'مشاريع كبرى وتطوير حضري', count: '22 مشروع', roi: 'عائد: 14-19%' },
          agriculture: { title: 'التكنولوجيا الزراعية', description: 'حلول زراعية ذكية', count: '15 مشروع', roi: 'عائد: 17-24%' }
        },
        portfolio: {
          title: 'الأداء',
          description: 'محفظتنا تظهر نموًا ثابتًا وعوائد قوية',
          total_value: { value: '+2.5 مليار', label: 'القيمة الإجمالية' },
          active_projects: { value: '+160', label: 'مشروع نشط' },
          avg_return: { value: '21.5%', label: 'العائد السنوي' },
          success_rate: { value: '94%', label: 'معدل النجاح' }
        }
      },
      method: {
        badge: 'عمليتنا',
        title: 'طريقة العمل',
        content: 'منهجية علمية من تحليل البيانات إلى التنفيذ.',
        steps: {
          analysis: { title: 'تحليل البيانات', description: 'تحليل شامل لاتجاهات السوق' },
          strategy: { title: 'الاستراتيجية', description: 'إنشاء استراتيجيات استثمار مخصصة' },
          implementation: { title: 'التنفيذ', description: 'تنفيذ دقيق مع شبكتنا' },
          monitoring: { title: 'المراقبة', description: 'تتبع مستمر للمؤشرات الرئيسية' },
          optimization: { title: 'التحسين', description: 'تطوير منتظم لتعظيم العوائد' }
        },
        cta: { text: 'هل أنت مستعد لتجربة منهجيتنا؟', button: 'ابدأ الآن' }
      },
      investisor: {
        badge: 'للمستثمرين',
        title: 'المستثمر',
        content: 'أدوات وبيانات لاتخاذ قرارات مدروسة.',
        tools: {
          analytics: { title: 'تحليلات متقدمة', description: 'لوحات تحكم ذكاء السوق' },
          portfolio: { title: 'إدارة المحفظة', description: 'أدوات تتبع شاملة' },
          insights: { title: 'رؤى الذكاء الاصطناعي', description: 'توصيات ذكية' },
          reports: { title: 'تقارير مفصلة', description: 'تحليل أداء متعمق' }
        },
        benefits: {
          transparency: { title: 'شفافية كاملة', description: 'رؤية كاملة لجميع الاستثمارات' },
          security: { title: 'أمان مصرفي', description: 'حماية على مستوى المؤسسات' },
          flexibility: { title: 'مرونة', description: 'خيارات استثمار متنوعة' },
          support: { title: 'دعم مخصص', description: 'مستشارون شخصيون متاحون 24/7' }
        },
        cta: { title: 'جاهز للاستثمار؟', description: 'انضم لآلاف المستثمرين الناجحين.', button: 'ابدأ اليوم' }
      },
      partners: {
        badge: 'الشراكات',
        title: 'الشركاء',
        content: 'نؤمن بقوة الشراكات الاستراتيجية.',
        types: {
          strategic: { title: 'شركاء استراتيجيون', description: 'تعاون طويل الأمد', count: '+50' },
          financial: { title: 'مؤسسات مالية', description: 'بنوك وخدمات مالية', count: '+35' },
          technology: { title: 'شركاء التكنولوجيا', description: 'شركات تقنية مبتكرة', count: '+28' },
          academic: { title: 'شركاء أكاديميون', description: 'جامعات ومراكز بحث', count: '+15' }
        },
        benefits: {
          title: 'المزايا',
          description: 'تعاون لفتح فرص جديدة وتسريع النمو',
          network: { icon: '🌐', title: 'شبكة عالمية', description: 'وصول لشبكتنا الواسعة' },
          resources: { icon: '📚', title: 'الموارد المشتركة', description: 'التكنولوجيا وذكاء السوق' },
          growth: { icon: '📈', title: 'نمو متسارع', description: 'فرص استثمار مشترك وتوسع' }
        },
        cta: { text: 'مهتم بالشراكة معنا؟', button: 'اكتشف الفرص' }
      },
      achievements: {
        badge: 'نجاحاتنا',
        title: 'الإنجازات',
        content: 'سجل حافل من النجاحات عبر القارات.',
        timeline: {
          title: 'رحلتنا',
          '2010': { title: 'التأسيس', description: 'بداية رؤيتنا' },
          '2015': { title: 'توسع عالمي', description: 'عمليات في +20 دولة' },
          '2020': { title: 'مليار دولار', description: '+1 مليار دولار أصول' },
          '2025': { title: 'ريادة الصناعة', description: 'اعتراف عالمي' }
        },
        awards: {
          title: 'الجوائز',
          description: 'تكريم من قادة الصناعة للتميز والابتكار',
          innovation: { title: 'جائزة الابتكار', year: '2024' },
          excellence: { title: 'التميز المالي', year: '2023' },
          sustainability: { title: 'قائد الاستدامة', year: '2024' },
          leadership: { title: 'أفضل فريق قيادة', year: '2023' }
        },
        impact: {
          title: 'أثرنا العالمي',
          description: 'تغيير إيجابي من خلال الاستثمار المسؤول',
          capital: { value: '+2.5 مليار', label: 'رأس مال موظف' },
          jobs: { value: '+50 ألف', label: 'وظيفة مستحدثة' },
          communities: { value: '+200', label: 'مجتمع مستفيد' },
          sustainability: { value: '+1 مليون', label: 'طن كربون مخفض' }
        }
      },
      news: {
        announcement_2: {
          title: 'إطلاق مشروع استثماري جديد',
          content: 'يسعدنا الإعلان عن أحدث مبادرتنا للطاقة الشمسية في شمال أفريقيا. انضم إلى المراجعة الأولية الآن.'
        },
        announcement_3: {
          title: 'ندوة خبراء قادمة',
          content: 'لا تفوت جلستنا المباشرة حول اتجاهات السوق 2026. سجل عبر بوابة المسؤول.'
        },
        watch_video: 'مشاهدة الفيديو'
      },
      register: {
        page_title: 'قدم مشروعك',
        page_subtitle: 'تواصل مع مستثمرين لتمويل رؤيتك.',
        title: 'تسجيل المشروع',
        subtitle: 'املأ التفاصيل لتتم مراجعة مشروعك من قبل خبرائنا.',
        name: 'اسم الشخص المسؤول',
        name_placeholder: 'محمد أحمد',
        email: 'البريد الإلكتروني',
        email_placeholder: 'name@startup.com',
        company: 'اسم المشروع/الشركة الناشئة',
        company_placeholder: 'مشروعي المبتكر',
        sector: 'القطاع',
        funding_goal: 'هدف التمويل ($)',
        location: 'الموقع',
        description: 'ملخص المشروع',
        button: 'إرسال المشروع',
        success_title: 'تم إرسال المشروع!',
        success_message: 'تم استلام مشروعك. سيقوم خبراؤنا بمراجعته قريباً.'
      },
      forms: {
        partner: {
          title: 'تسجيل الشركاء',
          subtitle: 'انضم إلى نظام شركائنا الاستراتيجيين.',
          type: 'نوع الشراكة',
          website: 'الموقع الإلكتروني',
          message: 'رسالة',
          types: { strategic: 'استراتيجي', financial: 'مالي', technology: 'تكنولوجي', academic: 'أكاديمي' }
        },
        member: {
          title: 'انضم لفريقنا',
          subtitle: 'قدم طلبك كخبير أو موظف.',
          role: 'الدور',
          specialization: 'التخصص',
          linkedin: 'ملف لينكد إن'
        },
        investor: {
          title: 'تسجيل المستثمرين',
          subtitle: 'احصل على فرص استثمارية حصرية.',
          type: 'نوع المستثمر',
          portfolioSize: 'حجم المحفظة',
          sectors: 'القطاعات',
          ranges: { small: '10 ألف - 50 ألف دولار', medium: '50 ألف - 250 ألف دولار', large: '+250 ألف دولار' },
          phone: 'رقم الهاتف',
          company_name: 'اسم المؤسسة',
          accredited: 'أشهد أنني مستثمر معتمد',
          sector_options: { tech: 'التكنولوجيا', real_estate: 'العقارات', energy: 'الطاقة', healthcare: 'الرعاية الصحية', finance: 'المالية' }
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
