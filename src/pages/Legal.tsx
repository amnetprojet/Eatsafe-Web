import React from "react";
import { motion } from "framer-motion";
import { Building, FileText, Shield } from "lucide-react";

export function Legal() {
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
            <FileText className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Informations légales et réglementaires concernant EatSafe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Building className="w-8 h-8 text-red-600 dark:text-red-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Informations sur l'entreprise
                </h2>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Raison sociale
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">EatSafe</p>
                  </div>
                  {/* <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Capital social</h3>
                    <p className="text-gray-600 dark:text-gray-300">500 000 €</p>
                  </div> */}
                  {/* <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">SIRET</h3>
                    <p className="text-gray-600 dark:text-gray-300">12345678901234</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">RCS</h3>
                    <p className="text-gray-600 dark:text-gray-300">Paris B 123 456 789</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">TVA Intracommunautaire</h3>
                    <p className="text-gray-600 dark:text-gray-300">FR12345678901</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Code APE</h3>
                    <p className="text-gray-600 dark:text-gray-300">5320Z</p> */}
                  {/* </div> */}
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email :</strong> contact@eatsafe.pro
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Site web :</strong> www.eatsafe.pro
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Director */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Direction de la publication
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300">
                  AM'NET, Agence de communication digitale
                </p>
              </div>
            </motion.div>

            {/* Hosting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-red-600 dark:text-red-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Hébergement
                </h2>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ce site est hébergé par :
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Hostinger</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    HOSTINGER INTERNATIONAL LTD, <br />
                    61 Lordou Vironos Street, <br />
                    6023 Larnaca, Chypr
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Propriété intellectuelle
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  L'ensemble du contenu de ce site (textes, images, vidéos,
                  logos, icônes, etc.) est la propriété exclusive de EatSafe,
                  sauf mention contraire. Toute reproduction, distribution,
                  modification, adaptation, retransmission ou publication de ces
                  différents éléments est strictement interdite sans l'accord
                  écrit préalable de EatSafe.
                </p>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Limitation de responsabilité
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  EatSafe s'efforce de fournir des informations aussi
                  précises que possible sur ce site. Toutefois, elle ne pourra
                  être tenue responsable des omissions, des inexactitudes et des
                  carences dans la mise à jour, qu'elles soient de son fait ou
                  du fait des tiers partenaires qui lui fournissent ces
                  informations.
                </p>
              </div>
            </motion.div>

            {/* Applicable Law */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Droit applicable
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Les présentes mentions légales sont soumises au droit
                  camerounais. En cas de litige, les tribunaux camerounais seront
                  seuls compétents.
                </p>
              </div>
            </motion.div>

            {/* Last Update */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <p className="text-gray-500 dark:text-gray-400">
                Dernière mise à jour : 19 juin 2025
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
