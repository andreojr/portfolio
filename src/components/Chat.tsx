import { useEffect } from "react";
import { MessageBox } from "./MessageBox";
import { api } from "../lib/api";
import { MessagesProps } from "../App";
import { socketIo } from "../lib/api";

interface ChatProps {
    ip: string;
	messages: MessagesProps | undefined;
	setMessages: React.Dispatch<React.SetStateAction<MessagesProps | undefined>>;
}

export function Chat({ ip, messages, setMessages }: ChatProps) {

	useEffect(() => {
		api.get(`/messages/${ip}`).then(response => {
			setMessages(response.data);
		});
		socketIo.on("update-messages", () => {
			api.get(`/messages/${ip}`).then(response => {
				setMessages(response.data);
			});
		});
	}, []);

	return (
		<div className="flex flex-col gap-5">
			{messages && messages.map(message => {
				return (
					<MessageBox
						key={message.id}
						sendByUser={message.by === ip}
						message={message.content}
						createdAt={message.created_at}
					/>
				);
			})}
		</div>
	);
}