import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Phone,
  MapPin,
  Coffee,
  Users,
  CheckCircle,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/banner.webp)",
        }}
      ></div>

      {/* Improved Gradient Overlay for better contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      ></div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="space-y-4 sm:space-y-6">
              <Badge
                variant="secondary"
                className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 text-primary-foreground border-2 border-primary hover:bg-primary/30 backdrop-blur-sm animate-slide-up text-xs sm:text-sm"
              >
                <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                🍀 + 30 anos de história
              </Badge>

              <h1
                className="text-4xl sm:text-5xl lg:text-5xl font-zurich-bold text-white leading-tight animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Muito mais que um{" "}
                <span className="text-primary drop-shadow-lg stroke-text">
                  escritório de contabilidade,
                </span>
                {" "}
                <span className="text-white">
                  somos o parceiro certo para fazer sua
                </span>
                {" "}
                <span className="text-primary drop-shadow-lg stroke-text">
                  empresa
                </span>
                {" "}
                <span className="text-white">
                  decolar.
                </span>
              </h1>

              <p
                className="text-lg sm:text-lg lg:text-xl text-gray-100 font-zurich-regular leading-relaxed max-w-2xl animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                Pega um cafezinho e deixe a contabilidade com a gente!
                Oferecemos serviços contábeis completos para você focar no
                crescimento do seu negócio.
              </p>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
             
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-green-400 flex-shrink-0" />
                <span className="text-sm sm:text-sm font-zurich-bold text-white whitespace-nowrap">
                  100% Seguro
                </span>
              </div>
            </div>

            {/* Informações de Contato */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400 flex-shrink-0" />
                <span className="text-lg sm:text-sm font-zurich-bold text-white">
                  Avenida Isabel, 15, Casa 2, Rio de Janeiro, RJ
                </span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400 flex-shrink-0" />
                <span className="text-lg sm:text-sm font-zurich-bold text-white">
                  +55 21 3547-2077
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-6 sm:gap-4 animate-slide-up"
              style={{ animationDelay: "1s" }}
            >
              <Button
                size="lg"
                className="p-6 sm:px-6 sm:py-6 border-2 border-primary bg-primary hover:bg-primary/90 text-white font-zurich-bold uppercase cursor-pointer tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-sm"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=552135472077&text=Olá, gostaria de solicitar um orçamento",
                    "_blank"
                  );
                }}
              >
                <span className="hidden sm:inline">Chama a Trevo! Estamos prontos para ajudar seu negócio.</span>
                <span className="sm:hidden">Fale com a Trevo agora</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                className="p-6 sm:px-6 sm:py-6 border-2 border-white bg-transparent text-white font-zurich-bold hover:bg-white/10 uppercase tracking-wider cursor-pointer backdrop-blur-sm transition-all duration-300 transform hover:scale-105 text-sm sm:text-sm"
                onClick={() => {
                  const servicosSection = document.getElementById("servicos");
                  if (servicosSection) {
                    servicosSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Conhecer Serviços
              </Button>
            </div>

            {/* Estatísticas */}
            {/* <div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 animate-slide-up"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-4 px-2 border border-primary">
                <div className="text-3xl font-zurich-black text-primary drop-shadow-lg stroke-text">
                  5.0/5.0
                </div>
                <div className="text-sm text-gray-100 font-zurich-medium uppercase font-bold">
                  Nas avaliações Google
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-4 px-2 border border-primary">
                <div className="text-3xl font-zurich-black text-primary drop-shadow-lg stroke-text">
                  CRC
                </div>
                <div className="text-sm text-gray-100 font-zurich-medium uppercase font-bold">
                  Certificado
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-4 px-2 border border-primary">
                <div className="text-3xl font-zurich-black text-primary drop-shadow-lg stroke-text">
                  100%
                </div>
                <div className="text-sm text-gray-100 font-zurich-medium uppercase font-bold">
                  Seguro e confiável
                </div>
              </div>
            </div> */}
          </div>

          {/* Coluna Direita - Elementos Visuais */}
          <div
            className="hidden lg:block space-y-6 animate-slide-in-right"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Card de Credibilidade */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-zurich-bold text-white">
                    Clientes Satisfeitos
                  </h3>
                  <p className="text-gray-200 text-sm">
                    já confiaram suas finanças à Trevo.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-200">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-sm">Contabilidade do início ao fim;
                  </span>
                </div>
                <div className="flex items-center text-gray-200">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-sm">Orientação personalizada;
                  </span>
                </div>
                <div className="flex items-center text-gray-200">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-sm">Atendimento humanizado.</span>
                </div>
              </div>
            </div>

            {/* Card de Contato Rápido */}
            <div className="bg-primary/20 backdrop-blur-md rounded-2xl p-6 border border-primary shadow-2xl">
              <h3 className="text-xl font-zurich-bold text-white mb-4">
                30 anos de experiência
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-100">
                  <Phone className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-sm">+500 clientes atendidos | 100% de satisfação</span>
                </div>
                <div className="flex items-center text-gray-100">
                  <MapPin className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-sm">Atendemos empresas de todo o Brasil
                  </span>
                </div>
              </div>
              <Button
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-zurich-bold"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=552135472077&text=Olá, gostaria de solicitar um orçamento",
                    "_blank"
                  );
                }}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
