import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Trash2, Download } from "lucide-react";

export function Privacy() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Politique de Confidentialité - EatSafe Cameroun
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Votre vie privée est essentielle. Découvrez comment nous
              collectons, utilisons et protégeons vos données personnelles
              conformément à la loi camerounaise sur la protection des données.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
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
                Introduction
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  EatSafe Cameroun, en tant que responsable du traitement,
                  s'engage à protéger la confidentialité et la sécurité des
                  données personnelles de ses utilisateurs conformément à la Loi
                  n°2010/012 du 21 décembre 2010 relative à la protection des
                  données à caractère personnel au Cameroun.
                </p>
              </div>
            </motion.div>

            {/* Données collectées */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Données collectées
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Données personnelles collectées :
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      • <strong>Informations d'identification :</strong> nom,
                      prénom, adresse email
                    </li>
                    <li>
                      • <strong>Informations de contact :</strong> numéro de
                      téléphone
                    </li>
                    <li>
                      • <strong>Informations de livraison :</strong> adresses de
                      livraison, instructions spécifiques
                    </li>
                    <li>
                      • <strong>Informations de paiement :</strong> données de
                      facturation, traitées via nos partenaires sécurisés
                    </li>
                    <li>
                      • <strong>Données d'utilisation :</strong> historique des
                      commandes, préférences alimentaires
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Données techniques collectées :
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Aucune données techniques collectées</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Finalités */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Finalités du traitement
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Fourniture de services :</strong> traitement et
                    livraison de vos commandes.
                  </p>
                  <p>
                    <strong>Communication :</strong> support client,
                    notifications importantes.
                  </p>
                  <p>
                    <strong>Optimisation :</strong> analyse d’utilisation pour
                    améliorer la plateforme.
                  </p>
                  <p>
                    <strong>Marketing (avec consentement) :</strong> offres
                    personnalisées et newsletters.
                  </p>
                  <p>
                    <strong>Respect légal :</strong> obligations comptables et
                    fiscales.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Base légale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Base légale du traitement
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Exécution contractuelle :</strong> prestation de
                    services.
                  </p>
                  <p>
                    <strong>Intérêt légitime :</strong> sécurité et amélioration
                    des services.
                  </p>
                  <p>
                    <strong>Consentement :</strong> communications marketing et
                    géolocalisation.
                  </p>
                  <p>
                    <strong>Obligation légale :</strong> respect des lois
                    camerounaises.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Partage des données */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Partage des données
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Vos données peuvent être partagées avec :
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Livreurs pour assurer la livraison.</li>
                  <li>• Autorités compétentes en cas d'obligation légale.</li>
                </ul>
              </div>
            </motion.div>

            {/* Sécurité des données */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Sécurité des données
                </h2>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Nous appliquons des mesures de sécurité adaptées pour protéger
                  vos données :
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Chiffrement SSL/TLS des données en transit.</li>
                  <li>• Hébergement sécurisé avec sauvegardes régulières.</li>
                  <li>• Contrôles d'accès stricts.</li>
                  <li>• Sensibilisation continue de nos équipes.</li>
                  <li>• Audits de sécurité périodiques.</li>
                </ul>
              </div>
            </motion.div>

            {/* Conservation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Conservation des données
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Données clients actifs :</strong> durant la relation
                    commerciale.
                  </p>
                  <p>
                    <strong>Données de facturation :</strong> 10 ans selon la
                    réglementation fiscale.
                  </p>
                  <p>
                    <strong>Données marketing :</strong> 3 ans après le dernier
                    contact.
                  </p>
                  <p>
                    <strong>Cookies :</strong> jusqu’à 13 mois maximum.
                  </p>
                  <p>
                    <strong>Logs de sécurité :</strong> 1 an.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Droits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Download className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Vos droits
                </h2>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  En vertu de la loi camerounaise et des bonnes pratiques, vous
                  bénéficiez de droits :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Droit d'accès
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Obtenir une copie de vos données personnelles.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Droit de rectification
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Corriger des données erronées.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Droit à l'effacement
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Demander la suppression de vos données.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Droit à la portabilité
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Récupérer vos données dans un format structuré.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mt-5 dark:text-gray-300 leading-relaxed mb-4">
                  Toutes demandes doivent être adressées à l'adresse suivante :{" "}
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    dpo@eatsafe.pro
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Suppression */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Trash2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Demande de suppression
                </h2>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Pour exercer votre droit à l'effacement ou tout autre droit
                  relatif à vos données :
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email :</strong> dpo@eatsafe.pro
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Courrier :</strong> EatSafe Cameroun
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nous répondrons dans un délai raisonnable conformément à la
                    loi.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
