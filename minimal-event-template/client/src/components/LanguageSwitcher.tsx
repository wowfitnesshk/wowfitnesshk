import { Globe } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const toggleLanguage = () => {
    const newLang = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
    // 觸發全局語言切換事件
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      aria-label="切換語言"
    >
      <Globe className="h-5 w-5" />
      <span className="font-medium">{language === 'zh' ? 'EN' : '中'}</span>
    </button>
  );
}

export default LanguageSwitcher;

