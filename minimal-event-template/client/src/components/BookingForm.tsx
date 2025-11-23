import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Phone, Mail, ExternalLink, CheckCircle } from "lucide-react";

export function BookingForm() {
  const handleBookingClick = () => {
    // Google Forms 連結
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScCuX0FOFxuOFQgD3BkhYQAJx8E6E8Enjf9JqFrE3tM66el8w/viewform', '_blank');
    
    // 追蹤 Google Analytics 事件
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        'event_category': 'Booking',
        'event_label': 'Google Forms Booking Button',
        'value': 1
      });
    }
  };

  return (
    <section id="booking" className="py-16 px-8 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="mb-2 text-base font-semibold text-pink-500">
            預約試堂 | Book a Trial
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            立即預約試堂
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            體驗專業的一對一私人教練課程，讓我們幫助您開啟健康美麗的旅程
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 預約按鈕卡片 */}
          <Card className="border-pink-100 bg-gradient-to-br from-white to-pink-50">
            <CardHeader>
              <CardTitle className="text-2xl">開始您的健身之旅</CardTitle>
              <CardDescription>
                點擊下方按鈕填寫預約表單，我們會在 24 小時內聯絡您確認試堂時間
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 大型預約按鈕 */}
              <Button 
                onClick={handleBookingClick}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg py-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                size="lg"
              >
                <Calendar className="mr-3 h-6 w-6" />
                立即預約試堂
                <ExternalLink className="ml-3 h-5 w-5" />
              </Button>

              {/* 預約優勢 */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>度身訂造</strong> - 60 分鐘一對一專業指導
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>無需承諾</strong> - 體驗後再決定是否繼續
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>快速回覆</strong> - 24 小時內確認預約時間
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>六大分店</strong> - 選擇最方便的地點
                  </p>
                </div>
              </div>

              {/* 分隔線 */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">或</span>
                </div>
              </div>

              {/* 其他聯絡方式 */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-700 text-center">
                  直接聯絡我們:
                </p>
                <a 
                  href="https://wa.me/85251771517?text=你好！我想查詢 WOW FITNESS 的課程資訊。"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp 查詢
                </a>
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    <Phone className="inline h-4 w-4 mr-1" />
                    +852 5177 1517
                  </p>
                  <p className="text-sm text-gray-600">
                    <Mail className="inline h-4 w-4 mr-1" />
                    <a 
                      href="mailto:wowfitnesshk@gmail.com"
                      className="text-pink-600 hover:text-pink-700 transition-colors"
                    >
                      wowfitnesshk@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 試堂流程 */}
          <div className="space-y-6">
            <Card className="border-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-pink-500" />
                  試堂流程
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">提交預約</h4>
                    <p className="text-sm text-gray-600">填寫預約表格，選擇您感興趣的課程和分店</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">確認時間</h4>
                    <p className="text-sm text-gray-600">我們的團隊會在 24 小時內聯絡您確認試堂時間</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">體驗課程</h4>
                    <p className="text-sm text-gray-600">專業教練一對一指導，體驗約 60 分鐘</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">制定計劃</h4>
                    <p className="text-sm text-gray-600">根據您的目標，為您量身訂製訓練方案</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-100 bg-gradient-to-br from-pink-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-pink-500" />
                  六大分店位置
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-1 gap-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="text-pink-500">•</span>
                    <span>中環 Central</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-500">•</span>
                    <span>銅鑼灣 Causeway Bay <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">設有女性專屬區域</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-500">•</span>
                    <span>旺角 Mong Kok <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">設有女性專屬區域</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-500">•</span>
                    <span>尖沙咀 Tsim Sha Tsui</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-500">•</span>
                    <span>觀塘 Kwun Tong <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">設有女性專屬區域</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-pink-500">•</span>
                    <span>荃灣 Tsuen Wan <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">設有女性專屬區域</span></span>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200 mt-3">
                  <p className="text-xs text-gray-500 text-center">
                    詳細地址請參閱下方「分店位置」區塊
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;

