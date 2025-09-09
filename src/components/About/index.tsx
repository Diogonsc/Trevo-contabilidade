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
  Star
} from "lucide-react";

export function About() {
  const autoplayPlugin = Autoplay({ delay: 4000, stopOnInteraction: true });

  const values = [
    {
      icon: Heart,
      title: "Parceria",
      description: "Mais que cliente, temos parceiros de sucesso. Construímos relacionamentos duradouros baseados na confiança."
    },
    {
      icon: Target,
      title: "Excelência",
      description: "25+ anos de experiência garantem serviços de alta qualidade e resultados excepcionais para nossos clientes."
    },
    {
      icon: Users,
      title: "Proximidade",
      description: "Atendimento personalizado e próximo, sempre disponível para orientar e apoiar o crescimento do seu negócio."
    },
    {
      icon: Award,
      title: "Confiança",
      description: "Transparência e ética em todos os nossos processos, garantindo a segurança e tranquilidade dos nossos parceiros."
    }
  ];

  const achievements = [
    { number: "25+", label: "Anos de Experiência" },
    { number: "500+", label: "Empresas Atendidas" },
    { number: "100%", label: "Clientes Satisfeitos" },
    { number: "24/7", label: "Suporte Disponível" }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      company: "Silva & Associados",
      text: "A Trevo transformou nossa contabilidade. Profissionais competentes e sempre disponíveis para nos orientar.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Santos Comércio",
      text: "Parceria de mais de 10 anos. Recomendo a todos que buscam excelência em serviços contábeis.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Costa Consultoria",
      text: "Atendimento excepcional e conhecimento técnico impecável. Nossa empresa cresceu muito com o apoio da Trevo.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      company: "Mendes Tecnologia",
      text: "Serviços contábeis de primeira qualidade. A Trevo nos ajudou a organizar toda nossa estrutura fiscal.",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      company: "Lima Advocacia",
      text: "Parceria sólida e confiável. Sempre que precisamos de orientação contábil, a Trevo está pronta para ajudar.",
      rating: 5
    },
    {
      name: "Roberto Alves",
      company: "Alves Construções",
      text: "Profissionais extremamente competentes. Nossa empresa se desenvolveu muito com o suporte da Trevo.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 mb-4">
            <Coffee className="w-4 h-4 mr-2" />
            Sobre a Trevo
          </Badge>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Mais que cliente, temos{" "}
            <span className="text-primary">parceiros de sucesso</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Com mais de 25 anos de história, a Trevo Contabilidade se consolidou como 
            referência em serviços contábeis, sempre priorizando a parceria e o crescimento 
            dos nossos clientes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Nossa História
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fundada em 1998, a Trevo Contabilidade nasceu com o propósito de oferecer 
                serviços contábeis de excelência, sempre com foco no relacionamento próximo 
                e na parceria com nossos clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao longo desses 25+ anos, acompanhamos o crescimento de centenas de empresas, 
                desde microempreendedores até grandes corporações, sempre adaptando nossos 
                serviços às necessidades específicas de cada negócio.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Nossa Missão
              </h4>
              <p className="text-muted-foreground">
                Proporcionar soluções contábeis inovadoras e personalizadas, 
                contribuindo para o sucesso e crescimento sustentável dos nossos parceiros.
              </p>
            </div>

            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground uppercase font-bold tracking-wider">
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
                  <h4 className="text-xl font-semibold text-foreground">
                    Pega seu café e deixe a contabilidade com a gente!
                  </h4>
                  <p className="text-muted-foreground">
                    Nosso compromisso é simplificar a gestão contábil da sua empresa, 
                    permitindo que você se concentre no que realmente importa: 
                    fazer seu negócio crescer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-section-background rounded-2xl p-8 lg:p-12 mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-12">
            Números que Comprovam Nossa Excelência
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-12">
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
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                          "{testimonial.text}"
                        </p>
                        <div className="mt-auto">
                          <div className="font-semibold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.company}
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
      </div>
    </section>
  );
}
