import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Search, MapPin, Calendar, DollarSign } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Startup Indonesia",
    location: "Jakarta",
    salary: "Rp 8.000.000 - 12.000.000",
    type: "Full-time",
    posted: "2 hari yang lalu",
    description: "Kami mencari Frontend Developer yang berpengalaman dengan React dan TypeScript.",
    skills: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Agency",
    location: "Bandung",
    salary: "Rp 6.000.000 - 10.000.000",
    type: "Full-time",
    posted: "1 minggu yang lalu",
    description: "Bergabunglah dengan tim kreatif kami untuk menciptakan pengalaman digital yang menakjubkan.",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping"]
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "FinTech Solutions",
    location: "Surabaya",
    salary: "Rp 10.000.000 - 15.000.000",
    type: "Remote",
    posted: "3 hari yang lalu",
    description: "Kembangkan sistem backend yang scalable untuk aplikasi fintech.",
    skills: ["Node.js", "PostgreSQL", "AWS"]
  }
];

export default function JobSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const filteredJobs = mockJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 -z-10 rounded-lg"></div>
        <h2 className="mb-4 pt-6 uppercase tracking-wide">Cari Lowongan Pekerjaan</h2>
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Posisi, perusahaan, atau kata kunci..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="w-64 relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Lokasi"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Cari</Button>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-xl transition-all hover:border-primary/50 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg mb-2">{job.title}</CardTitle>
                  <p className="text-muted-foreground mb-2">{job.company}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {job.posted}
                    </div>
                  </div>
                </div>
                <Badge variant="secondary">{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{job.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button className="bg-primary hover:bg-primary/90">Lamar Sekarang</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}