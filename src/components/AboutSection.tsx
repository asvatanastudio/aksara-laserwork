import { Card, CardContent } from "./ui/card";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-wider">Tentang Kami</span>
          <h2 className="mt-2 uppercase tracking-wide">Mengapa Memilih Aksara Laserwork?</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Kami adalah perusahaan terdepan dalam industri laser cutting dan engraving dengan komitmen terhadap kualitas dan inovasi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="rounded-lg overflow-hidden border-l-4 border-l-primary shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NTkzMjM5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Industrial Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="uppercase tracking-wide text-primary">Pengalaman & Keahlian</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dengan lebih dari 10 tahun pengalaman di industri laser cutting dan engraving, Aksara Laserwork telah dipercaya oleh ratusan klien dari berbagai sektor industri. Kami menggunakan teknologi laser terkini yang dikombinasikan dengan keahlian tim profesional untuk menghasilkan produk berkualitas tinggi.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Teknologi Terkini</p>
                  <p className="text-sm text-muted-foreground">Mesin laser dengan presisi tinggi hingga ±0.1mm</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Tim Profesional</p>
                  <p className="text-sm text-muted-foreground">Operator bersertifikat dengan pengalaman puluhan tahun</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Hasil Berkualitas</p>
                  <p className="text-sm text-muted-foreground">Jaminan kualitas dan ketepatan waktu pengerjaan</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Harga Kompetitif</p>
                  <p className="text-sm text-muted-foreground">Solusi terbaik dengan harga yang terjangkau</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 uppercase tracking-wide">Visi</h3>
              <p className="text-muted-foreground">
                Menjadi perusahaan laser cutting & engraving terdepan di Indonesia yang dikenal dengan inovasi, kualitas, dan kepercayaan pelanggan.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 uppercase tracking-wide">Misi</h3>
              <p className="text-muted-foreground">
                Memberikan solusi laser cutting & engraving berkualitas tinggi dengan teknologi terkini dan pelayanan terbaik untuk semua klien.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 uppercase tracking-wide">Nilai</h3>
              <p className="text-muted-foreground">
                Integritas, presisi, inovasi, dan kepuasan pelanggan adalah nilai utama yang menjadi fondasi setiap pekerjaan kami.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
