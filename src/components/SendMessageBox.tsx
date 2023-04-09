import { PaperPlane } from "@phosphor-icons/react";
import { MutableRefObject, useState } from "react";
import { api } from "../lib/api";
import { MessagesProps } from "../App";

interface SendMessageBoxProps {
    ip: string;
	setMessages: React.Dispatch<React.SetStateAction<MessagesProps | undefined>>;
	textArea: MutableRefObject<HTMLTextAreaElement | null>;
	lang: "pt" | "en";
}

export function SendMessageBox({ ip, setMessages, textArea, lang }: SendMessageBoxProps) {
	const [texting, setTexting] = useState("");

	async function sendMessage() {		
		if (texting === "" || !ip) return;

		try {

			const content = texting.replace("\n", "<br/>");
			await api.post("/messages", {
				by: ip,
				to: "admin",
				content,
			});
			
			setTexting("");
			await api.get(`/messages/${ip}`).then(response => {
				setMessages(response.data);
			});
			textArea.current?.focus();
			
		} catch(err) {
			console.log(err);
		}
	}

	return (
		<div className="relative z-50 bg-slate-200 rounded-xl py-4 px-8 -mt-10 flex flex-col items-end gap-3">
			<textarea
				ref={textArea}
				className="w-full h-32 rounded-xl resize-none p-4 focus:outline-none border-2 focus:border-secondary"
				placeholder={(lang === "pt" && "Escreva sua mensagem aqui...") || (lang === "en" && "Write your message here...") || ""}
				value={texting}
				onChange={e => setTexting(e.target.value)}
				onKeyDown={e => {if (e.key === "Enter" && !e.shiftKey) sendMessage(); }}
			/>
			<button onClick={sendMessage} className="rounded-xl w-full h-14 bg-secondary flex items-center justify-center hover:drop-shadow-md transition-all">
				<span className="text-white text-lg font-bold mr-3">
					{lang === "pt" && "Enviar"}
					{lang === "en" && "Send"}
				</span>
				<PaperPlane weight="fill" className="text-white text-xl rotate-90" />
			</button>
		</div>
	);
}