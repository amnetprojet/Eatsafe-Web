import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  Star,
  Download,
  Smartphone,
  MapPin,
  Utensils,
  Truck,
  Phone,
} from "lucide-react";

export function Home() {
  const features = [
    {
      icon: Truck,
      title: "Livraison gratuite",
      description: "Pas de frais de livraison pour toutes vos commandes.",
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description:
        "Normes sanitaires strictes et contrôles qualité rigoureux pour chaque livraison.",
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
                Commandez vos plats favoris depuis les meilleurs restaurants du
                Cameroun. Livraison rapide, sécurisée et savoureuse.
              </p>
              <p className="text-lg text-yellow-200 font-semibold mb-6">
                Livraison gratuite partout à Douala et Yaoundé !
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
      <section className="py-20 bg-white dark:bg-gray-900">
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Ndolé",
                emoji: "🥬",
                description: "Plat national camerounais",
              },
              {
                name: "Poulet DG",
                emoji: "🍗",
                description: "Poulet aux légumes",
              },
              {
                name: "Poisson braisé",
                emoji: "🐟",
                description: "Grillé aux épices",
              },
              {
                name: "Eru",
                emoji: "🥘",
                description: "Spécialité du Sud-Ouest",
              },
            ].map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{dish.emoji}</div>
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
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/logo.png" alt="eatsafe-logo" className="w-20 h-20 mx-auto mb-6" />
            {/* <Smartphone className="w-16 h-16 mx-auto mb-6 text-yellow-300" /> */}
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Star className="w-5 h-5 mr-1 fill-current text-yellow-400" />
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
