import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineSend, MdOutlineEmail, MdOutlineLocationOn, MdCall } from 'react-icons/md';
import TextReveal from './TextReveal';

const ContactForm = () => {
  return (
    <section id="contact" className="py-32 bg-brand-light dark:bg-brand-dark transition-colors duration-1000 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-purple dark:text-brand-purple-light font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Contact — Collaboration</span>
            <TextReveal 
              text="Travaillons ensemble sur votre prochain projet."
              className="text-6xl md:text-7xl lg:text-8xl font-black dark:text-white tracking-tighter leading-[0.85]"
            />
          </div>
          <div className="w-20 h-1 bg-brand-purple/20 rounded-full mb-4 hidden md:block" />
        </div>

        {/* Card Layout (Inspired by reference) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto rounded-[3.5rem] overflow-hidden shadow-2xl dark:shadow-glow flex flex-col lg:flex-row border border-slate-100 dark:border-white/5 bg-white dark:bg-brand-surface"
        >
          {/* Left Section: Contact Info */}
          <div className="lg:w-1/3 bg-brand-purple text-white p-12 md:p-16 relative overflow-hidden flex flex-col justify-center">
            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-purple-light/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Informations de Contact</h3>
              <p className="text-white/80 text-lg mb-10 max-w-lg font-light">
                N'hésitez pas à me contacter pour des collaborations ou simplement pour dire bonjour !
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xl backdrop-blur-sm">
                    <MdCall />
                  </div>
                  <p className="text-lg font-medium">+229 95 64 32 71</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xl backdrop-blur-sm">
                    <MdOutlineEmail />
                  </div>
                  <p className="text-lg font-medium">istidjabatouy@gmail.com</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xl backdrop-blur-sm">
                    <MdOutlineLocationOn />
                  </div>
                  <p className="text-lg font-medium">Remote / International</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="lg:w-2/3 p-12 md:p-16">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Form Group: Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-gray-300">Nom Complet</label>
                  <input 
                    type="text" 
                    placeholder="Votre nom"
                    className="w-full bg-slate-50 dark:bg-[#15151D] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transition-all text-slate-800 dark:text-white placeholder:text-slate-400"
                  />
                </div>
                
                {/* Form Group: Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-gray-300">Adresse E-mail</label>
                  <input 
                    type="email" 
                    placeholder="Votre adresse e-mail"
                    className="w-full bg-slate-50 dark:bg-[#15151D] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transition-all text-slate-800 dark:text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Form Group: Message */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-gray-300">Parlez-moi de votre projet</label>
                <textarea 
                  rows="5"
                  placeholder="Écrivez votre message ici..."
                  className="w-full bg-slate-50 dark:bg-[#15151D] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transition-all text-slate-800 dark:text-white placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button mapping to WhatsApp */}
              <motion.a 
                href="https://wa.me/22995643271?text=Bonjour%20Istidjabatou%2C%20je%20vous%20contacte%20depuis%20votre%20portfolio%20!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-brand-purple/30 transition-colors w-full md:w-auto mt-4"
              >
                Envoyer le message
                <MdOutlineSend className="text-xl" />
              </motion.a>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactForm;
