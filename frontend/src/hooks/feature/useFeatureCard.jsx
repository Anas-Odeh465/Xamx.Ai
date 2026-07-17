import { useState, useEffect, useRef } from "react";

export default function useTyping(texts, delay = 0) {

    const [isTypingFinished, setIsTypingFinished] = useState(false);
    const [showRefresh, setShowRefresh] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [response, setResponse] = useState("");
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSection = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.unobserve(currentSection);
                }
            },
            { threshold: 0.4, rootMargin: "-100px"},
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

        let timeout;
        let interval;
        let charIndex = 0;
        
        if(!isVisible) return;
        
        const startTyping = () => {

            setShowRefresh(true);
            setIsTypingFinished(false);

            const current = texts[currentIndex];
            charIndex = 0;

            setResponse("");
            interval = setInterval(() => {
                    setResponse(current.slice(0, ++charIndex));
                    if (charIndex >= current.length) {
                        clearInterval(interval);
                        timeout = setTimeout(() => {

                            // textIndex++; // auto refresh
                            // setCurrentIndex(textIndex % texts.length);
                            clearInterval(interval);
                            setIsTypingFinished(true);

                        }, 2500);
                    }
                }, 
            10);
        };

        const init = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(init);
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [currentIndex, texts, delay, isVisible]);

    const refresh = () => {

        let randomIndex;

        do {
           randomIndex =  Math.floor(Math.random() * texts.length);

        } while (randomIndex === currentIndex);

        setCurrentIndex(randomIndex);
    }

    return { response, currentIndex, refresh, showRefresh, sectionRef, isTypingFinished };
}