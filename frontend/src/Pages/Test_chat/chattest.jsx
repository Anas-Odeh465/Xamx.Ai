import PlayGroundChat from "../../Components/Display/PlayGround/playGroundChat";
import { useSearchParams } from "react-router-dom";

export default function ChatTest() {

    const [promptParam] = useSearchParams();
    const prompt = promptParam.get("prompt");

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full flex justify-center items-center ">
                <PlayGroundChat prompt={prompt}/>
            </div>
        </div>
    );
}