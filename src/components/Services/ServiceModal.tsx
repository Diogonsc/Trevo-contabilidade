import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Clock as ClockIcon,
  DollarSign,
  Target,
  Award
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
    icon: Calculator,
    detailedDescription: "Nossa contabilidade geral oferece uma gestão completa e precisa de todos os aspectos financeiros da sua empresa. Com anos de experiência no mercado, garantimos que sua empresa esteja sempre em conformidade com as normas contábeis vigentes.",
    benefits: [
      "Relatórios financeiros precisos e atualizados",
      "Controle total do fluxo de caixa",
      "Análise de performance financeira",
      "Suporte especializado 24/7",
      "Integração com sistemas de gestão",
      "Backup seguro de todos os dados"
    ],
    process: [
      "Análise inicial da empresa",
      "Configuração do sistema contábil",
      "Implementação dos processos",
      "Treinamento da equipe",
      "Acompanhamento mensal",
      "Relatórios personalizados"
    ],
  },
  "Abertura de Empresas": {
    icon: FileText,
    detailedDescription: "Processo completo e especializado para abertura da sua empresa. Nossa equipe cuida de toda a burocracia, desde a escolha do regime tributário até o registro final, garantindo que tudo seja feito corretamente e no menor tempo possível.",
    benefits: [
      "Análise personalizada do regime tributário",
      "Documentação completa e organizada",
      "Registro em todos os órgãos competentes",
      "Orientação pós-abertura por 30 dias",
      "Suporte para primeiras obrigações",
      "Consultoria sobre estrutura societária"
    ],
    process: [
      "Consulta inicial e análise",
      "Definição do regime tributário",
      "Preparação da documentação",
      "Protocolo nos órgãos competentes",
      "Acompanhamento do processo",
      "Entrega da empresa pronta"
    ],
  },
  "Planejamento Tributário": {
    icon: TrendingUp,
    detailedDescription: "Estratégias inteligentes para otimizar a carga tributária da sua empresa. Nossa equipe especializada desenvolve planos personalizados que podem resultar em economia significativa de impostos, sempre dentro da legalidade.",
    benefits: [
      "Redução legal da carga tributária",
      "Análise de diferentes regimes",
      "Simulações detalhadas",
      "Estratégias personalizadas",
      "Acompanhamento mensal",
      "Consultoria especializada"
    ],
    process: [
      "Análise da situação atual",
      "Estudo de alternativas",
      "Desenvolvimento da estratégia",
      "Implementação do plano",
      "Monitoramento contínuo",
      "Ajustes quando necessário"
    ],
  },
  "Compliance Fiscal": {
    icon: Shield,
    detailedDescription: "Garantia total de conformidade com todas as obrigações fiscais e trabalhistas. Nossa equipe especializada mantém sua empresa sempre em dia com as obrigações, evitando multas e problemas com o fisco.",
    benefits: [
      "Cumprimento de todas as obrigações",
      "Evita multas e penalidades",
      "Auditoria interna regular",
      "Consultoria especializada",
      "Atualização constante da legislação",
      "Suporte em fiscalizações"
    ],
    process: [
      "Auditoria inicial",
      "Identificação de gaps",
      "Implementação de melhorias",
      "Treinamento da equipe",
      "Monitoramento contínuo",
      "Relatórios de compliance"
    ],
  },
  "Departamento Pessoal": {
    icon: Users,
    detailedDescription: "Gestão completa e especializada da folha de pagamento e todas as obrigações trabalhistas. Nossa equipe cuida de todos os aspectos do RH, garantindo que seus funcionários sejam tratados com excelência e que todas as obrigações sejam cumpridas.",
    benefits: [
      "Folha de pagamento precisa",
      "Gestão de admissões e demissões",
      "Cálculo correto de encargos",
      "Controle de férias e 13º",
      "Relatórios gerenciais",
      "Suporte em auditorias trabalhistas"
    ],
    process: [
      "Análise da estrutura atual",
      "Configuração do sistema",
      "Implementação dos processos",
      "Treinamento da equipe",
      "Processamento mensal",
      "Relatórios e análises"
    ],
  },
  "Consultoria Empresarial": {
    icon: Clock,
    detailedDescription: "Orientação estratégica especializada para o crescimento e desenvolvimento do seu negócio. Nossa consultoria vai além dos números, oferecendo insights valiosos para tomada de decisões estratégicas e crescimento sustentável.",
    benefits: [
      "Análise estratégica completa",
      "Planejamento de crescimento",
      "Indicadores de performance",
      "Mentoria empresarial",
      "Análise de mercado",
      "Suporte em decisões estratégicas"
    ],
    process: [
      "Diagnóstico empresarial",
      "Análise de mercado",
      "Desenvolvimento de estratégias",
      "Implementação de melhorias",
      "Acompanhamento de resultados",
      "Ajustes estratégicos"
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
