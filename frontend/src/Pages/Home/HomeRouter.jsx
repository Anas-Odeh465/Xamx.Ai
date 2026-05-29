import PlayGroundChat from "../../Components/Display/PlayGround/playGroundChat";
import FeatureSection from "../../Components/Display/Features/FeatureSection";
import HeroSection from "../../Components/Display/Hero/HeroSection";
import Coder from "../../Components/Display/code/Coder";
import Navbar from "../../Layouts/Navbar";
import NewsBar from "../../UI/NewsBar";

export const homeRoute = [
    { id: 'news', Component: NewsBar },
    { id: 'nav', Component: Navbar },
    { id: 'hero', Component: HeroSection },
    { id: 'playground', Component: PlayGroundChat },
    { id: 'features', Component: FeatureSection },
    { id: 'coder', Component: Coder },
];