import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceModal } from "./ServiceModal";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Users, 
  Clock,
  ArrowRight,
  CheckCircle
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
      icon: Calculator,
      title: "Contabilidade Geral",
      description: "Gestão completa da contabilidade da sua empresa com relatórios precisos e atualizados.",
      features: ["Balancetes mensais", "Demonstrativos financeiros", "Conciliação bancária", "Análise de resultados"],
      price: "A partir de R$ 200/mês"
    },
    {
      icon: FileText,
      title: "Abertura de Empresas",
      description: "Processo completo de abertura com orientação especializada em regime tributário.",
      features: ["Análise do regime ideal", "Documentação completa", "Registro em órgãos competentes", "Orientação pós-abertura"],
      price: "A partir de R$ 500"
    },
    {
      icon: TrendingUp,
      title: "Planejamento Tributário",
      description: "Estratégias para otimizar a carga tributária e maximizar os resultados do seu negócio.",
      features: ["Análise de regimes", "Simulações tributárias", "Estratégias de economia", "Acompanhamento mensal"],
      price: "A partir de R$ 300/mês"
    },
    {
      icon: Shield,
      title: "Compliance Fiscal",
      description: "Garantia de conformidade com todas as obrigações fiscais e trabalhistas.",
      features: ["Obrigações acessórias", "Declarações anuais", "Auditoria interna", "Consultoria especializada"],
      price: "A partir de R$ 400/mês"
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Gestão completa da folha de pagamento e obrigações trabalhistas.",
      features: ["Folha de pagamento", "Admissões e demissões", "FGTS e INSS", "Férias e 13º salário"],
      price: "A partir de R$ 150/mês"
    },
    {
      icon: Clock,
      title: "Consultoria Empresarial",
      description: "Orientação estratégica para crescimento e desenvolvimento do seu negócio.",
      features: ["Análise financeira", "Planejamento estratégico", "Indicadores de performance", "Mentoria empresarial"],
      price: "A partir de R$ 600/mês"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-section-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Nossos Serviços
          </Badge>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções completas para seu{" "}
            <span className="text-primary">negócio</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos serviços especializados em contabilidade, fiscal e trabalhista, 
            sempre com foco na excelência e no crescimento da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">
                    {service.price}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/10"
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
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Pronto para transformar sua contabilidade?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu negócio 
            a crescer com segurança e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
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
