import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "@/assets/logotipo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-4/5 sm:w-[400px] h-full flex flex-col bg-background"
            >
              <SheetHeader className="pb-6 border-b">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-left">
                    <img src={logo} alt="Trevo Contabilidade" className="w-auto h-10" />
                  </SheetTitle>
                 
                </div>
              </SheetHeader>

              {/* Mobile Navigation */}
              <nav className="flex-1 flex flex-col justify-start pt-8">
                <div className="space-y-1">
                  {menuItems.map((item) => {
                    const sectionId = item.href.replace('#', '');
                    const isActive = activeSection === sectionId;
                    
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`block w-full text-left px-4 py-4 font-medium text-base uppercase tracking-wide relative group transition-colors cursor-pointer ${
                          isActive 
                            ? 'text-primary bg-primary/10' 
                            : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                        }`}
                      >
                        {item.label}
                        <span className={`absolute bottom-0 left-4 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
                          isActive ? 'w-[calc(100%-2rem)]' : 'w-0 group-hover:w-[calc(100%-2rem)]'
                        }`}></span>
                      </a>
                    );
                  })}
                </div>
              </nav>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
