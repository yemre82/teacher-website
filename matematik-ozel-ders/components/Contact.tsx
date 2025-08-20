'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await emailjs.send(
        'service_id', // EmailJS service ID
        'template_id', // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'iremcakaraca@gmail.com'
        },
        'public_key' // EmailJS public key
      )
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">İletişime Geçin</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ücretsiz danışmanlık için hemen iletişime geçin. Size en kısa sürede dönüş yapacağız.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <motion.a
                  href="tel:+905528192528"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <p className="text-lg font-semibold">0552 819 25 28</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/905528192528"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="text-lg font-semibold">Hızlı İletişim</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="mailto:iremcakaraca@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-posta</p>
                    <p className="text-lg font-semibold">iremcakaraca@gmail.com</p>
                  </div>
                </motion.a>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Lokasyon</p>
                    <p className="text-lg font-semibold">Ankara, Türkiye</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Çalışma Saatleri:</strong><br />
                  Pazartesi - Cuma: 09:00 - 20:00<br />
                  Cumartesi: 10:00 - 18:00<br />
                  Pazar: 10:00 - 16:00
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Mesaj Gönderin</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Adınızı yazın"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta Adresiniz *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon Numaranız *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Konu *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Seçiniz</option>
                    <option value="YKS Hazırlık">YKS Hazırlık</option>
                    <option value="TYT Matematik">TYT Matematik</option>
                    <option value="AYT Matematik">AYT Matematik</option>
                    <option value="LGS Hazırlık">LGS Hazırlık</option>
                    <option value="Lise Matematik">Lise Matematik</option>
                    <option value="Ortaokul Matematik">Ortaokul Matematik</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-center"
                  >
                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </motion.p>
                )}
                
                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 text-center"
                  >
                    Mesaj gönderilemedi. Lütfen telefon ile iletişime geçin.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}