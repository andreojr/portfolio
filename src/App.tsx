import logo from "./assets/logo.svg";
import eua_flag from "./assets/eua_flag.svg";
import brazil_flag from "./assets/brazil_flag.svg";
import hero_profile from "./assets/hero_profile.svg";
import name from "./assets/name.svg";
import githublogo from "./assets/github.svg";
import group_technologies from "./assets/group_technologies.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
// import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ArrowDown, CaretDown, List } from "@phosphor-icons/react";
import aprovacao_ufba from "./assets/aprovacao_ufba.svg" ;

import { TextAlignRight, Code, ChatsCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

// interface AttributesParentToggleItem {
// 	"data-state": {
// 		value: "on" | "off";
// 	};
// }

function App() {
	const [lang, setLang] = useState<"pt" | "en">("pt");

	useEffect(() => {
		document.documentElement.lang = lang;
	}, [lang]);

	// function handleNotNullLang(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
	// 	const element = e.target as Element;
	// 	if (element.parentElement) {
	// 		const stateElement = element.parentElement.attributes as unknown as AttributesParentToggleItem;
	// 		if (stateElement["data-state"].value === "on") return e.preventDefault();
	// 	}
	// }

	function handleChangeLang(change_lang: "pt" | "en") {
		setLang(change_lang);
	}

	return (
		<div className="App w-full h-screen bg-dark font-poppins">
			<section className="flex flex-col lg:flex-row">
				<div className="bg-primary lg:w-3/5 px-12 py-10 lg:pr-0 lg:pb-0 2xl:pl-80">
					<header className="relative flex items-center justify-between h-20 lg:pr-12">

						{/* <ToggleGroup.Root
							
							type="single"
							className="flex lg:order-2 bg-dark rounded-sm"
							defaultValue={lang}
							onValueChange={(value: "pt" | "en") => setLang(value) }
						>
							<ToggleGroup.Item
								className="rounded-tl-sm rounded-bl-sm p-0.5 bg-dark data-[state=off]:opacity-50 data-[state=on]:bg-white" value="en" aria-label="USA Flag"
								onClick={handleNotNullLang}
							>
								<img className="h-5" src={eua_flag} alt="USA Flag" />
							</ToggleGroup.Item>
							<ToggleGroup.Item
								className="rounded-tr-sm rounded-br-sm p-0.5 bg-dark data-[state=off]:opacity-50 data-[state=on]:bg-white" value="pt" aria-label="Bandeira do Brasil"
								onClick={handleNotNullLang}
							>
								<img className="h-5" src={brazil_flag} alt="Bandeira do Brasil" />
							</ToggleGroup.Item>
						</ToggleGroup.Root> */}

						<DropdownMenu.Root>
							<DropdownMenu.Trigger className="lg:order-2">
								<div className="flex items-center gap-0.5 lg:gap-1 bg-white text-dark rounded-md p-1">
									<div className="flex items-center gap-1">
										<img className="h-5" src={lang === "pt" ? brazil_flag : eua_flag} alt={lang.toUpperCase()} />
										<span className="hidden lg:block font-bold text-base">{lang.toUpperCase()}</span>
									</div>
									<CaretDown size={16} />
								</div>
							</DropdownMenu.Trigger>

							<DropdownMenu.Portal>
								<DropdownMenu.Content className="bg-white rounded-md flex flex-col text-dark mt-2">
									<DropdownMenu.Item onClick={() => handleChangeLang("pt")}>
										<div className="cursor-pointer flex items-center px-3 py-2">
											<div className="flex items-center gap-2">
												<img className="h-5" src={brazil_flag} alt="Bandeira do Brasil" />
												<span className="hidden lg:block font-bold text-base">PT</span>
											</div>
										</div>	
									</DropdownMenu.Item>
									<DropdownMenu.Item onClick={() => handleChangeLang("en")}>
										<div className="cursor-pointer flex items-center px-3 py-2">
											<div className="flex items-center gap-2">
												<img className="h-5" src={eua_flag} alt="USA Flag" />
												<span className="hidden lg:block font-bold text-base">EN</span>
											</div>
										</div>	
									</DropdownMenu.Item>
								</DropdownMenu.Content>
							</DropdownMenu.Portal>
						</DropdownMenu.Root>

						<img className="cursor-pointer h-14 absolute lg:static left-1/2 -translate-x-1/2 lg:translate-x-0" src={logo} alt="Logo" />

						<Dialog.Root>
							<Dialog.Trigger className="lg:hidden text-white">
								<List size={36} />
							</Dialog.Trigger>
							<Dialog.Portal>
								<Dialog.Overlay className="w-full h-screen fixed bg-black/50 inset-0" />
								<Dialog.Content className="animate-slide absolute w-3/5 h-screen bg-white top-0 -right-4">
									<nav className="p-6">
										<ul className="text-dark text-xl flex flex-col gap-10">
											<li className="cursor-pointer flex gap-1 items-center">
												<TextAlignRight size={24} />
												<span>
													{lang === "pt" && "Sobre"}
													{lang === "en" && "About"}
												</span>
											</li>
											<li className="cursor-pointer flex gap-1 items-center">
												<Code size={24} />
												<span>
													{lang === "pt" && "Projetos"}
													{lang === "en" && "Projects"}
												</span>
											</li>
											<li className="cursor-pointer flex gap-1 items-center">
												<ChatsCircle size={24} />
												<span>
													{lang === "pt" && "Contato"}
													{lang === "en" && "Contact"}
												</span>
											</li>
										</ul>
									</nav>
								</Dialog.Content>
							</Dialog.Portal>
						</Dialog.Root>
					</header>

					<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-end mt-10 lg:mt-10">
						<div className="text-center lg:text-right text-white lg:m-10 lg:mr-10">
							<p className="text-3xl font-bold lg:mr-2">
								{lang === "pt" && "OLÁ! EU SOU"}
								{lang === "en" && "HI! I AM"}
							</p>
							<img className="block m-auto lg:hidden rounded-full mt-7 -mb-20 h-96" src={hero_profile} alt="Foto de Perfil" />
							<div>
								<img className="h-32 lg:h-52 my-5" src={name} alt="André Luiz de Oliveira Júnior" />
								<div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 lg:justify-between mt-8 lg:mt-16">
									<button className="w-full lg:w-52 h-16 rounded-full border-4 border-white flex justify-center group">
										<div className="w-full h-14 rounded-full bg-white border-4 border-dark flex items-center justify-center group-hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] transition-all">
											<span className="text-dark font-black text-xl">
												{lang === "pt" && "Contrate-me"}
												{lang === "en" && "Hire me"}
											</span>
										</div>
									</button>
									<a href="https://github.com/andreojr/portfolio-web" target="blank" className="flex items-center text-2xl ml-4 text-white hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] transition-all">
										{lang === "pt" && "Código do site"}
										{lang === "en" && "Site code"}
										<img className="ml-2 h-10" src={githublogo} alt="GitHub Logo" />
									</a>
								</div>
							</div>
						</div>
						<img className="h-[500px] hidden lg:block" src={hero_profile} alt="Foto de Perfil" />
					</div>
				</div>
				<div className="bg-dark lg:w-2/5 py-10 px-12 2xl:pr-80">
					<nav className="hidden lg:flex h-20 items-center">
						<ul className="flex gap-8 items-center text-white text-base xl:text-xl">
							<li className="cursor-pointer flex gap-1 items-center"><TextAlignRight size={24} />
								<span>
									{lang === "pt" && "Sobre"}
									{lang === "en" && "About"}
								</span>
							</li>
							<li className="cursor-pointer flex gap-1 items-center"><Code size={24} />
								<span>
									{lang === "pt" && "Projetos"}
									{lang === "en" && "Projects"}
								</span>
							</li>
							<li className="cursor-pointer flex gap-1 items-center"><ChatsCircle size={24} />
								<span>
									{lang === "pt" && "Contato"}
									{lang === "en" && "Contact"}
								</span>
							</li>
						</ul>
					</nav>

					<div className="lg:h-4/5">
						<div className="lg:mt-20">
							{lang === "pt" && (
								<>
									<h2 className="text-white font-bold leading-tight text-2xl">UM DESENVOLVEDOR<br /><i className="text-secondary">FULL STACK</i></h2>
									<p className="text-white text-xl">com 18 anos</p>
								</>
							)}
							{lang === "en" && (
								<>
									<p className="text-white text-xl">an 18 year old</p>
									<h2 className="text-white font-bold leading-tight text-4xl"><i className="text-secondary">FULL STACK</i><br />DEVELOPER</h2>
								</>
							)}

						</div>
						<div className="my-10">
							<p className="text-2xl leading-relaxed italic font-bold text-zinc-300">
								{lang === "pt" && "Comprometimento + Integridade + Trabalho em Equipe + Proatividade"}
								{lang === "en" && "Commitment + Integrity + Team Work + Proactivity"}
							</p>
						</div>
						<img src={group_technologies} alt="Tecnologias que domino" />
					</div>
				</div>
			</section>
			<section className="bg-secondary">
				<div className="flex flex-col lg:flex-row px-12 py-24 2xl:px-80">
					<img className="order-2 lg:order-1 mt-8 lg:mt-0" src={aprovacao_ufba} alt="Aprovação na UFBA" />
					<div className="flex order-1 lg:order-2 lg:ml-20">
						<div className="relative flex flex-col items-center">
							<div className="w-5 h-5 bg-dark rounded-full" />
							<div className="w-1 h-64 lg:h-80 bg-dark rounded-full -mt-1" />
							<ArrowDown className="-mt-10 text-dark" size={50} />
						</div>
						<div className="text-dark">
							<p className="text-xl lg:text-2xl">Aprovado na</p>
							<h3 className="text-8xl lg:text-9xl font-black">UFBA</h3>
							<p className="text-6xl lg:text-7xl my-2 font-black">2023</p>
							<p className="text-2xl lg:text-3xl font-black">em Engenharia da Computação</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
