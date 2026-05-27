import { homeRoute } from "./HomeRouter";

export default function Home(){
    return(
        <div className="">
            {homeRoute.map((item) => (
                <item.Component key={item.id} />
            ))} 
            <div className="min-h-screen flex flex-col gap-5 w-full justify-center">
                <h1 className="text-4xl font-bold text-center">Welcome to Xamx.Ai</h1>
                <p className="text-center text-gray-600">Explore the world of AI with our cutting-edge models and tools.</p>
                
            </div>
        </div>
    );
}