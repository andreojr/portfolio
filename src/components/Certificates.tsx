import { HandPointing } from "@phosphor-icons/react";

import dankicode from "../assets/certificates/dankicode.jpg";
import alura_http from "../assets/certificates/alura_http.jpg";
import alura_git from "../assets/certificates/alura_git.jpg";
import alura_ux from "../assets/certificates/alura_ux.jpg";
import alura_node_api from "../assets/certificates/alura_node_api.jpg";
import alura_node_express_mongo from "../assets/certificates/alura_node_express_mongo.jpg";
import alura_node_mysql from "../assets/certificates/alura_node_mysql.jpg";
import alura_node_stream_repositorio from "../assets/certificates/alura_node_stream_repositorio.jpg";
import alura_node_auth_tokens from "../assets/certificates/alura_node_auth_tokens.jpg";
import alura_node_refresh_token from "../assets/certificates/alura_node_refresh_token.jpg";
import alura_dart_oo from "../assets/certificates/alura_dart_oo.png";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { useState } from "react";
import clsx from "clsx";

interface CertificatesProps {
    lang: "pt" | "en";
}

export function Certificates({ lang }: CertificatesProps) {
	const [untouch, setUntouch] = useState(true);
	const [currentCertificate, setCurrentCertificate] = useState(dankicode);
	const certificatesList = [
		dankicode,
		alura_ux,
		alura_http,
		alura_git,
		alura_node_api,
		alura_node_express_mongo,
		alura_node_mysql,
		alura_node_stream_repositorio,
		alura_node_auth_tokens,
		alura_node_refresh_token,
		alura_dart_oo,
	];

	return (
		<div className="w-full lg:w-1/2 lg:-mt-52">
			<div className="relative">
				<img className="aspect-certificate" src={currentCertificate} alt={`certificate_${currentCertificate}`} />
				{untouch && <div className="w-full h-full bg-black/80 text-md lg:text-2xl absolute top-0 left-0 text-white flex flex-col items-center justify-center">
					<HandPointing size={52} />
					<span className="w-3/5 leading-tight mt-2 font-bold text-center">
						{lang === "pt" && "Clique em um certificado para ampliá-lo."}
						{lang === "en" && "Click on any certificate to zoom it."}
					</span>
				</div>}
			</div>
			<ScrollArea.Root className="h-[19rem] lg:h-[29rem] overflow-hidden mt-5">
				<ScrollArea.Viewport className="w-full h-full bg-amber-300 rounded-xl">
					<div className="grid grid-cols-3 grid-flow-row gap-3 my-5 mx-5">
						{certificatesList.map((certificate) => (
							<img
								key={certificate}
								src={certificate}
								alt={`certificate_${certificate}`}
								className={clsx("cursor-pointer hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] transition-all", {
									"opacity-50 hover:drop-shadow-none": currentCertificate === certificate,
								})}
								onClick={() => {
									if (untouch) setUntouch(false);

									if (currentCertificate !== certificate)
										setCurrentCertificate(certificate);
								}}
							/>
						))}
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
	);
}