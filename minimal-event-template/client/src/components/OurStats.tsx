import StatsCard from "@/components/StatsCard";
import { useLanguage } from "@/contexts/LanguageContext";

export function OurStats() {
  const { t } = useLanguage();
  
  const STATS = [
    {
      count: "5,000+",
      title: t('stats.members'),
      subtitle: t('stats.membersEn')
    },
    {
      count: "6",
      title: t('stats.locations'),
      subtitle: t('stats.locationsEn')
    },
    {
      count: "100+",
      title: t('stats.trainers'),
      subtitle: t('stats.trainersEn')
    },
    {
      count: "12+",
      title: t('stats.experience'),
      subtitle: t('stats.experienceEn')
    },
  ];

  return (
    <section id="our-stats" className="container mx-auto grid gap-10 px-8 py-20 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <h3 className="mb-6 text-base font-medium text-pink-500">
          {t('stats.subtitle')} | {t('stats.subtitleEn')}
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:w-3/4 text-gray-900">
          {t('stats.title')}
        </h2>
        <p className="mt-4 w-full text-base md:text-lg text-gray-600 lg:w-10/12 leading-relaxed">
          {t('stats.description')}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-y-12">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;

