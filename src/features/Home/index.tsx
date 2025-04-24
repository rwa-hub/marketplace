import React from "react";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Galery";
import { MarketPerformance } from "./components/Marketing";
import { ERC3643Section } from "./components/ERC3643";
import { HeroWallpaper } from "./components/HeroWallpaper";
import { About } from "./components/About";

export const Home: React.FC = () => {
    return (
        <React.Fragment>
            <HeroWallpaper />
            <Hero />
            <Gallery />
            <MarketPerformance />
            <ERC3643Section />
            <About />
        </React.Fragment>
    );
};
