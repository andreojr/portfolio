import clsx from "clsx";
import dayjs from "dayjs";

interface MessageBoxProps {
    sendByUser?: boolean;
    message: string;
	createdAt: string;
}

export function MessageBox({ sendByUser = false, message, createdAt }: MessageBoxProps) {
	return (
		<div className={clsx("w-10/12 lg:w-1/2  p-5 rounded-xl text-base relative flex flex-col", {
			"self-end bg-slate-300 rounded-br-none text-dark": sendByUser,
			"bg-slate-800 rounded-bl-none text-white": !sendByUser,
		})}>
			<span dangerouslySetInnerHTML={{__html: message}} />
			<span className={clsx("self-end text-xs", {
				"text-dark/40": sendByUser,
				"text-white/40": !sendByUser,
			})}>{dayjs(createdAt).format("DD MMM HH:mm").toString()}</span>
		</div>
	);
}