'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const faqs = [
  {
    question: 'Ankara\'da matematik özel ders ücretleri ne kadar?',
    answer: 'Ankara özel ders ücretlerimiz, ders süresi ve sıklığına göre değişmektedir. Detaylı bilgi için lütfen 0552 819 25 28 numarasından bize ulaşın. İlk ders ücretsiz deneme dersi olarak sunulmaktadır.'
  },
  {
    question: 'Ankara\'nın hangi bölgelerinde matematik özel ders veriyorsunuz?',
    answer: 'Ankara\'nın tüm ilçelerinde (Çankaya, Keçiören, Mamak, Yenimahalle, Etimesgut, Sincan, Altındağ, Pursaklar, Gölbaşı) hem yüz yüze hem de online matematik özel ders vermekteyim. Ankara matematik öğretmeni olarak öğrencinin bulunduğu lokasyona göre ders yeri ayarlanabilir.'
  },
  {
    question: 'Online matematik dersi veriyor musunuz?',
    answer: 'Evet, Ankara online matematik dersi vermekteyim. Zoom, Google Meet veya Skype üzerinden interaktif ders işliyoruz. Online derslerimizde grafik tableti kullanarak yüz yüze ders kalitesinde eğitim veriyorum.'
  },
  {
    question: 'Hangi sınıf seviyelerine ders veriyorsunuz?',
    answer: 'İlkokul 4. sınıftan başlayarak, ortaokul (5-6-7-8. sınıf), lise (9-10-11-12. sınıf) ve üniversite hazırlık (YKS, TYT, AYT) seviyelerinde matematik özel ders vermekteyim. Ayrıca LGS matematik hazırlık için özel programlarımız mevcuttur.'
  },
  {
    question: 'Ders programı nasıl belirleniyor?',
    answer: 'Ankara\'da matematik özel ders programı tamamen öğrencinin müsaitlik durumuna göre belirlenir. Hafta içi ve hafta sonu esnek saatlerde ders verebilirim. Öğrencinin okul programı ve diğer aktiviteleri göz önünde bulundurulur.'
  },
  {
    question: 'İlk ders ücretsiz mi?',
    answer: 'Evet, Ankara matematik özel ders için ilk görüşme ve deneme dersi ücretsizdir. Bu derste öğrencinin seviyesini belirliyoruz ve çalışma planını oluşturuyoruz. Veli ve öğrenci memnun kalırsa düzenli derslere başlıyoruz.'
  },
  {
    question: 'KPSS\'de 361. derece ne anlama geliyor?',
    answer: 'KPSS (Kamu Personeli Seçme Sınavı) öğretmenlik alan sınavında Türkiye genelinde 361. sırada yer aldım. Bu, matematik alan bilgisi ve öğretmenlik formasyonu konusunda üst düzey başarıyı gösterir. Ankara matematik öğretmeni olarak bu başarı, kaliteli eğitimin göstergesidir.'
  },
  {
    question: 'Ders materyalleri dahil mi?',
    answer: 'Evet, tüm ders notları, çalışma kağıtları ve deneme sınavları tarafımızdan sağlanmaktadır. Ayrıca öğrencinin okul kitapları ve kaynaklarıyla uyumlu ek materyaller hazırlanır. Ankara özel matematik dersi için zengin kaynak arşivimiz mevcuttur.'
  },
  {
    question: 'Veli bilgilendirmesi yapıyor musunuz?',
    answer: 'Düzenli olarak veli bilgilendirmesi yapmaktayım. Her ay öğrencinin gelişimi, eksik konuları ve çalışma performansı hakkında detaylı rapor sunuyorum. WhatsApp üzerinden anlık iletişim de sağlanmaktadır.'
  },
  {
    question: 'Grup dersi veriyor musunuz?',
    answer: 'Talep olması durumunda 2-3 kişilik küçük gruplarla da çalışabilirim. Grup dersleri daha ekonomik olup, öğrencilerin birbirinden öğrenmesine de olanak sağlar. Ankara\'da matematik grup dersi için bizimle iletişime geçebilirsiniz.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sıkça Sorulan Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ankara matematik özel ders hakkında merak edilenler
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full glass-effect p-6 rounded-xl text-left hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <FaChevronUp className="text-primary" />
                    ) : (
                      <FaChevronDown className="text-gray-400" />
                    )}
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Başka sorularınız mı var?
          </p>
          <motion.a
            href="tel:+905528192528"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            Hemen Arayın: 0552 819 25 28
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}