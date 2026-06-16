import {ChevronDown, TerminalIcon, Code2Icon, Sparkles, Smartphone, Blocks, MenuIcon, XIcon, ArrowUpRight, LogIn, UserRound, Zap, StarsIcon, PlugZap, Radical, AtomIcon, FlaskConical,
    Dna, BriefcaseBusiness, RefreshCw, LoaderCircle, Check, ShieldCheck, WandSparkles, Brain, CopyIcon, CheckCheckIcon, Workflow} from "lucide-react";
import {FaXTwitter, FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaDiscord, FaFacebookF} from "react-icons/fa6";
import XamxAiLogo from "../assets/Logo/Xamx.Ai - Black.png";

// News icons

export const newsBarIcons = [XIcon, ArrowUpRight, StarsIcon]

// -------------------------------------------

// XamxAi Navigation links & icons

export const navLinks = [
    {name: "PLATFORM", href: "#PLATFORM", style: "flex flex-row justify-center items-center gap-1 cursor-pointer", icon: <ChevronDown className="w-3 h-3"/>},
    {name: "PRICE", href: "#PRICE", style: "nav-link-animated-underline hover:text-gray-600", icon: null},
    {name: "LEARN", href: "#LEARN", style: "nav-link-animated-underline hover:text-gray-600", icon: null},
    {name: "LOGIN", href: "/login", style: "border-1 py-1.5 px-3 transition-colors duration-200 border-gray-200 hover:bg-gray-100", icon: null},
    {name: "ACCESS NOW", href: "#ACCESS-NOW", style: "border-1 py-1.5 px-3 transition-colors duration-200 border-black bg-black tracking-wider text-white hover:bg-gray-800 hover:border-gray-800", icon: null}
]

export const platformMenu = [
    {name: "CLI", description: "AI in your command line", href: "#CLI", icon: <TerminalIcon className="w-4 h-4"/>},
    {name: "IDE", description: "AI with your code editor", href: "#IDE", icon: <Code2Icon className="w-4 h-4"/>},
    {name: "Science", description: "Powerful Ai Models Customized for science", href: "#Science", icon: <AtomIcon className="w-4 h-4"/>},
    {name: "API", description: "Frontier, Models + one line link", href: "#API", icon: <Sparkles className="w-4 h-4"/>},
    {name: "MOBILE", description: "Ease to sniping quickly", href: "#MOBILE", icon: <Smartphone className="w-4 h-4"/>},
    {name: "Builder", description: "Projects builder and editor", href: "#Builder", icon: <Blocks className="w-4 h-4"/>}
]

export const mainMenuNavLinksIcon = [<MenuIcon />, <XIcon />]

// -------------------------------------------

// Hero Section & icons

export const leftSectionHeading = [
    {content: "Code, Math, Physics,", style: "2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-2xl", icon: null},
    {content: "Chemistry, Biology,", style: "2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-xl", icon: null},
    {content: "Xamx.Ai", style: "2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-lg", icon: null},
]

export const leftAndRightSectionCTA = [
    <LogIn className="md:w-5 md:h-5 w-4 h-4"/>, 
    <ArrowUpRight className="md:w-4 md:h-4 w-4 h-4"/>, 
    <UserRound className="md:w-6 md:h-6 w-4 h-4 text-gray-700"/>, 
    <Zap className="md:w-6 md:h-6 w-4 h-4 text-gray-700"/>, 
]

// -------------------------------------------

// Feature Section & icons

export const FeatureSectionCards = [
    {
        Heading: "APIs", 
        icon: PlugZap, 
        description: "Integrate intelligent APIs into your workflow.",
        button: "Open Workspace",
        kit: 'no'
    },
    {
        Heading: "Enterprise", 
        icon: BriefcaseBusiness, 
        description: "Scalable AI infrastructure for organizations.",
        button: "Scale it",
        kit: 'no'
    }
]

