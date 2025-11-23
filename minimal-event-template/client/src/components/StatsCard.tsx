import { Card } from "@/components/ui/card";
import CountUp from "react-countup";

interface StatsCardProps {
  count: string;
  title: string;
  subtitle?: string;
}

export function StatsCard({ count, title, subtitle }: StatsCardProps) {
  const getCountUpProps = (countString: string) => {
    const numericValue = parseFloat(countString.replace(/[^\d.]/g, ''));
    
    let suffix = '';
    if (countString.includes('+')) suffix = '+';
    if (countString.includes('K') || countString.includes('k')) suffix = 'K';
    if (countString.includes('M') || countString.includes('m')) suffix = 'M';
    
    return { end: numericValue, suffix };
  };

  const { end, suffix } = getCountUpProps(count);

  return (
    <Card className="border-0 shadow-none bg-transparent">
      <h2 className="text-5xl font-bold text-pink-500">
        <CountUp
          start={0}
          end={end}
          duration={2}
          separator=","
          suffix={suffix}
          enableScrollSpy
          scrollSpyOnce
        />
      </h2>
      <h3 className="mt-2 text-lg font-semibold text-gray-900">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm text-gray-500 mt-1">
          {subtitle}
        </p>
      )}
    </Card>
  );
}

export default StatsCard;

