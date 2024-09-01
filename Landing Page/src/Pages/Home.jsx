import React from "react";
import { NavLink } from "react-router-dom"
import SponsorMarquee from "../Components/Sponser-Marque"
import AboutUs from "../Components/About-Us"

import "../index.css";

export const Home = () => {
    return(
        <>
            <div className="Container-Home" id="#home">
                <div className="Home-Right">
                    <p>The Official <br /><span className="Highlight">Competetive Programming</span> <br />Club Of DJSCE.</p>
                    <button className="Toggle-Button"> <NavLink to= "/teams">Our Team</NavLink></button>
                    <button className="Toggle-Button"><NavLink to = "/event">Past Events</NavLink></button>
                </div>
                <div className="Home-Left">
                    <img src="./public./Backgrounds./Home-Page.PNG" alt="" />
                </div>
            </div>
            <SponsorMarquee/>
            <AboutUs/>
        </>
    );
};
