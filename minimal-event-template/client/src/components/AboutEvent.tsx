import AboutCard from "@/components/AboutCard";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutEvent() {
  const { t } = useLanguage();
  
  const ABOUT_INFO = [
    {
      title: t('about.service1.title'),
      description: t('about.service1.desc'),
      subTitle: "Personal Training",
      backgroundImage: "/image/personal-training.jpg",
    },
    {
      title: t('about.service2.title'),
      description: t('about.service2.desc'),
      subTitle: "Customized Programs",
      backgroundImage: "/image/customized-programs.jpg",
    },
    {
      title: t('about.service3.title'),
      description: t('about.service3.desc'),
      subTitle: "Nutrition Guidance",
      backgroundImage: "/image/nutrition-guidance.jpg",
    },
  ];

  return (
    <section id="about" className="container mx-auto flex flex-col items-center px-4 py-20">
      <h3 className="text-center mb-2 text-base font-semibold text-pink-500">
        {t('about.subtitle')} | {t('about.subtitleEn')}
      </h3>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
        {t('about.title')}
      </h2>
      <p className="mt-4 lg:max-w-4xl mb-6 w-full text-center text-base md:text-lg font-normal text-gray-600 leading-relaxed px-4">
        {t('about.description')}
      </p>
      <div className="mb-12 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border-2 border-pink-200 max-w-4xl mx-4">
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{t('about.uniqueTitle')}</h3>
        <p className="text-gray-700 text-center leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.uniqueDesc') }} />
      </div>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ABOUT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default AboutEvent;

