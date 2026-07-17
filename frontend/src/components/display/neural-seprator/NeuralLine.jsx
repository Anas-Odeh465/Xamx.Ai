import { useScreenSize } from "../../../hooks/layouts/useScreenSize";
import NeuralCanvas from "../hero/NeuralNetworkCanvas";

export function NeauralChatLine(){

        const isSmall = useScreenSize();

    return(
        <div className="relative lg:h-170 h-100 w-full overflow-hidden">
            <NeuralCanvas particleCount={isSmall ? 70 : 120} speed={isSmall ? 0.15 : 0.25} lineDistance={isSmall ? 90 : 220} particleColor="rgba(148,163,184,0.18)" lineColor="148,163,184"/>
        </div>
    );
}