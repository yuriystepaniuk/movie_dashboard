import React from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Features } from "../components/Features/Features";
import { About } from "../components/About/About";

type LandingProps = {};

export const Landing = (props: LandingProps) => {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <About />
        </>
    );
};