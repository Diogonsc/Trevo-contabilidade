import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle,
  Coffee
} from "lucide-react";

export function FAQ() {

  const faqs = [
    {
      question: "Qual o porte da minha empresa?",
      answer: "O porte da empresa é determinado pelo faturamento anual. Microempresas faturam até R$ 360 mil/ano, pequenas empresas até R$ 4,8 milhões/ano, e médias empresas até R$ 300 milhões/ano. Podemos ajudar você a identificar o porte correto da sua empresa."
    },
    {
      question: "Quanto custa abrir uma empresa?",
      answer: "O custo varia conforme o tipo de empresa e regime tributário escolhido. Para microempresas (MEI), o custo é menor. Para outras modalidades, incluímos análise do regime ideal, documentação completa e registro em todos os órgãos competentes. Entre em contato para um orçamento personalizado."
    },
    {
      question: "Qual regime tributário escolher?",
      answer: "A escolha do regime tributário depende do faturamento, tipo de atividade e estrutura da empresa. Oferecemos consultoria especializada para analisar sua situação e indicar o regime mais vantajoso, considerando Simples Nacional, Lucro Presumido ou Lucro Real."
    },
    {
      question: "Como organizar as finanças da empresa?",
      answer: "A organização financeira envolve controle de fluxo de caixa, separação de contas pessoais e empresariais, controle de receitas e despesas, e planejamento tributário. Nossa equipe oferece orientação completa e ferramentas para manter suas finanças organizadas."
    },
    {
      question: "O que é fluxo de caixa e como controlar?",
      answer: "Fluxo de caixa é o registro de todas as entradas e saídas de dinheiro da empresa. É fundamental para o controle financeiro e tomada de decisões. Oferecemos serviços de controle mensal, relatórios detalhados e orientação para otimizar seu fluxo de caixa."
    },
    {
      question: "Preciso de contador mesmo sendo MEI?",
      answer: "Embora o MEI tenha obrigações simplificadas, um contador pode ajudar com planejamento tributário, controle financeiro, orientação sobre crescimento e transição para outros regimes quando necessário. Nossa consultoria pode ser muito valiosa mesmo para MEIs."
    },
    {
      question: "Como funciona o departamento pessoal?",
      answer: "Nosso departamento pessoal cuida de todas as obrigações trabalhistas: admissões, demissões, folha de pagamento, FGTS, INSS, férias, 13º salário e demais direitos trabalhistas. Garantimos conformidade total com a legislação trabalhista."
    },
    {
      question: "Vocês atendem empresas de outros estados?",
      answer: "Sim! Atendemos empresas de todo o Brasil. Com a tecnologia atual, conseguimos prestar serviços contábeis de forma eficiente independentemente da localização. Nossa equipe está preparada para atender clientes de qualquer estado."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-section-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </Badge>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Dúvidas? Estamos aqui para{" "}
            <span className="text-primary">ajudar</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reunimos as perguntas mais comuns dos nossos clientes. 
            Se não encontrar sua dúvida aqui, entre em contato conosco!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-primary-foreground">
            <div className="w-16 h-16 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-8 h-8" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer todas as suas questões. 
              Entre em contato e receba orientação personalizada para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Falar com Especialista
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Agendar Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
