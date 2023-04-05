import logo from "./assets/logo.svg";
import eua_flag from "./assets/eua_flag.svg";
import brazil_flag from "./assets/brazil_flag.svg";
import hero_profile from "./assets/hero_profile.svg";
import name from "./assets/name.svg";
import githublogo from "./assets/github.svg";
import group_technologies from "./assets/group_technologies.svg";
import * as Switch from "@radix-ui/react-switch";

import { TextAlignRight, Code, ChatsCircle } from "@phosphor-icons/react";

function App() {

	return (
		<div className="App w-full h-screen bg-dark font-poppins">
			<section className="flex">
				<div className="bg-primary w-3/5 pt-10 pl-80">
					<header className="flex items-center justify-between pr-12">
						<img className="cursor-pointer" src={logo} alt="Logo" />
						<div className="flex items-center justify-center">
							<label className="cursor-pointer" htmlFor="switch-language"><img className="h-8" src={eua_flag} alt="Bandeira dos Estados Unidos" /></label>
							<Switch.Root className="w-14 h-8 bg-dark rounded-full mx-4" id="switch-language">
								<Switch.Thumb className="flex items-center justify-center w-8 h-8 bg-white rounded-full data-[state=checked]:translate-x-8 transition-transform">
									<div className="w-7 h-7 border-4 border-dark rounded-full" />
								</Switch.Thumb>
							</Switch.Root>
							<label className="cursor-pointer" htmlFor="switch-language"><img className="h-8" src={brazil_flag} alt="Bandeira do Brasil" /></label>
						</div>
					</header>

					<div className="flex items-center justify-between mt-20">
						<div className="text-right text-white">
							<p className="text-3xl font-bold mr-2">OLÁ! EU SOU</p>
							<img className="h-52 my-5" src={name} alt="André Luiz de Oliveira Júnior" />
							<div className="flex justify-between mt-16">
								<button className="group">
									<div className="w-52 h-16 rounded-full border-4 border-white flex justify-center">
										<div className="w-52 h-14 rounded-full bg-white border-4 border-dark flex items-center justify-center group-hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] transition-all">
											<span className="text-dark font-black text-xl">Contrate-me</span>
										</div>
									</div>
								</button>
								<a href="https://github.com/andreojr/portfolio-web" target="blank" className="flex items-center text-2xl text-white hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] transition-all">Código do site <img className="ml-2 h-10" src={githublogo} alt="GitHub Logo" /></a>
							</div>
						</div>
						<img src={hero_profile} alt="Foto de Perfil" />
					</div>
				</div>
				<div className="bg-dark w-2/5 pt-10 pr-80 pl-12">
					<nav className="h-20 flex items-center">
						<ul className="flex gap-8 items-center text-white text-xl">
							<li className="cursor-pointer flex gap-1 items-center"><TextAlignRight size={24} /><span>Sobre</span></li>
							<li className="cursor-pointer flex gap-1 items-center"><Code size={24} /><span>Projetos</span></li>
							<li className="cursor-pointer flex gap-1 items-center"><ChatsCircle size={24} /><span>Contato</span></li>
						</ul>
					</nav>

					<div className="flex flex-col items-start justify-center h-4/5">
						<div className="mt-20">
							<h2 className="text-white font-bold leading-tight text-3xl">UM DESENVOLVEDOR<br /><i className="text-secondary">FULL STACK</i></h2>
							<p className="text-white text-xl">com 18 anos</p>
						</div>
						<div className="my-16">
							<p className="text-2xl leading-relaxed italic font-bold text-zinc-300">Comprometimento + Integridade + Trabalho em Equipe + Proatividade</p>
						</div>
						<img src={group_technologies} alt="Tecnologias que domino" />
					</div>
				</div>
			</section>
			<section className="bg-secondary h-52">
				{/* TO BE CONTINUED... */}
			</section>
		</div>
	);
}

export default App;
