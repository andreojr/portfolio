import sophia_ui from "../assets/projects/sophia_ui.svg";
import cowins_ui from "../assets/projects/cowins_ui.svg";
import next_ui from "../assets/projects/next_ui.svg";
import pipe_ui from "../assets/projects/pipe_ui.svg";
import mayday_ui from "../assets/projects/mayday_ui.svg";

type projectsListProps = {
    title: string;
    description: {
        pt: string;
        en: string;
    };
    image: string;
}[];

export const projectsList: projectsListProps = [
    {
        title: "Sophia",
        description: {
            pt: "App de filosofia",
            en: "Phylosophy App",
        },
        image: sophia_ui,
    },
    {
        title: "Cowins",
        description: {
            pt: "App de vaquinhas",
            en: "Crowdfunding App",
        },
        image: cowins_ui,
    },
    {
        title: "Next",
        description: {
            pt: "Serviço de streaming baseado em universos cinematográficos/televisivos",
            en: "Streaming service based on cinematic/television universes",
        },
        image: next_ui,
    },
    {
        title: "PIPE",
        description: {
            pt: "App de gerenciamento de estudos",
            en: "Study management app",
        },
        image: pipe_ui,
    },
    {
        title: "MayDay",
        description: {
            pt: "App de soluções para veículos automotores",
            en: "Automotive vehicle solutions app",
        },
        image: mayday_ui,
    },
];