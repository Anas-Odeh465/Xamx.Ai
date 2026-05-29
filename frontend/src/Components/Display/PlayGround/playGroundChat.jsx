import { usePlayGround } from "../../../Hooks/PlayGround/usePlayGroundChat";
import { NeauralChatLine } from "../Neural-seprator/NeuralLine";
import { placeholders, promptsList } from "../../../Data/data";
import { ArrowUpRight } from "lucide-react";

export default function PlayGroundChat({prompt}) {

    const {sectionRef, isTypingFinished, chatGreeting, textareaRef, input, handleInputChange, handleEnterPress, isAnimating, placeholderIndex, handleSend} = usePlayGround(prompt);

    return (
        <div ref={sectionRef} className="relative lg:h-170 h-full w-full overflow-x-hidden overflow-y-hidden">
            <div className="flex justify-center items-center space-y-6 mt-10 mb-20 z-50">
                <div className="w-full h-full flex flex-col justify-center items-center space-y-10 lg:px-0 px-6">
                    {/* Chat Title */}
                    <div className="nav-link-font-type lg:text-4xl text-2xl">{chatGreeting} {!isTypingFinished && <span className="inline-block">|</span>}</div>
                    {/* Chat Input */}
                    <div className="w-full max-w-208 h-28 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 cursor-text">
                        <div className="relative" onClick={() => textareaRef.current?.focus()}>
                            {/* Input Field */}
                            <textarea 
                                type="text"
                                value={input}
                                ref={textareaRef}
                                onChange={handleInputChange}
                                onKeyDown={handleEnterPress}
                                className="w-full bg-white max-w-190 h-20 overflow-y-auto resize-none outline-none p-2"
                            />
                            {/* Placeholder Text */}
                            {input.trim() === "" && (
                                <div className={`absolute top-2 left-2 placeHolder-font-type text-gray-400 pointer-events-none transition-all duration-500 will-change-transform ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
                                    {placeholders[placeholderIndex]}
                                </div>
                            )}
                            {/* Send Button */}
                            <button onClick={input.trim() !== "" ? handleSend : null} className={`absolute -right-1 bottom-1 p-2 rounded-sm transition-colors duration-200 ${input.trim() !== "" ? 'bg-black hover:bg-gray-600 text-white  cursor-pointer' : 'bg-gray-100 text-gray-400  cursor-auto '}`}>
                                <ArrowUpRight />
                            </button>
                        </div>
                    </div>
                    {/* Prompts Buttons */}
                    <div className="flex flex-wrap justify-center items-center lg:gap-4 gap-2">
                        {promptsList.map((prompt, index) => (
                            <a href={`chat-test?prompt=${encodeURIComponent(prompt)}`} target="_blank" key={index} className="placeHolder-font-type transition-colors duration-300 bg-white hover:bg-gray-100 text-gray-500 border border-gray-300 px-4 py-2  shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                                {prompt}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <NeauralChatLine/>
        </div>
    );
}