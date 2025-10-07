import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Menu, Home, Briefcase, Users, FileText, HelpCircle, Phone, Mail, MapPin, X, ChevronRight } from "lucide-react";
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
  const sheetRef = useRef<HTMLDivElement>(null);

  const menuItems = useMemo(() => [
    { label: "Início", href: "#hero", icon: Home },
    { label: "Serviços", href: "#servicos", icon: Briefcase },
    { label: "Sobre", href: "#sobre", icon: Users },
    { label: "Blog", href: "#blog", icon: FileText },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
    { label: "Contato", href: "#contato", icon: Phone },
  ], []);

  const scrollToSection = useCallback((href: string) => {
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

    // Delay para permitir que a animação de fechamento seja visível
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }, []);

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  }, [scrollToSection]);

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

  // Detectar gestos de swipe para fechar o menu
  useEffect(() => {
    if (!isOpen) return;

    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      // Swipe horizontal para a direita (fechar menu)
      if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
        setIsOpen(false);
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen]);

  // Memoizar o cálculo do progresso de navegação
  const navigationProgress = useMemo(() => {
    const currentIndex = menuItems.findIndex(item => item.href.replace('#', '') === activeSection);
    return {
      current: currentIndex + 1,
      total: menuItems.length,
      percentage: ((currentIndex + 1) / menuItems.length) * 100
    };
  }, [activeSection, menuItems]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white ">
      <div className="w-full max-w-7xl mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo - Mobile (à esquerda) */}
        <div className="flex md:hidden items-center">
          <a
            href="#hero"
            className="flex items-center"
            onClick={(e) => handleLinkClick(e, "#hero")}
          >
            <img src={logo} alt="Trevo Contabilidade" className="w-auto h-8" />
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
                className={`font-zurich-bold text-sm uppercase tracking-wide relative pb-1 group transition-colors cursor-pointer ${isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
                  }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </a>
            );
          })}
        </nav>

        {/* Logo - Desktop (centro) */}
        <div className="hidden md:flex items-center flex-col gap-2">
          <a
            href="#hero"
            className="flex items-center"
            onClick={(e) => handleLinkClick(e, "#hero")}
          >
            <img src={logo} alt="Trevo Contabilidade" className="w-auto h-10" />
          </a>
          <span className="text-xs text-primary font-zurich-bold">CRC/RJ 2574</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary hover:text-primary/80 hover:bg-primary/10 transition-all duration-300 relative group h-9 w-9 sm:h-10 sm:w-10"
                onClick={() => setIsOpen(true)}
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <Menu className={`h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`} />
                  {isOpen && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <X className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce-in" />
                    </div>
                  )}
                </div>
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[90vw] max-w-sm sm:w-80 md:w-96 bg-background/98 backdrop-blur-md border-l-2 border-primary/30 shadow-2xl overflow-hidden"
              ref={sheetRef}
              aria-label="Menu de navegação mobile"
            >
              {/* Header com logo e botão de fechar */}
              <SheetHeader className="pb-4 sm:pb-6 border-b border-primary/20 relative">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-left">
                    <img src={logo} alt="Trevo Contabilidade" className="w-auto h-8 sm:h-10" />
                  </SheetTitle>
                </div>

                {/* Indicador de progresso de navegação */}
                <div className="mt-3 sm:mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span className="text-xs sm:text-sm">Navegação</span>
                    <span className="text-xs sm:text-sm font-zurich-medium">{navigationProgress.current} de {navigationProgress.total}</span>
                  </div>
                  <div className="w-full bg-muted/40 rounded-full h-1 sm:h-1.5">
                    <div
                      className="bg-primary h-1 sm:h-1.5 rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${navigationProgress.percentage}%`
                      }}
                    />
                  </div>
                </div>
              </SheetHeader>

              {/* Mobile Navigation */}
              <nav className="flex-1 flex flex-col justify-start pt-4 sm:pt-6 overflow-y-auto" role="menu" aria-label="Menu de navegação principal">
                <div className="space-y-1 sm:space-y-2">
                  {menuItems.map((item, index) => {
                    const sectionId = item.href.replace('#', '');
                    const isActive = activeSection === sectionId;
                    const IconComponent = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`group flex items-center w-full text-left px-3 sm:px-4 py-3 sm:py-4 font-zurich-medium text-sm sm:text-base relative transition-all duration-300 cursor-pointer rounded-lg sm:rounded-xl mx-1 sm:mx-2 ${isActive
                          ? 'text-primary bg-primary/15 border border-primary/30 shadow-md'
                          : 'text-foreground hover:bg-primary/8 hover:text-primary hover:shadow-sm'
                          }`}
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                        }}
                        aria-label={`Navegar para ${item.label}`}
                        role="menuitem"
                      >
                        <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl mr-3 sm:mr-4 transition-all duration-300 ${isActive
                          ? 'bg-primary/25 text-primary shadow-sm'
                          : 'bg-muted/60 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary group-hover:shadow-sm'
                          }`}>
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block font-zurich-bold text-sm sm:text-base truncate">{item.label}</span>
                          {isActive && (
                            <span className="block text-xs text-primary/80 mt-0.5 sm:mt-1 font-zurich-regular">
                              Seção atual
                            </span>
                          )}
                        </div>
                        <div className="flex items-center flex-shrink-0">
                          {isActive && (
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse mr-1.5 sm:mr-2"></div>
                          )}
                          <ChevronRight className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-all duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                            }`} />
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Seção de contato melhorada */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-primary/20">
                  <div className="px-3 sm:px-4">
                    <h3 className="text-xs sm:text-sm font-zurich-bold text-primary mb-3 sm:mb-4 uppercase tracking-wide flex items-center">
                      <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                      Entre em Contato
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      <a
                        href="tel:+552135472077"
                        className="flex items-center text-xs sm:text-sm text-foreground hover:text-primary transition-all duration-200 cursor-pointer group p-1.5 sm:p-2 rounded-lg hover:bg-primary/8"
                      >
                        <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/15 text-primary mr-2.5 sm:mr-3 group-hover:bg-primary/25 transition-all duration-200 flex-shrink-0">
                          <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                        <span className="font-zurich-regular truncate">+55 21 3547-2077</span>
                      </a>
                      <a
                        href="mailto:contato@trevocontabilidade.com"
                        className="flex items-center text-xs sm:text-sm text-foreground hover:text-primary transition-all duration-200 cursor-pointer group p-1.5 sm:p-2 rounded-lg hover:bg-primary/8"
                      >
                        <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/15 text-primary mr-2.5 sm:mr-3 group-hover:bg-primary/25 transition-all duration-200 flex-shrink-0">
                          <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                        <span className="font-zurich-regular truncate">contato@trevocontabilidade.com</span>
                      </a>
                      <div className="flex items-center text-xs sm:text-sm text-foreground p-1.5 sm:p-2 rounded-lg">
                        <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/15 text-primary mr-2.5 sm:mr-3 flex-shrink-0">
                          <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                        <span className="font-zurich-regular text-xs sm:text-sm leading-tight">Avenida Isabel, 15, Casa 2, Rio de Janeiro, RJ</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer do menu */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-primary/20">
                  <div className="px-3 sm:px-4 text-center">
                    <p className="text-xs text-muted-foreground font-zurich-regular">
                      Deslize para a direita para fechar
                    </p>
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
