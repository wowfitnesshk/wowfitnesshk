import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Info, Dumbbell, MapPin, Menu, X, Calendar, Instagram, Facebook, Globe, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        className="flex items-center gap-2 font-medium hover:text-pink-500 transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "主頁",
    nameEn: "Home",
    icon: Home,
    href: "#home",
  },
  {
    name: "關於我們",
    nameEn: "About Us",
    icon: Info,
    href: "#about",
  },
  {
    name: "課程介紹",
    nameEn: "Programs",
    icon: Dumbbell,
    href: "#programs",
  },
  {
    name: "預約試堂",
    nameEn: "Book Trial",
    icon: Calendar,
    href: "#booking",
  },
  {
    name: "分店位置",
    nameEn: "Locations",
    icon: MapPin,
    href: "#locations",
  },
  {
    name: "常見問題",
    nameEn: "FAQ",
    icon: HelpCircle,
    href: "#faq",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { language, setLanguage } = useLanguage();

  const handleOpen = () => setOpen((cur) => !cur);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-0 transition-all duration-300 ${
        isScrolling ? "bg-white shadow-md" : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <img 
            src="/images/logo.png" 
            alt="WOW FITNESS Logo" 
            className="h-10 w-10 object-contain"
          />
          <div
            className={`text-xl font-bold transition-colors ${
              isScrolling ? "text-gray-900" : "text-white"
            }`}
          >
            WOW FITNESS
          </div>
        </div>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, nameEn, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{language === 'zh' ? name : nameEn}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-2 ml-4">
          {/* 語言切換按鈕 */}
          <Button 
            size="sm" 
            variant="ghost" 
            className={`transition-colors ${
              isScrolling ? "text-gray-700 hover:text-pink-600" : "text-white hover:text-pink-300"
            }`}
            onClick={toggleLanguage}
          >
            <Globe className="h-5 w-5 mr-1" />
            <span className="font-semibold">{language === 'zh' ? 'EN' : '中'}</span>
          </Button>
          
          <Button 
            size="sm" 
            variant="ghost" 
            className={`transition-colors ${
              isScrolling ? "text-gray-700 hover:text-pink-600" : "text-white hover:text-pink-300"
            }`}
            onClick={() => window.open('https://www.instagram.com/wowfitness_2014', '_blank')}
          >
            <Instagram className="h-5 w-5" />
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className={`transition-colors ${
              isScrolling ? "text-gray-700 hover:text-pink-600" : "text-white hover:text-pink-300"
            }`}
            onClick={() => window.open('https://www.facebook.com/wowfitnesshk', '_blank')}
          >
            <Facebook className="h-5 w-5" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleOpen}
          className={`ml-auto inline-block lg:hidden ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {open && (
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, nameEn, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {language === 'zh' ? name : nameEn}
              </NavItem>
            ))}
            <li className="pt-4 border-t border-gray-200">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 font-medium hover:text-pink-500 transition-colors w-full"
              >
                <Globe className="h-5 w-5" />
                {language === 'zh' ? 'English' : '中文'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

