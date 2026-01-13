import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Badge } from "@/components/ui";
import { CTASection } from "@/components/sections";

// Données complètes des articles
const blogPostsData: Record<string, {
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string[];
  category: string;
  tags: string[];
  readingTime: number;
  publishedAt: string;
}> = {
  "pourquoi-site-web-indispensable-2024": {
    title: "Pourquoi un site web est indispensable en 2024",
    metaTitle: "7 raisons d'avoir un site web professionnel pour votre entreprise en 2024",
    metaDescription: "Découvrez pourquoi 93% des décisions d'achat commencent en ligne. Visibilité permanente, crédibilité, génération de clients : votre entreprise ne peut plus se passer d'un site web.",
    excerpt: "Découvrez pourquoi avoir un site web professionnel est devenu incontournable pour toute entreprise, quelle que soit sa taille.",
    content: [
      "En 2024, la transformation digitale n'est plus une option, c'est une question de survie pour les entreprises. Selon une étude récente, 93% des expériences en ligne commencent par un moteur de recherche, et 81% des consommateurs effectuent des recherches en ligne avant de réaliser un achat important. Si votre entreprise n'est pas visible sur le web, vous passez à côté d'une immense majorité de vos clients potentiels.",
      "## L'évolution du comportement des consommateurs",
      "Le parcours d'achat a radicalement changé ces dernières années. Avant de contacter une entreprise, de se déplacer en boutique ou de passer commande, le consommateur moderne effectue systématiquement des recherches en ligne. Il compare les offres, lit les avis, étudie les prestations et les tarifs. Ce comportement concerne tous les secteurs d'activité, du commerce de proximité aux services B2B en passant par l'artisanat.",
      "Une entreprise sans site web est tout simplement invisible pour cette majorité de prospects. Pire encore, l'absence de présence en ligne peut être interprétée comme un manque de sérieux ou un signe que l'entreprise n'est plus en activité.",
      "## 1. Une vitrine commerciale accessible 24 heures sur 24, 7 jours sur 7",
      "Contrairement à une boutique physique avec des horaires d'ouverture limités, votre site web accueille vos visiteurs à toute heure du jour et de la nuit. Un prospect peut découvrir vos services à 23h un dimanche soir, consulter votre catalogue à 6h du matin avant de partir au travail, ou vous envoyer une demande de devis pendant sa pause déjeuner.",
      "Cette disponibilité permanente démultiplie vos opportunités commerciales. Votre site web travaille pour vous même quand vous dormez, quand vous êtes en vacances ou quand vous êtes occupé avec d'autres clients. C'est un commercial infatigable qui présente votre entreprise avec la même efficacité à chaque visiteur.",
      "## 2. Crédibilité et image professionnelle renforcées",
      "Les études montrent que 75% des consommateurs jugent la crédibilité d'une entreprise en fonction de la qualité de son site web. Un site moderne, bien conçu et régulièrement mis à jour inspire confiance. Il démontre que vous prenez votre activité au sérieux et que vous investissez dans votre image.",
      "À l'inverse, un site obsolète, mal conçu ou inexistant peut faire fuir les prospects vers vos concurrents. Dans un monde où la première impression se fait souvent en ligne, votre site web est votre carte de visite numérique. Il doit refléter le professionnalisme et la qualité de vos prestations.",
      "## 3. Élargissement de votre zone de chalandise sans limites géographiques",
      "Traditionnellement, une entreprise locale était limitée à sa zone géographique immédiate. Avec un site web optimisé, vous pouvez toucher des clients dans toute votre région, dans tout le pays, voire à l'international. Cette expansion ne nécessite pas d'investissement immobilier, pas de nouveaux locaux, pas de personnel supplémentaire sur place.",
      "Pour les artisans, commerçants et prestataires de services, c'est une opportunité extraordinaire de développement. Un électricien peut attirer des clients de communes voisines qu'il n'aurait jamais touchés autrement. Un consultant peut proposer ses services à distance à des entreprises de toute la France.",
      "## 4. Un outil puissant de génération de prospects qualifiés",
      "Un site web bien conçu n'est pas qu'une simple vitrine : c'est une machine à générer des leads. Grâce à des formulaires de contact stratégiquement placés, des call-to-action percutants et un bon référencement naturel, votre site attire des prospects déjà intéressés par vos services.",
      "Ces leads sont qualifiés car ils vous ont trouvé en cherchant activement une solution à leur problème. Contrairement à la prospection à froid, ces prospects sont déjà dans une démarche d'achat. Le taux de conversion est donc naturellement plus élevé, et le coût d'acquisition client plus faible.",
      "## 5. Maîtrise totale de votre communication et de votre image",
      "Sur les réseaux sociaux, vous êtes soumis aux algorithmes qui décident de la visibilité de vos publications. Une plateforme peut modifier ses règles du jour au lendemain, réduisant drastiquement votre portée. Vous ne possédez pas votre audience, vous l'empruntez.",
      "Votre site web, en revanche, vous appartient entièrement. Vous contrôlez le message, le design, le contenu, les fonctionnalités. C'est votre territoire digital, avec vos règles. Vous n'êtes pas dépendant des décisions d'une entreprise tierce pour communiquer avec vos clients.",
      "## 6. Un investissement rentable sur le long terme",
      "Contrairement à la publicité payante qui cesse de produire des résultats dès que vous arrêtez de payer, un site web bien référencé continue d'attirer des visiteurs pendant des années. C'est un investissement, pas une dépense. Le coût par contact diminue au fil du temps à mesure que votre référencement s'améliore.",
      "De plus, un site web permet d'automatiser de nombreuses tâches : réponses aux questions fréquentes, prise de rendez-vous, envoi de devis types, présentation de votre catalogue... Ce gain de temps se traduit directement en économies et en productivité.",
      "## 7. Un avantage concurrentiel décisif",
      "Si vos concurrents ont un site web et pas vous, ils captent les clients qui vous auraient peut-être choisi. Si vous avez un meilleur site que vos concurrents, vous prenez l'avantage. Dans un marché compétitif, la présence en ligne peut faire toute la différence entre une entreprise qui prospère et une qui stagne.",
      "## Comment passer à l'action",
      "Créer un site web professionnel n'est plus réservé aux grandes entreprises avec des budgets conséquents. Des solutions adaptées existent pour tous les budgets, de la simple page vitrine au site e-commerce complet. L'important est de commencer, puis d'améliorer progressivement.",
      "## Conclusion : ne laissez pas passer votre chance",
      "Chaque jour sans site web est un jour où vous laissez des clients potentiels aller chez vos concurrents. L'investissement dans une présence en ligne professionnelle est l'un des plus rentables qu'une entreprise puisse faire aujourd'hui. N'attendez pas que le retard soit impossible à rattraper."
    ],
    category: "Business",
    tags: ["présence en ligne", "entreprise", "transformation digitale"],
    readingTime: 12,
    publishedAt: "2024-01-15"
  },
  "seo-bases-bien-referencer-site": {
    title: "SEO : les bases pour bien référencer son site",
    metaTitle: "Guide complet du référencement naturel : comment apparaître sur Google",
    metaDescription: "Maîtrisez les fondamentaux du SEO pour positionner votre site en première page de Google. Techniques on-page, contenu, backlinks : le guide pratique pour débutants.",
    excerpt: "Les fondamentaux du référencement naturel expliqués simplement pour améliorer la visibilité de votre site sur Google.",
    content: [
      "Le référencement naturel, ou SEO (Search Engine Optimization), est l'ensemble des techniques permettant d'améliorer la visibilité d'un site web dans les résultats des moteurs de recherche. Contrairement à la publicité payante, le SEO génère un trafic organique et durable. Maîtriser les bases du référencement est essentiel pour toute entreprise souhaitant développer sa présence en ligne.",
      "## Comprendre le fonctionnement de Google",
      "Pour bien référencer son site, il faut d'abord comprendre comment Google fonctionne. Le moteur de recherche utilise des robots (crawlers) qui parcourent le web en suivant les liens d'une page à l'autre. Ces robots analysent le contenu de chaque page et l'indexent dans une gigantesque base de données.",
      "Lorsqu'un utilisateur effectue une recherche, Google analyse sa requête et affiche les résultats les plus pertinents selon des centaines de critères. L'objectif du SEO est d'optimiser votre site pour correspondre au mieux à ces critères et ainsi apparaître dans les premières positions.",
      "## Les trois piliers fondamentaux du référencement naturel",
      "### Premier pilier : l'optimisation technique",
      "La technique est le socle de votre référencement. Sans une base technique solide, tous vos efforts de contenu et de netlinking seront compromis. Voici les éléments essentiels à maîtriser :",
      "La vitesse de chargement est cruciale. Google a confirmé que c'est un critère de classement, et les utilisateurs abandonnent un site qui met plus de 3 secondes à s'afficher. Optimisez vos images, utilisez la mise en cache, choisissez un hébergement performant.",
      "L'adaptabilité mobile (responsive design) n'est plus optionnelle. Avec l'indexation mobile-first de Google, c'est la version mobile de votre site qui est analysée en priorité. Un site non responsive sera sévèrement pénalisé.",
      "La sécurité HTTPS est devenue un standard. Les sites non sécurisés sont signalés comme dangereux par les navigateurs, ce qui fait fuir les visiteurs et dégrade votre positionnement.",
      "L'architecture du site doit être claire et logique. Une structure en silo, avec des catégories bien définies et un maillage interne cohérent, aide les robots à comprendre et indexer votre contenu.",
      "### Deuxième pilier : le contenu de qualité",
      "\"Content is King\" : cette maxime reste plus vraie que jamais. Google cherche à fournir les meilleures réponses aux questions des utilisateurs. Pour bien vous positionner, vous devez créer du contenu qui répond précisément aux intentions de recherche de votre cible.",
      "Chaque page doit cibler un mot-clé principal et quelques mots-clés secondaires sémantiquement liés. Mais attention : il ne s'agit pas de répéter mécaniquement ces mots-clés. L'écriture doit rester naturelle et apporter une réelle valeur ajoutée au lecteur.",
      "La longueur du contenu compte. Les études montrent que les contenus longs et approfondis se positionnent généralement mieux que les textes courts. Un article de 2000 mots bien structuré aura plus de chances de ranker qu'un texte de 300 mots superficiel.",
      "La fraîcheur du contenu est également un facteur. Un site régulièrement mis à jour envoie un signal positif à Google. Publiez régulièrement de nouveaux contenus et actualisez vos pages existantes.",
      "### Troisième pilier : la popularité et les backlinks",
      "Les liens entrants (backlinks) provenant d'autres sites sont considérés par Google comme des votes de confiance. Plus vous recevez de liens de qualité, plus votre site est considéré comme une référence dans votre domaine.",
      "Tous les liens ne se valent pas. Un lien provenant d'un site reconnu et thématiquement proche a beaucoup plus de valeur qu'un lien d'un site obscur sans rapport avec votre activité. La qualité prime sur la quantité.",
      "Pour obtenir des backlinks naturellement, créez du contenu remarquable que les gens auront envie de partager et de citer. Les infographies, études, guides complets et outils gratuits sont particulièrement efficaces pour attirer des liens.",
      "## Les bonnes pratiques d'optimisation on-page",
      "- La balise title (titre de la page) doit contenir votre mot-clé principal et inciter au clic. Elle apparaît dans les résultats de recherche et doit être unique pour chaque page.\n- La meta description résume le contenu de la page en 155 caractères environ. Elle n'influence pas directement le classement mais impacte le taux de clic.\n- Les balises Hn (H1, H2, H3...) structurent votre contenu et aident Google à en comprendre la hiérarchie. Utilisez un seul H1 par page, contenant votre mot-clé principal.\n- Les URL doivent être courtes, descriptives et contenir vos mots-clés. Évitez les URL avec des paramètres complexes ou des identifiants numériques.\n- Les images doivent être optimisées : format adapté (WebP de préférence), compression, attribut alt descriptif contenant vos mots-clés.",
      "## Mesurer et analyser ses performances SEO",
      "Le SEO ne se fait pas à l'aveugle. Utilisez Google Search Console pour suivre vos positions, identifier les requêtes qui génèrent des impressions et détecter les problèmes techniques. Google Analytics vous permet de mesurer le trafic organique et le comportement des visiteurs sur votre site.",
      "Suivez l'évolution de vos positions sur vos mots-clés principaux. Analysez quelles pages performent et pourquoi. Identifiez les opportunités d'amélioration. Le SEO est un processus continu d'optimisation.",
      "## Le temps, facteur clé du référencement",
      "Le SEO est un travail de fond qui demande de la patience. Contrairement à la publicité payante qui produit des résultats immédiats (mais temporaires), le référencement naturel met plusieurs mois à porter ses fruits. En revanche, les résultats sont durables et cumulatifs.",
      "Une stratégie SEO bien menée sur 6 à 12 mois peut transformer votre acquisition client pour les années à venir. C'est un investissement dans l'avenir de votre entreprise.",
      "## Conclusion : par où commencer ?",
      "Si vous débutez en SEO, concentrez-vous d'abord sur les fondamentaux : un site techniquement sain, rapide et mobile-friendly, avec des pages optimisées pour vos mots-clés principaux. Créez régulièrement du contenu de qualité qui répond aux questions de vos clients. Les résultats suivront."
    ],
    category: "SEO",
    tags: ["référencement naturel", "Google", "visibilité en ligne"],
    readingTime: 15,
    publishedAt: "2024-01-08"
  },
  "tendances-web-design-2024": {
    title: "Les tendances web design à suivre en 2024",
    metaTitle: "8 tendances design de sites web incontournables pour moderniser votre image",
    metaDescription: "Minimalisme, mode sombre, animations fluides, typographies XXL... Explorez les tendances graphiques 2024 pour créer un site qui marque les esprits et convertit.",
    excerpt: "Minimalisme, dark mode, micro-interactions... Découvrez les tendances qui vont marquer le web design cette année.",
    content: [
      "Le design d'un site web est bien plus qu'une question d'esthétique. C'est un levier stratégique qui influence directement la perception de votre marque, l'expérience utilisateur et vos taux de conversion. En 2024, certaines tendances se démarquent et redéfinissent les standards du web design professionnel.",
      "## Pourquoi suivre les tendances design ?",
      "Un site au design daté envoie un message négatif : il suggère une entreprise qui ne se renouvelle pas, qui n'investit pas dans son image. À l'inverse, un design moderne et soigné inspire confiance et professionnalisme.",
      "Mais attention : suivre les tendances ne signifie pas les adopter aveuglément. L'objectif est de sélectionner celles qui correspondent à votre identité de marque et aux attentes de votre cible. Un design efficace est un design qui sert vos objectifs business.",
      "## 1. Le minimalisme radical : l'art de l'essentiel",
      "Le minimalisme domine le web design depuis plusieurs années, et cette tendance s'accentue. Les sites les plus efficaces sont ceux qui ont fait le choix de l'épure : peu d'éléments, beaucoup d'espace blanc (ou \"white space\"), un message clair.",
      "Cette approche n'est pas qu'esthétique : elle améliore concrètement l'expérience utilisateur. En réduisant le bruit visuel, vous guidez le regard vers ce qui compte vraiment : votre proposition de valeur et vos call-to-action. Le visiteur n'est pas distrait, il comprend immédiatement ce que vous proposez et ce qu'il doit faire.",
      "Pour appliquer le minimalisme efficacement, chaque élément de votre page doit justifier sa présence. Si un élément n'apporte pas de valeur, supprimez-le. Moins de distractions, plus de conversions.",
      "## 2. Le mode sombre : élégance et confort visuel",
      "Le \"dark mode\" n'est plus une option de niche réservée aux développeurs. C'est devenu une attente des utilisateurs, habitués à basculer en mode sombre sur leurs applications préférées. De nombreux sites proposent désormais un switch clair/sombre.",
      "Au-delà de l'esthétique sophistiquée qu'il apporte, le mode sombre présente des avantages pratiques : réduction de la fatigue oculaire lors de consultations prolongées, économie de batterie sur les écrans OLED, meilleure lisibilité dans les environnements peu éclairés.",
      "Implémenter un dark mode nécessite une réflexion sur l'ensemble de votre palette de couleurs. Les contrastes doivent rester suffisants pour l'accessibilité, et certains éléments graphiques doivent être adaptés pour fonctionner sur fond sombre.",
      "## 3. Les micro-interactions : donner vie à l'interface",
      "Les micro-interactions sont ces petites animations qui répondent aux actions de l'utilisateur : un bouton qui change d'état au survol, une confirmation visuelle après l'envoi d'un formulaire, un élément qui se déplace subtilement lors du scroll.",
      "Ces détails peuvent sembler anecdotiques, mais ils ont un impact significatif sur l'expérience utilisateur. Ils créent un sentiment de réactivité et de qualité. L'interface semble \"vivante\" et premium. L'utilisateur reçoit un feedback constant qui le rassure sur ses actions.",
      "La clé est la subtilité. Des animations trop prononcées ou trop nombreuses deviennent distrayantes, voire agaçantes. Les meilleures micro-interactions sont celles qu'on remarque à peine consciemment mais qui améliorent le ressenti global.",
      "## 4. La typographie comme élément central du design",
      "En 2024, la typographie n'est plus un simple véhicule du texte : elle devient un élément de design à part entière. Les polices XXL, expressives et audacieuses captent immédiatement l'attention. Elles véhiculent la personnalité de la marque avant même que le texte ne soit lu.",
      "Cette tendance va de pair avec la réduction du nombre de visuels. Plutôt que de multiplier les images, certains sites misent sur des titres typographiques forts qui créent l'impact visuel. Le texte lui-même devient graphique.",
      "Pour exploiter cette tendance, investissez dans une typographie distinctive qui reflète votre positionnement. Une police bien choisie peut différencier votre site de la concurrence et renforcer la mémorabilité de votre marque.",
      "## 5. Les dégradés subtils : profondeur et modernité",
      "Les dégradés reviennent en force, mais dans une version beaucoup plus sophistiquée que les effets criards des années 2000. Les dégradés modernes sont subtils, souvent presque imperceptibles, utilisant des teintes proches pour créer de la profondeur.",
      "Ils permettent d'ajouter du dynamisme à un design minimaliste sans le surcharger. Un fond légèrement dégradé est plus intéressant visuellement qu'un aplat uniforme, tout en restant élégant. Les dégradés fonctionnent particulièrement bien pour les sections hero et les call-to-action.",
      "## 6. Le scroll storytelling : raconter une histoire au fil de la page",
      "Le scroll est devenu un geste naturel, surtout sur mobile. Les sites modernes exploitent ce comportement pour raconter une histoire progressive. Au lieu de tout montrer d'un coup, le contenu se révèle au fil du défilement, créant une expérience narrative.",
      "Cette approche maintient l'attention et guide le visiteur vers votre objectif de conversion. Chaque section répond à une question, lève une objection ou renforce un argument. Le visiteur arrive naturellement à votre call-to-action après avoir été convaincu étape par étape.",
      "Le scroll storytelling est particulièrement efficace pour les pages d'accueil, les landing pages et les pages de présentation de produits ou services.",
      "## 7. L'accessibilité intégrée dès la conception",
      "L'accessibilité n'est plus une fonctionnalité optionnelle : c'est une exigence légale et éthique. Un bon design est un design utilisable par tous, y compris les personnes en situation de handicap.",
      "Concrètement, cela signifie des contrastes suffisants entre texte et fond, une navigation possible au clavier, des textes alternatifs pour les images, des tailles de police suffisantes, des zones de clic assez grandes sur mobile...",
      "Au-delà de l'aspect éthique, l'accessibilité améliore l'expérience pour tous les utilisateurs et favorise le référencement naturel. Google valorise les sites accessibles.",
      "## 8. L'authenticité visuelle : en finir avec les photos génériques",
      "Les banques d'images génériques avec leurs photos de personnes souriantes en costume ont fait leur temps. Les utilisateurs les reconnaissent instantanément et les associent à un manque d'authenticité.",
      "En 2024, les marques qui se démarquent investissent dans des visuels authentiques : photos sur-mesure, illustrations personnalisées, vidéos de leurs équipes et de leurs locaux. Cette authenticité crée de la confiance et de la connexion émotionnelle.",
      "## Comment appliquer ces tendances à votre site",
      "Ne cherchez pas à tout implémenter d'un coup. Identifiez les 2 ou 3 tendances les plus pertinentes pour votre marque et votre cible. Un site cohérent qui applique bien quelques principes sera toujours plus efficace qu'un site qui tente d'empiler toutes les tendances.",
      "## Conclusion : le design au service de la conversion",
      "Les tendances passent, mais certains principes demeurent : clarté, cohérence, focus sur l'utilisateur. Un bon design est celui qui aide vos visiteurs à comprendre votre offre et à passer à l'action. Utilisez ces tendances non pas comme des fins en soi, mais comme des outils au service de vos objectifs business."
    ],
    category: "Design",
    tags: ["graphisme web", "UI design", "expérience utilisateur"],
    readingTime: 14,
    publishedAt: "2024-01-02"
  },
  "vitesse-chargement-impact-conversion": {
    title: "Vitesse de chargement : l'impact sur vos conversions",
    metaTitle: "Performance web et taux de conversion : optimiser la rapidité de votre site",
    metaDescription: "53% des visiteurs abandonnent un site qui charge en plus de 3 secondes. Découvrez comment la lenteur impacte vos ventes et les techniques pour accélérer votre site.",
    excerpt: "Chaque seconde compte ! Comprenez l'impact de la performance sur vos ventes et comment optimiser votre site.",
    content: [
      "Dans l'économie de l'attention, chaque seconde compte. La vitesse de chargement de votre site web n'est pas qu'une question technique : c'est un facteur business critique qui impacte directement votre chiffre d'affaires. Les études sont formelles : un site lent fait fuir les clients et plombe vos conversions.",
      "## Des chiffres qui parlent d'eux-mêmes",
      "Les données sur l'impact de la vitesse sont sans appel et devraient alerter tout propriétaire de site web :",
      "- 53% des visiteurs mobiles abandonnent un site qui met plus de 3 secondes à charger. Plus de la moitié de votre audience potentielle peut disparaître avant même d'avoir vu votre contenu.\n- Chaque seconde de délai supplémentaire réduit les conversions de 7%. Pour un site e-commerce réalisant 100 000€ de ventes mensuelles, une seconde de latence représente 7 000€ de manque à gagner chaque mois.\n- Amazon a calculé qu'une latence de 100 millisecondes (un dixième de seconde !) leur coûte 1% de ventes. À leur échelle, cela représente des milliards de dollars.\n- Google a constaté que passer de 0,4 à 0,9 seconde de temps de chargement réduisait le trafic de 20%.",
      "## Pourquoi les utilisateurs sont-ils si impatients ?",
      "Cette impatience n'est pas un caprice. Elle est le résultat de l'évolution des usages numériques. Habitués aux applications natives ultra-rapides et aux géants du web qui investissent massivement dans la performance, les utilisateurs ont développé des attentes élevées.",
      "Sur mobile, l'impatience est encore plus marquée. Les utilisateurs consultent souvent leur téléphone dans des moments creux : file d'attente, transports, pause... Ils n'ont que quelques secondes à accorder et passent à autre chose si le contenu ne s'affiche pas immédiatement.",
      "## L'impact sur le référencement naturel",
      "Google a officiellement intégré la vitesse comme critère de classement. Le moteur de recherche souhaite offrir la meilleure expérience à ses utilisateurs, et cela passe par des sites rapides.",
      "Les Core Web Vitals, introduits par Google, mesurent trois aspects de la performance perçue : le Largest Contentful Paint (LCP) mesure le temps d'affichage du contenu principal, le First Input Delay (FID) mesure la réactivité à la première interaction, et le Cumulative Layout Shift (CLS) mesure la stabilité visuelle de la page.",
      "Un site avec de mauvais Core Web Vitals sera désavantagé dans les résultats de recherche, perdant en visibilité et donc en trafic.",
      "## L'expérience utilisateur dégradée",
      "Au-delà des métriques, un site lent dégrade profondément l'expérience utilisateur. Le visiteur ressent de la frustration, de l'agacement. Cette émotion négative se transfère inconsciemment à votre marque.",
      "À l'inverse, un site ultra-rapide crée une impression de fluidité, de modernité, de professionnalisme. Le visiteur se sent bien, son parcours est agréable. Il est dans de meilleures dispositions pour faire confiance et convertir.",
      "## Les principales causes de lenteur",
      "### Images non optimisées",
      "C'est la cause numéro un des sites lents. Des images trop lourdes, non compressées, dans des formats inadaptés peuvent multiplier le temps de chargement par 10. Une image de 5 Mo là où 200 Ko suffiraient est un problème courant.",
      "### Hébergement sous-dimensionné",
      "Un hébergement mutualisé à bas coût peut sembler économique, mais il coûte cher en performances. Quand des centaines de sites partagent les mêmes ressources serveur, les temps de réponse s'allongent.",
      "### Code non optimisé",
      "Des fichiers CSS et JavaScript lourds, non minifiés, chargés de manière bloquante, ralentissent le rendu de la page. Les plugins superflus, le code legacy, les dépendances inutiles alourdissent le site.",
      "### Absence de mise en cache",
      "Sans cache, le navigateur recharge l'intégralité des ressources à chaque visite. Avec un cache bien configuré, les éléments statiques sont conservés localement et le chargement est quasi instantané.",
      "## Les techniques d'optimisation essentielles",
      "- Compression et redimensionnement des images : utilisez des formats modernes (WebP), des outils de compression, et ne chargez pas des images plus grandes que nécessaire.\n- Choix d'un hébergement performant : investissez dans un hébergement de qualité avec des serveurs rapides et bien localisés géographiquement.\n- Minification du code : réduisez la taille des fichiers CSS et JavaScript en supprimant espaces, commentaires et caractères inutiles.\n- Mise en cache navigateur : configurez les headers HTTP pour que les ressources statiques soient conservées par le navigateur.\n- Chargement asynchrone : évitez que les scripts bloquent le rendu en les chargeant de manière asynchrone ou différée.\n- CDN (Content Delivery Network) : distribuez vos contenus statiques sur des serveurs répartis géographiquement pour réduire la latence.",
      "## Comment mesurer la performance de votre site",
      "Plusieurs outils gratuits permettent d'auditer la vitesse de votre site. Google PageSpeed Insights analyse votre page et fournit un score sur 100 avec des recommandations concrètes. Lighthouse, intégré aux outils développeur de Chrome, offre un audit plus complet. GTmetrix et WebPageTest permettent des analyses approfondies.",
      "Testez votre site régulièrement, sur mobile comme sur desktop. Simulez des connexions lentes pour voir l'expérience de vos visiteurs dans des conditions moins idéales.",
      "## Conclusion : la performance comme avantage compétitif",
      "Dans un marché où tous les concurrents ont un site web, la performance devient un différenciateur. Un site ultra-rapide améliore l'expérience utilisateur, le référencement, les conversions et l'image de marque. C'est un investissement rentable qui profite à tous les aspects de votre activité en ligne."
    ],
    category: "Performance",
    tags: ["temps de chargement", "optimisation technique", "Core Web Vitals"],
    readingTime: 14,
    publishedAt: "2023-12-20"
  },
  "choisir-cms-wordpress-vs-sur-mesure": {
    title: "WordPress vs Site sur-mesure : que choisir ?",
    metaTitle: "CMS WordPress ou développement custom : guide pour choisir votre solution web",
    metaDescription: "Hésitation entre WordPress et un site codé sur-mesure ? Comparatif détaillé des coûts, performances, sécurité et évolutivité pour prendre la bonne décision.",
    excerpt: "Comparaison détaillée pour vous aider à choisir la meilleure solution technique pour votre projet web.",
    content: [
      "Le choix de la technologie pour votre site web est une décision structurante qui influencera votre projet pendant des années. D'un côté, WordPress et les CMS (Content Management Systems) offrent une solution accessible et rapide à déployer. De l'autre, le développement sur-mesure promet une liberté totale et des performances optimales. Comment choisir ?",
      "## Comprendre les deux approches",
      "### Qu'est-ce qu'un CMS comme WordPress ?",
      "Un CMS est une plateforme préconçue qui permet de créer et gérer un site web sans connaissances techniques poussées. WordPress est le leader incontesté avec plus de 40% des sites web dans le monde. Drupal, Joomla, Wix, Squarespace sont d'autres exemples de CMS.",
      "Le principe : vous installez la plateforme, choisissez un thème (template) pour le design, ajoutez des plugins pour les fonctionnalités souhaitées, et créez votre contenu via une interface d'administration.",
      "### Qu'est-ce qu'un développement sur-mesure ?",
      "Un site sur-mesure est développé spécifiquement pour votre projet par des développeurs, en partant d'une feuille blanche ou de frameworks de développement. Chaque fonctionnalité est codée pour répondre exactement à vos besoins.",
      "Les technologies utilisées peuvent être variées : PHP, JavaScript avec React ou Vue, Python, Ruby... Le choix dépend du projet et des compétences de l'équipe de développement.",
      "## Les avantages de WordPress et des CMS",
      "### Coût initial réduit",
      "Un site WordPress peut être créé avec un budget modéré. Les thèmes premium coûtent quelques dizaines d'euros, les plugins essentiels sont souvent gratuits ou peu coûteux. La mise en place est rapide, ce qui réduit les coûts de main-d'œuvre.",
      "### Autonomie dans la gestion du contenu",
      "L'interface d'administration de WordPress est intuitive. Après une courte formation, vous pouvez modifier vos textes, ajouter des images, publier des articles de blog sans intervention technique. Cette autonomie est précieuse pour les entreprises qui veulent réagir rapidement.",
      "### Écosystème riche de plugins",
      "Besoin d'un formulaire de contact, d'une galerie photo, d'un système de réservation, d'une boutique en ligne ? Il existe probablement un plugin WordPress pour cela. Cet écosystème permet d'ajouter des fonctionnalités sans développement.",
      "### Communauté et ressources",
      "Avec des millions d'utilisateurs, WordPress bénéficie d'une communauté active. Documentation, tutoriels, forums d'entraide : les ressources sont innombrables. Il est facile de trouver des prestataires compétents.",
      "## Les limites de WordPress",
      "### Performances parfois insuffisantes",
      "WordPress et ses plugins ajoutent des couches de code qui alourdissent le site. Un site WordPress mal optimisé peut être significativement plus lent qu'un site sur-mesure bien développé. Pour les projets où la performance est critique, c'est un handicap.",
      "### Sécurité à surveiller",
      "La popularité de WordPress en fait une cible privilégiée pour les hackers. Les plugins tiers peuvent introduire des failles de sécurité. Une maintenance régulière (mises à jour, sauvegardes, surveillance) est indispensable.",
      "### Personnalisation parfois limitée",
      "Pour des besoins très spécifiques, les thèmes et plugins atteignent leurs limites. Adapter WordPress à un fonctionnement métier complexe peut devenir aussi coûteux qu'un développement sur-mesure, avec en plus les contraintes du CMS.",
      "### Dépendance aux mises à jour",
      "Les mises à jour de WordPress, des thèmes et des plugins peuvent parfois créer des incompatibilités. Un plugin abandonné par son développeur peut devenir un problème de sécurité. Vous dépendez d'un écosystème que vous ne contrôlez pas.",
      "## Les avantages du sur-mesure",
      "### Performance optimale",
      "Un site sur-mesure ne contient que le code nécessaire à votre projet. Pas de fonctionnalités inutilisées, pas de couches superflues. Le résultat : des temps de chargement optimaux et une expérience utilisateur fluide.",
      "### Sécurité renforcée",
      "Le code est unique, donc moins vulnérable aux attaques automatisées qui ciblent les failles connues des CMS populaires. La surface d'attaque est réduite et le code peut être audité spécifiquement pour votre site.",
      "### Flexibilité totale",
      "Aucune limite technique à ce que vous pouvez réaliser. Vos processus métier spécifiques, vos intégrations avec des outils tiers, votre vision unique : tout peut être implémenté exactement comme vous le souhaitez.",
      "### Évolutivité maîtrisée",
      "Le site peut être conçu dès le départ pour supporter votre croissance. L'architecture est pensée pour vos besoins futurs, pas contrainte par les choix d'un CMS généraliste.",
      "## Les limites du sur-mesure",
      "### Investissement initial plus important",
      "Le développement sur-mesure demande plus de temps et d'expertise, donc un budget plus conséquent. C'est un investissement qui se rentabilise sur le long terme mais qui peut être un frein pour les petits projets.",
      "### Dépendance au prestataire technique",
      "Contrairement à WordPress où de nombreux prestataires peuvent intervenir, un site sur-mesure nécessite souvent de faire appel à l'équipe qui l'a développé, ou à des développeurs capables de reprendre le code.",
      "### Délai de mise en œuvre",
      "Un développement sur-mesure prend généralement plus de temps qu'une installation WordPress. Si vous avez besoin d'un site opérationnel très rapidement, cela peut être contraignant.",
      "## Comment choisir : les questions à se poser",
      "### Quels sont vos besoins fonctionnels ?",
      "Un site vitrine simple ou un blog ? WordPress est parfaitement adapté. Des fonctionnalités métier spécifiques, des intégrations complexes ? Le sur-mesure sera plus pertinent.",
      "### Quel est votre budget ?",
      "Avec un budget limité, WordPress permet d'avoir un site professionnel rapidement. Avec plus de moyens, le sur-mesure offre un meilleur retour sur investissement à long terme.",
      "### Quelle importance accordez-vous à la performance ?",
      "Si la vitesse est critique pour votre business (e-commerce, application métier...), le sur-mesure a un avantage significatif.",
      "### Quelle est votre vision à 5 ans ?",
      "Pour un projet ambitieux qui va évoluer considérablement, mieux vaut partir sur des bases solides avec du sur-mesure. Pour un site qui restera stable, WordPress peut suffire.",
      "## Une troisième voie : le compromis",
      "Il existe des solutions intermédiaires. Les frameworks headless permettent de combiner un back-office type CMS avec un front-end sur-mesure. Des CMS modernes comme Strapi ou Directus offrent plus de flexibilité que WordPress.",
      "## Conclusion : pas de solution universelle",
      "Le meilleur choix est celui qui correspond à votre situation spécifique : besoins, budget, ambitions, contraintes de temps. N'hésitez pas à consulter un professionnel qui pourra analyser votre projet et vous orienter vers la solution la plus adaptée."
    ],
    category: "Technique",
    tags: ["choix technologique", "CMS", "développement web"],
    readingTime: 16,
    publishedAt: "2023-12-15"
  },
  "rgpd-conformite-site-web": {
    title: "RGPD : votre site est-il conforme ?",
    metaTitle: "Mise en conformité RGPD de votre site web : obligations et checklist pratique",
    metaDescription: "Cookies, formulaires, politique de confidentialité : vérifiez que votre site respecte le RGPD. Checklist des obligations légales et sanctions encourues jusqu'à 20M€.",
    excerpt: "Checklist complète pour mettre votre site en conformité avec le RGPD et éviter les sanctions.",
    content: [
      "Le Règlement Général sur la Protection des Données (RGPD), entré en vigueur en mai 2018, a profondément changé les règles du jeu pour tous les sites web collectant des données sur des résidents européens. Les sanctions peuvent atteindre 20 millions d'euros ou 4% du chiffre d'affaires mondial. Au-delà des risques légaux, la conformité RGPD est devenue un enjeu de confiance pour vos visiteurs.",
      "## Qu'est-ce que le RGPD et qui est concerné ?",
      "Le RGPD est un règlement européen qui encadre la collecte, le traitement et la conservation des données personnelles. Une donnée personnelle est toute information permettant d'identifier directement ou indirectement une personne : nom, email, adresse IP, cookies...",
      "Tous les sites web qui collectent des données sur des résidents européens sont concernés, quelle que soit la localisation de l'entreprise. Concrètement, si votre site a un formulaire de contact, utilise des cookies de tracking, propose une newsletter, ou intègre des outils comme Google Analytics, vous êtes soumis au RGPD.",
      "## Les grands principes à respecter",
      "### Le consentement libre et éclairé",
      "Vous devez obtenir le consentement explicite de l'utilisateur avant de collecter ses données. Ce consentement doit être libre (pas de case pré-cochée), spécifique (pour chaque finalité), éclairé (l'utilisateur sait à quoi il consent) et univoque (action positive claire).",
      "L'utilisateur doit pouvoir refuser aussi facilement qu'il accepte. Les pratiques qui rendent le refus plus compliqué que l'acceptation (\"dark patterns\") sont contraires au RGPD.",
      "### La minimisation des données",
      "Ne collectez que les données strictement nécessaires à la finalité déclarée. Si vous proposez une newsletter, vous n'avez besoin que de l'email. Demander le numéro de téléphone, la date de naissance ou l'adresse postale serait excessif.",
      "### La limitation de conservation",
      "Les données ne peuvent pas être conservées indéfiniment. Vous devez définir une durée de conservation proportionnée à la finalité. Un contact commercial peut être supprimé après 3 ans sans interaction. Les données d'un compte client peuvent être conservées pendant la durée de la relation commerciale plus les délais légaux.",
      "### La sécurisation des données",
      "Vous êtes responsable de la sécurité des données que vous collectez. Cela implique un hébergement sécurisé, le chiffrement HTTPS, des accès restreints, des sauvegardes régulières, et des mesures contre les intrusions.",
      "## Le bandeau cookies : les règles à respecter",
      "Le bandeau cookies est souvent la première interaction du visiteur avec votre site. Il doit respecter des règles précises :",
      "### Ce qui est obligatoire",
      "- Informer clairement sur l'utilisation des cookies et leur finalité\n- Proposer un bouton pour accepter ET un bouton pour refuser (au même niveau de visibilité)\n- Permettre un paramétrage fin par catégorie de cookies\n- Ne pas déposer de cookies non essentiels avant le consentement\n- Conserver la preuve du consentement",
      "### Ce qui est interdit",
      "- Les cases pré-cochées\n- Le \"cookie wall\" qui bloque l'accès au site sans acceptation (sauf cas très particuliers)\n- Le bouton \"refuser\" moins visible que le bouton \"accepter\"\n- Les formulations trompeuses ou culpabilisantes\n- Le dépôt de cookies avant toute action de l'utilisateur",
      "### Les cookies exemptés de consentement",
      "Certains cookies strictement nécessaires au fonctionnement du site ne nécessitent pas de consentement : cookies de session, panier d'achat, authentification, préférences de langue, cookies de sécurité. Mais les cookies d'analyse et de publicité nécessitent toujours le consentement.",
      "## La politique de confidentialité",
      "Votre site doit comporter une politique de confidentialité complète et accessible. Elle doit informer les visiteurs sur :",
      "- L'identité du responsable de traitement (vous ou votre entreprise)\n- Les données collectées et leur finalité\n- La base légale du traitement (consentement, contrat, intérêt légitime...)\n- Les destinataires des données (sous-traitants, partenaires...)\n- Les transferts hors UE éventuels\n- La durée de conservation\n- Les droits des personnes et comment les exercer\n- Les coordonnées du DPO si vous en avez un",
      "## Les droits des utilisateurs",
      "Le RGPD renforce considérablement les droits des personnes sur leurs données. Vous devez être en mesure de répondre à ces demandes :",
      "### Droit d'accès",
      "Toute personne peut demander quelles données vous détenez sur elle et en obtenir une copie.",
      "### Droit de rectification",
      "L'utilisateur peut demander la correction de données inexactes ou incomplètes.",
      "### Droit à l'effacement",
      "Le fameux \"droit à l'oubli\" permet de demander la suppression de ses données, sous certaines conditions.",
      "### Droit d'opposition",
      "L'utilisateur peut s'opposer au traitement de ses données, notamment à des fins de prospection.",
      "### Droit à la portabilité",
      "L'utilisateur peut récupérer ses données dans un format structuré pour les transférer ailleurs.",
      "## Checklist de conformité pour votre site",
      "✅ Bandeau cookies conforme avec option de refus équivalente à l'acceptation\n✅ Politique de confidentialité complète et à jour\n✅ Mentions légales incluant les informations RGPD\n✅ Formulaires avec cases de consentement explicite (non pré-cochées)\n✅ Connexion sécurisée HTTPS sur tout le site\n✅ Durées de conservation définies pour chaque type de données\n✅ Procédure pour répondre aux demandes d'exercice des droits\n✅ Registre des activités de traitement\n✅ Contrats de sous-traitance avec vos prestataires (hébergeur, outils...)\n✅ Procédure de notification en cas de violation de données",
      "## Les sanctions en cas de non-conformité",
      "La CNIL (Commission Nationale de l'Informatique et des Libertés) peut prononcer des sanctions allant de l'avertissement à l'amende administrative. Les amendes peuvent atteindre 20 millions d'euros ou 4% du chiffre d'affaires annuel mondial, le montant le plus élevé étant retenu.",
      "Ces sanctions ne sont pas théoriques. En 2022, la CNIL a prononcé plus de 100 millions d'euros d'amendes, touchant aussi bien des géants du web que des PME. L'utilisation de Google Analytics sans consentement conforme a par exemple fait l'objet de nombreuses mises en demeure.",
      "## Au-delà de la conformité : un enjeu de confiance",
      "La conformité RGPD n'est pas qu'une contrainte légale. C'est aussi un argument commercial. Les consommateurs sont de plus en plus sensibles à la protection de leurs données. Un site transparent sur ses pratiques inspire confiance et se différencie des acteurs moins scrupuleux.",
      "Afficher clairement vos engagements en matière de protection des données, proposer un bandeau cookies respectueux, permettre facilement l'exercice des droits : ces éléments contribuent à votre image de marque.",
      "## Conclusion : agir maintenant",
      "Si votre site n'est pas encore en conformité, il est urgent d'agir. Les contrôles de la CNIL se multiplient, souvent suite à des plaintes d'utilisateurs. Faites auditer votre site et mettez en place les correctifs nécessaires. C'est un investissement modeste au regard des risques encourus et des bénéfices en termes d'image."
    ],
    category: "Légal",
    tags: ["protection des données", "conformité légale", "CNIL"],
    readingTime: 16,
    publishedAt: "2023-12-10"
  }
};

