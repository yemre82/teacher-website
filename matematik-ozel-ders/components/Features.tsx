'use client'

import { motion } from 'framer-motion'
import { FaUserGraduate, FaLaptop, FaClock, FaChartLine, FaAward, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: FaUserGraduate,
    title: 'Birebir Özel Ders',
    description: 'Öğrencinin seviyesine ve hedeflerine özel hazırlanmış ders programı ile maksimum verim.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: FaLaptop,
    title: 'Online & Yüz Yüze',
    description: 'Ankara\'nın her yerinde yüz yüze veya online platform üzerinden esnek ders imkanı.',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: FaClock,
    title: 'Esnek Ders Saatleri',
    description: 'Öğrencinin müsaitlik durumuna göre hafta içi ve hafta sonu ders programı.',
    color: 'from-orange-400 to-orange-600'
  },
  {
    icon: FaChartLine,
    title: 'Düzenli İlerleme Takibi',
    description: 'Her ay veli ile görüşme, düzenli deneme sınavları ve performans raporları.',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: FaAward,
    title: 'Garantili Başarı',
    description: 'Hedeflenen başarıya ulaşana kadar sınırsız destek ve motivasyon.',
    color: 'from-red-400 to-red-600'
  },
  {
    icon: FaUsers,
    title: 'Veli İletişimi',
    description: 'Düzenli veli bilgilendirmesi ve ilerleme raporları ile şeffaf eğitim süreci.',
    color: 'from-indigo-400 to-indigo-600'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Neden Bizi Tercih Etmelisiniz?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            KPSS'de 361. derece yapan öğretmeninizle başarının kapılarını aralayın
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="glass-effect p-8 rounded-2xl h-full transition-all duration-300 group-hover:shadow-2xl">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}