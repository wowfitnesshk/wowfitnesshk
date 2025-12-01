import EventContentCard from "@/components/EventContentCard";
import { useLanguage } from "@/contexts/LanguageContext";

const PROGRAMS = [
  {
    title: "產後修復媽媽課程",
    titleEn: "Postpartum Recovery Program",
    des: "專為產後媽媽設計的全方位修復課程，結合核心肌群訓練、骨盆底肌強化及體態調整。我們的專業教練深諳產後身體變化，提供安全有效的訓練方案，幫助媽媽們重拾自信與健康。課程包含腹直肌分離修復、產後塑形及營養指導，讓您在照顧寶寶的同時，也能好好照顧自己。",
    desEn: "Comprehensive recovery program designed for postpartum mothers, combining core muscle training, pelvic floor strengthening, and posture adjustment. Our professional trainers understand postpartum body changes and provide safe and effective training programs to help mothers regain confidence and health.",
    features: ["腹直肌分離修復", "骨盆底肌強化", "體態調整", "營養諮詢"],
    featuresEn: ["Diastasis Recti Recovery", "Pelvic Floor Strengthening", "Posture Adjustment", "Nutrition Consultation"],
    img: "/images/course-postpartum.jpg",
    category: "postpartum",
  },
  {
    title: "女性專屬課程",
    titleEn: "Women's Body Sculpting Program",
    des: "針對女性生理特點設計的體態雕塑課程，著重於打造優美曲線與提升整體體能。透過科學化的重量訓練、有氧運動及伸展放鬆，幫助您達成理想身材。課程涵蓋臀腿訓練、核心強化、手臂塑形及背部線條雕塑，配合個人化飲食建議，讓您在女性專屬的舒適環境中，自信地追求健康美麗。",
    desEn: "Body sculpting program designed for women's physiological characteristics, focusing on creating beautiful curves and improving overall fitness. Through scientific weight training, cardio, and stretching, help you achieve your ideal body shape.",
    features: ["臀腿訓練", "核心強化", "手臂塑形", "飲食指導"],
    featuresEn: ["Glutes & Legs Training", "Core Strengthening", "Arm Sculpting", "Nutrition Guidance"],
    img: "/images/course-women.webp",
    category: "women",
  },
  {
    title: "銀髮族專屬課程",
    titleEn: "Senior Strength & Mobility Program",
    des: "專為銀髮族設計的健康促進課程，著重於提升肌力、平衡感及關節靈活度。透過溫和漸進的訓練方式，幫助長者維持身體機能、預防跌倒及改善生活品質。課程包含功能性訓練、平衡訓練、柔軟度提升及心肺功能強化，讓您享受健康活躍的銀髮生活。",
    desEn: "Health promotion program designed for seniors, focusing on improving muscle strength, balance, and joint flexibility. Through gentle and progressive training methods, help seniors maintain physical function, prevent falls, and improve quality of life.",
    features: ["肌力訓練", "平衡訓練", "關節活動", "跌倒預防"],
    featuresEn: ["Strength Training", "Balance Training", "Joint Mobility", "Fall Prevention"],
    img: "/images/course-senior.webp",
    category: "senior",
  },
  {
    title: "學生專屬課程",
    titleEn: "Student Fitness & Wellness Program",
    des: "為學生量身打造的健康體能課程，結合體能訓練、壓力管理及運動習慣養成。幫助學生在繁忙課業中保持健康體魄、提升專注力及學習效率。課程涵蓋基礎體能訓練、姿勢矯正、運動傷害預防及健康生活指導，培養終身受用的運動習慣。",
    desEn: "Health and fitness program tailored for students, combining physical training, stress management, and exercise habit formation. Help students maintain healthy bodies, improve concentration, and learning efficiency during busy studies.",
    features: ["體能訓練", "姿勢矯正", "壓力管理", "運動習慣養成"],
    featuresEn: ["Fitness Training", "Posture Correction", "Stress Management", "Exercise Habit Building"],
    img: "/images/course-student.webp",
    category: "student",
  },
  {
    title: "普拉提課程（觀塘分店限定）",
    titleEn: "Pilates (Kwun Tong Branch Only)",
    des: "結合傳統與現代普拉提技巧的專業課程，著重於核心力量、身體控制及柔軟度提升。透過精準的動作指導與呼吸配合，改善體態、增強肌肉線條並提升身心連結。課程適合各種程度學員，從基礎墊上普拉提到器械普拉提，幫助您建立穩定的核心力量與優雅體態。",
    desEn: "Professional program combining traditional and modern Pilates techniques, focusing on core strength, body control, and flexibility improvement. Through precise movement guidance and breathing coordination, improve posture, enhance muscle definition, and strengthen mind-body connection.",
    features: ["核心強化", "柔軟度提升", "體態改善", "身心平衡"],
    featuresEn: ["Core Strengthening", "Flexibility Improvement", "Posture Enhancement", "Mind-Body Balance"],
    img: "/images/course-pilates.webp",
    category: "pilates",
  },
  {
    title: "物理治療服務（中環、觀塘、荃灣、旺角都有物理治療師）",
    titleEn: "Physiotherapy (Available at Central, Kwun Tong, Tsuen Wan, Mong Kok)",
    des: "由專業註冊物理治療師提供的全方位治療服務，針對運動傷害、慢性疼痛及術後復健提供專業評估與治療。結合手法治療、運動治療及物理因子治療，幫助您恢復身體功能、減輕疼痛並預防再次受傷。服務包含肌肉骨骼評估、疼痛管理、姿勢矯正及復健訓練。",
    desEn: "Comprehensive treatment services provided by professional registered physiotherapists, offering professional assessment and treatment for sports injuries, chronic pain, and post-operative rehabilitation. Combining manual therapy, exercise therapy, and physical modalities to help you recover function, reduce pain, and prevent re-injury.",
    features: ["傷害評估", "疼痛治療", "術後復健", "功能恢復"],
    featuresEn: ["Injury Assessment", "Pain Management", "Post-op Rehabilitation", "Function Recovery"],
    img: "/images/course-physio.webp",
    category: "physio",
  },
];

export function EventContent() {
  const { t, language } = useLanguage();
  
  return (
    <section id="programs" className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="mb-2 text-base font-semibold text-pink-500">
            {t('programs.subtitle')} | {t('programs.subtitleEn')}
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('programs.description')}
          </p>
        </div>
        <div className="grid gap-8">
          {PROGRAMS.map((props, idx) => (
            <EventContentCard 
              key={idx} 
              {...props}
              title={language === 'zh' ? props.title : props.titleEn}
              des={language === 'zh' ? props.des : props.desEn}
              features={language === 'zh' ? props.features : props.featuresEn}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventContent;

