/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  MessageCircle, 
  Instagram, 
  ArrowRight, 
  ShieldCheck, 
  User, 
  Heart,
  X
} from 'lucide-react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5584987486871&text&type=phone_number&app_absent=0";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen selection:bg-brand-gold/30">
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-brand-gold/10 text-brand-gold rounded-full">
              Cirurgiã-Dentista • Natal/RN
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
              Eu sou <span className="italic">Anna Clara</span>, especialista em você.
            </h1>
            <p className="text-lg text-brand-dark/70 mb-8 max-w-lg leading-relaxed">
              Ajudo você a recuperar sua autoestima com segurança, naturalidade e um atendimento verdadeiramente humanizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand-dark text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors duration-300 shadow-xl shadow-brand-dark/10"
              >
                <MessageCircle size={20} />
                Consulta Gratuita no WhatsApp
              </a>
              <span className="text-xs text-brand-dark/50 font-medium">
                Resposta rápida • Sem compromisso
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://i.imgur.com/vKywV1P.png" 
                alt="Anna Clara" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* QUEM SOU EU */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 md:order-1">
              <div className="relative">
                <img 
                  src="https://i.imgur.com/9lqbV3P.png" 
                  alt="Anna Clara Atendimento" 
                  className="rounded-3xl shadow-xl z-10 relative"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-2 border-brand-gold/30 rounded-3xl translate-x-4 translate-y-4 -z-10" />
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} className="order-1 md:order-2">
              <h2 className="text-4xl font-serif mb-6">Propósito guiado por Deus e foco na sua essência</h2>
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                Eu acredito que cuidar do seu sorriso e da sua aparência vai muito além da estética. 
                É sobre devolver sua confiança, sua autoestima e te fazer se sentir bem ao se olhar no espelho.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Atendimento totalmente personalizado",
                  "Foco em resultados naturais",
                  "Escuta ativa e empatia real",
                  "Procedimentos seguros e modernos",
                  "Propósito guiado por Deus"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-brand-dark/80"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <Sparkles size={14} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2 {...fadeIn} className="text-4xl font-serif mb-4">Resultados reais</motion.h2>
            <motion.p {...fadeIn} className="text-brand-dark/60">Toque nas imagens para ampliar</motion.p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              "https://i.imgur.com/VwfKum9.png",
              "https://i.imgur.com/ts1yfOi.png",
              "https://i.imgur.com/XhbcBTw.png",
              "https://i.imgur.com/o67th2t.png"
            ].map((src, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md"
                onClick={() => setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center mt-8 text-xs text-brand-dark/40 italic">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* POR QUE CONFIAR */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
          <motion.h2 {...fadeIn} className="text-4xl font-serif mb-12 text-center">Por que confiar em mim?</motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <ShieldCheck />, title: "Avaliação honesta" },
              { icon: <User />, title: "Atendimento direto comigo" },
              { icon: <Check />, title: "Clareza em cada etapa" },
              { icon: <Sparkles />, title: "Foco na sua naturalidade" },
              { icon: <Heart />, title: "Atendimento humanizado" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors"
              >
                <div className="text-brand-gold">{item.icon}</div>
                <span className="font-medium">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="py-24 bg-brand-gold/10 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl font-serif mb-8 max-w-2xl mx-auto leading-relaxed">
            Sem pressão. Apenas uma conversa para entender o que você precisa.
          </motion.h2>
          <motion.div {...fadeIn}>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-dark text-white rounded-xl font-semibold hover:bg-brand-gold transition-all duration-300 shadow-xl"
            >
              Agendar no WhatsApp
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-brand-gold rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-brand-gold rounded-full" />
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 {...fadeIn} className="text-4xl font-serif mb-12 text-center">Como funciona sua primeira consulta</motion.h2>
          
          <div className="space-y-6">
            {[
              { step: "1", title: "Você chama no WhatsApp", desc: "Tiramos suas dúvidas iniciais e entendemos seu desejo." },
              { step: "2", title: "Agendamos seu horário", desc: "Escolhemos o melhor momento para sua visita ao consultório." },
              { step: "3", title: "Você recebe sua avaliação gratuita", desc: "Um momento exclusivo para analisarmos seu caso com calma." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-brand-cream border border-brand-gold/10"
              >
                <div className="w-12 h-12 rounded-full bg-brand-gold text-white flex items-center justify-center font-serif text-xl shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-1">{item.title}</h3>
                  <p className="text-brand-dark/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm font-medium text-brand-gold uppercase tracking-widest">Sem compromisso</p>
        </div>
      </section>

      {/* BASTIDORES */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <motion.h2 {...fadeIn} className="text-4xl font-serif mb-12 text-center">Nos bastidores</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://i.imgur.com/E3mKYbC.png",
              "https://i.imgur.com/vKywV1P.png",
              "https://i.imgur.com/9lqbV3P.png"
            ].map((src, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg"
              >
                <img 
                  src={src} 
                  alt={`Bastidores ${i + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-brand-dark text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-serif mb-4 italic">Sua autoestima merece esse cuidado</motion.h2>
          <motion.p {...fadeIn} className="text-xl text-white/70 mb-10">Agende agora sua primeira consulta gratuita</motion.p>
          
          <motion.div {...fadeIn}>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-12 py-5 bg-brand-gold text-white rounded-xl font-bold text-lg hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl shadow-brand-gold/20"
            >
              Agendar no WhatsApp
              <MessageCircle size={22} />
            </a>
          </motion.div>
        </div>
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[120px]" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-brand-gold/10">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h3 className="text-2xl font-serif mb-2">Anna Clara</h3>
          <p className="text-brand-dark/60 mb-1">Cirurgiã-Dentista | Harmonização Facial</p>
          <p className="text-brand-dark/60 mb-6">Natal - RN</p>
          
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/annaclara_pimenta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
          
          <div className="mt-10 pt-8 border-t border-brand-gold/5 w-full text-xs text-brand-dark/40">
            © {new Date().getFullYear()} Anna Clara. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-dark/95 flex items-center justify-center p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Resultado Ampliado" 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
