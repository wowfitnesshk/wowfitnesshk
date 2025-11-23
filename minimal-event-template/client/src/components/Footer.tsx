import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone, Facebook } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  { name: "關於我們", href: "#about" },
  { name: "課程介紹", href: "#programs" },
  { name: "預約試堂", href: "#booking" },
  { name: "分店位置", href: "#locations" },
  { name: "常見問題", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-gray-50">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-12 mb-10 md:mb-16 flex-col justify-center !items-center bg-gradient-to-r from-pink-500 to-pink-600 max-w-6xl mx-auto rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl text-center font-bold text-white">
            準備好開始您的健身之旅了嗎？
          </h2>
          <p className="text-white md:w-7/12 text-center my-4 text-base">
            立即預約免費試堂，體驗專業的一對一私人教練課程
          </p>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              立即預約試堂
            </Button>
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg transition-all"
              onClick={() => window.open('https://wa.me/85251771517', '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp 查詢
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="WOW FITNESS Logo" 
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-xl font-bold text-gray-900">
                WOW FITNESS
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              香港領先的女性專屬健身中心，致力於為每位女性提供專業、舒適、有效的健身體驗。
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">快速連結</h4>
            <ul className="space-y-2">
              {LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">聯絡我們</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-pink-500" />
                <a href="mailto:wowfitnesshk@gmail.com" className="hover:text-pink-600">
                  wowfitnesshk@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-pink-500" />
                <a href="https://wa.me/85251771517" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                  WhatsApp: +852 5177 1517
                </a>
              </div>
              <div className="flex gap-2 mt-4">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-gray-700 hover:text-pink-600"
                  onClick={() => window.open('https://www.instagram.com/wowfitness_2014', '_blank')}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-gray-700 hover:text-pink-600"
                  onClick={() => window.open('https://www.facebook.com/wowfitnesshk', '_blank')}
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center font-normal text-gray-600 text-sm">
            &copy; {CURRENT_YEAR} WOW FITNESS 版權所有。All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

