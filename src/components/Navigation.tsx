import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#proses", label: "Proses" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#kontak", label: "Kontak" },
];

// Ganti dengan nomor WhatsApp Anda (format: 628xxxxxxxxxx)
const WHATSAPP_NUMBER = "6285155145788";
const WHATSAPP_MESSAGE = "Halo kasihKreasi! Saya tertarik untuk konsultasi tentang digital marketing.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b-2 border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="font-serif text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            kasihKreasi
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="sticker" size="sm" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Konsultasi
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border-2 border-border bg-card hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden border-b-2 border-border bg-background overflow-hidden transition-all duration-300",
          isOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="sticker" size="sm" className="w-fit mt-2" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Konsultasi
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
