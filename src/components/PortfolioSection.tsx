import { Card, CardContent } from "./ui/card.js";
import { Badge } from "./ui/badge.js";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";

const portfolioItems = [
  {
    title: "Custom Metal Signage",
    category: "Signage",
    material: "Stainless Steel",
    description: "Pembuatan signage 3D dengan laser cutting untuk corporate office",
    image:
      "https://images.unsplash.com/photo-1738162837438-92ff852619a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NTkzMDM1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Industrial Components",
    category: "Fabrication",
    material: "Mild Steel",
    description: "Komponen industri dengan presisi tinggi untuk machinery parts",
    image:
      "https://images.unsplash.com/photo-1531053326607-9d349096d887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9ufGVufDF8fHx8MTc1OTMyNzI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Acrylic Display Stand",
    category: "Laser Cutting",
    material: "Akrilik",
    description: "Display stand akrilik dengan desain modern dan elegan",
    image:
      "https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NTkzMjM5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Custom Engraving",
    category: "Laser Engraving",
    material: "Wood & Metal",
    description: "Ukiran custom untuk souvenir dan gift corporate",
    image:
      "https://images.unsplash.com/photo-1738162837330-9257f938463c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtZXRhbHxlbnwxfHx8fDE3NTkzMjcyODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Architectural Panel",
    category: "Fabrication",
    material: "Aluminum",
    description: "Panel dekoratif untuk interior dan exterior building",
    image:
      "https://images.unsplash.com/photo-1531053326607-9d349096d887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9ufGVufDF8fHx8MTc1OTMyNzI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Product Marking",
    category: "Laser Marking",
    material: "Various",
    description: "Marking untuk serial number dan branding produk manufaktur",
    image:
      "https://images.unsplash.com/photo-1738162837438-92ff852619a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBlbmdpbmVlcmluZ3xlbnwxfHx8fDE3NTkzMDM1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="mt-2 uppercase tracking-wide">Karya Kami</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Lihat berbagai proyek yang telah kami kerjakan dengan presisi dan kualitas terbaik</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-l-4 border-l-primary hover:shadow-xl transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <Badge className="bg-primary mb-2">{item.category}</Badge>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 uppercase tracking-wide">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{item.material}</Badge>
                  <span className="text-sm text-primary cursor-pointer hover:underline">Lihat Detail →</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-primary text-center">
            <CardContent className="p-6">
              <p className="text-4xl text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Proyek Selesai</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-primary text-center">
            <CardContent className="p-6">
              <p className="text-4xl text-primary mb-2">300+</p>
              <p className="text-muted-foreground">Klien Puas</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-primary text-center">
            <CardContent className="p-6">
              <p className="text-4xl text-primary mb-2">98%</p>
              <p className="text-muted-foreground">Tingkat Kepuasan</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-primary text-center">
            <CardContent className="p-6">
              <p className="text-4xl text-primary mb-2">24h</p>
              <p className="text-muted-foreground">Respon Time</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
