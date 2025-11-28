import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Award,
  Users,
  Target,
  Heart,
  Coffee,
  ArrowRight,
  Star,
} from "lucide-react";
import soraiaImg from "@/assets/soraia.png";
import rafaelImg from "@/assets/rafael.png";

export function About() {
  const autoplayPlugin = Autoplay({ delay: 4000, stopOnInteraction: true });

  const values = [
    {
      icon: Heart,
      title: "Parceria",
      description:
        "Mais do que clientes, temos parceiros de sucesso: você cresce, nós crescemos juntos.",
    },
    {
      icon: Target,
      title: "Excelência",
      description:
        "+ 30 anos de experiência garantindo serviços contábeis de alta qualidade, conquistando resultados excepcionais com nossos clientes.",
    },
    {
      icon: Users,
      title: "Proximidade",
      description:
        "Atendimento personalizado, sempre pronto para te orientar e apoiar o crescimento do seu negócio.",
    },
    {
      icon: Award,
      title: "Confiança",
      description:
        "Prezamos pela transparência e ética em todos os nossos processos, garantindo a segurança e tranquilidade da sua empresa.",
    },
  ];

  const achievements = [
    { number: "30+", label: "Anos de Experiência" },
    { number: "500+", label: "Empresas Atendidas" },
    { number: "100%", label: "Clientes Satisfeitos" },
  ];

  const testimonials = [
    {
      name: "Claudia Cristina",
      date: "Há 2 semanas",
      text: "Empresa nota 10. Contadores são muito responsáveis e confiáveis. Tem a minha admiração. Há anos que fazem meu imposto de renda e minha contabilidade com funcionários. Serviço de contabilidade top.",
      rating: 5,
    },
    {
      name: "Alexandre Botelho",
      date: "Há 3 dias",
      text: "Gostaria de parabenizar o escritório de contabilidade TREVO CONTABILIDADE, pelo excelente trabalho que realiza. A dedicação, o profissionalismo e o comprometimento da equipe fazem toda a diferença, especialmente em periodos mais delicados, como a época do Imposto de Renda.",
      rating: 5,
    },
    {
      name: "José Carlos",
      date: "7 dias",
      text: "Profissioanis de excelência. super indico.",
      rating: 5,
    },
    {
      name: "Fagner Câmara",
      date: "Há 2 semanas",
      text: "Excelente serviço e suporte contábil. Profissioanis atenciosos, pacientes e empáticos. Atualizados e competentes.",
      rating: 5,
    },
    {
      name: "Patricia Reginatto",
      date: "Há 2 semanas",
      text: "Comprometimento, profissionalismo e eficiência são a marca da empresa.",
      rating: 5,
    },
  ];

  const team = [
    {
      name: "Soraia",
      image: soraiaImg,
      role: "Nossa especialista em obrigações fiscais",
      description:
        "Ela vai te ajudar com o cálculo do Simples Nacional, emissão de nota fiscal, declarações acessórias e muito mais.",
    },
    {
      name: "Rafael",
      image: rafaelImg,
      role: "Expert em Departamento Pessoal",
      description:
        "Conte com ele para processos de admissão e demissão, folha de pagamento, FGTS, 13º salário, entre outros.",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 mb-4"
          >
            <Coffee className="w-4 h-4 mr-2" />
            Sobre a Trevo
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-zurich-bold text-foreground mb-6">
            Mais que cliente, temos{" "}
            <span className="text-primary">parceiros de sucesso</span>
          </h2>

          <p className="text-xl font-zurich-regular text-muted-foreground max-w-3xl mx-auto">
            Com mais de 30 anos de história, a Trevo Contabilidade se consolidou
            como referência na Zona Oeste do Rio, sempre priorizando a parceria
            e o crescimento dos nossos clientes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-zurich-bold text-foreground">
                Nossa História
              </h3>
              <p className="font-zurich-regular text-muted-foreground leading-relaxed">
                Fundada em 1995, no bairro de Santa Cruz, no Rio de Janeiro, a
                Trevo Contabilidade nasceu com o propósito de oferecer serviços
                contábeis de excelência, sempre com foco no relacionamento
                próximo e na parceria com nossos clientes.
              </p>
              <p className="font-zurich-regular text-muted-foreground leading-relaxed">
                Ao longo desses mais de 30 anos, acompanhamos o crescimento de
                centenas de empresas, desde microempreendedores até grandes
                negócios, sempre adaptando nossos serviços às necessidades
                específicas de cada empresário(a).
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-zurich-bold text-foreground">
                Nossa Missão
              </h4>
              <p className="font-zurich-regular text-muted-foreground">
                Proporcionar soluções contábeis inovadoras e personalizadas,
                contribuindo para o sucesso e crescimento sustentável dos nossos
                parceiros.
              </p>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground uppercase font-zurich-bold tracking-wider"
              onClick={() => {
                document.getElementById("team-section")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Conhecer Nossa Equipe
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <Coffee className="w-12 h-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-zurich-bold text-foreground">
                    Pega um cafezinho e deixe a contabilidade com a gente!
                  </h4>
                  <p className="font-zurich-regular text-muted-foreground">
                    Nosso compromisso é simplificar a gestão contábil da sua
                    empresa, permitindo que você se concentre no que realmente
                    importa: o crescimento do seu negócio. Priorizamos entender
                    suas necessidades para elaborar um trabalho personalizado
                    que faça sentido para seus objetivos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-zurich-bold text-center text-foreground mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-zurich-bold text-foreground">
                  {value.title}
                </h4>
                <p className="font-zurich-regular text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-section-background rounded-2xl p-8 lg:p-12 mb-20">
          <h3 className="text-2xl lg:text-3xl font-zurich-bold text-center text-foreground mb-12">
            Números que Comprovam Nossa Excelência
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-zurich-black text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="font-zurich-medium text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-zurich-bold text-center text-foreground mb-12">
            O que Nossos Parceiros Dizem
          </h3>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="font-zurich-regular text-muted-foreground mb-4 leading-relaxed flex-grow">
                          "{testimonial.text}"
                        </p>
                        <div className="mt-auto">
                          <div className="font-zurich-bold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm font-zurich-regular text-muted-foreground">
                            {testimonial.date}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>

        {/* Team Section */}
        <div id="team-section" className="scroll-mt-20">
          <h3 className="text-2xl lg:text-3xl font-zurich-bold text-center text-foreground mb-12">
            Nossa Equipe
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[600px]"
              >
                {/* Imagem de fundo ocupando todo o card */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay com gradiente para melhor legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />

                {/* Conteúdo sobreposto */}
                <div className="relative h-full flex flex-col justify-end p-8 text-center space-y-4">
                  <h4 className="text-3xl font-zurich-bold text-white">
                    {member.name}
                  </h4>
                  <p className="text-xl font-zurich-bold text-primary">
                    {member.role}
                  </p>
                  <p className="font-zurich-regular text-white/90 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
