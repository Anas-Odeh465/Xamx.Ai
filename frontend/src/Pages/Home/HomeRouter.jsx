import Navbar from "../../Layouts/Navbar";
import HeroSection from "../../Components/Display/Hero/HeroSection";
import NewsBar from "../../UI/NewsBar";
import FeatureSection from "../../Components/Display/Features/FeatureSection";
import Coder from "../../Components/Display/code/Coder";

export const homeRoute = [
    { id: 'news', Component: NewsBar },
    { id: 'nav', Component: Navbar },
    { id: 'hero', Component: HeroSection },
    { id: 'features', Component: FeatureSection },
    { id: 'coder', Component: Coder }
];