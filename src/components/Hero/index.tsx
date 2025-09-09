import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Phone,
  MapPin,
  Coffee,
  Star,
  Users,
  Award,
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="inline-flex items-center px-4 py-2 bg-primary/20 text-primary-foreground border-2 border-primary hover:bg-primary/30 backdrop-blur-sm animate-slide-up"
              >
                <Coffee className="w-4 h-4 mr-2" />
                🍀 + 25 anos de história
              </Badge>

              <h1
                className="text-5xl lg:text-6xl font-zurich-bold text-white leading-tight animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Mais que cliente, temos{" "}
                <span className="text-primary drop-shadow-lg stroke-text">
                  parceiros de sucesso
                </span>
              </h1>

              <p
                className="text-xl text-gray-100 font-zurich-regular leading-relaxed max-w-2xl animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                Pega seu café e deixe a contabilidade com a gente! Oferecemos
                serviços completos de contabilidade para transformar seu negócio
                em uma parceria de sucesso.
              </p>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                <span className="text-sm font-zurich-bold text-white">
                  4.9/5 Avaliação
                </span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-zurich-bold text-white">
                  Certificado CRC
                </span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm font-zurich-bold text-white">
                  100% Seguro
                </span>
              </div>
            </div>

            {/* Informações de Contato */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center text-gray-100">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span className="text-sm font-zurich-regular">
                  Avenida Isabel, 15, Casa 2, Rio de Janeiro, RJ
                </span>
              </div>
              <div className="flex items-center text-gray-100">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-sm font-zurich-regular">
                  +55 21 3547-2077
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: "1s" }}
            >
              <Button
                size="lg"
                className="p-6 bg-primary hover:bg-primary/90 text-white font-zurich-bold uppercase cursor-pointer tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=552135472077&text=Olá, gostaria de solicitar um orçamento",
                    "_blank"
                  );
                }}
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                className="p-6 border-2 border-white bg-transparent text-white font-zurich-bold hover:bg-white/10 uppercase tracking-wider cursor-pointer backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
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
            <div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 animate-slide-up"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-4 px-2">
                <div className="text-3xl font-zurich-black text-primary drop-shadow-lg">
                  25+
                </div>
                <div className="text-sm text-gray-100 font-zurich-medium uppercase font-bold">
                  Anos de Experiência
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-4 px-2">
                <div className="text-3xl font-zurich-black text-primary drop-shadow-lg">
                  500+
                </div>
                <div className="text-sm text-gray-100 font-zurich-medium uppercase font-bold">
                  Clientes Atendidos
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-4 px-2">
                <div className="text-3xl font-zurich-black text-primary drop-shadow-lg">
                  100%
                </div>
                <div className="text-sm text-gray-100 font-zurich-medium uppercase font-bold">
                  Satisfação
                </div>
              </div>
            </div>
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
                    Mais de 500 empresas confiam na gente
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-200">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-sm">Contabilidade completa</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-sm">Suporte especializado</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-sm">Tecnologia de ponta</span>
                </div>
              </div>
            </div>

            {/* Card de Contato Rápido */}
            <div className="bg-primary/20 backdrop-blur-md rounded-2xl p-6 border border-primary shadow-2xl">
              <h3 className="text-lg font-zurich-bold text-white mb-4">
                Fale Conosco Agora
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-100">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">+55 21 3547-2077</span>
                </div>
                <div className="flex items-center text-gray-100">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">Rio de Janeiro, RJ</span>
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
