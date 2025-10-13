import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Terima kasih! Kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-wider">Hubungi Kami</span>
          <h2 className="mt-2 uppercase tracking-wide">Mari Wujudkan Proyek Anda</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Konsultasikan kebutuhan laser cutting & engraving Anda dengan tim ahli kami. Kami siap membantu mewujudkan proyek Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="bg-muted/30">
              <CardTitle className="flex items-center uppercase tracking-wide">
                <Send className="h-5 w-5 mr-2 text-primary" />
                Kirim Pesan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Nomor Telepon *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+62 xxx-xxxx-xxxx"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subjek</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Perihal proyek Anda"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Pesan *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Ceritakan detail proyek Anda, material yang diinginkan, dan spesifikasi lainnya..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 uppercase tracking-wide">Alamat Workshop</h4>
                    <p className="text-muted-foreground">
                      Jl. Industri Raya No. 123<br />
                      Kawasan Industri Modern<br />
                      Jakarta Timur 13510, Indonesia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 uppercase tracking-wide">Telepon & WhatsApp</h4>
                    <p className="text-muted-foreground">
                      +62 812-3456-7890<br />
                      +62 21-8765-4321
                    </p>
                    <p className="text-sm text-primary mt-2">
                      Tersedia 24/7 untuk konsultasi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 uppercase tracking-wide">Email</h4>
                    <p className="text-muted-foreground">
                      info@aksaralaserwork.com<br />
                      sales@aksaralaserwork.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 uppercase tracking-wide">Jam Operasional</h4>
                    <p className="text-muted-foreground">
                      Senin - Jumat: 08:00 - 17:00<br />
                      Sabtu: 08:00 - 14:00<br />
                      Minggu & Libur: Tutup
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="mt-8 border-l-4 border-l-primary overflow-hidden">
          <div className="h-96 bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Google Maps akan ditampilkan di sini</p>
              <p className="text-sm text-muted-foreground mt-2">Kawasan Industri Modern, Jakarta Timur</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
