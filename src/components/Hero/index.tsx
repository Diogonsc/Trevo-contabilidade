import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, MapPin, Coffee } from "lucide-react";

export function Hero() {
	return (
		<section className="relative overflow-hidden min-h-screen">
			{/* Background Image */}
			<div 
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: 'url(/banner.webp)'
				}}
			></div>
			
			{/* Gradient Overlay */}
			<div 
				className="absolute inset-0"
				style={{
					background: 'linear-gradient(180deg, rgba(49, 147, 0, 0.25) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(49, 147, 0, 0.3) 100%)'
				}}
			></div>
			
			{/* Grid Pattern Overlay */}
			<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
			
			<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Conteúdo Principal */}
					<div className="space-y-8">
						<div className="space-y-4">
							<Badge variant="secondary" className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary border border-primary hover:bg-primary/20">
								<Coffee className="w-4 h-4 mr-2" />
								🍀 + 25 anos de história
							</Badge>
							
							<h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
								Mais que cliente, temos{" "}
								<span className="text-primary">parceiros de sucesso</span>
							</h1>
							
							<p className="text-xl text-slate-700 leading-relaxed max-w-2xl">
								Pega seu café e deixe a contabilidade com a gente! 
								Oferecemos serviços completos de contabilidade para transformar 
								seu negócio em uma parceria de sucesso.
							</p>
						</div>

						{/* Informações de Contato */}
						<div className="flex flex-col sm:flex-row gap-4">
							<div className="flex items-center text-slate-600">
								<MapPin className="w-5 h-5 mr-2 text-primary" />
								<span className="text-sm font-medium text-slate-600">Avenida Isabel, 15, Casa 2, Rio de Janeiro, RJ</span>
							</div>
							<div className="flex items-center text-slate-600">
								<Phone className="w-5 h-5 mr-2 text-primary" />
								<span className="text-sm font-medium text-slate-600">+55 21 3547-2077</span>
							</div>
						</div>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="p-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium uppercase font-bold cursor-pointer tracking-wider" onClick={() => {
								window.open('https://api.whatsapp.com/send?phone=552135472077&text=Olá, gostaria de solicitar um orçamento', '_blank');
							}}>
								Solicitar Orçamento
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>
							<Button 
								size="lg" 
								className="p-6 border-2 border-primary bg-transparent text-primary font-medium hover:bg-primary/10 uppercase font-bold tracking-wider cursor-pointer"
								onClick={() => {
									const servicosSection = document.getElementById('servicos');
									if (servicosSection) {
										servicosSection.scrollIntoView({ 
											behavior: 'smooth',
											block: 'start'
										});
									}
								}}
							>
								Conhecer Serviços
							</Button>
						</div>

						{/* Estatísticas */}
						<div className="grid grid-cols-3 gap-8 pt-8 border-t border-border border-primary">
							<div className="text-center">
								<div className="text-2xl font-bold text-primary">25+</div>
								<div className="text-sm text-slate-600 font-medium">Anos de Experiência</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-primary">500+</div>
								<div className="text-sm text-slate-600 font-medium">Clientes Atendidos</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-primary">100%</div>
								<div className="text-sm text-slate-600 font-medium">Satisfação</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}