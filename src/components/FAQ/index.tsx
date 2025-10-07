import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Coffee } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Qual o porte da minha empresa?",
      answer:
        "O porte da empresa é determinado pelo faturamento anual: O MEI vai até R$ 81 mil/ano; Microempresas menor ou igual a R$ 360 mil/ano; Empresas de pequeno porte até R$ 4,8 milhões/ano; Médias maior que R$4,8 milhões e menor ou igual a R$ 300 milhões/ano; Grandes empresas acima de R$ 300 milhões. Nesse artigo, o Sebrae traz mais detalhes sobre os diferentes tamanhos de empresa. Mas não se preocupe, a Trevo está aqui para simplificar os conceitos fiscais e te ajudar a formalizar seu CNPJ.",
    },
    {
      question: "Quanto custa para abrir uma empresa?",
      answer:
        "O custo para abertura de empresa varia conforme o tipo de empresa e regime tributário escolhido. Para microempreendedores individuais (MEI), o custo é menor. Para outras modalidades, vamos te ajudar a analisar o regime ideal, documentação completa e realizar registro da sua empresa em todos os órgãos competentes. Entre em contato com a gente e comece agora mesmo!",
    },
    {
      question: "Qual regime tributário escolher?",
      answer:
        "A escolha do melhor regime tributário irá depender do seu faturamento, tipo de atividade e estrutura da empresa. Oferecemos consultoria especializada para analisar sua situação e indicar o regime mais vantajoso, considerando Simples Nacional, Lucro Presumido ou Lucro Real.",
    },
    {
      question: "Como organizar as finanças da empresa?",
      answer:
        "A organização financeira envolve controle de fluxo de caixa, separação de contas pessoais e empresariais, controle de receitas e despesas, e planejamento tributário. Nossa equipe está pronta para te oferecer orientação completa e ferramentas para ajudar a manter suas finanças em ordem. E assim, você consegue se organizar para ampliar ainda mais seu negócio.",
    },
    {
      question: "O que é fluxo de caixa e como controlar?",
      answer:
        "Fluxo de caixa é o registro de todas as entradas e saídas de dinheiro da empresa. É fundamental para o controle financeiro e tomada de decisões. Oferecemos serviços de controle mensal, relatórios detalhados e orientação para otimizar a movimentação financeira da sua empresa.",
    },
    {
      question: "Como funciona o departamento pessoal?",
      answer:
        "Nosso serviço de departamento pessoal cuida de todas as obrigações do empregador. Trabalhamos para garantir que sua empresa esteja sempre em conformidade com a legislação trabalhista.",
    },
    {
      question: "Vocês atendem empresas de outros estados?",
      answer:
        "Nossa sede fica situada em Santa Cruz, no Rio de Janeiro. Mas levamos a qualidade da nossa contabilidade para clientes em todo o RJ, e até mesmo em outros estados. Estamos preparados para te atender, independente de onde você estiver!",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-section-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 mb-4"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-zurich-bold text-foreground mb-6">
            Dúvidas sobre <span className="text-primary">contabilidade</span> ?
            Estamos aqui para ajudar
          </h2>

          <p className="text-xl font-zurich-regular text-muted-foreground max-w-3xl mx-auto">
            Reunimos as perguntas mais comuns de nossos clientes para te ajudar
            na administração da sua empresa.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6"
              >
                <AccordionTrigger className="text-lg font-zurich-bold text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-zurich-regular text-muted-foreground leading-relaxed pt-4">
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
            <h3 className="text-2xl lg:text-3xl font-zurich-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg font-zurich-regular mb-8 opacity-90 max-w-2xl mx-auto">
              Estamos prontos para esclarecer todas suas questões. Chama a Trevo
              que teremos o prazer de realizar uma orientação personalizada para
              sua empresa!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 uppercase font-zurich-bold tracking-wider"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=552135472077&text=Olá, gostaria de falar com um especialista",
                    "_blank"
                  );
                }}
              >
                Fale conosco!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 uppercase font-zurich-bold tracking-wider"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=552135472077&text=Olá, gostaria de agendar uma consulta gratuita",
                    "_blank"
                  );
                }}
              >
                Entre em contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
