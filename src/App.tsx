import "./lib/dayjs"; 
import logo from "./assets/logo.svg";
import eua_flag from "./assets/eua_flag.svg";
import brazil_flag from "./assets/brazil_flag.svg";
import hero_profile from "./assets/hero_profile.svg";
import name from "./assets/name.svg";
import githublogo from "./assets/github.svg";
import group_technologies from "./assets/group_technologies.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowDown, CaretDown, Clock, Copyright, Envelope, GithubLogo, InstagramLogo, LinkedinLogo, List, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
import aprovacao_ufba from "./assets/aprovacao_ufba.svg" ;
import no_projects from "./assets/no-projects.svg"

import { TextAlignRight, Code, ChatsCircle } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { Certificates } from "./components/Certificates";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { SendMessageBox } from "./components/SendMessageBox";
import { Chat } from "./components/Chat";
import axios from "axios";
import { abilitiesList } from "./utils/abilitiesList";
import clsx from "clsx";
import { projectsList } from "./utils/projectsList";
import HorizontalScroll from "react-scroll-horizontal";

export type MessagesProps = {
    id: string;
    content: string;
    by: string;
    to: string;
    created_at: string;
}[];

function App() {
	const [lang, setLang] = useState<"pt" | "en">("pt");
	const [ip, setIp] = useState("");
	const [messages, setMessages] = useState<MessagesProps | undefined>(undefined);
	const scrollChat = useRef<HTMLDivElement | null>(null);
	const textArea = useRef<HTMLTextAreaElement | null>(null);

	useEffect(() => {
		axios.get("https://api.ipify.org/?format=json").then(response => {
			setIp(response.data.ip);
		});
	}, []);
	useEffect(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	useEffect(() => {
		scrollChat.current?.scrollTo({ top: scrollChat.current.scrollHeight - scrollChat.current.clientHeight });
	}, [messages]);

	function handleChangeLang(change_lang: "pt" | "en") {
		setLang(change_lang);
	}

	return (
		<div className="App w-full h-screen bg-dark font-poppins">
			<section className="flex flex-col lg:flex-row">
				<div className="bg-primary lg:w-3/5 px-12 py-10 lg:pr-0 lg:pb-0 2xl:pl-80">
					<header className="flex items-center justify-between h-20 lg:pr-12">

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
												<a href="#about">
													{lang === "pt" && "Sobre"}
													{lang === "en" && "About"}
												</a>
											</li>
											<li className="cursor-pointer flex gap-1 items-center">
												<Code size={24} />
												<a href="#projects">
													{lang === "pt" && "Projetos"}
													{lang === "en" && "Projects"}
												</a>
											</li>
											<li className="cursor-pointer flex gap-1 items-center">
												<ChatsCircle size={24} />
												<a href="#contact">
													{lang === "pt" && "Contato"}
													{lang === "en" && "Contact"}
												</a>
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
									<a href="#contact" className="w-full lg:w-52 h-16 rounded-full border-4 border-white flex justify-center group">
										<div className="w-full h-14 rounded-full bg-white border-4 border-dark flex items-center justify-center group-hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] transition-all">
											<span className="text-dark font-black text-xl">
												{lang === "pt" && "Contrate-me"}
												{lang === "en" && "Hire me"}
											</span>
										</div>
									</a>
									<a href="https://github.com/andreojr/portfolio-web" target="blank" className="flex items-center text-2xl ml-4 text-white hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] transition-all">
										{lang === "pt" && "Código do site"}
										{lang === "en" && "Site code"}
										<GithubLogo weight="fill" className="ml-2" size={32} />
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
								<a href="#about">
									{lang === "pt" && "Sobre"}
									{lang === "en" && "About"}
								</a>
							</li>
							<li className="cursor-pointer flex gap-1 items-center"><Code size={24} />
								<a href="#projects">
									{lang === "pt" && "Projetos"}
									{lang === "en" && "Projects"}
								</a>
							</li>
							<li className="cursor-pointer flex gap-1 items-center"><ChatsCircle size={24} />
								<a href="#contact">
									{lang === "pt" && "Contato"}
									{lang === "en" && "Contact"}
								</a>
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
			<section className="bg-secondary px-12 py-24 2xl:px-80" id="about">
				<div className="flex flex-col lg:flex-row">
					<img className="order-2 lg:order-1 mt-8 lg:mt-0 rounded-lg drop-shadow-2xl" src={aprovacao_ufba} alt="Aprovação na UFBA" />
					<div className="flex order-1 lg:order-2 lg:ml-20">
						<div className="relative flex flex-col items-center">
							<div className="w-5 h-5 bg-dark rounded-full" />
							<div className="w-1 h-64 lg:h-80 bg-dark rounded-full -mt-1" />
							<ArrowDown className="-mt-10 text-dark" size={50} />
						</div>
						<div className="text-dark ml-2">
							<p className="text-xl lg:text-2xl">
								{lang === "pt" && "Aprovado na"}
								{lang === "en" && "Approved at"}
							</p>
							<h3 className="text-8xl lg:text-9xl font-black">UFBA</h3>
							<p className="text-6xl lg:text-7xl my-2 font-black">2023</p>
							<p className="text-2xl lg:text-3xl font-black">
								{lang === "pt" && "em Engenharia da Computação"}
								{lang === "en" && "in Computer Engineering"}
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-10 lg:flex-row mt-24 lg:mt-0 items-end">
					<div className="lg:w-1/2">
						<h4 className="text-dark font-black text-5xl lg:text-7xl">
							{lang === "pt" && "SOBRE MIM"}
							{lang === "en" && "ABOUT ME"}
						</h4>
						<p className="leading-8 lg:leading-8 text-justify mt-6 text-lg lg:text-xl">
							{lang === "pt" && (
								<>
									Meu nome é André, tenho 18 anos e moro em Salvador. Possuo conhecimentos sólidos em Python, PHP, JavaScript e frameworks derivados como Node, Express, React e React Native, além de HTML/CSS e bancos de dados relacionais como MySQL e PostgreSQL. Estou à procura de um estágio na área a fim de evoluir como profissional e agregar valor à empresa que me escolher.
									<br />
									<br />
									Tenho facilidade em trabalhar em equipe, boa comunicação e proatividade, além de habilidades analíticas e de resolução de problemas. Entendo que, para me destacar no mercado de trabalho, é importante que eu invista em uma formação sólida, participar de projetos e eventos relacionados à área e me manter sempre atualizado sobre as novas tendências e tecnologias emergentes.
								</>
							)}
							{lang === "en" && (
								<>
									My name is André, I&apos;m 18 years old and I live in Salvador. I have solid knowledge in Python, PHP, JavaScript and derived frameworks such as Node, Express, React and React Native, as well as HTML / CSS and relational databases such as MySQL and PostgreSQL. I&apos;m looking for an internship in the area in order to evolve as a professional and add value to the company that chooses me.
									<br />
									<br />
									I enjoy teamwork, good communication and proactivity, as well as analytical and problem-solving skills. I understand that, in order to stand out in the job market, it is important that I invest in a solid education, participate in projects and events in the area and always keep myself updated on new trends and emerging technologies.
								</>
							)}
						</p>
					</div>
					<Certificates lang={lang} />
				</div>
			</section>

			<section id="projects" className="flex flex-col lg:flex-row bg-terciary pl-12 pt-24 lg:pb-24 2xl:pl-80 gap-24 w-full">
				<div className="lg:w-1/3 flex flex-col pr-12">
					<h4 className="text-5xl text-white font-black">
						{lang === "pt" && "PROJETOS"}
						{lang === "en" && "PROJECTS"}
					</h4>
					<div className="mt-16 flex flex-col items-center h-full justify-center">
						<img src={no_projects} alt="Trabalhando nos projetos..." className="h-56" />
						<a href="https://linktr.ee/andreojr" target="__blank" className="w-5/6 mt-4 h-16 rounded-full border-4 border-white flex justify-center group">
							<div className="w-full h-14 rounded-full bg-white border-4 border-primary flex items-center justify-center group-hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] transition-all">
								<span className="text-primary font-black text-xl">
									{lang === "pt" && "Ver projetos"}
									{lang === "en" && "See projects"}
								</span>
							</div>
						</a>
					</div>
				</div>
				<div className="lg:w-2/3">
					<h5 className="text-lg text-white font-bold lg:mt-5">PROTÓTIPOS</h5>

					<HorizontalScroll className="hidden lg:block mt-10">
						{projectsList.map(project => {
							return (
								<div className="flex flex-col items-start justify-center text-white mr-10 self-start">
									<div style={{
										backgroundImage: `url(${project.image})`,
										backgroundPosition: "center",
										backgroundColor: "#E5E5E5",
										backgroundSize: "contain",
										backgroundRepeat: "no-repeat",
									}} className="h-[30rem] w-[35rem] rounded-xl" />
									<div className="mt-5">
										<p className="font-black text-2xl">{project.title}</p>
										<span className="text-base">{project.description[lang]}</span>
									</div>
								</div>
							);
						})}
					</HorizontalScroll>

					<ScrollArea.Root className="lg:hidden !static h-[40rem] overflow-hidden mt-10">
						<ScrollArea.Viewport ref={scrollChat} className="w-full h-full">
							<div className="flex">
								{projectsList.map(project => {
									return (
										<div className="flex flex-col items-start justify-center text-white mr-10 self-start">
											<div style={{
												backgroundImage: `url(${project.image})`,
												backgroundPosition: "center",
												backgroundColor: "#E5E5E5",
												backgroundSize: "contain",
												backgroundRepeat: "no-repeat",
											}} className="h-[30rem] w-[35rem] rounded-xl" />
											<div className="mt-5">
												<p className="font-black text-2xl">{project.title}</p>
												<span className="text-base">{project.description[lang]}</span>
											</div>
										</div>
									);
								})}
							</div>
						</ScrollArea.Viewport>
						<ScrollArea.Scrollbar orientation="vertical">
							<ScrollArea.Thumb />
						</ScrollArea.Scrollbar>
						<ScrollArea.Scrollbar orientation="horizontal">
							<ScrollArea.Thumb />
						</ScrollArea.Scrollbar>
						<ScrollArea.Corner />
					</ScrollArea.Root>
				</div>
			</section>
			
			<section className="flex flex-col lg:flex-row bg-white px-12 py-24 2xl:px-80 gap-24" id="contact">
				<div className="lg:w-2/5">
					<h4 className="text-5xl text-secondary font-black">
						{lang === "pt" && "HABILIDADES"}
						{lang === "en" && "ABILITIES"}
					</h4>

					<ScrollArea.Root className="!static h-[54rem] overflow-hidden">
					
						<ScrollArea.Viewport className="w-full h-full mt-5 py-2">
							{abilitiesList.map(field => {
								return (
									<div key={field.field.en} className=" mt-5 mb-10">
										<p className="text-base italic text-dark mb-5 font-bold">{field.field[lang]}</p>
										<div>
											{field.abilities.map((ability, i) => {
												return (
													<div
														key={ability.ability.en}
														className={clsx("w-full h-28 flex flex-col justify-end p-4 mt-5 rounded-md", {
															"bg-blue-200": ability.level.en === "Basic",
															"bg-blue-300": ability.level.en === "Intermediary",
															"bg-blue-400": ability.level.en === "Advanced",
														})}
													>
														<p className="text-xl text-dark font-bold">{ability.ability[lang]}</p>
														<span className="text-sm text-dark/40">{ability.level[lang]}</span>
													</div>
												);
											})}
										</div>
									</div>
								);
							})}		
						</ScrollArea.Viewport>
							
						
						<ScrollArea.Scrollbar orientation="vertical">
							<ScrollArea.Thumb />
						</ScrollArea.Scrollbar>
						<ScrollArea.Scrollbar orientation="horizontal">
							<ScrollArea.Thumb />
						</ScrollArea.Scrollbar>
						<ScrollArea.Corner />
					</ScrollArea.Root>
				</div>
				<div className="lg:w-3/5">
					<div>
						<div className="z-50 relative bg-primary p-6 lg:p-8 text-white flex justify-between lg:items-center rounded-xl">
							<div>
								<h4 className="text-2xl lg:text-4xl font-black">
									{lang === "pt" && "CONTATE-ME"}
									{lang === "en" && "CONTACT ME"}
								</h4>
								<p className="text-sm lg:text-base">Powered by ME</p>
							</div>
							<div className="flex lg:items-center lg:gap-2 font-bold flex-col lg:flex-row items-end">
								<div className="order-2 lg:order-1">
									<span className="text-base lg:text-5xl">&lt;5{" "}</span>
									<span className="text-xs lg:hidden">MIN.</span>
								</div>
								<div className="flex-col hidden lg:flex lg:order-2">
									<span className="text-sm lg:text-lg">
										{lang === "pt" && "MINUTOS"}
										{lang === "en" && "MINUTES"}
									</span>
									<span className="text-xs lg:text-base">
										{lang ==="pt" && "DE ESPERA"}
										{lang === "en" && "WAIT"}
									</span>
								</div>
								<Clock weight="fill" className="text-3xl lg:text-5xl lg:order-3 order-1" />
							</div>
						</div>
						<ScrollArea.Root className="!static h-[40rem] overflow-hidden -mt-10">
							<ScrollArea.Viewport ref={scrollChat} className="w-full h-full bg-slate-200 py-16 px-8">
								{ip && <Chat ip={ip} messages={messages} setMessages={setMessages} />}
							</ScrollArea.Viewport>
							<ScrollArea.Scrollbar orientation="vertical">
								<ScrollArea.Thumb />
							</ScrollArea.Scrollbar>
							<ScrollArea.Scrollbar orientation="horizontal">
								<ScrollArea.Thumb />
							</ScrollArea.Scrollbar>
							<ScrollArea.Corner />
						</ScrollArea.Root>
						<SendMessageBox ip={ip} setMessages={setMessages} textArea={textArea} lang={lang} />
					</div>
				</div>
			</section>
			<footer className="bg-dark px-12 py-8 2xl:px-80 flex flex-col lg:flex-row justify-between">
				<div className="flex items-center gap-3 justify-center order-3 lg:order-1">
					<img src={logo} alt="Logo" className="h-7" />
					<span className="text-white flex items-center gap-1">
						{lang === "pt" && "Todos os direitos reservados"}
						{lang === "en" && "All rights reserved"}
						<Copyright size={16} />
					</span>
				</div>
				<div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-10 mb-5 lg:m-0 order-2 lg:order-1">
					<a href="tel:71984788575" className="text-white flex items-center gap-2">
						<Phone size={24} weight="fill" />
						<span>(71) 9 8478-8575</span>
					</a>
					<a href="mailto:atipicode.ec@gmail.com" className="text-white flex items-center gap-2">
						<Envelope size={24} weight="fill" />
						<span>atipicode.ec@gmail.com</span>
					</a>
					<a href="https://goo.gl/maps/CGerKX5ZKfA6Ahvt8" target="__blank" className="text-white flex items-center gap-2">
						<MapPin size={24} weight="fill" />
						<span>Costa Azul, Salvador - BA</span>
					</a>
				</div>
				<div className="text-white flex gap-5 items-center justify-center order-2 mb-5 lg:m-0 lg:order-3">
					<a href="https://instagram.com/eiandreojr" target="__blank"><InstagramLogo size={32} weight="fill" className="text-pink-400" /></a>
					<a href="https://linkedin.com/in/andreojr" target="__blank"><LinkedinLogo size={32} weight="fill" className="text-blue-400" /></a>
					<a href="https://wa.me/5571984760838?text=Ol%C3%A1%2C+Andr%C3%A9%21+Temos+uma+oportunidade+para+voc%C3%AA." target="__blank"><WhatsappLogo size={32} weight="fill" className="text-green-500" /></a>
				</div>
			</footer>
		</div>
	);
}

export default App;
