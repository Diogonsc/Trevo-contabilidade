import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, MapPin, Coffee } from "lucide-react";

export function Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
			<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
			
			<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Conteúdo Principal */}
					<div className="space-y-8">
						<div className="space-y-4">
							<Badge variant="secondary" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20">
								<Coffee className="w-4 h-4 mr-2" />
								🍀 + 25 anos de história
							</Badge>
							
							<h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
								Mais que cliente, temos{" "}
								<span className="text-primary">parceiros de sucesso</span>
							</h1>
							
							<p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
								Pega seu café e deixe a contabilidade com a gente! 
								Oferecemos serviços completos de contabilidade para transformar 
								seu negócio em uma parceria de sucesso.
							</p>
						</div>

						{/* Informações de Contato */}
						<div className="flex flex-col sm:flex-row gap-4">
							<div className="flex items-center text-muted-foreground">
								<MapPin className="w-5 h-5 mr-2 text-primary" />
								<span className="text-sm">Avenida Isabel, 15, Casa 2 - Rio de Janeiro</span>
							</div>
							<div className="flex items-center text-muted-foreground">
								<Phone className="w-5 h-5 mr-2 text-primary" />
								<span className="text-sm">(21) 2351-5160</span>
							</div>
						</div>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
								Solicitar Orçamento
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>
							<Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
								Conhecer Serviços
							</Button>
						</div>

						{/* Estatísticas */}
						<div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
							<div className="text-center">
								<div className="text-2xl font-bold text-primary">25+</div>
								<div className="text-sm text-muted-foreground">Anos de Experiência</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-primary">500+</div>
								<div className="text-sm text-muted-foreground">Clientes Atendidos</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-primary">100%</div>
								<div className="text-sm text-muted-foreground">Satisfação</div>
							</div>
						</div>
					</div>

					{/* Imagem/Visual */}
					<div className="relative">
						<Card className="relative z-10 border-primary/20 overflow-hidden">
							{/* Background com imagem e gradiente */}
							<div 
								className="absolute inset-0 bg-contain bg-top bg-no-repeat"
								style={{
									backgroundImage: 'url(/src/assets/cartao-trevo-hero.jpg)'
								}}
							/>
							{/* Gradiente linear sobreposto */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40" />
							
							<CardContent className="relative z-10 p-8 lg:p-12">
								<div className="space-y-6">
									<div className="text-center mt-24">
										<h3 className="text-xl font-semibold text-white mb-2">
											Qual o porte da sua empresa?
										</h3>
										<p className="text-white/90">
											Descubra como podemos ajudar seu negócio a crescer
										</p>
									</div>
									
									<div className="space-y-3">
										<Card className="bg-white/20 backdrop-blur-sm border-white/20">
											<CardContent className="p-3">
												<div className="flex items-center justify-between">
													<span className="text-md font-medium text-white">Microempresa</span>
													<span className="text-md text-white/80">Até R$ 360k/ano</span>
												</div>
											</CardContent>
										</Card>
										<Card className="bg-white/20 backdrop-blur-sm border-white/20">
											<CardContent className="p-3">
												<div className="flex items-center justify-between">
													<span className="text-md font-medium text-white">Pequena Empresa</span>
													<span className="text-sm text-white/80">Até R$ 4,8M/ano</span>
												</div>
											</CardContent>
										</Card>
										<Card className="bg-white/20 backdrop-blur-sm border-white/20">
											<CardContent className="p-3">
												<div className="flex items-center justify-between">
													<span className="text-md font-medium text-white">Média Empresa</span>
													<span className="text-sm text-white/80">Até R$ 300M/ano</span>
												</div>
											</CardContent>
										</Card>
									</div>
								</div>
							</CardContent>
						</Card>
						
						{/* Elementos decorativos */}
						<div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
						<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
					</div>
				</div>
			</div>
		</section>
	);
}