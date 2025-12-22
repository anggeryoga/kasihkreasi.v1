import { Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t-2 border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="font-serif text-xl font-bold tracking-tight">
              JeparaDigital
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              © 2024 JeparaDigital. Dibuat dengan ❤️ di Jepara.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-card border-2 border-border rounded-xl flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-card border-2 border-border rounded-xl flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-200"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-card border-2 border-border rounded-xl flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
