import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineSend, MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Info Side */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight font-display"
            >
              Envie de donner vie à <span className="text-brand-purple">vos idées ?</span>
            </motion.h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              Que ce soit pour une nouvelle identité visuelle ou une stratégie sociale complète, parlons-en autour d'un café (virtuel).
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 group-hover:bg-brand-purple/20 border border-white/10 group-hover:border-brand-purple/30 rounded-2xl flex items-center justify-center text-xl text-brand-purple transition-all">
                  <MdOutlineEmail />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg">hello@isti-creative.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 group-hover:bg-brand-purple/20 border border-white/10 group-hover:border-brand-purple/30 rounded-2xl flex items-center justify-center text-xl text-brand-purple transition-all">
                  <MdOutlineLocationOn />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Localisation</p>
                  <p className="text-lg">Lyon & Remote</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Nom Complet</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-colors placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="jane@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Type de Projet</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-colors appearance-none cursor-pointer">
                    <option className="bg-brand-dark text-white">Social Media Branding</option>
                    <option className="bg-brand-dark text-white">Full Visual Identity</option>
                    <option className="bg-brand-dark text-white">Content Creation</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea 
                  rows="4"
                  placeholder="Dites-moi tout sur votre projet..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-colors resize-none placeholder:text-slate-600"
                ></textarea>
              </div>

              <button className="w-full btn-primary !py-5 flex items-center justify-center gap-3 text-lg font-bold group">
                Envoyer le message 
                <MdOutlineSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
