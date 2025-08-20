'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'

const achievements = [
  'Mersin Üniversitesi Eğitim Fakültesi Matematik Öğretmenliği',
  'KPSS\'de Türkiye 361. derecesi',
  '5+ yıl öğretmenlik deneyimi',
  '100+ öğrenci ile çalışma deneyimi',
  'Öğrencilerde ortalama %30 net artışı',
  'Sabırlı ve özverili öğretim yaklaşımı'
]


export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">İrem Çalışkan</span>
            </h2>
            <h3 className="text-2xl text-gray-700 mb-4">Uzman Matematik Öğretmeni</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Merhaba, ben İrem Çalışkan. 5 yıldır Ankara'da matematik özel dersi vermekteyim. 
              Mersin Üniversitesi Eğitim Fakültesi Matematik Öğretmenliği Bölümü'nden mezun olduktan sonra, 
              KPSS'de Türkiye 361. derecesi yaparak öğretmenlik kariyerime başladım. Öğrencilerimin matematik 
              korkusunu yenmelerine ve başarılı olmalarına yardımcı oluyorum.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Her öğrencinin farklı öğrenme hızı ve tarzı olduğuna inanıyorum. Bu yüzden derslerimi 
              tamamen öğrenciye özel hazırlıyor, eksik konuları tespit ederek güçlü bir temel oluşturuyorum.
            </p>
            
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Hemen İletişime Geç
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <h4 className="text-3xl font-bold text-primary mb-2">100+</h4>
                <p className="text-gray-600">Öğrenci</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <h4 className="text-3xl font-bold text-secondary mb-2">5+</h4>
                <p className="text-gray-600">Yıllık Deneyim</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <h4 className="text-3xl font-bold text-accent mb-2">KPSS</h4>
                <p className="text-gray-600">361. Derece</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <h4 className="text-3xl font-bold gradient-text mb-2">%30+</h4>
                <p className="text-gray-600">Net Artışı</p>
              </motion.div>
            </div>
            
            <div className="mt-6 glass-effect p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 gradient-text">Hizmet Verdiğim Alanlar</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>YKS (TYT - AYT) Matematik Hazırlık</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>LGS Matematik Hazırlık</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>9-10-11-12. Sınıf Matematik</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>5-6-7-8. Sınıf Matematik</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Online ve Yüz Yüze Ders</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}