export const scienceModels = [
    {
        icon: Radical,
        name: 'Quorex',
        id: 'Quorex',
        subject: 'Mathematics',
        prompts: [
            "What is the integral of sin(x)?",
            "Solve the equation x^2 - 5x + 6 = 0.",
            "What is the derivative of e^(2x)?",
        ],
        response: [
            "The integral of sin(x) is -cos(x) + C, where C is the constant of integration.",
            "The solutions to the equation x^2 - 5x + 6 = 0 are x = 2 and x = 3.",
            "The derivative of e^(2x) is 2e^(2x).",
        ]
    },
    {
        icon: AtomIcon,
        name: 'Veltron',
        id: 'Veltron',
        subject: 'Physics',
        prompts: [
            "What is the formula for kinetic energy?",
            "Explain the concept of relativity.",
            "What is the speed of light in a vacuum?",
        ],
        response: [
            "The formula for kinetic energy is KE = 0.5 * m * v^2, where m is mass and v is velocity.",
            "Relativity is a theory in physics that describes the relationship between space and time. It consists of two main theories: special relativity, which deals with objects moving at constant speeds, and general relativity, which describes gravity as the curvature of spacetime caused by mass and energy.",
            "The speed of light in a vacuum is approximately 299,792 kilometers per second (km/s) or about 186,282 miles per second (mi/s).",
        ]
    },
    {
        icon: FlaskConical,
        name: 'Ionara',
        id: 'Ionara',
        subject: 'Chemistry',
        prompts: [
            "What is the chemical formula for water?",
            "Explain the concept of pH.",
            "What is the atomic number of carbon?",
        ],
        response: [
            "The chemical formula for water is H2O, which indicates that each molecule of water consists of two hydrogen atoms and one oxygen atom.",
            "pH is a measure of the acidity or basicity of a solution. It is defined as the negative logarithm of the hydrogen ion concentration. A pH value less than 7 indicates an acidic solution, a pH value of 7 indicates a neutral solution, and a pH value greater than 7 indicates a basic (alkaline) solution.",
            "The atomic number of carbon is 6, which means that carbon has 6 protons in its nucleus.",
        ]
    },
    {
        icon: Dna,
        name: 'Cellox',
        id: 'Cellox',
        subject: 'Biology',
        prompts: [
            "What is the structure of DNA?",
            "Explain the process of photosynthesis.",
            "What is the function of mitochondria in a cell?",
        ],
        response: [
            "DNA (deoxyribonucleic acid) is a double helix structure composed of two strands of nucleotides. Each nucleotide consists of a sugar molecule, a phosphate group, and a nitrogenous base. The four nitrogenous bases are adenine (A), thymine (T), cytosine (C), and guanine (G). The strands are held together by hydrogen bonds between complementary bases: A pairs with T, and C pairs with G.",
            "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy stored in glucose. It occurs in the chloroplasts of plant cells and involves two main stages: the light-dependent reactions, which capture light energy to produce ATP and NADPH, and the Calvin cycle (light-independent reactions), which uses ATP and NADPH to synthesize glucose from carbon dioxide.",
            "Mitochondria are organelles found in eukaryotic cells that are often referred to as the 'powerhouses' of the cell. Their primary function is to generate adenosine triphosphate (ATP), which is the main energy currency of the cell. Mitochondria also play a role in other cellular processes such as apoptosis (programmed cell death) and calcium signaling.",
        ]
    },
]

export const scienceAsk = [
    <ArrowUpRight className="md:w-4 md:h-4 w-3 h-3 ml-2 text-white"/>, 
    RefreshCw, 
    <LoaderCircle className="md:w-4 md:h-4 w-3 h-3 ml-2 text-black"/>, 
]

// -------------------------------------------

// Coder Section & icons

export const code= [
    Code2Icon, LoaderCircle, Check, RefreshCw, CopyIcon, CheckCheckIcon
]

