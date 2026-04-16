import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineSend, MdOutlineEmail, MdOutlineLocationOn, MdOutlineChatBubbleOutline } from 'react-icons/md';
import contactImg from '../assets/images/profile.png';

const ContactForm = () => {
  return (
    <section id="contact" className="py-40 bg-brand-light dark:bg-brand-dark transition-colors duration-500 relative overflow-hidden">
      {/* Soft Ambient Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          
          {/* Professional Image Side (Serious/Clean) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5"
          >
            <div className="relative group">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/5">
                <img 
                  src={contactImg} 
                  alt="Isti - Contact professionnel" 
                  className="w-full h-auto grayscale transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
              {/* Abstract element behind */}
              <div className="absolute top-12 -right-12 w-full h-full bg-brand-purple/5 rounded-[3rem] -z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />
              
              {/* Interaction Callout */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-brand-purple p-6 rounded-2xl shadow-2xl text-white z-20 cursor-default"
              >
                <MdOutlineChatBubbleOutline size={32} />
              </motion.div>
            </div>
          </motion.div>

          {/* Clean Form Side */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-brand-purple/5 rounded-full mb-8">
                <span className="text-brand-purple font-black tracking-[0.3em] uppercase text-[10px]">Contact direct</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl mb-12 leading-[0.9] font-black tracking-tighter dark:text-white">
                VOTRE PROJET <br />
                <span className="text-brand-purple italic">COMMENCE ICI.</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white dark:bg-white/5 shadow-xl rounded-2xl flex items-center justify-center text-2xl text-brand-purple border border-slate-50 dark:border-white/10">
                    <MdOutlineEmail />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-1">Email</p>
                    <p className="text-lg font-bold dark:text-white">hello@isti.pro</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white dark:bg-white/5 shadow-xl rounded-2xl flex items-center justify-center text-2xl text-brand-purple border border-slate-50 dark:border-white/10">
                    <MdOutlineLocationOn />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-1">Localisation</p>
                    <p className="text-lg font-bold dark:text-white">Remote & Lyon</p>
                  </div>
                </div>
              </div>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="group relative">
                    <input 
                      type="text" 
                      placeholder="Nom complet"
                      className="w-full bg-transparent border-b-2 border-slate-100 dark:border-white/10 py-5 focus:outline-none focus:border-brand-purple transition-all placeholder:text-slate-300 text-xl font-medium"
                    />
                    <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-brand-purple group-focus-within:w-full transition-all duration-700" />
                  </div>
                  <div className="group relative">
                    <input 
                      type="email" 
                      placeholder="Adresse email"
                      className="w-full bg-transparent border-b-2 border-slate-100 dark:border-white/10 py-5 focus:outline-none focus:border-brand-purple transition-all placeholder:text-slate-300 text-xl font-medium"
                    />
                    <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-brand-purple group-focus-within:w-full transition-all duration-700" />
                  </div>
                </div>
                <div className="group relative">
                  <textarea 
                    rows="4"
                    placeholder="Détails du projet..."
                    className="w-full bg-transparent border-b-2 border-slate-100 dark:border-white/10 py-5 focus:outline-none focus:border-brand-purple transition-all placeholder:text-slate-300 text-xl font-medium resize-none"
                  ></textarea>
                  <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-brand-purple group-focus-within:w-full transition-all duration-700" />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-purple py-7 rounded-3xl flex items-center justify-center gap-4 text-xl font-black uppercase tracking-[0.2em] text-white shadow-2xl transition-all shadow-brand-purple/20"
                >
                  Envoyer le message
                  <MdOutlineSend />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
