import { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, Users, FileText, HelpCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "/logotipo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { label: "Início", href: "#hero", icon: Home },
    { label: "Serviços", href: "#servicos", icon: Briefcase },
    { label: "Sobre", href: "#sobre", icon: Users },
    { label: "Blog", href: "#blog", icon: FileText },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
    { label: "Contato", href: "#contato", icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 64; // Altura do header (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  // Detectar seção ativa baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'servicos', 'sobre', 'blog', 'faq', 'contato'];
      const scrollPosition = window.scrollY + 100; // Offset para compensar o header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a 
            href="#hero" 
            className="flex items-center"
            onClick={(e) => handleLinkClick(e, "#hero")}
          >
            <img src={logo} alt="Trevo Contabilidade" className="w-auto h-10" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`font-medium text-sm uppercase tracking-wide relative pb-1 group transition-colors cursor-pointer ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-primary hover:text-primary/80 hover:bg-primary/10 transition-all duration-200 relative"
                onClick={() => setIsOpen(true)}
              >
                <Menu className={`h-6 w-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-4/5 sm:w-[400px] bg-background border-l-2 border-primary/20"
            >
              <SheetHeader className="pb-6 border-b border-primary/10">
                <SheetTitle className="text-left">
                  <img src={logo} alt="Trevo Contabilidade" className="w-auto h-10" />
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation */}
              <nav className="flex-1 flex flex-col justify-start pt-6">
                <div className="space-y-2">
                  {menuItems.map((item) => {
                    const sectionId = item.href.replace('#', '');
                    const isActive = activeSection === sectionId;
                    const IconComponent = item.icon;
                    
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`group flex items-center w-full text-left px-4 py-3 font-medium text-base relative transition-all duration-300 cursor-pointer rounded-lg mx-2 ${
                          isActive 
                            ? 'text-primary bg-primary/10 border border-primary/20' 
                            : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                        }`}
                      >
                        <div className={`flex items-center justify-center w-10 h-10 rounded-lg mr-3 transition-all duration-300 ${
                          isActive 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-muted/50 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                        }`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <span className="block font-semibold">{item.label}</span>
                          {isActive && (
                            <span className="block text-xs text-primary/70 mt-1">
                              Seção atual
                            </span>
                          )}
                        </div>
                        {isActive && (
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        )}
                      </a>
                    );
                  })}
                </div>

                {/* Contact Info Section */}
                <div className="mt-8 pt-6 border-t border-primary/10">
                  <div className="px-4">
                    <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                      Entre em Contato
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        <Phone className="h-4 w-4 mr-3 text-primary" />
                        <span>+55 21 3547-2077</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        <Mail className="h-4 w-4 mr-3 text-primary" />
                        <span>contato@trevocontabilidade.com</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        <MapPin className="h-4 w-4 mr-3 text-primary" />
                        <span>Avenida Isabel, 15, Casa 2, Rio de Janeiro, RJ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
