import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold">AL</span>
              </div>
              <div>
                <h3 className="uppercase tracking-wider">Aksara Laserwork</h3>
                <p className="text-xs text-primary">Precision Laser Solutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Solusi terpercaya untuk laser cutting, engraving, dan marking dengan presisi tinggi dan kualitas terbaik.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="uppercase tracking-wider mb-4 text-primary">Menu Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-primary transition-colors">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary transition-colors">
                  Tentang Kami
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-primary transition-colors">
                  Layanan
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-primary transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary transition-colors">
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="uppercase tracking-wider mb-4 text-primary">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Laser Cutting</li>
              <li>Laser Engraving</li>
              <li>Laser Marking</li>
              <li>Sheet Metal Fabrication</li>
              <li>Custom Signage</li>
              <li>Prototype & Production</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-wider mb-4 text-primary">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Jl. Industri Raya No. 123<br />
                  Jakarta Timur 13510
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@aksaralaserwork.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Aksara Laserwork. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
