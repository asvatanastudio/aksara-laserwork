import { useState } from "react";
import { Button } from "./ui/button.js";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu.js";
import { ChevronDown, Search, User, Building2 } from "lucide-react";

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  return (
    <nav className="border-b bg-secondary px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl text-primary uppercase tracking-wider">JobPortal</h1>

          <div className="flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 text-white hover:text-primary hover:bg-secondary/80">
                  <span>Pekerjaan</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => onViewChange("search")}>
                  <Search className="h-4 w-4 mr-2" />
                  Cari Lowongan
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onViewChange("profile")}>
                  <User className="h-4 w-4 mr-2" />
                  Tambah Profil Kerja Saya
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" onClick={() => onViewChange("company")} className="flex items-center space-x-1 text-white hover:text-primary hover:bg-secondary/80">
              <Building2 className="h-4 w-4" />
              <span>Dashboard Perusahaan</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
            Masuk
          </Button>
          <Button className="bg-primary hover:bg-primary/90">Daftar</Button>
        </div>
      </div>
    </nav>
  );
}
