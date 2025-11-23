import { UserCheck, ClipboardList, Apple, Heart, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function SponsoredBy() {
  const { t } = useLanguage();
  
  const FEATURES = [
    {
      icon: UserCheck,
      title: t('features.personal'),
      description: t('features.personalEn')
    },
    {
      icon: ClipboardList,
      title: t('features.custom'),
      description: t('features.customEn')
    },
    {
      icon: Apple,
      title: t('features.nutrition'),
      description: t('features.nutritionEn')
    },
    {
      icon: Heart,
      title: t('features.ladies'),
      description: t('features.ladiesEn')
    },
    {
      icon: Shield,
      title: '無月費 無會員制',
      description: 'No Monthly Fee'
    },
  ];

  return (
    <section className="py-12 px-8 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {FEATURES.map(({ icon: Icon, title, description }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors">
                <Icon className="w-8 h-8 text-pink-500" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;

