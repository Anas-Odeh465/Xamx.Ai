import { apiPlatformSection } from "../../../data/data";
import { Boxes, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ApiPlatform(){
    return(
        <div className="w-full h-full overflow-x-hidden flex flex-col justify-center items-center">
            <div className="group flex justify-center items-baseline gap-3 backdrop-blur-xs border my-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:border-gray-300  border-gray-200 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <Boxes className="w-6 h-6 text-black"/>
                <h1 className="nav-link-font-type text-3xl">API</h1>
            </div> 
            <div className="w-full h-full max-w-282 border border-gray-200 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="flex flex-col items-start gap-8 h-full">
                    {/* Heading */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-black"></div>
                            <div className="text-sm platform-link-font-type-name text-gray-500 font-semibold tracking-widest">Xamx.Ai API</div>
                        </div>
                        <h2 className="text-6xl platform-link-font-type-name font-bold">All models and your work, study and research start from a single endpoint.</h2>
                    </div>
                    {/* Body */}
                    <div className="flex flex-col w-full gap-4">
                        {/* Body pargraph*/}
                        <div className="flex flex-col gap-2">
                            <div className="text-gray-600 platform-link-font-type-name text-sm leading-relaxed max-w-250">
                                Xamx API provides a single endpoint to access all models, including XAMX, GPT, CLAUDE, 
                                GROK, GEMINI, DeeBSeeK Models with seamless integration and consistent performance. 
                                Whether you're building applications, Learning, conducting research, or exploring AI 
                                capabilities, Xamx API is your gateway to the future of artificial intelligence. . .                        
                                <Link to="#" className="group/exploreAPI pl-2 platform-link-font-type-name hover:text-black text-nowrap hover:underline">
                                    Explore API Documentation <ArrowUpRight className="hidden group-hover/exploreAPI:inline-block group-hover/exploreAPI:text-black" size={14} />
                                </Link>
                            </div>
                        </div>
                        {/* Body middle line*/}
                        <div className="border-b border-gray-100 w-full my-6"></div>
                        {/* Body models cards*/}
                        <div className="flex flex-wrap gap-2 platform-link-font-type-name ">
                            {apiPlatformSection.map((item) => (
                                <div key={item.name} className="relative flex flex-col gap-6 border border-gray-200 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                                    {item.name === "Xamx AI" ? (
                                        <img src={item.icon} alt="Xamx AI" className="-ml-3 -mt-2 w-13 h-13" />
                                    ) : (
                                        <item.icon className="w-6 h-6 text-gray-500"/>
                                    )}
                                    <div className="flex items-baseline text-2xl font-semibold gap-2">
                                        {item.name}
                                        <p className="text-xs text-gray-400">{item.tag}</p>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed w-full max-w-80">
                                        {item.description}
                                    </p>
                                    <Link to="#" className="flex items-center gap-2 group/GET bg-black hover:bg-black/90 text-sm px-4 py-2 text-white w-fit">
                                        GET STARTED
                                        <ArrowUpRight className="w-4 h-4 transition-all duration-300 transform group-hover/GET:translate-x-0.5 group-hover/GET:-translate-y-0.5"/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}