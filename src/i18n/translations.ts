export type Language = "de" | "en" | "fr" | "es";

export const translations: Record<string, Record<Language, string>> = {
  // ===== NAVIGATION =====
  nav_how: {
    de: "So funktioniert's",
    en: "How it works",
    fr: "Comment ça marche",
    es: "Cómo funciona",
  },
  nav_features: {
    de: "Features",
    en: "Features",
    fr: "Fonctionnalités",
    es: "Características",
  },
  nav_pricing: {
    de: "Preise",
    en: "Pricing",
    fr: "Tarifs",
    es: "Precios",
  },
  nav_cta: {
    de: "Jetzt ausprobieren",
    en: "Try it now",
    fr: "Essayer maintenant",
    es: "Pruébalo ahora",
  },

  // ===== HERO =====
  hero_headline: {
    de: "Geschichten, die dein Kind <highlight>lesen will</highlight>.",
    en: "Stories your child <highlight>wants to read</highlight>.",
    fr: "Des histoires que votre enfant <highlight>veut lire</highlight>.",
    es: "Historias que tu hijo <highlight>quiere leer</highlight>.",
  },
  hero_subline: {
    de: "Personalisierte Abenteuer, die zum Selberlesen begeistern — angepasst an Alter, Sprache und Leseniveau.",
    en: "Personalized adventures that inspire independent reading — tailored to age, language and reading level.",
    fr: "Des aventures personnalisées qui inspirent la lecture autonome — adaptées à l'âge, la langue et le niveau de lecture.",
    es: "Aventuras personalizadas que inspiran la lectura autónoma — adaptadas a la edad, el idioma y el nivel lector.",
  },
  hero_cta: {
    de: "Jetzt kostenlos ausprobieren →",
    en: "Try it free →",
    fr: "Essayer gratuitement →",
    es: "Pruébalo gratis →",
  },
  hero_subtext: {
    de: "Keine Kreditkarte nötig · In 60 Sekunden zur ersten Geschichte",
    en: "No credit card required · First story in 60 seconds",
    fr: "Pas de carte bancaire · Première histoire en 60 secondes",
    es: "Sin tarjeta de crédito · Primera historia en 60 segundos",
  },
  hero_mockup_label: {
    de: "FABLINO",
    en: "FABLINO",
    fr: "FABLINO",
    es: "FABLINO",
  },
  hero_mockup_title: {
    de: "Emmas großes Abenteuer im Zauberwald",
    en: "Emma's Great Adventure in the Magic Forest",
    fr: "La grande aventure d'Emma dans la forêt magique",
    es: "La gran aventura de Emma en el bosque mágico",
  },
  hero_mockup_text: {
    de: "Emma lief durch den dichten Wald. Die Bäume waren so hoch, dass sie den Himmel kaum sehen konnte. Plötzlich hörte sie ein leises Flüstern…",
    en: "Emma walked through the dense forest. The trees were so tall she could barely see the sky. Suddenly she heard a soft whisper…",
    fr: "Emma marchait dans la forêt dense. Les arbres étaient si hauts qu'elle pouvait à peine voir le ciel. Soudain, elle entendit un murmure…",
    es: "Emma caminaba por el denso bosque. Los árboles eran tan altos que apenas podía ver el cielo. De repente, escuchó un susurro…",
  },

  // ===== SOCIAL PROOF =====
  social_headline: {
    de: "Was Eltern über Fablino sagen",
    en: "What parents say about Fablino",
    fr: "Ce que disent les parents de Fablino",
    es: "Lo que dicen los padres sobre Fablino",
  },
  testimonial_1_quote: {
    de: "Seit Fablino fragt mein Sohn jeden Abend nach einer neuen Geschichte. Das hatten wir mit keinem Buch geschafft.",
    en: "Since Fablino, my son asks for a new story every evening. We never achieved that with any book.",
    fr: "Depuis Fablino, mon fils demande une nouvelle histoire chaque soir. On n'avait jamais réussi ça avec aucun livre.",
    es: "Desde Fablino, mi hijo pide una nueva historia cada noche. Nunca lo habíamos logrado con ningún libro.",
  },
  testimonial_1_author: {
    de: "— Sarah, Mama von Noah (7)",
    en: "— Sarah, Mom of Noah (7)",
    fr: "— Sarah, Maman de Noah (7)",
    es: "— Sarah, Mamá de Noah (7)",
  },
  testimonial_2_quote: {
    de: "Endlich eine App die Geschichten in unserer Familiensprache erstellt. Meine Tochter liest jetzt auch auf Polnisch.",
    en: "Finally an app that creates stories in our family language. My daughter now also reads in Polish.",
    fr: "Enfin une appli qui crée des histoires dans notre langue familiale. Ma fille lit maintenant aussi en polonais.",
    es: "Por fin una app que crea historias en nuestro idioma familiar. Mi hija ahora también lee en polaco.",
  },
  testimonial_2_author: {
    de: "— Katarzyna, Mama von Zofia (8)",
    en: "— Katarzyna, Mom of Zofia (8)",
    fr: "— Katarzyna, Maman de Zofia (8)",
    es: "— Katarzyna, Mamá de Zofia (8)",
  },
  testimonial_3_quote: {
    de: "Die Geschichten sind erstaunlich gut. Mein Kind erkennt sich selbst in der Hauptfigur und will immer weiterlesen.",
    en: "The stories are amazingly good. My child recognizes themselves in the main character and always wants to keep reading.",
    fr: "Les histoires sont incroyablement bonnes. Mon enfant se reconnaît dans le personnage principal et veut toujours lire la suite.",
    es: "Las historias son increíblemente buenas. Mi hijo se reconoce en el personaje principal y siempre quiere seguir leyendo.",
  },
  testimonial_3_author: {
    de: "— Thomas, Papa von Lina (6)",
    en: "— Thomas, Dad of Lina (6)",
    fr: "— Thomas, Papa de Lina (6)",
    es: "— Thomas, Papá de Lina (6)",
  },

  // ===== HOW IT WORKS =====
  how_headline: {
    de: "In 3 Schritten zur persönlichen Geschichte",
    en: "Your personal story in 3 steps",
    fr: "Votre histoire personnelle en 3 étapes",
    es: "Tu historia personal en 3 pasos",
  },
  how_step1_title: {
    de: "Name und Alter eingeben",
    en: "Enter name and age",
    fr: "Entrez le prénom et l'âge",
    es: "Ingresa nombre y edad",
  },
  how_step1_desc: {
    de: "Sag uns wie dein Kind heißt und wie alt es ist. Das dauert 10 Sekunden.",
    en: "Tell us your child's name and age. It takes 10 seconds.",
    fr: "Dites-nous le prénom et l'âge de votre enfant. Ça prend 10 secondes.",
    es: "Dinos el nombre y la edad de tu hijo. Toma 10 segundos.",
  },
  how_step2_title: {
    de: "Thema wählen",
    en: "Choose a theme",
    fr: "Choisir un thème",
    es: "Elige un tema",
  },
  how_step2_desc: {
    de: "Abenteuer, Fantasy oder Lustig — ein Tap genügt. Fablino kümmert sich um den Rest.",
    en: "Adventure, Fantasy or Funny — one tap is enough. Fablino takes care of the rest.",
    fr: "Aventure, Fantaisie ou Drôle — un tap suffit. Fablino s'occupe du reste.",
    es: "Aventura, Fantasía o Divertido — un toque basta. Fablino se encarga del resto.",
  },
  how_step3_title: {
    de: "Geschichte lesen",
    en: "Read the story",
    fr: "Lire l'histoire",
    es: "Leer la historia",
  },
  how_step3_desc: {
    de: "In unter 60 Sekunden hält dein Kind seine eigene, personalisierte Geschichte in der Hand.",
    en: "In under 60 seconds, your child has their own personalized story.",
    fr: "En moins de 60 secondes, votre enfant a sa propre histoire personnalisée.",
    es: "En menos de 60 segundos, tu hijo tiene su propia historia personalizada.",
  },
  how_cta: {
    de: "Jetzt erste Geschichte erstellen →",
    en: "Create your first story →",
    fr: "Créer votre première histoire →",
    es: "Crea tu primera historia →",
  },

  // ===== FEATURES =====
  features_headline: {
    de: "Warum Eltern Fablino lieben",
    en: "Why parents love Fablino",
    fr: "Pourquoi les parents aiment Fablino",
    es: "Por qué los padres aman Fablino",
  },
  feature_1_title: {
    de: "14+ Sprachen",
    en: "14+ Languages",
    fr: "14+ Langues",
    es: "14+ Idiomas",
  },
  feature_1_desc: {
    de: "Deutsch, Französisch, Englisch, Spanisch, Polnisch, Türkisch, Ungarisch und viele mehr. Perfekt für mehrsprachige Familien.",
    en: "German, French, English, Spanish, Polish, Turkish, Hungarian and many more. Perfect for multilingual families.",
    fr: "Allemand, français, anglais, espagnol, polonais, turc, hongrois et bien d'autres. Parfait pour les familles multilingues.",
    es: "Alemán, francés, inglés, español, polaco, turco, húngaro y muchos más. Perfecto para familias multilingües.",
  },
  feature_2_title: {
    de: "Lesen wird zum Spiel",
    en: "Reading becomes a game",
    fr: "Lire devient un jeu",
    es: "Leer se convierte en un juego",
  },
  feature_2_desc: {
    de: "Sterne sammeln, Level aufsteigen, Quizzes bestehen. Dein Kind will von selbst weiterlesen.",
    en: "Collect stars, level up, pass quizzes. Your child will want to keep reading on their own.",
    fr: "Collecter des étoiles, monter de niveau, réussir des quiz. Votre enfant voudra continuer à lire de lui-même.",
    es: "Colecciona estrellas, sube de nivel, aprueba quizzes. Tu hijo querrá seguir leyendo por su cuenta.",
  },
  feature_3_title: {
    de: "Mehr als nur Geschichten",
    en: "More than just stories",
    fr: "Plus que de simples histoires",
    es: "Más que solo historias",
  },
  feature_3_desc: {
    de: "Jede Geschichte fördert spielerisch wichtige Fähigkeiten — Empathie, Geduld, Selbstvertrauen. Du wählst die Lernthemen.",
    en: "Every story playfully develops important skills — empathy, patience, self-confidence. You choose the learning themes.",
    fr: "Chaque histoire développe de manière ludique des compétences importantes — empathie, patience, confiance en soi. Vous choisissez les thèmes d'apprentissage.",
    es: "Cada historia desarrolla de forma lúdica habilidades importantes — empatía, paciencia, autoconfianza. Tú eliges los temas de aprendizaje.",
  },
  feature_4_title: {
    de: "100% kindersicher",
    en: "100% child-safe",
    fr: "100% sûr pour les enfants",
    es: "100% seguro para niños",
  },
  feature_4_desc: {
    de: "Keine Werbung. Keine In-App-Käufe. Keine Tracker. Altersgerechte Inhalte. Du bestimmst was dein Kind liest.",
    en: "No ads. No in-app purchases. No trackers. Age-appropriate content. You decide what your child reads.",
    fr: "Pas de publicité. Pas d'achats intégrés. Pas de trackers. Contenu adapté à l'âge. Vous décidez ce que votre enfant lit.",
    es: "Sin publicidad. Sin compras dentro de la app. Sin rastreadores. Contenido apropiado para la edad. Tú decides lo que lee tu hijo.",
  },
  feature_5_title: {
    de: "Kapitelgeschichten",
    en: "Chapter Stories",
    fr: "Histoires à chapitres",
    es: "Historias por capítulos",
  },
  feature_5_desc: {
    de: "Mehrteilige Abenteuer, bei denen dein Kind die Handlung beeinflusst. Wie ein Buch, das nie aufhört.",
    en: "Multi-part adventures where your child shapes the plot. Like a book that never ends.",
    fr: "Des aventures en plusieurs parties où votre enfant influence l'intrigue. Comme un livre qui ne finit jamais.",
    es: "Aventuras de varias partes donde tu hijo influye en la trama. Como un libro que nunca termina.",
  },

  // ===== LANGUAGE BANNER =====
  lang_headline: {
    de: "Kindergeschichten in der Sprache eurer Familie",
    en: "Children's stories in your family's language",
    fr: "Des histoires pour enfants dans la langue de votre famille",
    es: "Cuentos infantiles en el idioma de tu familia",
  },
  lang_subline: {
    de: "Litauisch, Ungarisch, Katalanisch, Türkisch, Bulgarisch, Polnisch, Portugiesisch — Fablino erstellt Geschichten in Sprachen, für die es vor Ort kaum Kinderbücher gibt.",
    en: "Lithuanian, Hungarian, Catalan, Turkish, Bulgarian, Polish, Portuguese — Fablino creates stories in languages where local children's books are scarce.",
    fr: "Lituanien, hongrois, catalan, turc, bulgare, polonais, portugais — Fablino crée des histoires dans des langues où les livres pour enfants locaux sont rares.",
    es: "Lituano, húngaro, catalán, turco, búlgaro, polaco, portugués — Fablino crea historias en idiomas donde los libros infantiles locales son escasos.",
  },
  lang_highlight: {
    de: "Damit dein Kind auch in der Familiensprache liest.",
    en: "So your child reads in their family language too.",
    fr: "Pour que votre enfant lise aussi dans sa langue familiale.",
    es: "Para que tu hijo también lea en su idioma familiar.",
  },
  lang_cta: {
    de: "Geschichte in deiner Sprache erstellen →",
    en: "Create a story in your language →",
    fr: "Créer une histoire dans votre langue →",
    es: "Crea una historia en tu idioma →",
  },

  // ===== APP PREVIEW =====
  preview_headline: {
    de: "Ein Leseerlebnis wie ein echtes Kinderbuch",
    en: "A reading experience like a real children's book",
    fr: "Une expérience de lecture comme un vrai livre pour enfants",
    es: "Una experiencia de lectura como un libro infantil de verdad",
  },
  preview_subline: {
    de: "Personalisierte Illustrationen, Seite für Seite — direkt auf dem Tablet oder Handy.",
    en: "Personalized illustrations, page by page — right on your tablet or phone.",
    fr: "Des illustrations personnalisées, page après page — directement sur votre tablette ou téléphone.",
    es: "Ilustraciones personalizadas, página a página — directamente en tu tablet o móvil.",
  },
  preview_placeholder: {
    de: "Screenshot kommt bald",
    en: "Screenshot coming soon",
    fr: "Capture d'écran bientôt disponible",
    es: "Captura de pantalla próximamente",
  },
  preview_placeholder_sub: {
    de: "Immersive Reading Experience",
    en: "Immersive Reading Experience",
    fr: "Expérience de lecture immersive",
    es: "Experiencia de lectura inmersiva",
  },

  // ===== PRICING =====
  pricing_headline: {
    de: "Einfach und transparent",
    en: "Simple and transparent",
    fr: "Simple et transparent",
    es: "Simple y transparente",
  },
  pricing_beta_badge: {
    de: "Beta-Tester? Jetzt komplett kostenlos!",
    en: "Beta tester? Completely free right now!",
    fr: "Bêta-testeur ? Totalement gratuit maintenant !",
    es: "¿Beta tester? ¡Completamente gratis ahora!",
  },
  pricing_beta_sub: {
    de: "Teste 14 Tage alle Features. Keine Kreditkarte nötig.",
    en: "Try all features for 14 days. No credit card required.",
    fr: "Essayez toutes les fonctionnalités pendant 14 jours. Sans carte bancaire.",
    es: "Prueba todas las funciones durante 14 días. Sin tarjeta de crédito.",
  },
  pricing_plan_name: {
    de: "Fablino",
    en: "Fablino",
    fr: "Fablino",
    es: "Fablino",
  },
  pricing_monthly: {
    de: "4,99€",
    en: "€4.99",
    fr: "4,99€",
    es: "4,99€",
  },
  pricing_monthly_label: {
    de: "/ Monat",
    en: "/ month",
    fr: "/ mois",
    es: "/ mes",
  },
  pricing_yearly: {
    de: "oder 39,99€ / Jahr (spar 33%)",
    en: "or €39.99 / year (save 33%)",
    fr: "ou 39,99€ / an (économisez 33%)",
    es: "o 39,99€ / año (ahorra 33%)",
  },
  pricing_feature_1: {
    de: "Unbegrenzte Geschichten",
    en: "Unlimited stories",
    fr: "Histoires illimitées",
    es: "Historias ilimitadas",
  },
  pricing_feature_2: {
    de: "14+ Sprachen",
    en: "14+ Languages",
    fr: "14+ Langues",
    es: "14+ Idiomas",
  },
  pricing_feature_3: {
    de: "Quizzes & Gamification",
    en: "Quizzes & Gamification",
    fr: "Quiz & Gamification",
    es: "Quizzes y Gamificación",
  },
  pricing_feature_4: {
    de: "Personalisierte Bilder",
    en: "Personalized images",
    fr: "Images personnalisées",
    es: "Imágenes personalizadas",
  },
  pricing_feature_5: {
    de: "Lernthemen wählbar",
    en: "Choose learning themes",
    fr: "Thèmes d'apprentissage au choix",
    es: "Elige temas de aprendizaje",
  },
  pricing_feature_6: {
    de: "Bis zu 3 Kinderprofile",
    en: "Up to 3 child profiles",
    fr: "Jusqu'à 3 profils enfants",
    es: "Hasta 3 perfiles infantiles",
  },
  pricing_cta: {
    de: "Kostenlos ausprobieren",
    en: "Try for free",
    fr: "Essayer gratuitement",
    es: "Prueba gratis",
  },
  pricing_beta_offer: {
    de: "🎉 Beta-Angebot: Erste 3 Monate nur 2,99€/Monat",
    en: "🎉 Beta offer: First 3 months only €2.99/month",
    fr: "🎉 Offre bêta : Les 3 premiers mois à seulement 2,99€/mois",
    es: "🎉 Oferta beta: Los primeros 3 meses solo 2,99€/mes",
  },
  pricing_footer: {
    de: "Jederzeit kündbar. Keine versteckten Kosten.",
    en: "Cancel anytime. No hidden costs.",
    fr: "Résiliable à tout moment. Pas de coûts cachés.",
    es: "Cancela cuando quieras. Sin costes ocultos.",
  },

  // ===== TRUST =====
  trust_1_title: {
    de: "Daten in Europa",
    en: "Data in Europe",
    fr: "Données en Europe",
    es: "Datos en Europa",
  },
  trust_1_desc: {
    de: "Gehostet in der EU. DSGVO-konform.",
    en: "Hosted in the EU. GDPR compliant.",
    fr: "Hébergé dans l'UE. Conforme au RGPD.",
    es: "Alojado en la UE. Conforme al RGPD.",
  },
  trust_2_title: {
    de: "Privatsphäre geschützt",
    en: "Privacy protected",
    fr: "Vie privée protégée",
    es: "Privacidad protegida",
  },
  trust_2_desc: {
    de: "Keine Daten an Dritte verkauft. Niemals.",
    en: "No data sold to third parties. Ever.",
    fr: "Aucune donnée vendue à des tiers. Jamais.",
    es: "Ningún dato vendido a terceros. Nunca.",
  },
  trust_3_title: {
    de: "Kindersicher",
    en: "Child-safe",
    fr: "Sûr pour les enfants",
    es: "Seguro para niños",
  },
  trust_3_desc: {
    de: "Keine Werbung, keine Tracker, keine In-App-Käufe.",
    en: "No ads, no trackers, no in-app purchases.",
    fr: "Pas de publicité, pas de trackers, pas d'achats intégrés.",
    es: "Sin publicidad, sin rastreadores, sin compras integradas.",
  },
  trust_paragraph: {
    de: "Fablino wurde in Belgien entwickelt, für europäische Familien. Wir nutzen künstliche Intelligenz um Geschichten zu erstellen — aber wir verkaufen niemals persönliche Daten.",
    en: "Fablino was built in Belgium, for European families. We use artificial intelligence to create stories — but we never sell personal data.",
    fr: "Fablino a été créé en Belgique, pour les familles européennes. Nous utilisons l'intelligence artificielle pour créer des histoires — mais nous ne vendons jamais de données personnelles.",
    es: "Fablino fue creado en Bélgica, para familias europeas. Usamos inteligencia artificial para crear historias — pero nunca vendemos datos personales.",
  },

  // ===== FOOTER CTA =====
  footer_cta_headline: {
    de: "Bereit für die erste Geschichte?",
    en: "Ready for the first story?",
    fr: "Prêt pour la première histoire ?",
    es: "¿Listo para la primera historia?",
  },
  footer_cta_subline: {
    de: "In 60 Sekunden erstellt Fablino ein personalisiertes Leseabenteuer für dein Kind.",
    en: "In 60 seconds Fablino creates a personalized reading adventure for your child.",
    fr: "En 60 secondes, Fablino crée une aventure de lecture personnalisée pour votre enfant.",
    es: "En 60 segundos Fablino crea una aventura de lectura personalizada para tu hijo.",
  },
  footer_cta_button: {
    de: "Jetzt kostenlos ausprobieren →",
    en: "Try it free →",
    fr: "Essayer gratuitement →",
    es: "Pruébalo gratis →",
  },

  // ===== FOOTER =====
  footer_product: {
    de: "Produkt",
    en: "Product",
    fr: "Produit",
    es: "Producto",
  },
  footer_legal: {
    de: "Legal",
    en: "Legal",
    fr: "Légal",
    es: "Legal",
  },
  footer_contact: {
    de: "Kontakt",
    en: "Contact",
    fr: "Contact",
    es: "Contacto",
  },
  footer_privacy: {
    de: "Datenschutz",
    en: "Privacy Policy",
    fr: "Politique de confidentialité",
    es: "Política de privacidad",
  },
  footer_terms: {
    de: "AGB",
    en: "Terms of Service",
    fr: "Conditions générales",
    es: "Términos de servicio",
  },
  footer_impressum: {
    de: "Impressum",
    en: "Imprint",
    fr: "Mentions légales",
    es: "Aviso legal",
  },
  footer_made: {
    de: "Made with 🦊 in Belgium",
    en: "Made with 🦊 in Belgium",
    fr: "Fait avec 🦊 en Belgique",
    es: "Hecho con 🦊 en Bélgica",
  },
  footer_copyright: {
    de: "© 2026 Fablino. Alle Rechte vorbehalten.",
    en: "© 2026 Fablino. All rights reserved.",
    fr: "© 2026 Fablino. Tous droits réservés.",
    es: "© 2026 Fablino. Todos los derechos reservados.",
  },

  // ===== MOBILE STICKY CTA =====
  mobile_sticky_cta: {
    de: "Jetzt ausprobieren →",
    en: "Try it now →",
    fr: "Essayer maintenant →",
    es: "Pruébalo ahora →",
  },
};
