import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Calendar, 
  User, 
  ArrowRight,
  TrendingUp,
  FileText,
  Calculator,
  Shield,
  Coffee,
  Rocket,
  BarChart3,
  AlertTriangle,
  ClipboardList,
  Clock
} from "lucide-react";

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedModal, setSelectedModal] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "4 Dicas para Organizar as Finanças da Sua Empresa em 2024",
      excerpt: "Descubra estratégias práticas para manter suas finanças organizadas e seu negócio em crescimento constante.",
      category: "Finanças",
      author: "Equipe Trevo",
      date: "15 Jan 2024",
      readTime: "5 min",
      icon: BarChart3,
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
      icon: Calculator,
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
      icon: AlertTriangle,
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
      icon: ClipboardList,
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
      icon: Rocket,
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
      icon: Clock,
      featured: false
    }
  ];

  const categories = [
    { name: "Todos", count: 6, icon: FileText },
    { name: "Finanças", count: 1, icon: TrendingUp },
    { name: "Tributário", count: 1, icon: Calculator },
    { name: "Estratégia", count: 1, icon: Shield },
    { name: "Gestão", count: 1, icon: ClipboardList },
    { name: "Abertura", count: 1, icon: Rocket },
    { name: "História", count: 1, icon: Coffee }
  ];

  const categoryContent = {
    "Finanças": {
      title: "Gestão Financeira Empresarial",
      content: `
        <div class="space-y-6">
          <div class="prose prose-lg max-w-none">
            <h3 class="text-xl font-semibold mb-4">4 Dicas Essenciais para Organizar as Finanças da Sua Empresa em 2024</h3>
            
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">1. Separação Pessoal vs Empresarial</h4>
                <p class="text-green-700">Mantenha contas bancárias separadas e nunca misture gastos pessoais com empresariais. Isso facilita o controle e evita problemas fiscais.</p>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">2. Controle de Fluxo de Caixa</h4>
                <p class="text-blue-700">Monitore entradas e saídas diariamente. Use planilhas ou sistemas de gestão para prever necessidades de capital de giro.</p>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">3. Reserva de Emergência</h4>
                <p class="text-purple-700">Mantenha uma reserva equivalente a 3-6 meses de despesas operacionais para enfrentar imprevistos.</p>
              </div>
              
              <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 class="font-semibold text-orange-800 mb-2">4. Análise de Rentabilidade</h4>
                <p class="text-orange-700">Calcule a margem de lucro de cada produto/serviço e identifique quais são mais rentáveis para focar seus esforços.</p>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 class="font-semibold mb-2">Ferramentas Recomendadas:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Planilhas Excel/Google Sheets para controle básico</li>
                <li>Sistemas ERP como Conta Azul, Omie ou Senior</li>
                <li>Aplicativos de gestão financeira como Mobills ou GuiaBolso</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    "Tributário": {
      title: "Regime Tributário: Microempresário",
      content: `
        <div class="space-y-6">
          <div class="prose prose-lg max-w-none">
            <h3 class="text-xl font-semibold mb-4">Limites de Faturamento por Regime Tributário</h3>
            
            <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-gray-300">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="border border-gray-300 p-3 text-left">Regime</th>
                    <th class="border border-gray-300 p-3 text-left">Faturamento Anual</th>
                    <th class="border border-gray-300 p-3 text-left">Faturamento Mensal</th>
                    <th class="border border-gray-300 p-3 text-left">Alíquota</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-300 p-3 font-medium">MEI</td>
                    <td class="border border-gray-300 p-3">Até R$ 81.000</td>
                    <td class="border border-gray-300 p-3">Até R$ 6.750</td>
                    <td class="border border-gray-300 p-3">R$ 60,60/mês</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Simples Nacional</td>
                    <td class="border border-gray-300 p-3">Até R$ 4,8 milhões</td>
                    <td class="border border-gray-300 p-3">Até R$ 400.000</td>
                    <td class="border border-gray-300 p-3">4% a 22,5%</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-3 font-medium">Lucro Presumido</td>
                    <td class="border border-gray-300 p-3">Até R$ 78 milhões</td>
                    <td class="border border-gray-300 p-3">Até R$ 6,5 milhões</td>
                    <td class="border border-gray-300 p-3">15% + 9%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="mt-6 space-y-4">
              <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 class="font-semibold text-yellow-800 mb-2">⚠️ Atenção</h4>
                <p class="text-yellow-700">Ultrapassar os limites pode resultar em exclusão automática do regime e necessidade de pagamento de impostos em atraso.</p>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">💡 Dica</h4>
                <p class="text-green-700">Consulte sempre um contador para escolher o regime mais adequado ao seu negócio e planejar o crescimento.</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    "Estratégia": {
      title: "Estratégias para Black Friday",
      content: `
        <div class="space-y-6">
          <div class="prose prose-lg max-w-none">
            <h3 class="text-xl font-semibold mb-4">3 Ações que seu Negócio NÃO DEVE FAZER na Black Friday</h3>
            
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 class="font-semibold text-red-800 mb-2">❌ 1. Descontos Excessivos sem Planejamento</h4>
                <p class="text-red-700">Oferecer descontos de 70% ou mais sem calcular o impacto no lucro pode resultar em prejuízo. Calcule sempre a margem mínima necessária.</p>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 class="font-semibold text-red-800 mb-2">❌ 2. Ignorar o Controle de Estoque</h4>
                <p class="text-red-700">Vender produtos que não estão disponíveis gera insatisfação e pode resultar em processos. Mantenha estoque atualizado e sincronizado.</p>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 class="font-semibold text-red-800 mb-2">❌ 3. Não Preparar a Infraestrutura</h4>
                <p class="text-red-700">Sites lentos, sistemas instáveis e atendimento sobrecarregado podem prejudicar a experiência do cliente e sua reputação.</p>
              </div>
            </div>
            
            <div class="mt-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 class="font-semibold text-green-800 mb-2">✅ Estratégias Recomendadas:</h4>
              <ul class="list-disc list-inside space-y-1 text-green-700">
                <li>Planeje descontos entre 10% a 30% para manter margem</li>
                <li>Prepare estoque com 30 dias de antecedência</li>
                <li>Teste sistemas e capacite equipe de atendimento</li>
                <li>Crie campanhas de email marketing segmentadas</li>
                <li>Monitore concorrentes e ajuste estratégia</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    "Gestão": {
      title: "Fluxo de Caixa Empresarial",
      content: `
        <div class="space-y-6">
          <div class="prose prose-lg max-w-none">
            <h3 class="text-xl font-semibold mb-4">O que é Fluxo de Caixa e Como Controlar</h3>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-800 mb-2">📊 Definição</h4>
              <p class="text-blue-700">Fluxo de caixa é o registro de todas as entradas e saídas de dinheiro da empresa em um período determinado, mostrando a disponibilidade de recursos.</p>
            </div>
            
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">💰 Entradas de Caixa</h4>
                <ul class="list-disc list-inside space-y-1 text-green-700">
                  <li>Vendas à vista</li>
                  <li>Recebimento de duplicatas</li>
                  <li>Empréstimos e financiamentos</li>
                  <li>Investimentos de sócios</li>
                </ul>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 class="font-semibold text-red-800 mb-2">💸 Saídas de Caixa</h4>
                <ul class="list-disc list-inside space-y-1 text-red-700">
                  <li>Pagamento de fornecedores</li>
                  <li>Salários e encargos</li>
                  <li>Impostos e taxas</li>
                  <li>Despesas operacionais</li>
                </ul>
              </div>
            </div>
            
            <div class="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 class="font-semibold text-purple-800 mb-2">📈 Como Implementar o Controle:</h4>
              <ol class="list-decimal list-inside space-y-2 text-purple-700">
                <li>Registre todas as movimentações diariamente</li>
                <li>Projete entradas e saídas futuras</li>
                <li>Identifique períodos de escassez de caixa</li>
                <li>Mantenha reserva para emergências</li>
                <li>Revise e ajuste projeções mensalmente</li>
              </ol>
            </div>
            
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 class="font-semibold mb-2">Ferramentas Úteis:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Planilhas Excel com fórmulas automáticas</li>
                <li>Sistemas ERP com módulo financeiro</li>
                <li>Aplicativos móveis para registro rápido</li>
                <li>Relatórios gerenciais automatizados</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    "Abertura": {
      title: "Como Abrir sua Empresa",
      content: `
        <div class="space-y-6">
          <div class="prose prose-lg max-w-none">
            <h3 class="text-xl font-semibold mb-4">4 Dicas Essenciais para Abrir sua Empresa</h3>
            
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">1. Defina o Tipo de Empresa</h4>
                <p class="text-blue-700 mb-2">Escolha a estrutura jurídica adequada:</p>
                <ul class="list-disc list-inside space-y-1 text-blue-700">
                  <li><strong>MEI:</strong> Para atividades simples e faturamento até R$ 81.000/ano</li>
                  <li><strong>LTDA:</strong> Para sociedade entre 2 ou mais pessoas</li>
                  <li><strong>EIRELI:</strong> Para empresa de um único sócio</li>
                </ul>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">2. Escolha o Regime Tributário</h4>
                <p class="text-green-700">Considere o faturamento esperado e a atividade para escolher entre Simples Nacional, Lucro Presumido ou Lucro Real.</p>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">3. Documentação Necessária</h4>
                <ul class="list-disc list-inside space-y-1 text-purple-700">
                  <li>RG e CPF dos sócios</li>
                  <li>Comprovante de endereço</li>
                  <li>Contrato social ou requerimento</li>
                  <li>Alvará de funcionamento (se necessário)</li>
                </ul>
              </div>
              
              <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 class="font-semibold text-orange-800 mb-2">4. Contrate um Contador</h4>
                <p class="text-orange-700">Um contador experiente pode orientar sobre a melhor estrutura, regime tributário e auxiliar em todo o processo de abertura.</p>
              </div>
            </div>
            
            <div class="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 class="font-semibold text-yellow-800 mb-2">⏱️ Cronograma Típico:</h4>
              <ul class="list-disc list-inside space-y-1 text-yellow-700">
                <li><strong>1-2 dias:</strong> Definição da estrutura e regime</li>
                <li><strong>3-5 dias:</strong> Elaboração da documentação</li>
                <li><strong>5-10 dias:</strong> Protocolo nos órgãos competentes</li>
                <li><strong>15-30 dias:</strong> Aprovação e emissão dos documentos</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    "História": {
      title: "Evolução da Contabilidade",
      content: `
        <div class="space-y-6">
          <div class="prose prose-lg max-w-none">
            <h3 class="text-xl font-semibold mb-4">Você se lembra do Fax? A evolução da contabilidade</h3>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-2">📠 Era do Fax (1980-2000)</h4>
              <p class="text-gray-700">Documentos contábeis eram enviados via fax, com qualidade limitada e custos altos de telefone. O processo era lento e propenso a erros.</p>
            </div>
            
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-semibold text-blue-800 mb-2">💻 Era Digital (2000-2010)</h4>
                <p class="text-blue-700">Surgimento dos primeiros sistemas contábeis digitais, planilhas eletrônicas e email. Redução significativa no tempo de processamento.</p>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="font-semibold text-green-800 mb-2">☁️ Era da Nuvem (2010-2020)</h4>
                <p class="text-green-700">Sistemas em nuvem, acesso remoto, integração com bancos e SPED. Maior agilidade e redução de custos operacionais.</p>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-semibold text-purple-800 mb-2">🤖 Era da Inteligência Artificial (2020+)</h4>
                <p class="text-purple-700">Automação de processos, análise preditiva, chatbots e integração com múltiplas plataformas. Foco em consultoria estratégica.</p>
              </div>
            </div>
            
            <div class="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 class="font-semibold text-yellow-800 mb-2">📈 Benefícios da Evolução:</h4>
              <ul class="list-disc list-inside space-y-1 text-yellow-700">
                <li>Redução de 90% no tempo de processamento</li>
                <li>Eliminação de erros manuais</li>
                <li>Acesso 24/7 aos dados</li>
                <li>Integração com múltiplas fontes</li>
                <li>Análises em tempo real</li>
                <li>Maior segurança dos dados</li>
              </ul>
            </div>
            
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 class="font-semibold mb-2">🔮 Futuro da Contabilidade:</h4>
              <p class="text-gray-700">A tendência é que os contadores se tornem cada vez mais consultores estratégicos, utilizando IA para análises complexas e tomada de decisões baseadas em dados.</p>
            </div>
          </div>
        </div>
      `
    }
  };

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
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.name
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
          {blogPosts.filter(post => 
            selectedCategory === "Todos" ? post.featured : post.category === selectedCategory
          ).slice(0, 1).map((post) => (
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
                      <CardContent className="flex items-center justify-center h-full">
                        <post.icon className="w-24 h-24 text-primary" />
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
                  <div className="text-primary">
                    <post.icon className="w-6 h-6" />
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
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary text-primary hover:bg-primary/10 py-3 px-4 min-h-[44px]"
                  onClick={() => setSelectedModal(post.id)}
                >
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

        {/* Modal Dialog */}
        <Dialog open={selectedModal !== null} onOpenChange={() => setSelectedModal(null)}>
          <DialogContent className="max-w-4xl h-screen md:h-auto md:max-h-[80vh] flex flex-col">
            <DialogHeader className="flex-shrink-0 pb-4 border-b">
              {selectedModal && (() => {
                const post = blogPosts.find(p => p.id === selectedModal);
                if (!post) return null;
                
                return (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                      <post.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {post.category}
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          {post.readTime} de leitura
                        </Badge>
                      </div>
                      <DialogTitle className="text-2xl font-bold text-foreground">
                        {post.title}
                      </DialogTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </DialogHeader>

            <div className="flex-1 overflow-y-auto space-y-6 py-4">
              {selectedModal && (() => {
                const post = blogPosts.find(p => p.id === selectedModal);
                const category = post?.category;
                const content = category && categoryContent[category as keyof typeof categoryContent];
                
                if (!content) return null;
                
                return (
                  <div className="space-y-6">
                    {/* Resumo do artigo */}
                    <div className="bg-primary/5 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Resumo
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {post?.excerpt}
                      </p>
                    </div>

                    {/* Conteúdo principal */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Conteúdo Completo
                      </h3>
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: content.content 
                        }}
                      />
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Precisa de ajuda com sua contabilidade?
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Nossa equipe está pronta para auxiliar você com todas as questões contábeis e fiscais.
                      </p>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Falar com Especialista
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
