type abilitiesListProps = {
    field: {
        pt: string;
        en: string;
    }
    abilities: {
        ability: {
            pt: string,
            en: string,
        }
        level: {
            pt: "Avançado" | "Intermediário" | "Básico",
            en: "Advanced" | "Intermediary" | "Basic",
        },
        color: string,
    }[];
}[];

export const abilitiesList: abilitiesListProps = [
    {
        field: {
            pt: "Linguagens de Programação",
            en: "Programming Languages",
        },
        abilities: [
            {
                ability: {
                    pt: "JavaScript",
                    en: "JavaScript",
                },
                level: {
                    pt: "Avançado",
                    en: "Advanced",
                },
                color: "",
            },
            {
                ability: {
                    pt: "TypeScript",
                    en: "TypeScript",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
            {
                ability: {
                    pt: "Python",
                    en: "Python",
                },
                level: {
                    pt: "Básico",
                    en: "Basic",
                },
                color: "",
            },
            {
                ability: {
                    pt: "PHP",
                    en: "PHP",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
            {
                ability: {
                    pt: "Programação Orientada a Objetos",
                    en: "Object Oriented Programming",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
        ],
    },
    {
        field: {
            pt: "Front-end Web",
            en: "Front-end Web",
        },
        abilities: [
            {
                ability: {
                    pt: "HTML/CSS",
                    en: "HTML/CSS",
                },
                level: {
                    pt: "Avançado",
                    en: "Advanced",
                },
                color: "",
            },
            {
                ability: {
                    pt: "ReactJS",
                    en: "ReactJS",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
        ],
    },
    {
        field: {
            pt: "Back-end",
            en: "Back-end",
        },
        abilities: [
            {
                ability: {
                    pt: "NodeJS",
                    en: "NodeJS",
                },
                level: {
                    pt: "Avançado",
                    en: "Advanced",
                },
                color: "",
            },
            {
                ability: {
                    pt: "PHP",
                    en: "PHP",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
        ],
    },
    {
        field: {
            pt: "Aplicativos Móveis",
            en: "Mobile",
        },
        abilities: [
            {
                ability: {
                    pt: "React Native",
                    en: "React Native",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            }
        ]
    },
    {
        field: {
            pt: "Banco de Dados",
            en: "Database",
        },
        abilities: [
            {
                ability: {
                    pt: "Teoria Relacional",
                    en: "Relational Teory",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
            {
                ability: {
                    pt: "PostgreSQL",
                    en: "PostgreSQL",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
            {
                ability: {
                    pt: "MySQL",
                    en: "MySQL",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
            {
                ability: {
                    pt: "MongoDB",
                    en: "MongoDB",
                },
                level: {
                    pt: "Básico",
                    en: "Basic",
                },
                color: "",
            },
        ]
    },
    {
        field: {
            pt: "Outras",
            en: "Other",
        },
        abilities: [
            {
                ability: {
                    pt: "UX/UI",
                    en: "UX/UI",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
            {
                ability: {
                    pt: "Excel",
                    en: "Excel",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
            {
                ability: {
                    pt: "Figma",
                    en: "Figma",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
            {
                ability: {
                    pt: "Adobe Illustrator",
                    en: "Adobe Illustrator",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
            {
                ability: {
                    pt: "Adobe After Effects",
                    en: "Adobe After Effects",
                },
                level: {
                    pt: "Intermediário",
                    en: "Intermediary",
                },
                color: "",
            },
        ]
    },
    {
        field: {
            pt: "Soft Skills",
            en: "Soft Skills",
        },
        abilities: [
            {
                ability: {
                    pt: "Trabalho em Equipe",
                    en: "Team Work",
                },
                level: {
                    pt: "Avançado",
                    en: "Advanced"
                },
                color: "",
            },
            {
                ability: {
                    pt: "Comprometimento",
                    en: "Commitment",
                },
                level: {
                    pt: "Avançado",
                    en: "Advanced"
                },
                color: "",
            },
            {
                ability: {
                    pt: "Proatividade",
                    en: "Proactivity",
                },
                level: {
                    pt: "Avançado",
                    en: "Advanced",
                },
                color: "",
            },
        ]
    }
];