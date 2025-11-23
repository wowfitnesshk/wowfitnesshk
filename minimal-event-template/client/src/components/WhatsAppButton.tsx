import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "85251771517"; // 格式：國家碼 + 號碼（去掉空格和特殊字符）
  const message = "你好！我想查詢 WOW FITNESS 的課程資訊。"; // 預設訊息

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* WhatsApp 浮動按鈕 */}
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-50 cursor-pointer group"
        role="button"
        aria-label="WhatsApp 聯絡我們"
      >
        {/* 提示文字（懸浮時顯示） */}
        <div
          className={`absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          WhatsApp 查詢
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
        </div>

        {/* WhatsApp 按鈕 */}
        <div className="relative">
          {/* 脈衝動畫背景 */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* 主按鈕 */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95">
            <MessageCircle className="w-8 h-8" strokeWidth={2} />
          </div>

          {/* 未讀訊息徽章（可選） */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            !
          </div>
        </div>
      </div>

      {/* 手機版優化：較小的按鈕 */}
      <style>{`
        @media (max-width: 640px) {
          .fixed.bottom-6.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
          .fixed.bottom-6.right-6 > div > div {
            width: 3.5rem;
            height: 3.5rem;
          }
          .fixed.bottom-6.right-6 svg {
            width: 1.75rem;
            height: 1.75rem;
          }
        }
      `}</style>
    </>
  );
}

export default WhatsAppButton;

