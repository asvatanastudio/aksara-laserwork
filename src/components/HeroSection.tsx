import { Button } from "./ui/button.js";
import { ArrowRight, Zap, Award, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-secondary/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,107,53,.1) 35px, rgba(255,107,53,.1) 70px)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm uppercase tracking-wider border border-primary/30">Solusi Laser Terpercaya</span>
          </div>

          <h1 className="text-5xl md:text-6xl text-white uppercase tracking-tight">
            Presisi <span className="text-primary">Laser Cutting</span> & Engraving
          </h1>

          <p className="text-xl text-gray-300">Menghadirkan teknologi laser cutting & engraving terkini untuk berbagai kebutuhan industri dan kreatif Anda dengan presisi tinggi dan hasil maksimal.</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={scrollToContact}>
              Mulai Proyek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8">
              Lihat Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div>
              <div className="flex items-center space-x-2 text-primary mb-1">
                <Zap className="h-5 w-5" />
                <span className="text-3xl">500+</span>
              </div>
              <p className="text-sm text-gray-300">Proyek Selesai</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-primary mb-1">
                <Users className="h-5 w-5" />
                <span className="text-3xl">300+</span>
              </div>
              <p className="text-sm text-gray-300">Klien Puas</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-primary mb-1">
                <Award className="h-5 w-5" />
                <span className="text-3xl">10+</span>
              </div>
              <p className="text-sm text-gray-300">Tahun Pengalaman</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-2xl"></div>
          <div className="relative rounded-lg overflow-hidden border-4 border-primary/30 shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1738162837330-9257f938463c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtZXRhbHxlbnwxfHx8fDE3NTkzMjcyODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Laser Cutting Machine"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-l-primary">
            <p className="text-sm text-muted-foreground mb-1">Presisi Hingga</p>
            <p className="text-2xl text-primary">±0.1mm</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
