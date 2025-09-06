import logo from "/logotipo.png"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
	return (
		<footer className="w-full bg-primary-light text-foreground mt-auto">
			<div className="w-full pt-12">
				<div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Logo e Descrição */}
						<div className="space-y-4">
							<img src={logo} alt="Trevo Contabilidade" className="w-auto h-12" />
							<p className="text-sm text-muted">
								Soluções contábeis completas para sua empresa crescer com segurança e transparência.
							</p>
							{/* Redes Sociais */}
							<div className="flex space-x-4">
								<a 
									href="#" 
									className="text-muted hover:text-primary transition-colors"
									aria-label="Facebook"
								>
									<Facebook size={20} />
								</a>
								<a 
									href="#" 
									className="text-muted hover:text-primary transition-colors"
									aria-label="Instagram"
								>
									<Instagram size={20} />
								</a>
								<a 
									href="#" 
									className="text-muted hover:text-primary transition-colors"
									aria-label="LinkedIn"
								>
									<Linkedin size={20} />
								</a>
							</div>
						</div>

						{/* Menu */}
						<div className="space-y-4">
							<h3 className="font-semibold text-lg text-primary">Menu</h3>
							<nav className="space-y-2">
								<a href="#" className="block text-sm text-muted hover:text-primary transition-colors">
									Início
								</a>
								<a href="#" className="block text-sm text-muted hover:text-primary transition-colors">
									Serviços
								</a>
								<a href="#" className="block text-sm text-muted hover:text-primary transition-colors">
									Sobre Nós
								</a>
								<a href="#" className="block text-sm text-muted hover:text-primary transition-colors">
									Contato
								</a>
								<a href="#" className="block text-sm text-muted hover:text-primary transition-colors">
									Blog
								</a>
							</nav>
						</div>

						{/* Contato */}
						<div className="space-y-4">
							<h3 className="font-semibold text-lg text-primary">Contato</h3>
							<div className="space-y-3">
								<div className="flex items-center space-x-3">
									<Phone size={16} className="text-primary" />
									<span className="text-sm text-muted">(21) 3547-2077</span>
								</div>
								<div className="flex items-center space-x-3">
									<Mail size={16} className="text-primary" />
									<span className="text-sm text-muted">contato@trevocontabilidade.com</span>
								</div>
							</div>
						</div>

						{/* Endereço e Horário */}
						<div className="space-y-4">
							<h3 className="font-semibold text-lg text-primary">Localização</h3>
							<div className="space-y-3">
								<div className="flex items-start space-x-3">
									<MapPin size={16} className="text-primary mt-0.5" />
									<span className="text-sm text-muted">
										Avenida Isabel, 15, Casa 2<br />
										Rio de Janeiro, Rio de Janeiro<br />
										23515-160
									</span>
								</div>
								<div className="flex items-start space-x-3">
									<Clock size={16} className="text-primary mt-0.5" />
									<div className="text-sm text-muted">
										<p className="font-medium text-muted">Horário de Funcionamento:</p>
										<p>Seg - Sex: 09:00 - 17:00</p>
										<p className="text-xs text-muted">Abre seg. às 09:00</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Linha divisória e copyright */}
			<div className="mt-8 py-8 bg-primary w-full">
				<div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-sm text-muted">
							© {new Date().getFullYear()} Trevo Contabilidade. Todos os direitos reservados.
						</p>
						<div className="flex space-x-6">
							<a href="#" className="text-sm text-muted hover:text-primary transition-colors">
								Política de Privacidade
							</a>
							<a href="#" className="text-sm text-muted hover:text-primary transition-colors">
								Termos de Uso
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}