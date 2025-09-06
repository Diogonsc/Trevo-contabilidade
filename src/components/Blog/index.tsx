import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  User, 
  ArrowRight,
  TrendingUp,
  FileText,
  Calculator,
  Shield,
  Coffee
} from "lucide-react";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "4 Dicas para Organizar as Finanças da Sua Empresa em 2024",
      excerpt: "Descubra estratégias práticas para manter suas finanças organizadas e seu negócio em crescimento constante.",
      category: "Finanças",
      author: "Equipe Trevo",
      date: "15 Jan 2024",
      readTime: "5 min",
      image: "📊",
      featured: true
    },
    {
      id: 2,
      title: "Regime Tributário: Microempresário, quanto posso faturar por mês?",
      excerpt: "Entenda os limites de faturamento para cada regime tributário e escolha o melhor para sua empresa.",
      category: "Tributário",
      author: "Equipe Trevo",
      date: "12 Jan 2024",
      readTime: "7 min",
      image: "📝",
      featured: false
    },
    {
      id: 3,
      title: "3 Ações para seu Negócio NÃO FAZER na Black Friday",
      excerpt: "Evite erros comuns que podem comprometer a saúde financeira da sua empresa durante as promoções.",
      category: "Estratégia",
      author: "Equipe Trevo",
      date: "10 Jan 2024",
      readTime: "4 min",
      image: "⚠️",
      featured: false
    },
    {
      id: 4,
      title: "Fluxo de Caixa: O que é e como controlar",
      excerpt: "Aprenda a importância do fluxo de caixa e como implementar controles eficazes na sua empresa.",
      category: "Gestão",
      author: "Equipe Trevo",
      date: "8 Jan 2024",
      readTime: "6 min",
      image: "📄",
      featured: false
    },
    {
      id: 5,
      title: "4 Dicas para Abrir sua Empresa",
      excerpt: "Guia completo com os passos essenciais para abrir sua empresa com segurança e eficiência.",
      category: "Abertura",
      author: "Equipe Trevo",
      date: "5 Jan 2024",
      readTime: "8 min",
      image: "🚀",
      featured: false
    },
    {
      id: 6,
      title: "Você se lembra do Fax? A evolução da contabilidade",
      excerpt: "Reflexão sobre como a tecnologia transformou os serviços contábeis ao longo dos anos.",
      category: "História",
      author: "Equipe Trevo",
      date: "3 Jan 2024",
      readTime: "5 min",
      image: "📠",
      featured: false
    }
  ];

  const categories = [
    { name: "Todos", count: 6, icon: FileText },
    { name: "Finanças", count: 1, icon: TrendingUp },
    { name: "Tributário", count: 1, icon: Calculator },
    { name: "Estratégia", count: 1, icon: Shield },
    { name: "Gestão", count: 1, icon: FileText },
    { name: "Abertura", count: 1, icon: TrendingUp },
    { name: "História", count: 1, icon: Coffee }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Blog & Dicas
          </Badge>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Conhecimento para seu{" "}
            <span className="text-primary">sucesso</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dicas práticas, insights e orientações especializadas para ajudar 
            você a tomar as melhores decisões para seu negócio.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-background border border-border text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {post.category}
                      </Badge>
                      <Badge variant="secondary" className="bg-background/50 text-muted-foreground">
                        Destaque
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      {post.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                      <div>
                        {post.readTime} de leitura
                      </div>
                    </div>
                    
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Ler Artigo Completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <Card className="w-48 h-48 bg-background/50 border-border">
                      <CardContent className="flex items-center justify-center h-full text-6xl">
                        {post.image}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {post.category}
                  </Badge>
                  <div className="text-2xl">
                    {post.image}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10">
                  Ler Mais
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-primary-foreground">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Quer receber nossas dicas por e-mail?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter e receba conteúdo exclusivo 
              sobre contabilidade, gestão e crescimento empresarial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 text-foreground placeholder-muted-foreground"
              />
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
