import { useScreenSize } from "../../../Hooks/Layouts/useScreenSize";
import NeuralCanvas from "./NeuralNetworkCanvas";
import { leftSectionHeading, leftAndRightSectionCTA } from "../../../Data/data";

export default function HeroSection() {

  const [LogInIcon, AccessIcon, UserRound, Zap] = leftAndRightSectionCTA;  
  const isSmall = useScreenSize();

  return (
    <section className="relative h-screen  overflow-hidden">
        {/* canvas style bg inset - 0 absoluted */}
        <NeuralCanvas particleCount={isSmall ? 70 : 180} speed={isSmall ? 0.15 : 0.25} lineDistance={isSmall ? 90 : 200} particleColor="rgba(148,163,184,0.18)" lineColor="148,163,184"/>
        {/* The rest of Hero components - content - above canvas style */}
        <div className="relative z-10 h-full flex items-center justify-center xl:-mt-12 -mt-15">
            <div className="flex flex-row  justify-center items-center w-full">
                <div className="flex md:flex-row flex-col justify-between items-center gap-4 w-full mx-15">
                    {/* Left Section */}
                    <div className="flex flex-col justify-center items-center backdrop-blur-xs border xl:space-y-6 space-y-3 border-gray-200 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                        {/* Heading */}
                        <div className="flex flex-col text-left">
                            {leftSectionHeading.map((text, index) => (
                                <h1 key={index} className={`${text.style} font-extrabold nav-link-font-type  text-black`}>{text.content}</h1>
                            ))}
                        </div>
                        {/* Description of content + cta */}
                        <div className="flex flex-col justify-start text-left w-full">
                            <p className="text-gray-600 2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm max-w-3xs 2xl:text-xl xl:text-lg lg:text-md md:text-sm text-[8px] nav-link-font-type leading-relaxed">
                                Build, learn, research, and create with AI-powered tools
                                for code, mathematics, physics, chemistry, biology, APIs, 
                                projects, and modern enterprise workflows.
                            </p>
                            <div className="flex flex-row justify-start items-center  sm:text-xl text-xs gap-8 w-full xl:py-12 py-6">
                                <a href="#" className="group flex items-center gap-2 border md:py-1.5 py-1 md:px-3 px-1 transition-all duration-300 nav-link-font-type tracking-wider border-gray-200 hover:bg-gray-100">
                                    LOGIN 
                                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">{LogInIcon}</span>
                                </a>
                                <a href="#" className="md:w-fit w-full md:text-wrap text-nowrap group flex items-center gap-2 border md:py-1.5 py-1 md:px-3 px-1 transition-all  duration-300 nav-link-font-type border-black bg-black tracking-wider text-white  hover:bg-gray-800 hover:border-gray-800">
                                    ACCESS NOW 
                                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">{AccessIcon}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="flex flex-col justify-center space-y-2 items-center  backdrop-blur-xs border border-gray-200 md:p-4 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ">
                        <a href="#" className="group flex items-center gap-2 sm:text-xl text-lg md:py-1.5 py-1 md:px-3 px-1 transition-all duration-300 nav-link-font-type tracking-wider hover:bg-gray-100">
                            Quick start 
                            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">{AccessIcon}</span>
                        </a>
                        <div className="border-b border-gray-200 w-full"></div>
                        <div className="flex flex-col justify-center items-center p-2 space-y-2">
                            <div className="flex flex-row justify-center items-center gap-2 p-1">
                                <span>{UserRound}</span>
                                <div className="flex flex-col">
                                    <h1 className="sm:text-xl text-lg text-gray-700">Guest mode</h1>
                                    <p className="sm:text-xs text-[10px] text-gray-400 max-w-35.5">Can use Xamx.Ai in limit use</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-2 p-1">
                                <span>{Zap}</span>
                                <div className="flex flex-col">
                                    <h1 className="sm:text-xl text-lg text-gray-700">Quick login</h1>
                                    <p className="sm:text-xs text-[10px] text-gray-400 max-w-35.5">Can skip customize Xamx.Ai use</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
