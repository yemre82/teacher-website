'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaGraduationCap, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold">
                KPSS'de 361. Derece | Ankara Matematik Özel Ders
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Ankara Matematik</span>
              <br />
              <span className="text-gray-800">Özel Ders</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              <strong>Ankara özel ders</strong> ve <strong>Ankara matematik öğretmeni</strong> arıyorsanız doğru adrestesiniz. 
              YKS, TYT, AYT, LGS hazırlık için <strong>Ankara'da matematik</strong> eğitimi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="https://wa.me/905528192528"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={24} />
                Hemen WhatsApp'tan Ulaş
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold transform transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Ücretsiz Danışmanlık Al
              </motion.a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-effect p-6 rounded-xl"
              >
                <FaGraduationCap className="text-4xl text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">5+ Yıl Deneyim</h3>
                <p className="text-gray-600">KPSS'de 361. derece ile atanan öğretmen</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-effect p-6 rounded-xl"
              >
                <FaChalkboardTeacher className="text-4xl text-secondary mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Birebir Özel Ders</h3>
                <p className="text-gray-600">Öğrenciye özel program ve takip</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-effect p-6 rounded-xl"
              >
                <FaBookOpen className="text-4xl text-accent mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Konu Anlatımı & Soru Çözümü</h3>
                <p className="text-gray-600">Detaylı konu anlatımı ve bol soru çözümü</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}