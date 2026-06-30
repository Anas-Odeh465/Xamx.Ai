import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { code, GeneratingPipelines } from "../../../data/data"
import useCoder from "../../../Hooks/code/useCoder";

export default function Coder(){

    const { isCompleted, activeCopy, codeChunks, active, sectionRef, isTypingFinished, handleCopy, handleRefresh} = useCoder();
    const [CodeIcon, LoaderCircle, Check, RefreshCw, CopyIcon, CheckCheckIcon] = code;
    
    return(
        <div className="h-full w-full overflow-x-hidden">
            <div className="flex flex-col w-full justify-center items-center mt-30 mb-30 space-y-6">
                {/* Heading title */}
                <div className="group flex justify-center items-baseline  backdrop-blur-xs border  transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:border-gray-300  border-gray-200 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                    <h1 className="nav-link-font-type text-3xl">Vibex</h1>
                    <div className=" group-hover:scale-110 transition-all duration-300 flex items-center gap-1 ml-2 text-gray-700">
                        <CodeIcon size={14}/>
                        <p className="nav-link-font-type text-xs">coder</p>
                    </div>
                </div> 
                {/* Vibex Card */}
                <div ref={sectionRef} className="relative w-full max-w-308 lg:h-408 h-458 bg-black p-14 text-white px-4 sm:px-6 md:px-8 xl:px-14">
                    <div className="absolute inset-0 opacity-[0.20] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[40px_40px]"/>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 md:md:w-175 h-62.5 md:h-87.5 bg-white/5 blur-[120px]"/>
                    <div className="relative z-10 flex flex-col gap-24">
                        {GeneratingPipelines.map((process, processIndex) => {
                            const isActive = processIndex <= active;

                            return(
                                <div key={processIndex} className="relative flex flex-col lg:flex-row lg:items-start items-center lg:space-y-0 space-y-6" >
                                    <div className={`relative w-full lg:w-auto lg:max-w-100 max-w-72 flex justify-center items-center z-50 gap-2 px-6 py-3 transition-all duration-300 ease-in-out border ${processIndex === active && !isCompleted ? "animate-pulse" : " "} ${isActive ? "border-white bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.25)]" : "border-white/30 text-white/30"}`}>
                                        <process.icon size={15} />
                                        <p className="font-medium md:text-lg text-sm">
                                          {process.name}
                                        </p>
                                        {isCompleted && process.name === "Finalizing" ? (
                                            <div className={`absolute top-10 lg:left-1/2 transition-all duration-300 transform ${isCompleted ? "bg-white w-px lg:h-24.75 h-44" : "bg-white/20 w-px h-0"}`}/>
                                        ) : null}
                                    </div>
                                    <div className="relative flex-1 mt-6">
                                        <div className={`hidden lg:block relative h-px w-full transition-all duration-700 ${isActive ? "bg-white" : "bg-white/20"}`}/>
                                        <div className="relative">
                                            <div className={`lg:flex hidden absolute top-1/2 -translate-y-1/2 right-0  h-3 w-3 transition-all duration-300 ${isActive ? "bg-white" : "bg-white/3 backdrop-blur-xl"}`}/>
                                            <div className={`absolute transition-all duration-100 right-1 transform ${isActive && processIndex < active  ? "bg-white w-px lg:top-0 -top-12 lg:h-36 h-36" : " bg-white/20 w-px h-0"}`}/>
                                        </div>
                                        <div className="absolute lg:-top-5 -top-7 left-1/2 -translate-x-1/2 flex flex-wrap  items-center  lg:justify-center lg:mt-0 -mt-6 lg:ml-0 ml-5 text-white w-full lg:gap-4">
                                            {process.operations.map((operation, index) => (
                                                <div key={index} className="lg:mt-0 mt-5 lg:mr-0 mr-2 flex items-center  gap-2 whitespace-nowrap transition-all duration-500">
                                                    {isActive ? 
                                                    (processIndex === active && !isCompleted ? (<LoaderCircle size={12} className="animate-spin"/>) : (<Check size={12} />)
                                                    ) : 
                                                    <div className="w-3 h-3 rounded-full border border-white/30"/>
                                                    }
                                                    <p className={`text-[9px] lg:text-xs ${isActive ? "text-white" : "text-white/30"}`}>{operation}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={`relative transition-all duration-500 lg:mt-20 mt-30 bottom-0 left-1/2 -translate-x-1/2 w-full border ${isCompleted ? "border-white/90" : "border-white/30"} bg-white/3 backdrop-blur-xl p-8 z-20`}>
                        <div className={`absolute -top-1.5 lg:left-18.75 left-1/2 -translate-x-1/2 h-3 w-3 transition-all duration-300 ${isCompleted ? "bg-white" : "bg-[#080808]"}`}/>
                        <div className="sticky top-0 left-0 flex justify-between items-center w-full bg-[#080808] p-4 mb-6 gap-2 z-50">
                            <button onClick={handleCopy} className={`transition-all duration-300 ${isCompleted ? "text-white  cursor-pointer" : "text-white/30 cursor-not-allowed"}`}>
                                {activeCopy ? 
                                    <CheckCheckIcon size={18} /> 
                                    : 
                                    <div className="flex justify-center items-center group/copy rounded-sm hover:bg-white/10 w-8 h-8">
                                        <CopyIcon size={18} />
                                        {isCompleted ? 
                                            <div className="absolute top-14 opacity-0 group-hover/copy:opacity-100 transition-opacity pointer-events-none border border-white/30 duration-300 text-xs bg-white/10 text-white px-3 py-1.5 rounded">
                                                copy
                                            </div>
                                            : 
                                            " "
                                        }
                                        
                                    </div>
                                }
                            </button>
                            <div className={`text-sm gap-6 flex items-center font-medium ${isCompleted ? "text-white" : "text-white/30"}`}>
                                {isCompleted ? "JavaScript" : ""} 
                                <CodeIcon size={20} />
                            </div>
                        </div>
                        {isCompleted ? (
                            <SyntaxHighlighter
                                language="javascript"
                                style={vscDarkPlus}
                                showLineNumbers
                                wrapLongLines
                                useInlineStyles={true}
                                lineNumberStyle={{
                                    color: "rgba(255,255,255,0.25)",
                                    minWidth: "2.5em",
                                    paddingRight: "1em",
                                }}
                                customStyle={{
                                    background: "transparent",
                                    padding: 0,
                                    margin: 0,
                                    fontSize: "15px",
                                    lineHeight: "2",
                                }}
                                >
                                {codeChunks + (!isTypingFinished ? " |" : "")}
                            </SyntaxHighlighter>
                        ): null}      
                    </div>
                    <div className={`w-full flex justify-center h-auto items-center my-10 `}>
                        <button onClick={handleRefresh} className={`flex items-center w-50 gap-2 mt-10 justify-center  border font-bold px-6 py-3 z-20  ${isCompleted && isTypingFinished ? " cursor-pointer bg-white text-black hover:bg-white/90" : "cursor-not-allowed border-white/30 text-white/30"}`}>
                            {isCompleted && isTypingFinished ? (
                              <RefreshCw
                                size={15}
                              />
                            ) : (
                                <LoaderCircle
                                    size={15}
                                    className="animate-spin"
                                />
                            )}
                           {isCompleted && isTypingFinished ? "Restart" : ""}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}