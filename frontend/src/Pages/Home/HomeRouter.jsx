import PlayGroundChat from "../../components/display/playGround/playGroundChat";
import FeatureSection from "../../components/display/features/FeatureSection";
import HeroSection from "../../components/display/hero/HeroSection";
import ApiPlatform from "../../components/display/api/ApiPlatform";
import Coder from "../../components/display/code/Coder";
import Navbar from "../../layouts/navigation/Navbar";
import Footer from "../../layouts/footer/Footer";
import NewsBar from "../../ui/NewsBar";

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