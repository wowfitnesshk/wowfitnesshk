import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone } from "lucide-react";

const LOCATIONS = [
  {
    name: "中環分店",
    nameEn: "Central",
    address: "中環皇后大道中110-116號永恆商業大廈10樓",
    addressEn: "10/F, Perpetual Commercial Building, 110-116 Queen's Road Central, Central",
    hours: "週一至週五 9:00-23:00 | 週末及公眾假期 9:00-20:00",
    phone: "+852 5177 1517",
    ladiesOnly: false,
    region: "港島區"
  },
  {
    name: "銅鑼灣分店",
    nameEn: "Causeway Bay",
    address: "銅鑼灣登龍街18號V-POINT 22樓全層",
    addressEn: "22/F (Whole Floor), V-POINT, 18 Tang Lung Street, Causeway Bay",
    hours: "週一至週五 9:00-23:00 | 週末及公眾假期 9:00-20:00",
    phone: "+852 5177 1517",
    ladiesOnly: true,
    region: "港島區"
  },
  {
    name: "旺角分店",
    nameEn: "Mong Kok",
    address: "旺角家樂坊17樓1716-19室",
    addressEn: "Room 1716-19, 17/F, Gala Place, Mong Kok",
    hours: "週一至週五 9:00-23:00 | 週末及公眾假期 9:00-20:00",
    phone: "+852 5177 1517",
    ladiesOnly: true,
    region: "九龍區"
  },
  {
    name: "尖沙咀分店",
    nameEn: "Tsim Sha Tsui",
    address: "尖沙咀加連威老道德立大廈4樓",
    addressEn: "4/F, Tak Lee Building, Granville Road, Tsim Sha Tsui",
    hours: "週一至週五 9:00-23:00 | 週末及公眾假期 9:00-20:00",
    phone: "+852 5177 1517",
    ladiesOnly: false,
    region: "九龍區"
  },
  {
    name: "觀塘分店",
    nameEn: "Kwun Tong",
    address: "觀塘駿業街58號電訊數碼大樓5樓",
    addressEn: "5/F, Telecom Digital Building, 58 Tsun Yip Street, Kwun Tong",
    hours: "週一至週五 9:00-23:00 | 週末及公眾假期 9:00-20:00",
    phone: "+852 5177 1517",
    ladiesOnly: true,
    region: "九龍區"
  },
  {
    name: "荃灣分店",
    nameEn: "Tsuen Wan",
    address: "荃灣灰窰角街8-10號第一亞洲中心一樓（Plaza 88 附近、爵悅庭對面）",
    addressEn: "1/F, First Asia Centre, 8-10 Hoi Shing Road, Tsuen Wan (Near Plaza 88, Opposite to The Dynasty)",
    hours: "週一至週五 9:00-23:00 | 週末及公眾假期 9:00-20:00",
    phone: "+852 5177 1517",
    ladiesOnly: true,
    region: "新界區"
  },
];

export function Locations() {
  // 按地區分組
  const regionGroups = {
    "港島區": LOCATIONS.filter(loc => loc.region === "港島區"),
    "九龍區": LOCATIONS.filter(loc => loc.region === "九龍區"),
    "新界區": LOCATIONS.filter(loc => loc.region === "新界區"),
  };

  return (
    <section id="locations" className="py-16 px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="mb-2 text-base font-semibold text-pink-500">
            分店位置 | Our Locations
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            遍佈香港六大地區
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            WOW FITNESS 在香港主要地區設有分店，方便您就近選擇最適合的訓練地點
          </p>
        </div>

        {Object.entries(regionGroups).map(([region, locations]) => (
          <div key={region} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-pink-500" />
              {region}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {locations.map((location, idx) => (
                <Card key={idx} className="border-pink-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">
                        {location.name}
                        <p className="text-sm font-normal text-gray-500 mt-1">{location.nameEn}</p>
                      </CardTitle>
                      {location.ladiesOnly && (
                        <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                          設有女性專屬區域
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-900 font-medium leading-relaxed">{location.address}</p>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{location.addressEn}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">{location.hours}</p>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <a 
                        href={`https://wa.me/85251771517`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 text-sm hover:text-pink-600 transition-colors"
                      >
                        WhatsApp: {location.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Locations;

