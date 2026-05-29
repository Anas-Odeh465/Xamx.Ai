import { homeRoute } from "./HomeRouter";

export default function Home(){
    return(
        <div className="">
            {homeRoute.map((item) => (
                <item.Component key={item.id} />
            ))} 
        </div>
    );
}