import { generatedCode, GeneratingPipelines } from "../../data/data";
import { useEffect, useState, useRef } from "react";

export default function useCoder(){

    const [isTypingFinished, setIsTypingFinished] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [activeCopy, setActiveCopy] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [codeChunks, setCodeChunks] = useState("");
    const [active, setActive] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSection = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(currentSection);
                }
            },
            { threshold: 0.2, rootMargin: "-50px" }
        );
        if (currentSection) {
            observer.observe(currentSection);
        }
        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);
  
    useEffect(() => {

        if(!isVisible) return;

        if(isCompleted){
            let charIndex = 0;

            const interval = setInterval(() => {

                setCodeChunks(generatedCode.slice(0, charIndex));
                setIsTypingFinished(false);
                charIndex++;
                
                if(charIndex > generatedCode.length){
                    clearInterval(interval);
                    setIsTypingFinished(true);
                }
                
            }, 5);

            return () => clearInterval(interval);
        }

        if(active >= GeneratingPipelines.length - 1){
            const timeout = setTimeout(() => {
                setIsCompleted(true);
            }, 2000);

            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setActive(prev => prev + 1);
        }, 2500);

        return () => clearTimeout(timeout);
            
    }, [active, isCompleted, isVisible]);

    const handleRefresh = () => {
        if(isCompleted && isTypingFinished){
            setActive(0);
            setIsCompleted(false);
            setIsTypingFinished(false);
            setCodeChunks("");
        }
    }

    const handleCopy = () => {
        if(isCompleted){
            navigator.clipboard.writeText(codeChunks);
            setTimeout(() => {
                setActiveCopy(false);
            }, 2000);
            setActiveCopy(true);
        }
    };

    return { isCompleted, activeCopy, codeChunks, active, sectionRef, isTypingFinished, handleCopy, handleRefresh };
}