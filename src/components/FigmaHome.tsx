import imgRoundedRectangle from "figma:asset/525b077c9c4ad814738f94cec502d04f76f0aa31.png";
import imgImage1 from "figma:asset/2ba893119cdefcc658bacbf83d0cce620b8a6b87.png";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Scissors, Printer, Package, CheckCircle, Phone, Mail, MapPin, Clock, Zap, Shield, Award, Sparkles, Target } from "lucide-react";

export default function FigmaHome() {
  const [activeSection, setActiveSection] = useState("beranda");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId.toLowerCase());
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-[#3d4451] h-[114px] w-full fixed top-0 left-0 z-50 border-b border-[#2d3748]">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="h-[61px] w-[67px] rounded-[10px] border-4 border-[#8c7dae] overflow-hidden">
              <img src={imgRoundedRectangle} alt="Aksara Laserwork Logo" className="w-full h-full object-cover rounded-[10px]" />
            </div>
            <div className="text-white text-center leading-tight">
              <p className="text-[15px] font-normal">AKSARA</p>
              <p className="text-[15px] font-normal">LASERWORK</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("beranda")}
              className={`h-[61px] px-6 rounded-[10px] text-white text-[20px] font-normal transition-all ${
                activeSection === "beranda" ? "bg-[#3d4451] border border-[#eeeeee]" : "bg-[#3d4451] border border-[#8c7dae] hover:border-[#eeeeee]"
              }`}
            >
              BERANDA
            </button>
            <button onClick={() => scrollToSection("layanan")} className="h-[61px] px-6 rounded-[10px] bg-[#3d4451] border border-[#8c7dae] text-white text-[20px] font-normal hover:border-[#eeeeee] transition-all">
              LAYANAN
            </button>
            <button onClick={() => scrollToSection("galeri")} className="h-[61px] px-6 rounded-[10px] bg-[#3d4451] border border-[#8c7dae] text-white text-[20px] font-normal hover:border-[#eeeeee] transition-all">
              GALERI
            </button>
            <button onClick={() => scrollToSection("tentang")} className="h-[61px] px-6 rounded-[10px] bg-[#3d4451] border border-[#8c7dae] text-white text-[20px] font-normal hover:border-[#eeeeee] transition-all">
              TENTANG KAMI
            </button>
            <button onClick={() => scrollToSection("kontak")} className="h-[61px] px-6 rounded-[10px] bg-[#3d4451] border border-[#8c7dae] text-white text-[20px] font-normal hover:border-[#eeeeee] transition-all">
              KONTAK
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="bg-[#515761] min-h-[455px] w-full mt-[114px] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-[64px] font-['Notable',_sans-serif] text-white leading-tight">Presisi dalam Setiap Potongan</h1>
            <p className="text-[24px] text-white font-normal leading-relaxed">
              Aksara Laserwork menghadirkan layanan laser cutting dan engraving profesional
              <br />
              dengan ketelitian tinggi untuk kebutuhan industri maupun kreatif.
            </p>

            {/* CTA Buttons */}
            <div className="flex space-x-6 pt-8">
              <button onClick={() => scrollToSection("layanan")} className="bg-[#dd7311] hover:bg-[#c66510] transition-colors h-[71px] px-8 rounded-[15px] text-white text-[24px] font-normal">
                LIHAT LAYANAN
              </button>
              <button onClick={() => scrollToSection("kontak")} className="bg-[#dd7311] hover:bg-[#c66510] transition-colors h-[71px] px-8 rounded-[15px] text-white text-[24px] font-normal">
                HUBUNGI KAMI
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img src={imgImage1} alt="Laser Cutting Machine" className="w-full h-[369px] object-cover rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="tentang" className="bg-white min-h-[359px] w-full py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-[40px] font-normal text-black text-center mb-6">Mengapa Memilih Aksara Laserwork?</h2>
          <p className="text-[32px] font-normal text-black text-center leading-relaxed max-w-[891px] mx-auto">
            Dengan pengalaman lebih dari 10 tahun, kami berkomitmen untuk memberikan solusi laser cutting yang inovatif, cepat, dan berkualitas. Tim profesional kami siap membantu Anda mewujudkan desain dan kebutuhan industri dengan standar
            tinggi.
          </p>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="bg-[#f5f5f7] w-full py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-[40px] font-normal text-center mb-4 text-foreground">Layanan Kami</h2>
          <p className="text-center text-muted-foreground text-xl max-w-3xl mx-auto mb-12">Berbagai layanan laser cutting dan engraving profesional untuk memenuhi kebutuhan Anda</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Laser Cutting */}
            <Card className="border-l-4 border-l-[#dd7311] hover:shadow-xl transition-all group">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-[#dd7311]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#dd7311] group-hover:scale-110 transition-all">
                  <Scissors className="h-8 w-8 text-[#dd7311] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-3 font-normal">LASER CUTTING</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Pemotongan presisi untuk berbagai material seperti stainless steel, mild steel, akrilik, dan kayu dengan ketebalan hingga 20mm.</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">Presisi hingga ±0.1mm</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">Berbagai jenis material</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">Hasil potongan rapi</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Laser Marking */}
            <Card className="border-l-4 border-l-[#dd7311] hover:shadow-xl transition-all group">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-[#dd7311]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#dd7311] group-hover:scale-110 transition-all">
                  <Target className="h-8 w-8 text-[#dd7311] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-3 font-normal">LASER MARKING</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Penandaan permanen untuk serial number, barcode, logo, dan informasi produk dengan hasil yang jelas dan tahan lama.</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">Marking permanen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">High contrast & readable</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">QR Code & barcode ready</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Laser Engraving */}
            <Card className="border-l-4 border-l-[#dd7311] hover:shadow-xl transition-all group">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-[#dd7311]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#dd7311] group-hover:scale-110 transition-all">
                  <Printer className="h-8 w-8 text-[#dd7311] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-3 font-normal">LASER ENGRAVING</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Ukiran laser berkualitas tinggi untuk branding, personalisasi, dan dekorasi pada berbagai permukaan material.</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">Detail ukiran halus</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">Tahan lama & permanen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">Custom design tersedia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Custom Design */}
            <Card className="border-l-4 border-l-[#dd7311] hover:shadow-xl transition-all group">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-[#dd7311]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#dd7311] group-hover:scale-110 transition-all">
                  <Sparkles className="h-8 w-8 text-[#dd7311] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-3 font-normal">CUSTOM DESIGN</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Layanan desain kustom sesuai kebutuhan Anda. Kami membantu mewujudkan ide menjadi produk jadi dengan presisi tinggi.</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">Konsultasi gratis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">Desain sesuai kebutuhan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                    <span className="text-xs">Prototype & revisi</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Keunggulan */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-white border-2 border-[#dd7311]/20 hover:border-[#dd7311]/40 transition-all">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 bg-[#dd7311]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-7 w-7 text-[#dd7311]" />
                </div>
                <h4 className="text-xl mb-2">Cepat & Efisien</h4>
                <p className="text-muted-foreground text-sm">Pengerjaan cepat dengan hasil maksimal untuk semua proyek Anda</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 border-[#dd7311]/20 hover:border-[#dd7311]/40 transition-all">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 bg-[#dd7311]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-7 w-7 text-[#dd7311]" />
                </div>
                <h4 className="text-xl mb-2">Kualitas Terjamin</h4>
                <p className="text-muted-foreground text-sm">Menggunakan teknologi terkini dengan quality control ketat</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 border-[#dd7311]/20 hover:border-[#dd7311]/40 transition-all">
              <CardContent className="p-6 text-center">
                <div className="h-14 w-14 bg-[#dd7311]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-7 w-7 text-[#dd7311]" />
                </div>
                <h4 className="text-xl mb-2">Harga Kompetitif</h4>
                <p className="text-muted-foreground text-sm">Solusi terbaik dengan harga yang terjangkau dan transparan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeri Section */}
      <section id="galeri" className="bg-white w-full py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-[40px] font-normal text-center mb-4 text-foreground">Galeri Proyek</h2>
          <p className="text-center text-muted-foreground text-xl max-w-3xl mx-auto mb-12">Lihat hasil karya kami yang telah dipercaya oleh berbagai klien</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="group overflow-hidden border-l-4 border-l-[#dd7311] hover:shadow-xl transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1738162837330-9257f938463c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGN1dHRpbmclMjBtZXRhbHxlbnwxfHx8fDE3NTk2MjU5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Laser Cutting Metal"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white">Laser Cutting Precision Metal Parts</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg mb-2">Custom Metal Cutting</h3>
                <p className="text-sm text-muted-foreground">Stainless Steel - Industri Manufaktur</p>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group overflow-hidden border-l-4 border-l-[#dd7311] hover:shadow-xl transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653021018412-7be5ac79117d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGVuZ3JhdmluZ3xlbnwxfHx8fDE3NTk2MjU5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Metal Engraving"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white">Detailed Metal Engraving</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg mb-2">Laser Engraving</h3>
                <p className="text-sm text-muted-foreground">Metal & Plastik - Corporate Branding</p>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group overflow-hidden border-l-4 border-l-[#dd7311] hover:shadow-xl transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571745310354-10362f57d2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU5NjI1OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Industrial Workshop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white">Industrial Component Manufacturing</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg mb-2">Industrial Parts</h3>
                <p className="text-sm text-muted-foreground">Mild Steel - Komponen Mesin</p>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="group overflow-hidden border-l-4 border-l-[#dd7311] hover:shadow-xl transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1655139964340-055bff7e1996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMHNpZ25hZ2V8ZW58MXx8fHwxNzU5NjI1OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Metal Signage"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white">Custom Metal Signage</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg mb-2">Custom Signage</h3>
                <p className="text-sm text-muted-foreground">Stainless Steel - Corporate Office</p>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="group overflow-hidden border-l-4 border-l-[#dd7311] hover:shadow-xl transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1652990337463-b79f5759e0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwZGlzcGxheXxlbnwxfHx8fDE3NTk2MjU5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Acrylic Display"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white">Acrylic Display Stand</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg mb-2">Acrylic Display</h3>
                <p className="text-sm text-muted-foreground">Akrilik - Retail & Exhibition</p>
              </CardContent>
            </Card>

            {/* Project 6 */}
            <Card className="group overflow-hidden border-l-4 border-l-[#dd7311] hover:shadow-xl transition-all">
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzU5NjI1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Precision Machinery"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white">Precision Machinery Parts</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg mb-2">Precision Parts</h3>
                <p className="text-sm text-muted-foreground">Aluminium - Automotive Industry</p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <Card className="bg-gradient-to-br from-[#dd7311] to-[#c66510] text-white text-center border-0">
              <CardContent className="p-6">
                <p className="text-4xl mb-2">500+</p>
                <p className="text-sm opacity-90">Proyek Selesai</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#3d4451] to-[#2d3441] text-white text-center border-0">
              <CardContent className="p-6">
                <p className="text-4xl mb-2">300+</p>
                <p className="text-sm opacity-90">Klien Puas</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#dd7311] to-[#c66510] text-white text-center border-0">
              <CardContent className="p-6">
                <p className="text-4xl mb-2">98%</p>
                <p className="text-sm opacity-90">Kepuasan</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-[#3d4451] to-[#2d3441] text-white text-center border-0">
              <CardContent className="p-6">
                <p className="text-4xl mb-2">24h</p>
                <p className="text-sm opacity-90">Response Time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="bg-[#f5f5f7] w-full py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-[40px] font-normal text-center mb-4 text-foreground">Hubungi Kami</h2>
          <p className="text-center text-muted-foreground text-xl max-w-3xl mx-auto mb-12">Konsultasikan kebutuhan proyek Anda dengan tim profesional kami</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-l-4 border-l-[#dd7311]">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 font-normal">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Masukkan nama Anda" required className="mt-1.5 border-[#3d4451]/20 focus:border-[#dd7311]" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      required
                      className="mt-1.5 border-[#3d4451]/20 focus:border-[#dd7311]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+62 xxx-xxxx-xxxx" required className="mt-1.5 border-[#3d4451]/20 focus:border-[#dd7311]" />
                  </div>
                  <div>
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan detail proyek Anda..."
                      rows={5}
                      required
                      className="mt-1.5 border-[#3d4451]/20 focus:border-[#dd7311]"
                    />
                  </div>
                  <button type="submit" className="w-full bg-[#dd7311] hover:bg-[#c66510] transition-colors h-12 rounded-md text-white">
                    KIRIM PESAN
                  </button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-[#dd7311] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-[#dd7311]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#dd7311]" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-2 font-normal">Alamat Workshop</h4>
                      <p className="text-muted-foreground">
                        Jl. Industri Raya No. 123
                        <br />
                        Kawasan Industri Modern
                        <br />
                        Jakarta Timur 13510, Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#dd7311] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-[#dd7311]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#dd7311]" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-2 font-normal">Telepon & WhatsApp</h4>
                      <p className="text-muted-foreground">
                        +62 812-3456-7890
                        <br />
                        +62 21-8765-4321
                      </p>
                      <p className="text-sm text-[#dd7311] mt-2">Tersedia 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#dd7311] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-[#dd7311]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#dd7311]" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-2 font-normal">Email</h4>
                      <p className="text-muted-foreground">
                        info@aksaralaserwork.com
                        <br />
                        sales@aksaralaserwork.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#dd7311] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-[#dd7311]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#dd7311]" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-2 font-normal">Jam Operasional</h4>
                      <p className="text-muted-foreground">
                        Senin - Jumat: 08:00 - 17:00
                        <br />
                        Sabtu: 08:00 - 14:00
                        <br />
                        Minggu & Libur: Tutup
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3d4451] w-full py-12 border-t-4 border-t-[#dd7311]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-lg border-2 border-[#dd7311] overflow-hidden">
                  <img src={imgRoundedRectangle} alt="Aksara Laserwork" className="w-full h-full object-cover" />
                </div>
                <div className="text-white">
                  <p className="text-sm font-normal">AKSARA</p>
                  <p className="text-sm font-normal">LASERWORK</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">Solusi terpercaya untuk laser cutting, engraving, dan marking dengan presisi tinggi dan kualitas terbaik.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-lg mb-4 font-normal">Menu Cepat</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection("beranda")} className="text-gray-300 hover:text-[#dd7311] transition-colors">
                    Beranda
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("tentang")} className="text-gray-300 hover:text-[#dd7311] transition-colors">
                    Tentang Kami
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("layanan")} className="text-gray-300 hover:text-[#dd7311] transition-colors">
                    Layanan
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("galeri")} className="text-gray-300 hover:text-[#dd7311] transition-colors">
                    Galeri
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("kontak")} className="text-gray-300 hover:text-[#dd7311] transition-colors">
                    Kontak
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white text-lg mb-4 font-normal">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Laser Cutting</li>
                <li>Laser Marking</li>
                <li>Laser Engraving</li>
                <li>Custom Design</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-lg mb-4 font-normal">Kontak</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-[#dd7311] flex-shrink-0 mt-0.5" />
                  <span>Jl. Industri Raya No. 123, Jakarta Timur 13510</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Phone className="h-4 w-4 text-[#dd7311] flex-shrink-0" />
                  <span>+62 812-3456-7890</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <Mail className="h-4 w-4 text-[#dd7311] flex-shrink-0" />
                  <span>info@aksaralaserwork.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Aksara Laserwork. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#dd7311] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#dd7311] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
