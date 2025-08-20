'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">İrem Çalışkan</h3>
            <p className="text-gray-300 mb-4">
              KPSS'de 361. derece yapan matematik öğretmeninizle başarıya ulaşın. 
              YKS, TYT, AYT, LGS hazırlıkta deneyimli eğitim.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://wa.me/905528192528"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="mailto:iremcakaraca@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">İletişim Bilgileri</h4>
            <div className="space-y-3">
              <a href="tel:+905528192528" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <FaPhone className="text-accent" />
                <span className="text-lg font-semibold">0552 819 25 28</span>
              </a>
              <a href="mailto:iremcakaraca@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <FaEnvelope className="text-accent" />
                <span>iremcakaraca@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <FaMapMarkerAlt className="text-accent" />
                <span>Ankara, Türkiye</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur">
              <p className="text-sm text-gray-300">
                <strong>Acil İletişim:</strong><br />
                7/24 WhatsApp hattımızdan bize ulaşabilirsiniz!
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-400 text-center">
            © 2024 İrem Çalışkan - Tüm hakları saklıdır.
          </p>
          <p className="text-gray-400 flex items-center justify-center gap-1 mt-2">
            <FaHeart className="text-red-500 animate-pulse" /> ile <a href="https://eralabs.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors font-semibold">EraLabs</a> tarafından yapılmıştır
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Ankara Özel Ders | Ankara Matematik | Ankara Matematik Öğretmeni | Ankara'da Matematik Özel Ders
          </p>
        </motion.div>
      </div>
    </footer>
  )
}