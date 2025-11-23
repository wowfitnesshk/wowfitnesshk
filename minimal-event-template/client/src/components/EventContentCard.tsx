import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface EventContentCardProps {
  title: string;
  titleEn?: string;
  des: string;
  features: string[];
  img: string;
  category: string;
}

export function EventContentCard({
  title,
  titleEn,
  des,
  features,
  img,
  category,
}: EventContentCardProps) {
  const { t } = useLanguage();
  
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-shadow bg-white overflow-hidden lg:flex lg:flex-row">
      <CardHeader className="p-0 flex-shrink-0 lg:w-96">
        <div className="h-64 lg:h-full w-full overflow-hidden">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 lg:p-8 flex-1">
        <div className="mb-4">
          <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200 mb-3">
            {category.toUpperCase()}
          </Badge>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          {titleEn && (
            <p className="text-base text-gray-500 font-medium">
              {titleEn}
            </p>
          )}
        </div>
        <p className="mb-6 text-gray-600 leading-relaxed">
          {des}
        </p>
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 mb-3">{t('programs.features')}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-pink-600" />
                </div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default EventContentCard;

