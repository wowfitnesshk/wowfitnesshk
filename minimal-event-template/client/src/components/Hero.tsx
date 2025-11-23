import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

function Hero() {
  const container = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });
  
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yButtons = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div id="home" ref={container} className="relative min-h-screen w-full overflow-hidden">
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 w-full h-[120%] bg-[url('/images/hero-background.webp')] bg-cover bg-center bg-no-repeat"
      />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <motion.div style={{ y: yText }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-500/20 px-4 py-2 text-pink-300 border border-pink-400/30">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">{t('hero.ladies')} {t('hero.ladiesEn')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white lg:max-w-4xl mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-pink-300 mb-4">
              {t('hero.subtitle')}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-2">
              {t('hero.locations')}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-8">
              {t('hero.locationsEn')}
            </p>
            <p className="mt-4 mb-6 text-base md:text-lg text-white/90 w-full md:max-w-full lg:max-w-3xl mx-auto px-4">
              {t('hero.description')}
            </p>
            <div className="mb-8 inline-flex flex-wrap items-center justify-center gap-3">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 rounded-full">
                <span className="text-white font-semibold text-sm md:text-base">✓ 只設一對一私人教練</span>
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 rounded-full">
                <span className="text-white font-semibold text-sm md:text-base">✓ 無月費 無會員制</span>
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 rounded-full">
                <span className="text-white font-semibold text-sm md:text-base">✓ 高度私隱保障</span>
              </div>
            </div>
            <p className="text-sm text-pink-200 mb-8">
              {t('hero.note')}
            </p>
          </motion.div>
          <motion.div style={{ y: yButtons }} className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.ctaBooking')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.ctaLearn')}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

