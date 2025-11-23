import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";

const REVIEWS = [
  {
    name: "Sarah L.",
    rating: 5,
    date: "2 週前",
    dateEn: "2 weeks ago",
    comment: "教練非常專業，會根據我的身體狀況調整訓練強度。最重要是飲食建議真的很有用，配合運動後兩個月已經減了8磅！女性專屬區域的環境讓我可以很自在地訓練。",
    commentEn: "The trainer is very professional and adjusts the training intensity according to my physical condition. Most importantly, the nutrition advice is really useful. After two months of training, I've lost 8 pounds! The women-only area allows me to train comfortably.",
    location: "銅鑼灣分店",
    locationEn: "Causeway Bay"
  },
  {
    name: "Michelle C.",
    rating: 5,
    date: "1 個月前",
    dateEn: "1 month ago",
    comment: "產後修復課程真的很棒！教練很有耐心，幫我慢慢恢復體態。現在腹直肌分離問題改善了很多，整個人都有自信了。感謝教練的專業指導和飲食建議！",
    commentEn: "The postpartum recovery program is amazing! The trainer is very patient and helped me gradually restore my figure. My diastasis recti has improved significantly, and I feel much more confident. Thanks for the professional guidance and nutrition advice!",
    location: "中環分店",
    locationEn: "Central"
  },
  {
    name: "Jenny W.",
    rating: 5,
    date: "3 週前",
    dateEn: "3 weeks ago",
    comment: "一對一教練真的差很多！每個動作都會糾正，確保做得正確。教練還會給我很多飲食建議，教我怎麼吃才能配合訓練效果。三個月下來線條明顯改善了！",
    commentEn: "One-on-one training makes a huge difference! Every movement is corrected to ensure proper form. The trainer also gives me lots of nutrition advice on how to eat to complement my training. After three months, my body lines have improved significantly!",
    location: "旺角分店",
    locationEn: "Mong Kok"
  },
  {
    name: "Amanda T.",
    rating: 5,
    date: "2 個月前",
    dateEn: "2 months ago",
    comment: "環境很好，設備齊全。教練會根據我的目標度身訂造課程，不會千篇一律。最喜歡的是教練會定期調整訓練計劃，讓我持續進步。飲食指導也很實用！",
    commentEn: "Great environment with complete equipment. The trainer customizes programs based on my goals, not one-size-fits-all. What I love most is that the trainer regularly adjusts the training plan to keep me progressing. The nutrition guidance is also very practical!",
    location: "尖沙咀分店",
    locationEn: "Tsim Sha Tsui"
  },
  {
    name: "Chloe K.",
    rating: 5,
    date: "1 週前",
    dateEn: "1 week ago",
    comment: "很推薦給想認真健身的女生！教練很專業，會仔細講解每個動作的要點。飲食建議也很貼心，不是要你節食，而是教你怎麼吃得健康又有效。",
    commentEn: "Highly recommend for women serious about fitness! The trainer is very professional and carefully explains the key points of each movement. The nutrition advice is thoughtful too - it's not about dieting, but teaching you how to eat healthily and effectively.",
    location: "觀塘分店",
    locationEn: "Kwun Tong"
  },
  {
    name: "Vivian H.",
    rating: 5,
    date: "3 個月前",
    dateEn: "3 months ago",
    comment: "在這裡訓練快半年了，效果真的很明顯！教練很用心，每次都會根據我的狀態調整訓練。飲食建議也很實際，容易執行。女性專屬的環境讓我可以放心訓練。",
    commentEn: "I've been training here for almost half a year, and the results are really obvious! The trainer is very dedicated and adjusts the training according to my condition each time. The nutrition advice is practical and easy to follow. The women-only environment lets me train with peace of mind.",
    location: "荃灣分店",
    locationEn: "Tsuen Wan"
  },
];

export function Reviews() {
  const { t, language } = useLanguage();
  
  return (
    <section id="reviews" className="py-16 px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="mb-2 text-base font-semibold text-pink-500">
            {t('reviews.subtitle')} | {t('reviews.subtitleEn')}
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('reviews.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {REVIEWS.map((review, idx) => (
            <Card key={idx} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-pink-100 text-pink-600 font-semibold">
                      {review.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{language === 'zh' ? review.date : review.dateEn}</span>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-pink-200" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {language === 'zh' ? review.comment : review.commentEn}
                </p>
                <div className="text-xs text-pink-600 font-medium">
                  📍 {language === 'zh' ? review.location : review.locationEn}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=wow+fitness+hk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors"
          >
            {t('reviews.viewMore')} →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

