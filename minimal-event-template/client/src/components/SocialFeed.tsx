import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function SocialFeed() {
  const { t } = useLanguage();
  
  return (
    <section id="social" className="py-16 px-8 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="mb-2 text-base font-semibold text-pink-500">
            {t('social.subtitle')} | {t('social.subtitleEn')}
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('social.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('social.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram Card */}
          <Card className="border-pink-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-8">
              <div className="flex items-center justify-center mb-4">
                <Instagram className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">{t('social.instagram.title')}</h3>
              <p className="text-white/90 text-center text-sm mb-4">{t('social.instagram.handle')}</p>
            </div>
            <CardContent className="pt-6 pb-8">
              <p className="text-gray-700 mb-6 leading-relaxed text-center">
                {t('social.instagram.desc')}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-semibold">✨</span>
                  <span>{t('social.instagram.feature1')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-semibold">💪</span>
                  <span>{t('social.instagram.feature2')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-semibold">🥗</span>
                  <span>{t('social.instagram.feature3')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-semibold">🎁</span>
                  <span>{t('social.instagram.feature4')}</span>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                size="lg"
                onClick={() => window.open('https://www.instagram.com/wowfitness_2014', '_blank')}
              >
                <Instagram className="mr-2 h-5 w-5" />
                {t('social.instagram.cta')}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Facebook Card */}
          <Card className="border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-8">
              <div className="flex items-center justify-center mb-4">
                <Facebook className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">{t('social.facebook.title')}</h3>
              <p className="text-white/90 text-center text-sm mb-4">{t('social.facebook.handle')}</p>
            </div>
            <CardContent className="pt-6 pb-8">
              <p className="text-gray-700 mb-6 leading-relaxed text-center">
                {t('social.facebook.desc')}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">📝</span>
                  <span>{t('social.facebook.feature1')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">📸</span>
                  <span>{t('social.facebook.feature2')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">💬</span>
                  <span>{t('social.facebook.feature3')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">🎉</span>
                  <span>{t('social.facebook.feature4')}</span>
                </div>
              </div>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
                onClick={() => window.open('https://www.facebook.com/wowfitnesshk', '_blank')}
              >
                <Facebook className="mr-2 h-5 w-5" />
                {t('social.facebook.cta')}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            {t('social.footer')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SocialFeed;