export const GeneratingPipelines = [
    {
        name: "Prompt",
        icon: Sparkles,
        operations: [
            "Analyzing prompt",
            "Intent recognition",
            "Context reading",
            "Context analysis",
        ]
    }, 
    {
        name: "Thinking",
        icon: Brain,
        operations: [
            "Contextual understanding",
            "Knowledge retrieval",
            "Response planning",
            "Logical reasoning",
        ]
    },
    {
        name: "Generating",
        icon: WandSparkles,
        operations: [
            "Generating response",
            "Generating code",
            "Structuring output",
            "Streaming tokens",
        ]
    },
    {
        name: "Testing",
        icon: FlaskConical,
        operations: [
            "Code execution",
            "Debugging",
            "Error detection",
            "Output analysis",
        ]
    },
    {
        name: "Finalizing",
        icon: ShieldCheck,
        operations: [
            "Optimizing response",
            "Formatting output",
            "Final validation",
            "Streaming completed",
        ]
    }
]


   export const generatedCode = `    // npm install xamxai
    // npm install express dotenv
    // From the .env XAMX_AI_API_KEY=your_api_key_here
    
    import XamxAI from "xamxai";
    import express from "express";
    import dotenv from "dotenv";

    dotenv.config();

    const client = new XamxAI();

    const app = express();

    app.get("/api/chat", async (req, res) => {
        const client = new XamxAI({
            apiKey: process.env.XAMX_AI_API_KEY
        });

        const response = await client.generate({
            model: "vibex-code",
            prompt: "Generate React dashboard"
        });

        console.log(response.output);
    });

    app.listen(3000);`;


// -------------------------------------------

// Xamx Ai - Interactive Playground & icons
    
export const placeholders = [
  "Help me build a React dashboard",
  "Explain quantum physics",
  "Generate a Node.js API",
  "Solve a math equation",
  "Teach me machine learning",
  "Write a python script"
];

export const promptsList = [
  "Search with Xamx Ai",
  "Stories",
  "API platform",
  "Research",
  "Talk with Xamx Ai",
];


// -------------------------------------------

// Xamx Ai - API Platform & icons

export const apiPlatformSection = [
    {
        icon: XamxAiLogo,
        name: "Xamx AI",
        tag: "_General purpose",
        description: "Use Xamx AI for general-purpose tasks, or switch to specialized models for maximum accuracy and performance."
    },
    {
        icon: AtomIcon,
        name: "Veltron",
        tag: "_Physics",
        description: "Specialized in physics, Veltron provides accurate and detailed responses to physics-related queries, making it an invaluable tool for students, researchers, and enthusiasts alike."
    },
    {
        icon: Dna,
        name: "Cellox",
        tag: "_Biology",
        description: "Tailored for biology, Cellox offers precise and comprehensive answers to biology-related questions, making it an essential resource for students, researchers, and anyone interested in the life sciences."
    },
    {
        icon: FlaskConical,
        name: "Ionara",
        tag: "_Chemistry",
        description: "Designed for chemistry, Ionara delivers accurate and insightful responses to chemistry-related inquiries, making it a valuable asset for students, researchers, and anyone passionate about the chemical sciences."
    },
    {
        icon: Radical,
        name: "Quorex",
        tag: "_Mathematics",
        description: "Focused on mathematics, Quorex provides precise and detailed answers to math-related questions, making it an indispensable tool for students, researchers, and anyone interested in the world of mathematics."
    },
    {
        icon: Workflow,
        name: "OLL",
        tag: "_Universal API",
        description: "OLL (One Line Link) provides a single endpoint to access all models, Here you can seamlessly integrate and utilize the power of Xamx AI's diverse range of models, including Veltron, Cellox, Ionara, Quorex, and more, with consistent performance and ease of use."
    }
]

// -------------------------------------------

// Xamx Ai - Footer & icons

export const FooterContent = [
    {
        Heading: "Services",
        Links: [
            "Models",
            "Scince Workspace",
            "Code Workspace",
            "Enterprise"
        ]
    },
    {
        Heading: "Company",
        Links: [
            "About Us",
            "Careers",
            "Contact Us"
        ]
    },
    {
        Heading: "Resources",
        Links: [
            "Documentation",
            "Tutorials",
            "Community Forum",
            "Blog"
        ]
    },
    {
        Heading: "API Platform",
        Links: [
            "API Reference",
            "Rate Limits",
            "SDKs",
            "Pricing",
        ]
    },
    {
        Heading: "Terms & Policies",
        Links: [
            "Terms of Use and Service",
            "Privacy Policy",
            "Other Policies"
        ]
    }
]

export const socialMediaLinks = [
    {icon: <FaXTwitter />, href: "#"},
    {icon: <FaInstagram />, href: "#"},
    {icon: <FaFacebookF />, href: "#"},
    {icon: <FaYoutube />, href: "#"},
    {icon: <FaLinkedin />, href: "#"},
    {icon: <FaGithub />, href: "#"},
    {icon: <FaTiktok />, href: "#"},
    {icon: <FaDiscord />, href: "#"},
]

