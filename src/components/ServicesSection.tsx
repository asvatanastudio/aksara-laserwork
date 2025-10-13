import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Scissors, Printer, Package, Layers, Shapes, Workflow } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Laser Cutting",
    description: "Pemotongan presisi untuk berbagai material seperti stainless steel, mild steel, akrilik, dan kayu dengan ketebalan hingga 20mm.",
    features: ["Presisi ±0.1mm", "Berbagai Material", "Hasil Rapi", "Produksi Massal"],
    materials: ["Stainless Steel", "Mild Steel", "Akrilik", "Kayu", "Aluminium"]
  },
  {
    icon: Printer,
    title: "Laser Engraving",
    description: "Ukiran laser berkualitas tinggi untuk branding, personalisasi, dan dekorasi pada berbagai permukaan material.",
    features: ["Detail Halus", "Tahan Lama", "Custom Design", "Cepat & Efisien"],
    materials: ["Logam", "Plastik", "Kayu", "Kaca", "Kulit"]
  },
  {
    icon: Package,
    title: "Laser Marking",
    description: "Penandaan permanen untuk serial number, barcode, logo, dan informasi produk dengan hasil yang jelas dan tahan lama.",
    features: ["Permanen", "High Contrast", "Batch Processing", "QR Code Ready"],
    materials: ["Metal", "Plastik", "Keramik", "PCB"]
  },
  {
    icon: Layers,
    title: "Sheet Metal Fabrication",
    description: "Fabrikasi logam lembaran dari desain hingga produk jadi dengan teknologi laser cutting dan bending yang presisi.",
    features: ["Design Support", "CNC Bending", "Welding", "Finishing"],
    materials: ["Steel Sheet", "Aluminum Sheet", "Copper"]
  },
  {
    icon: Shapes,
    title: "Custom Signage",
    description: "Pembuatan signage dan papan nama custom dengan berbagai material dan desain sesuai kebutuhan branding Anda.",
    features: ["3D Letters", "LED Backlit", "Custom Design", "Installation"],
    materials: ["Akrilik", "Metal", "Wood Composite"]
  },
  {
    icon: Workflow,
    title: "Prototype & Production",
    description: "Layanan dari prototype hingga produksi massal dengan quality control ketat dan pengerjaan yang cepat.",
    features: ["Quick Turnaround", "Quality Control", "Mass Production", "Competitive Price"],
    materials: ["All Materials"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-wider">Layanan Kami</span>
          <h2 className="mt-2 uppercase tracking-wide">Solusi Laser Komprehensif</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan laser cutting, engraving, dan marking untuk memenuhi semua kebutuhan industri dan kreatif Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="uppercase tracking-wide">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-wide text-primary">Fitur Utama:</p>
                    <ul className="text-sm space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm uppercase tracking-wide text-primary mb-2">Material:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.materials.map((material, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-secondary to-secondary/90 border-primary/30">
            <CardContent className="p-12">
              <h3 className="text-white mb-4 uppercase tracking-wide">Tidak Menemukan Layanan yang Anda Cari?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Kami juga menyediakan layanan custom sesuai kebutuhan spesifik Anda. Konsultasikan proyek Anda dengan tim kami.
              </p>
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors uppercase tracking-wide">
                Hubungi Kami
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
