import React from "react";
import { motion } from "framer-motion";
import { FileText, AlertTriangle, Scale } from "lucide-react";

export function Terms() {
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
            <Scale className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Conditions d'utilisation des services EatSafe pour les entreprises
              et partenaires
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                1. Objet et champ d'application
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Les présentes Conditions Générales d'Utilisation (CGU)
                  régissent l'accès et l'utilisation de la plateforme EatSafe,
                  un service de livraison de repas réservé aux professionnels,
                  exploité par Solutions Rh+, société à responsabilité limitée
                  de droit camerounais.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  La plateforme est strictement destinée aux entreprises,
                  administrations, associations ou tout autre organisme
                  professionnel. Les services proposés par EatSafe ne
                  s'adressent pas aux particuliers.
                </p>
              </div>
            </motion.div>

            {/* Service Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                2. Description des services
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Services proposés :
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    • Livraison de repas aux entreprises via notre application
                    mobile EatSafe
                  </li>
                  <li>
                    • Préparation centralisée des repas dans notre propre
                    cuisine professionnelle
                  </li>
                  <li>
                    • Livraison effectuée par des livreurs formés, avec
                    équipements isothermes
                  </li>
                  <li>
                    • Respect des bonnes pratiques d’hygiène et de sécurité
                    alimentaire
                  </li>
                  <li>
                    • Suivi de commande en temps réel via l'application mobile
                  </li>
                  <li>
                    • Support client dédié aux professionnels, accessible
                    pendant les heures de service
                  </li>
                  <li>
                    • Facturation mensuelle ou à la commande, selon les
                    préférences de l’entreprise
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Access Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                3. Conditions d'accès
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  L'accès aux services EatSafe est strictement réservé aux
                  professionnels (entreprises, administrations, ONG,
                  associations) remplissant les conditions suivantes :
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    • Être une entité légalement enregistrée au Cameroun (avec
                    numéro RCCM ou NUI)
                  </li>
                  <li>
                    • Disposer d’une adresse de livraison dans une zone couverte
                    par EatSafe
                  </li>
                  <li>
                    • Créer un compte via l’application EatSafe et recevoir une
                    validation
                  </li>
                  <li>
                    • Utiliser un moyen de paiement professionnel (mobile money,
                    virement, etc.)
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Orders and Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                4. Commandes et livraison
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Modalités de commande :
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Commande minimum : 15 000 FCFA HT (ou équivalent en €)
                    </li>
                    <li>
                      Commande via l'application mobile EatSafe exclusivement
                    </li>
                    <li>
                      Confirmation automatique par notification dans
                      l’application
                    </li>
                    <li>
                      Annulation possible dans les 5 minutes suivant la
                      validation
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Conditions de livraison :
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li> Délai indicatif : 25 à 45 minutes selon la zone</li>
                    <li>
                      Livraison uniquement aux adresses professionnelles au
                      Cameroun
                    </li>
                    <li> Livreur identifié avec équipement EatSafe</li>
                    <li>
                      Respect de la chaîne du froid et des normes sanitaires en
                      vigueur
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                5. Tarification
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    Frais de livraison : 0 FCFA 
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Payment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                6. Modalités de paiement
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Moyens de paiement acceptés :
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Carte bancaire professionnelle</li>
                  <li>• Mobile Money (MTN, Orange, etc.)</li>
                </ul>
              </div>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  7. Responsabilités
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Responsabilité d'EatSafe :
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li> Mise à disposition de la plateforme de commande</li>
                    <li> Coordination entre cuisine et livreurs</li>
                    <li> Respect des délais de livraison annoncés</li>
                    <li> Assurance responsabilité civile professionnelle</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Responsabilité du client :
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li> Exactitude des informations de livraison</li>
                    <li> Présence ou représentant lors de la livraison</li>
                    <li> Signalement immédiat de tout problème</li>
                    <li> Respect des conditions d'utilisation</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Partner Terms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                8. Conditions spécifiques aux partenaires
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Programme EatSafe Partner :
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Commission variable sur les parrainages réussis</li>
                  <li>• Paiement mensuel des commissions</li>
                  <li>• Obligation de transparence dans les recommandations</li>
                  <li>• Respect de la charte éthique EatSafe</li>
                  <li>• Possibilité de résiliation à tout moment</li>
                </ul>
              </div>
            </motion.div>

            {/* Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                9. Protection des données
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Le traitement des données personnelles est régi par notre
                  <a
                    href="/privacy"
                    className="text-red-600 dark:text-red-400 hover:underline ml-1"
                  >
                    Politique de Confidentialité
                  </a>
                  . EatSafe s'engage à respecter le RGPD et à protéger les
                  données de ses clients et partenaires.
                </p>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                10. Résiliation
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Le compte peut être résilié :
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    • À tout moment par le client avec préavis de 30 jours
                  </li>
                  <li>• Par EatSafe en cas de manquement aux CGU</li>
                  <li>• Automatiquement en cas de non-paiement</li>
                  <li>• Les commandes en cours restent honorées</li>
                </ul>
              </div>
            </motion.div>

            {/* Applicable Law */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                11. Droit applicable et juridiction
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Les présentes CGU sont soumises au droit camerounais. En cas de
                  litige, les parties s'efforceront de trouver une solution
                  amiable. À défaut, les tribunaux de Douala seront seuls
                  compétents.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                12. Contact
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Pour toute question relative aux présentes CGU :
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email :</strong> legal@eatsafe.pro
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Courrier :</strong> EatSafe - Service Juridique
                  </p>
                </div>
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
                Version 2.1 - Dernière mise à jour : 19 juin 2025
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
