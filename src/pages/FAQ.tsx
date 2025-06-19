import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Shield,
  Truck,
  CreditCard,
  Users,
} from "lucide-react";

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Toutes les questions", icon: HelpCircle },
    { id: "security", name: "Sécurité & Hygiène", icon: Shield },
    { id: "delivery", name: "Livraison", icon: Truck },
    { id: "account", name: "Comptes & Paiement", icon: CreditCard },
    { id: "partner", name: "EatSafe Partner", icon: Users },
  ];

  const faqs = [
    {
      id: 1,
      category: "security",
      question: "Comment assurez-vous la sécurité alimentaire ?",
      answer:
        "Tous les repas sont préparés dans notre cuisine centrale par du personnel formé aux bonnes pratiques d'hygiène. Nous suivons des protocoles stricts pour garantir fraîcheur et sécurité.",
    },
    {
      id: 2,
      category: "security",
      question: "Utilisez-vous des équipements spécifiques pour la livraison ?",
      answer:
        "Oui, nos livreurs utilisent des sacs isothermes adaptés pour maintenir la température des plats tout au long de la livraison.",
    },
    {
      id: 3,
      category: "delivery",
      question: "Dans quelles villes EatSafe est-il disponible ?",
      answer:
        "Nous livrons actuellement à Yaoundé et Douala. Bafoussam est en cours de déploiement. Pour d'autres villes, veuillez nous contacter.",
    },
    {
      id: 4,
      category: "delivery",
      question: "Livrez-vous aux particuliers ?",
      answer:
        "Non, EatSafe est un service exclusivement réservé aux entreprises et aux professionnels.",
    },
    {
      id: 5,
      category: "account",
      question: "Comment créer un compte sur EatSafe ?",
      answer:
        "Téléchargez l'application EatSafe depuis l’App Store ou Google Play, puis inscrivez-vous avec votre adresse professionnelle.",
    },
    {
      id: 6,
      category: "account",
      question: "Comment supprimer mon compte ?",
      answer:
        "Vous pouvez demander la suppression de votre compte en nous contactant à l'adresse dpo@eatsafe.pro. Toutes vos données seront supprimées sous 24 heures après réception de votre demande, et un e-mail de confirmation vous sera envoyé une fois la suppression effectuée.",
    },
    {
      id: 7,
      category: "partner",
      question: "Qu'est-ce que EatSafe Partner ?",
      answer:
        "EatSafe Partner est une application dédiée aux apporteurs d’affaires. Elle vous permet de parrainer des entreprises et de gagner des commissions sur leurs commandes.",
    },
    {
      id: 8,
      category: "partner",
      question: "Comment devenir apporteur d’affaires ?",
      answer:
        "Créez un compte sur l’app EatSafe Partner, puis partagez votre lien de parrainage. Vous recevrez des commissions à chaque commande entreprise liée à votre compte.",
    },
    {
      id: 9,
      category: "security",
      question: "Comment signaler un problème sur une commande ?",
      answer:
        "Contactez notre support via l’application ou par téléphone. Nos équipes sont disponibles aux heures de livraison pour résoudre tout incident rapidement.",
    },
    {
      id: 10,
      category: "delivery",
      question: "Puis-je planifier une livraison à l’avance ?",
      answer:
        "Oui, les entreprises peuvent planifier des livraisons à l’avance directement depuis l’application.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Foire aux Questions
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Trouvez rapidement les réponses à vos questions les plus
              fréquentes sur EatSafe et nos services de livraison.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans la FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-700"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="pb-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  {openItem === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openItem === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Aucune question trouvée
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Essayez de modifier vos critères de recherche ou contactez notre
                support.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Notre équipe support est disponible 24/7 pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Nous contacter
              </motion.a>
              <motion.a
                href="tel:+33123456789"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Appeler maintenant
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
