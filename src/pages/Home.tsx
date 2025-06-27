import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  Star,
  Download,
  Smartphone,
  UtensilsCrossed,
  Coins,
  MapPin,
  Utensils,
  Truck,
  Phone,
  Building2,
  Award,
} from "lucide-react";

export function Home() {
  const scrollRef = useRef(null);
  const features = [
    {
      icon: Coins,
      title: "Prix imbattables",
      description:
        "Nos tarifs défient toute concurrence, sans compromis sur la qualité.",
    },
    {
      icon: Truck,
      title: "Livraison gratuite",
      description: "Pas de frais de livraison pour toutes vos commandes.",
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description:
        "Normes sanitaires strictes, avec contrôles qualité assurés par l'État et des experts du secteur privé.",
    },
    {
      icon: Clock,
      title: "Livraison rapide",
      description:
        "Livraison rapide et fiable dans toute la ville de Douala et Yaoundé.",
    },
    // {
    //   icon: Users,
    //   title: "Livreurs professionnels",
    //   description:
    //     "Notre propre équipe de livreurs formés et équipés pour une livraison en toute sécurité.",
    // },
    {
      icon: UtensilsCrossed,
      title: "Service traiteur à la demande",
      description:
        "Créez votre menu personnalisé pour vos événements. Livraison et service inclus selon vos besoins.",
    },
    {
      icon: Utensils,
      title: "Cuisine locale",
      description:
        "Découvrez les meilleurs restaurants camerounais et plats traditionnels.",
    },
    {
      icon: MapPin,
      title: "Couverture étendue",
      description:
        "Service disponible dans les principales villes du Cameroun.",
    },
    {
      icon: Phone,
      title: "Support 24/7",
      description: "Assistance client disponible en français et en anglais.",
    },
  ];

  const dishes = [
    {
      name: "Ndolé",
      image: "/dishes/Ndole_plat_camerounais.jpg",
      region: "Littoral",
      description: "Feuilles d'amarante au beurre d'arachide",
    },
    {
      name: "Mitumba",
      image: "/dishes/Mintumba_plat_camerounais.jpg",
      region: "Centre",
      description: "À base de manioc frais fermenté et d'huile de palme rouge",
    },
    {
      name: "Okok",
      image: "/dishes/okok_plat_camerounais.jpg",
      region: "Sud",
      description: "Feuilles de manioc aux arachides",
    },
    {
      name: "Eru",
      image: "/dishes/eru_plat_camerounais.jpg",
      region: "Nord-Ouest / Sud-Ouest",
      description: "Plat à base de feuilles Eru et waterleaf",
    },
    {
      name: "Mil & Gombo",
      image: "/dishes/mil_gombo_plat_camerounais.jpeg",
      region: "Nord",
      description: "Boule de mil accompagnée de sauce gombo",
    },
    {
      name: "Kossam & Beignets",
      image: "/dishes/kossam_plat_camerounais.jpg",
      region: "Extrême-Nord",
      description: "Lait caillé avec beignets locaux",
    },
  ];

  const handleDownloadpartner = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.eatsafe.partner",
      "_blank"
    );
  };

  const handleDownload = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.foodindustry.eatsafe",
      "_blank"
    );
  };

  const infiniteDishes = [...dishes, ...dishes, ...dishes];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Vitesse lente et continue
    const cardWidth = 280; // Largeur d'une card + gap
    const resetPoint = dishes.length * cardWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset la position quand on arrive à la fin du premier set
      if (scrollPosition >= resetPoint) {
        scrollPosition = 0;
      }

      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dishes.length]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-red-600 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-2 text-yellow-300" />
                <span className="text-yellow-300 font-semibold">Cameroun</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                EatSafe Cameroun
                <span className="block text-yellow-200">
                  Votre app de livraison préférée
                </span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Commandez vos plats favoris depuis nos unités de production
              </p>
              <p className="text-md text-yellow-100 mb-8 font-medium italic">
                Service destinée aux personnes en activité professionnelle dans
                une organisation et restauration déportée en entreprise
                (cantine)
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-green-50 transition-colors shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>Télécharger l'app</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadpartner}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-white hover:text-green-700 transition-colors"
                >
                  <span>Devenir partenaire</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-lg mt-5 text-yellow-200 font-semibold mb-6">
                Livraison gratuite partout à Douala et Yaoundé !
              </p>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto">
                <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl">
                  <img src="/app.jpg" alt="" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pourquoi choisir EatSafe au Cameroun ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              De Douala à Yaoundé, découvrez une application pensée pour les
              Camerounais. Commandez vos plats locaux préférés en toute sécurité
              et simplicité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Plats populaires au Cameroun
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez les saveurs authentiques du Cameroun livrées directement
              chez vous.
            </p>
          </motion.div>

          {/* Container du scroll infini */}
          <div className="relative">
            {/* Ligne de connexion décorative */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent transform -translate-y-1/2 z-0"></div>

            {/* Points de connexion qui bougent */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
              <div className="flex space-x-64">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-green-400 rounded-full shadow-lg"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Cards en mouvement */}
            <div className="relative z-10">
              <div
                ref={scrollRef}
                className="flex gap-6 will-change-transform"
                style={{ width: "max-content" }}
              >
                {infiniteDishes.map((dish, index) => (
                  <motion.div
                    key={`${dish.name}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % dishes.length) * 0.1 }}
                    className="flex-shrink-0 w-64 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-white dark:hover:bg-gray-700"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium italic">
                      {dish.region}
                    </p>
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {dish.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/logo.png"
              alt="eatsafe-logo"
              className="w-20 h-20 mx-auto mb-6"
            />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Téléchargez EatSafe maintenant
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
              Rejoignez des milliers de Camerounais qui font confiance à EatSafe
              pour leurs livraisons quotidiennes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold flex items-center space-x-3 hover:bg-green-50 transition-colors shadow-lg text-lg"
              >
                <Download className="w-6 h-6" />
                <span>Télécharger sur Google Play</span>
              </motion.button>

              <div className="flex items-center space-x-2 text-yellow-300">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">3.8 / 5</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Effet de fond */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* En-tête avec logo Solutions RH+ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img
                src="/solution_rh+.png"
                alt="Solutions RH+"
                className="w-16 h-16 object-contain"
              />
              {/* <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg"> */}
              {/* </div> */}
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">Solutions RH+</h3>
                <p className="text-blue-300 text-sm">Food Industry</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              EatSafe fait partie de{" "}
              <strong className="text-blue-400"> Solutions RH+ Food Industry</strong>,
              l'une des entreprises du groupe des entreprises de <strong className="text-blue-400"> Solutions RH+</strong>
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2 text-green-400">150+</div>
              <div className="text-gray-300">Livraisons réussies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2 text-red-400">13+</div>
              <div className="text-gray-300">Livreurs dédiés</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2 text-yellow-400">4.1</div>
              <div className="text-gray-300 flex items-center justify-center">
                <Award className="w-5 h-5 mr-1 fill-current text-yellow-400" />
                Note moyenne
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2 text-blue-400">2</div>
              <div className="text-gray-300">Villes couvertes</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vous êtes restaurateur ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Rejoignez notre réseau de restaurants partenaires et développez
              votre activité avec EatSafe.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors mx-auto"
            >
              <Truck className="w-5 h-5" />
              <span>Devenir partenaire</span>
            </motion.button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
