import React from "react";
import { NavLink } from "react-router-dom"
import "./About-Us.css"

const AboutUs = () => {
    return(
        <>
            <div className="About-Us-Style">
                <h2 className="Title-Highlight"> About Codestars  </h2>
                <p> DJS CodeStars is the official Competitive Programming (CP) Club of Dwarkadas J. Sanghvi College of Engineering, renowned as one of India's largest and most active CP communities. Our club is dedicated to fostering a strong culture of competitive programming, helping students enhance their problem-solving skills, and preparing them for various national and international coding competitions.
                <br />
                <br />
                At DJS CodeStars, we believe that the discipline and analytical thinking required in competitive programming are not just skills for coding but are essential life skills. Our motto, "AC on CodeForces, AC in Life," reflects our commitment to excellence both in the digital arena and in the broader world. We provide members with numerous opportunities to participate in contests, workshops, and training sessions, ensuring that every member, from beginners to advanced programmers, can grow and excel.
                <br />
                <br />
                Join us and become a part of the rich legacy of DJS CodeStars, where you'll be supported by a passionate community, learn from experienced coders, and have the chance to make your mark in the competitive programming world. Together, we code, compete, and conquer!</p>
                <br />
                <button className="Toggle-Button About-btn"><NavLink to = "/contact">Contact-Us </NavLink></button>
            </div>
        </>
    );
};

export default AboutUs