import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export function AppDownloadButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors"
      >
        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
          <Smartphone className="w-5 h-5 text-black" />
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-300">Télécharger sur</div>
          <div className="text-sm font-semibold">App Store</div>
        </div>
      </motion.a>
      
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors"
      >
        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
          <Smartphone className="w-5 h-5 text-black" />
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-300">Disponible sur</div>
          <div className="text-sm font-semibold">Google Play</div>
        </div>
      </motion.a>
    </div>
  );
}