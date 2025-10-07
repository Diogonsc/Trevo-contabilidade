import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  Users,
  CheckCircle,
  ArrowRight,
  Clock as ClockIcon,
  DollarSign,
  Target,
  Award,
  Building2
} from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: any;
    title: string;
    description: string;
    features: string[];
    price: string;
  };
}

const serviceDetails = {
  "Contabilidade Geral": {
    icon: Building2,
    detailedDescription: "Soluções completas para formalização e gestão legal do seu negócio. Nossa equipe especializada cuida de toda a burocracia necessária para que sua empresa opere de forma regular e em conformidade com todas as exigências legais.",
    benefits: [
      "Processo completo de legalização",
      "Documentação organizada e atualizada",
      "Suporte para alterações contratuais",
      "Consultoria sobre estrutura empresarial",
      "Acompanhamento em todos os órgãos",
      "Orientação pós-abertura especializada"
    ],
    process: [
      "Consulta inicial e análise",
      "Preparação da documentação necessária",
      "Protocolo nos órgãos competentes",
      "Acompanhamento do processo",
      "Emissão de documentos fiscais",
      "Entrega completa da documentação"
    ],
  },
  "Departamento Pessoal": {
    icon: Users,
    detailedDescription: "Gestão completa de recursos humanos e obrigações trabalhistas. Nossa equipe cuida de todos os aspectos do departamento pessoal, garantindo conformidade com a legislação trabalhista e excelência no atendimento aos seus colaboradores.",
    benefits: [
      "Gestão eficiente de funcionários",
      "Cálculos precisos de rescisão",
      "Processamento de folha de pagamento",
      "Envio de obrigações acessórias",
      "Controle de benefícios e encargos",
      "Suporte em auditorias trabalhistas"
    ],
    process: [
      "Análise da estrutura de RH",
      "Configuração do sistema de folha",
      "Processamento de admissões",
      "Cálculo e envio de encargos",
      "Geração de guias e relatórios",
      "Acompanhamento mensal"
    ],
  },
  "Assessoria Fiscal e Tributária": {
    icon: Calculator,
    detailedDescription: "Planejamento e regularização fiscal para sua empresa e pessoa física. Nossa equipe especializada garante que você esteja em dia com todas as obrigações fiscais, otimizando sua carga tributária de forma legal e segura.",
    benefits: [
      "Regularização de documentos fiscais",
      "Declaração de imposto de renda completa",
      "Apuração correta de impostos",
      "Envio de declarações obrigatórias",
      "Planejamento tributário estratégico",
      "Suporte especializado contínuo"
    ],
    process: [
      "Análise da situação fiscal atual",
      "Identificação de pendências",
      "Planejamento de regularização",
      "Preparação de declarações",
      "Apuração e envio de impostos",
      "Acompanhamento e orientação"
    ],
  }
};

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const details = serviceDetails[service.title as keyof typeof serviceDetails];

  if (!details) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-screen md:h-auto md:max-h-[80vh] flex flex-col">
        <DialogHeader className="flex-shrink-0 pb-4 border-b">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">
                {service.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-muted-foreground mt-1">
                {service.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-8 py-4">
          {/* Preço destacado */}
          <div className="bg-primary/5 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Investimento</span>
            </div>
            <p className="text-2xl font-bold text-primary">{service.price}</p>
          </div>

          {/* Descrição detalhada */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Sobre este serviço
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {details.detailedDescription}
            </p>
          </div>

          {/* Benefícios */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Principais benefícios
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {details.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Processo */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-primary" />
              Como funciona
            </h3>
            <div className="space-y-3">
              {details.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground pt-1">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recursos incluídos */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Recursos incluídos
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer com CTA */}
        <div className="flex-shrink-0 pt-4 border-t">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="flex-1 py-3"
              onClick={onClose}
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 py-3"
              onClick={onClose}
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
