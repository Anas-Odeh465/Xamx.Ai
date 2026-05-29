import { useState, useEffect, useRef } from "react";
import { placeholders } from "../../Data/data";

export function usePlayGround(prompt){
    
    const [isTypingFinished, setIsTypingFinished] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [input, setInput] = useState(() => prompt || "");
    const [isVisible, setIsVisible] = useState(false);
    const [chatGreeting, setChatGreeting] = useState("");
    const Greeting = "How can I help you?";
    const textareaRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSection = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.unobserve(currentSection);
                }
            }, { threshold: 0.2, rootMargin: "-50px" },
        );
        
        if(currentSection){
            observer.observe(currentSection);
        }

        return () => {
            if(currentSection){
                observer.unobserve(currentSection);
            }
        }

    }, []);

    useEffect(() => {

        if(!isVisible) return;

        if(isTypingFinished){
            const interval = setInterval(() => {

                setIsAnimating(true);
                
                setTimeout(() => {

                    setPlaceholderIndex(prev => prev === placeholders.length - 1 ? 0 : prev + 1);

                    setIsAnimating(false);

                }, 500);

            }, 3500);

            return () => clearInterval(interval);
        }

    }, [isVisible, isTypingFinished]);

    useEffect(() => {

        if(!isVisible) return;

        let charIndex = 0;
        
        const interval = setInterval(() => {

            setChatGreeting(Greeting.slice(0, charIndex));
            setIsTypingFinished(false);
            charIndex++;
            
            if(charIndex > Greeting.length){
                clearInterval(interval);
                setIsTypingFinished(true);
            }
            
        }, 15);

        return () => clearInterval(interval);
    }, [isVisible]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSend = () => {
        setInput("");
        window.open(
            `/chat-test?prompt=${encodeURIComponent(input)}`,
            "_blank"
        );
    };

    const handleEnterPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    }

    return {sectionRef, isTypingFinished, chatGreeting, textareaRef, input, handleInputChange, handleEnterPress, isAnimating, placeholderIndex, handleSend};
}