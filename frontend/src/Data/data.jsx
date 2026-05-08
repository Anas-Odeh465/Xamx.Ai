import {ChevronDown, TerminalIcon, Code2Icon, CloudIcon, Sparkles, Smartphone, Blocks, MenuIcon, XIcon, ArrowUpRight, LogIn, UserRound, Zap} from "lucide-react";

// Quark AI Navigation links & icons

export const navLinks = [
    {name: "PLATFORM", href: "#PLATFORM", style: "flex flex-row justify-center items-center gap-1 cursor-pointer", icon: <ChevronDown className="w-3 h-3"/>},
    {name: "PRICE", href: "#PRICE", style: "nav-link-animated-underline hover:text-gray-600", icon: null},
    {name: "LEARN", href: "#LEARN", style: "nav-link-animated-underline hover:text-gray-600", icon: null},
    {name: "LOGIN", href: "#LOGIN", style: "border-1 py-1.5 px-3 transition-colors duration-200 border-gray-200 hover:bg-gray-100", icon: null},
    {name: "ACCESS NOW", href: "#ACCESS-NOW", style: "border-1 py-1.5 px-3 transition-colors duration-200 border-black bg-black tracking-wider text-white hover:bg-gray-800 hover:border-gray-800", icon: null}
]

export const platformMenu = [
    {name: "CLI", description: "AI in your command line", href: "#CLI", icon: <TerminalIcon className="w-4 h-4"/>},
    {name: "IDE", description: "AI with your code editor", href: "#IDE", icon: <Code2Icon className="w-4 h-4"/>},
    {name: "CLOUD", description: "Keep agent on execution", href: "#CLOUD", icon: <CloudIcon className="w-4 h-4"/>},
    {name: "API", description: "Frontier, Models + one line link", href: "#API", icon: <Sparkles className="w-4 h-4"/>},
    {name: "MOBILE", description: "Ease to sniping code quickly", href: "#MOBILE", icon: <Smartphone className="w-4 h-4"/>},
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
    <LogIn className="md:w-6 md:h-6 w-4 h-4"/>, 
    <ArrowUpRight className="md:w-6 md:h-6 w-4 h-4"/>, 
    <UserRound className="md:w-6 md:h-6 w-4 h-4 text-gray-700"/>, 
    <Zap className="md:w-6 md:h-6 w-4 h-4 text-gray-700"/>, 
]