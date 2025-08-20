'use client'

import { motion } from 'framer-motion'

export default function SEOSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Ankara Matematik Özel Ders</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                <strong>Ankara özel ders</strong> arıyorsanız doğru adrestesiniz! <strong>Ankara matematik öğretmeni</strong> İrem Çalışkan olarak, 
                5 yıldır Ankara'nın her bölgesinde matematik özel ders vermekteyim. <strong>Ankara matematik</strong> denilince akla gelen 
                ilk isimlerden biri olarak, öğrencilerime kaliteli ve verimli bir eğitim sunuyorum.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Ankara'da Matematik Özel Ders Hizmetlerimiz</h3>
              <p className="mb-4">
                <strong>Ankara özel matematik dersi</strong> arayanlar için Çankaya, Keçiören, Mamak, Yenimahalle, Etimesgut, Sincan, 
                Altındağ, Pursaklar, Gölbaşı ve Ankara'nın tüm ilçelerinde hizmet vermekteyim. <strong>Ankara'da matematik</strong> 
                alanında uzmanlaşmış bir öğretmen olarak, hem yüz yüze hem de online ders seçenekleri sunuyorum.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Neden Ankara Matematik Öğretmeni İrem Çalışkan?</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Ankara matematik hocası</strong> olarak KPSS'de Türkiye 361. derecem ile kanıtlanmış başarım</li>
                <li><strong>Ankara TYT matematik</strong> ve <strong>Ankara AYT matematik</strong> hazırlıkta uzmanlaşmış deneyim</li>
                <li><strong>Ankara LGS matematik</strong> için özel hazırlanmış çalışma programları</li>
                <li><strong>Ankara birebir matematik</strong> dersleri ile kişiye özel eğitim</li>
                <li><strong>Ankara online matematik</strong> seçeneği ile esnek ders saatleri</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Ankara Özel Ders Bölgelerimiz</h3>
              <p className="mb-4">
                <strong>Ankara'da özel ders</strong> verdiğimiz başlıca bölgeler: Çankaya matematik özel ders, Keçiören matematik özel ders, 
                Mamak matematik öğretmeni, Yenimahalle özel matematik, Etimesgut matematik dersi, Batıkent matematik özel ders, 
                Eryaman matematik öğretmeni, Dikmen özel matematik, Bahçelievler matematik, Kızılay matematik özel ders.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Ankara Matematik Özel Ders Ücretleri</h3>
              <p className="mb-4">
                <strong>Ankara matematik özel ders fiyatları</strong> konusunda uygun ve rekabetçi ücretlerle hizmet vermekteyim. 
                <strong>Ankara'da matematik öğretmeni</strong> arayanlar için hem bireysel hem de grup ders seçenekleri mevcuttur. 
                Detaylı bilgi ve <strong>Ankara özel ders ücretleri</strong> için lütfen iletişime geçiniz.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <p className="text-center font-semibold">
                  <strong>Ankara Matematik Özel Ders</strong> için hemen arayın: <br/>
                  <span className="text-2xl text-primary">0552 819 25 28</span><br/>
                  <span className="text-sm mt-2">Ankara özel ders, Ankara matematik öğretmeni İrem Çalışkan</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}