// Générer les paramètres statiques pour toutes les pages
export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug,
  }));
}

// Générer les métadonnées dynamiques pour le SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData[slug];
  
  if (!post) {
    return {
      title: "Article non trouvé | Webonia",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Hugo Allou"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `https://webonia.fr/blog/${slug}`,
    },
  };
}

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = blogPostsData[slug];

  if (!post) {
    notFound();
  }

  // Trouver les articles connexes (même catégorie)
  const relatedPosts = Object.entries(blogPostsData)
    .filter(([key, p]) => key !== slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      {/* JSON-LD pour l'article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Person",
              name: "Hugo Allou",
            },
            datePublished: post.publishedAt,
            publisher: {
              "@type": "Organization",
              name: "Webonia",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[var(--color-gray-50)] to-white">
        <div className="container max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--color-gray-500)] hover:text-[var(--color-primary)] transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au blog
          </Link>

          <Badge variant="primary" className="mb-4">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-secondary)] mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[var(--color-gray-500)]">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Hugo Allou
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readingTime} min de lecture
            </span>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <Section background="white" className="!pt-8">
        <article className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-[var(--color-secondary)] mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold text-[var(--color-secondary)] mt-8 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ") || paragraph.startsWith("✅")) {
                const items = paragraph.split("\n");
                return (
                  <ul key={index} className="list-none space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[var(--color-gray-600)]">
                        {item.startsWith("✅") ? (
                          <>
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{item.replace("✅ ", "")}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-[var(--color-primary)] mt-1">•</span>
                            <span>{item.replace("- ", "")}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith("**")) {
                return (
                  <div key={index} className="bg-[var(--color-gray-50)] p-6 rounded-lg my-6">
                    <p className="text-[var(--color-gray-600)] whitespace-pre-line">
                      {paragraph.replace(/\*\*/g, "")}
                    </p>
                  </div>
                );
              }
              return (
                <p key={index} className="text-[var(--color-gray-600)] leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[var(--color-gray-200)]">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[var(--color-gray-100)] text-[var(--color-gray-600)] rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </Section>

      {/* Articles connexes */}
      {relatedPosts.length > 0 && (
        <Section background="gray">
          <h2 className="text-2xl font-bold text-[var(--color-secondary)] text-center mb-8">
            Articles similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map(([relatedSlug, relatedPost]) => (
              <Link
                key={relatedSlug}
                href={`/blog/${relatedSlug}`}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Badge variant="secondary" size="sm" className="mb-3">
                  {relatedPost.category}
                </Badge>
                <h3 className="text-lg font-bold text-[var(--color-secondary)] mb-2 hover:text-[var(--color-primary)] transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-[var(--color-gray-500)] text-sm line-clamp-2">
                  {relatedPost.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
