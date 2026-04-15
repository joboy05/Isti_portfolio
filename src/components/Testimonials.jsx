import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolioData';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-brand-dark overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Header */}
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl mb-6 leading-tight dark:text-white"
            >
              Ce qu'ils disent de <span className="text-brand-purple">notre collaboration</span>
            </motion.h2>
            <div className="w-20 h-1 bg-brand-purple rounded-full mb-6" />
            <p className="text-slate-500 dark:text-slate-400 italic">
              "La créativité est contagieuse, faites-la circuler."
            </p>
          </div>

          {/* Slider */}
          <div className="md:w-2/3 w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 2 }
              }}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              className="pb-16"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 h-full flex flex-col justify-between transition-colors">
                    <div>
                      <FaQuoteLeft className="text-brand-purple/20 text-4xl mb-6" />
                      <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                        {t.content}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 border-t border-slate-100 dark:border-white/5 pt-6">
                      <img 
                        src={t.avatar} 
                        alt={t.name} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-brand-purple/30 shadow-sm"
                      />
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white">{t.name}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider font-semibold">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
