import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Coffee,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 21 3547-2077",
      description: "Segunda a Sexta, 8h às 18h",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@trevocontabilidade.com.br",
      description: "Respondemos em até 24h",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Avenida Isabel, 15, Casa 2",
      description: "Rio de Janeiro, Rio de Janeiro 23515160",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta",
      description: "8h às 18h",
    },
  ];

  const services = [
    "Contabilidade Geral",
    "Abertura de Empresas",
    "Planejamento Tributário",
    "Compliance Fiscal",
    "Departamento Pessoal",
    "Consultoria Empresarial",
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 lg:py-24 bg-section-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Card>
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-zurich-bold text-foreground mb-4">
                Mensagem Enviada com Sucesso!
              </h2>
              <p className="font-zurich-regular text-muted-foreground mb-6">
                Obrigado pelo seu interesse! Nossa equipe entrará em contato em
                breve para discutir como podemos ajudar seu negócio.
              </p>
              <Badge
                variant="secondary"
                className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary"
              >
                <Coffee className="w-4 h-4 mr-2" />
                Pega seu café e aguarde nosso contato!
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-section-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 mb-4"
          >
            <Phone className="w-4 h-4 mr-2" />
            Entre em Contato
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-zurich-bold text-foreground mb-6">
            Vamos conversar sobre seu{" "}
            <span className="text-primary">negócio?</span>
          </h2>

          <p className="text-xl font-zurich-regular text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para te ajudar a crescer! Chama a Trevo e descubra como
            nossa gestão contábil pode impulsionar sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-zurich-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-zurich-bold text-foreground">
                        {info.title}
                      </h4>
                      <p className="text-primary font-zurich-medium">
                        {info.info}
                      </p>
                      <p className="text-sm font-zurich-regular text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-zurich-bold text-foreground">
                  Mais de 500 clientes já cresceram com a gente, que tal ser o
                  próximo?
                </h4>
                <p className="font-zurich-regular text-muted-foreground">
                  Agende um cafezinho com a Trevo e descubra como podemos ajudar
                  seu negócio a crescer.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground uppercase font-zurich-bold tracking-wider"
                  onClick={() => {
                    window.open(
                      "https://api.whatsapp.com/send?phone=552135472077&text=Olá, gostaria de agendar uma consulta",
                      "_blank"
                    );
                  }}
                >
                  Marque sua conversa!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
