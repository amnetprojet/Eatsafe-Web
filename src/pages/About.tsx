import React from "react";
import { motion } from "framer-motion";
import { Shield, Heart, Users, MapPin, Target, Award } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Sécurité",
      description:
        "Nous garantissons le respect des normes sanitaires les plus strictes.",
    },
    {
      icon: Heart,
      title: "Santé",
      description: "La santé de nos clients est notre priorité absolue.",
    },
    {
      icon: Users,
      title: "Professionnalisme",
      description:
        "Notre équipe de livreurs est formée aux meilleures pratiques.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque livraison.",
    },
  ];

  const team = [
    {
      name: "Marie Dubois",
      role: "CEO & Fondatrice",
      description: "Experte en sécurité alimentaire avec 15 ans d'expérience.",
    },
    {
      name: "Pierre Martin",
      role: "CTO",
      description: "Développeur passionné par les technologies de livraison.",
    },
    {
      name: "Sophie Bernard",
      role: "Responsable Qualité",
      description: "Garante du respect des normes sanitaires.",
    },
    {
      name: "Thomas Leroy",
      role: "Responsable Partenariats",
      description: "Développement du réseau de restaurants partenaires.",
    },
  ];

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              À propos d'EatSafe
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Notre mission est de révolutionner la livraison professionnelle en
              garantissant la sécurité et la qualité à chaque étape de votre
              expérience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                EatSafe s'engage à fournir des services de livraison
                professionnels exclusivement dédiés aux entreprises. Nous
                mettons la sécurité sanitaire au cœur de nos préoccupations.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Tous les repas sont cuisinés par notre propre équipe, dans une
                cuisine professionnelle, pour une livraison saine et sécurisée
                aux entreprises.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl"
            >
              <Award className="w-16 h-16 text-red-600 dark:text-red-400 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Engagement Qualité
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Chez EatSafe, nous appliquons des standards internes stricts en
                matière d’hygiène et de qualité, pour garantir des repas sûrs et
                adaptés au monde professionnel.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Les principes qui guident notre action quotidienne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des experts passionnés au service de votre sécurité alimentaire
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 dark:text-red-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Coverage Area */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Zones Desservies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                EatSafe opère actuellement dans les principales villes du
                Cameroun, avec un service réservé aux entreprises. Notre
                couverture s’élargit progressivement pour répondre à la demande
                croissante.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Yaoundé
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Douala
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Autres villes sur demande pour les entreprises
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-600 p-8 rounded-2xl text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Expansion Continue</h3>
              <p className="text-red-100 mb-6">
                Nous étendons constamment notre couverture pour servir toujours
                plus d'entreprises à travers le pays.
              </p>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-red-200">Villes desservies</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
