import PlayGroundChat from "../../Components/Display/PlayGround/playGroundChat";
import FeatureSection from "../../Components/Display/Features/FeatureSection";
import HeroSection from "../../Components/Display/Hero/HeroSection";
import ApiPlatform from "../../Components/Display/API/ApiPlatform";
import Coder from "../../Components/Display/code/Coder";
import Navbar from "../../Layouts/Navigation/Navbar";
import NewsBar from "../../UI/NewsBar";
import Footer from "../../Layouts/Footer/Footer";

export const homeRoute = [
    { id: 'news', Component: NewsBar },
    { id: 'nav', Component: Navbar },
    { id: 'hero', Component: HeroSection },
    { id: 'playground', Component: PlayGroundChat },
    { id: 'features', Component: FeatureSection },
    { id: 'coder', Component: Coder },
    { id: 'apiPlatform', Component: ApiPlatform },
    { id: 'footer', Component: Footer },
];