import Navbar from "../../Layouts/Navbar";
import HeroSection from "../../Components/Display/HeorSection/HeroSection";
import { XIcon, ArrowUpRight, StarsIcon } from "lucide-react";
import { useState } from "react";

export default function Home(){
    const [hideNews, setHideNews] = useState(false);
    return(
        <div>
            {/*  */}
            <div className={`w-full ${hideNews ? 'hidden' : ''} relative h-8 bg-black text-white text-xs flex items-center nav-link-font-type justify-between px-5.5`}>
                <div className="flex items-center gap-3">
                    <StarsIcon className="w-4 h-4 text-white"/>
                    <div className="flex items-center gap-2">
                        <p className="text-black bg-white p-0.5 text-[10px]">New</p> 
                        <p>Xamx X1.2</p>
                        <p className="text-gray-300 md:flex hidden">is now available on Xamx AI. Frontier reasoning, one API.</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center gap-2 group">
                            <span className="tracking-widest text-nowrap">Try it now</span>
                           <ArrowUpRight className="cursor-pointer w-4 h-4 sm:-mr-1 mr-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
                        </a>
                    </div>
                    <XIcon onClick={() => setHideNews(true)} className="cursor-pointer w-4 h-4 sm:-mr-1 mr-3.5"/>
                </div>
            </div>
            <Navbar />
            <HeroSection/>
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="list-disc list-inside text-lg text-gray-600">
                    <li>AI-powered chat</li>
                    <li>Smart suggestions</li>
                    <li>Seamless integration</li>
                </ul>
            </div>
        </div>
    );
}