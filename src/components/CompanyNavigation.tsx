import { Button } from "./ui/button.js";
import { Menu, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function CompanyNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 border-b bg-secondary/95 backdrop-blur-sm px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold">AL</span>
          </div>
          <div>
            <h1 className="text-white uppercase tracking-wider">Aksara Laserwork</h1>
            <p className="text-xs text-primary">Precision Laser Solutions</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection("home")} className="text-white hover:text-primary transition-colors">
            Beranda
          </button>
          <button onClick={() => scrollToSection("about")} className="text-white hover:text-primary transition-colors">
            Tentang Kami
          </button>
          <button onClick={() => scrollToSection("services")} className="text-white hover:text-primary transition-colors">
            Layanan
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="text-white hover:text-primary transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-white hover:text-primary transition-colors">
            Kontak
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-white text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <span>+62 812-3456-7890</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Konsultasi Gratis</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-3">
          <button onClick={() => scrollToSection("home")} className="block w-full text-left text-white hover:text-primary transition-colors py-2">
            Beranda
          </button>
          <button onClick={() => scrollToSection("about")} className="block w-full text-left text-white hover:text-primary transition-colors py-2">
            Tentang Kami
          </button>
          <button onClick={() => scrollToSection("services")} className="block w-full text-left text-white hover:text-primary transition-colors py-2">
            Layanan
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="block w-full text-left text-white hover:text-primary transition-colors py-2">
            Portfolio
          </button>
          <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-white hover:text-primary transition-colors py-2">
            Kontak
          </button>
          <Button className="w-full bg-primary hover:bg-primary/90">Konsultasi Gratis</Button>
        </div>
      )}
    </nav>
  );
}
