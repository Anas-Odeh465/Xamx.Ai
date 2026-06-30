import { scienceAsk, scienceModels } from "../../../data/data";
import useTyping from "../../../Hooks/Feature/useFeatureCard";
import {LoaderCircle} from "lucide-react";

function ModelsCard({model, index}){
    const { response, currentIndex, refresh, showRefresh, sectionRef, isTypingFinished } = useTyping(model.response, index * 600);
    const [AccessIcon, RefreshCw] = scienceAsk;

    return(
        <div  ref={sectionRef} key={index} className="group xl:w-xl lg:w-100 md:w-80 sm:w-sm xs:w-xs w-full space-y-8 border nav-link-font-type border-gray-200 bg-white/20 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:border-gray-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <span className="w-12 h-12 bg-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ">
                <model.icon size={24} />
            </span>
            <h1 className="text-3xl font-bold mt-6">
                {model.name}
                <span className="text-sm text-gray-500 ml-3">{model.subject}</span>
            </h1>
            <div className="text-gray-600 mt-4 leading-relaxed max-w-xl">
                {model.prompts[currentIndex]}
                {showRefresh 
                  && <div className="relative group/refresh inline-block">
                        <RefreshCw onClick={refresh} className="inline-block cursor-pointer hover:text-gray-600 ml-2 text-gray-400" size={18}/>
                        <span className="absolute -bottom-7 -left-3 z-10 px-2 py-1 bg-black text-white pointer-events-none opacity-0 group-hover/refresh:opacity-100 transition-all duration-300 ease-in-out text-xs">
                            Refresh
                        </span>
                  </div>
                  }
            </div>
            <div className="w-full h-px bg-gray-300">
                {/* Separator */}
            </div>
            <div className="mt-4 leading-relaxed max-w-xl h-40 overflow-y-auto overflow-x-hidden">
                {response ? (
                    <p className="text-gray-600">
                        {response} {!isTypingFinished && response && <span className="inline-block animate-pulse">|</span>}
                    </p>
                ) : (
                    <LoaderCircle className="inline-block animate-spin text-gray-500" size={18}/>
                )}
            </div>
                <a href="#" className="flex justify-center items-center group/ask bg-black text-white text-[14px] p-2 tracking-wide hover:bg-gray-600">
                Ask {model.name} 
                <span className="text-gray-400 transition-transform duration-300 group-hover/ask:translate-x-0.5 group-hover/ask:-translate-y-0.5">
                    {AccessIcon}
                </span>
                </a>
        </div>
    );
}

export default function FeatureSection(){
    return(
        <div className="h-full w-full">
            <div className="flex flex-col w-full justify-center items-center space-y-6 lg:px-15 px-5 mt-20">
                {/* Heading title */}
                <div className="flex justify-start">
                    <h1 className="nav-link-font-type text-3xl backdrop-blur-xs border border-gray-200 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">Powerful Ai Models Customized for science</h1>
                </div> 
                {/* Cards */}
                <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center items-start md:gap-22 gap-12 mt-10">
                    {scienceModels.map((model, index) => (
                        <ModelsCard key={index} model={model} index={index} id={model.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}