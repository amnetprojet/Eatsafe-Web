import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
               <img src="/logo.png" alt="eatsafe-logo" />
              </div>
              <span className="text-xl font-bold">EatSafe</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Votre partenaire de confiance pour une livraison professionnelle et sécurisée.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/partner" className="text-gray-400 hover:text-white transition-colors">EatSafe Partner</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@eatsafe.pro</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Yaoundé, Cameroun</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/legal" className="text-gray-400 hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">CGU</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 EatSafe. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}