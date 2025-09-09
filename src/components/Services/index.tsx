import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceModal } from "./ServiceModal";
import { 
  Calculator, 
  TrendingUp, 
  Shield, 
  Users, 
  ArrowRight,
  CheckCircle,
  Building2,
  UserCheck,
  Receipt,
  Home,
  FileCheck,
  Briefcase
} from "lucide-react";

export function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const services = [
    {
      icon: Building2,
      title: "Abertura e Legalização de Empresas",
      description: "Processo completo de abertura com orientação especializada em regime tributário e estrutura societária ideal.",
      features: ["Análise do regime ideal", "Documentação completa", "Registro em órgãos competentes", "Orientação pós-abertura"],
    },
    {
      icon: UserCheck,
      title: "MEI - Micro Empreendedor Individual",
      description: "Especialistas em formalização de MEI com suporte completo para microempreendedores.",
      features: ["Abertura de MEI", "Orientação tributária", "Declarações anuais", "Suporte especializado"],
    },
    {
      icon: Calculator,
      title: "Contabilidade Geral",
      description: "Gestão completa da contabilidade da sua empresa com relatórios precisos e atualizados.",
      features: ["Balancetes mensais", "Demonstrativos financeiros", "Conciliação bancária", "Análise de resultados"],
    },
    {
      icon: Briefcase,
      title: "Consultoria Financeira",
      description: "Orientação estratégica especializada para crescimento e desenvolvimento do seu negócio.",
      features: ["Análise financeira", "Planejamento estratégico", "Indicadores de performance", "Mentoria empresarial"],
    },
    {
      icon: Shield,
      title: "Serviços de Compliance",
      description: "Garantia de conformidade com todas as obrigações fiscais, trabalhistas e regulamentares.",
      features: ["Obrigações acessórias", "Declarações anuais", "Auditoria interna", "Consultoria especializada"],
    },
    {
      icon: Users,
      title: "Folha de Pagamento",
      description: "Gestão completa da folha de pagamento e todas as obrigações trabalhistas.",
      features: ["Folha de pagamento", "Admissões e demissões", "FGTS e INSS", "Férias e 13º salário"],
    },
    {
      icon: TrendingUp,
      title: "Planejamento Tributário",
      description: "Estratégias inteligentes para otimizar a carga tributária e maximizar os resultados do seu negócio.",
      features: ["Análise de regimes", "Simulações tributárias", "Estratégias de economia", "Acompanhamento mensal"],
    },
    {
      icon: Receipt,
      title: "Imposto de Renda (PF e PJ)",
      description: "Preparação completa do Imposto de Renda para pessoas físicas e jurídicas com máxima economia.",
      features: ["Declaração de IRPF", "Declaração de IRPJ", "Planejamento fiscal", "Orientação especializada"],
    },
    {
      icon: Home,
      title: "Engenharia - Legalização de Imóveis",
      description: "Serviços especializados em legalização de imóveis residenciais e comerciais.",
      features: ["Regularização de imóveis", "Habite-se", "Projetos arquitetônicos", "Aprovação em órgãos competentes"],
    },
    {
      icon: FileCheck,
      title: "Regularização de CPF",
      description: "Regularização completa de CPF junto à Receita Federal com agilidade e segurança.",
      features: ["Análise da situação", "Documentação necessária", "Protocolo na Receita", "Acompanhamento do processo"],
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
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
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
                
                <div className="space-y-3 mt-auto">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-4 min-h-[44px] uppercase font-zurich-bold tracking-wider"
                    onClick={() => handleServiceClick(service)}
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl lg:text-3xl font-zurich-bold mb-4">
            Pronto para transformar sua contabilidade?
          </h3>
          <p className="text-lg font-zurich-regular mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu negócio 
            a crescer com segurança e eficiência.
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
              Solicitar Orçamento Gratuito
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 uppercase font-zurich-bold tracking-wider"
              onClick={() => {
                window.open('https://api.whatsapp.com/send?phone=552135472077&text=Olá, gostaria de falar com um especialista', '_blank');
              }}
            >
              Falar com Especialista
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
