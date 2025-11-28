import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceModal } from "./ServiceModal";
import {
  Calculator,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Building2
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
}

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const services = [
    {
      icon: Building2,
      title: "Contabilidade Geral",
      description: "Soluções completas para formalização e gestão legal do seu negócio.",
      features: [
        "Formalizar seu negócio",
        "Legalização de empresa",
        "Emissão de CNPJ, Inscrição estadual e municipal",
        "Alteração de contrato social",
        "Baixa na empresa"
      ],
      price: "Consulte-nos"
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Gestão completa de recursos humanos e obrigações trabalhistas.",
      features: [
        "Gestão de funcionários",
        "Cálculo de rescisão trabalhista",
        "Admissão de funcionário CLT",
        "Folha de pagamento",
        "DCTF Web",
        "FGTS Digital"
      ],
      price: "Consulte-nos"
    },
    {
      icon: Calculator,
      title: "Assessoria Fiscal e Tributária",
      description: "Planejamento e regularização fiscal para sua empresa e pessoa física.",
      features: [
        "Regularização de CPF e CNPJ",
        "Imposto de renda",
        "Apuração de impostos (Simples Nacional)",
        "Declarações fiscais"
      ],
      price: "Consulte-nos"
    }
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-section-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Nossos Serviços
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-zurich-bold text-foreground mb-6">
            Soluções completas para seu{" "}
            <span className="text-primary">negócio</span>
          </h2>

          <p className="text-xl font-zurich-regular text-muted-foreground max-w-3xl mx-auto">
            Oferecemos serviços especializados em contabilidade, fiscal e trabalhista,
            sempre com foco na excelência e no crescimento da sua empresa.
            <br />
            Vem conhecer como podemos te ajudar:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
            >
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-zurich-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-6">
                <p className="font-zurich-regular text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="font-zurich-regular text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl lg:text-3xl font-zurich-bold mb-4">
            Vamos impulsionar sua contabilidade?
          </h3>
          <p className="text-lg font-zurich-regular mb-8 opacity-90 max-w-2xl mx-auto">
            Descubra conosco como ajudar seu negócio a crescer com segurança e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 uppercase font-zurich-bold tracking-wider"
              onClick={() => {
                window.open('https://api.whatsapp.com/send?phone=552135472077&text=Olá, gostaria de solicitar um orçamento', '_blank');
              }}
            >
              Chama a Trevo!
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 uppercase font-zurich-bold tracking-wider"
              onClick={() => {
                const element = document.querySelector('#sobre');
                if (element) {
                  const headerHeight = 64; // Altura do header (h-16 = 64px)
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Sobre a Trevo
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de Serviço */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
    </section>
  );
}
