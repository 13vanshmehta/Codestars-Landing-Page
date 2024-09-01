import React from "react";
import "../index.css"
import GoogleMap from "../Components/Google-Map";
import {NavLink} from "react-router-dom"

export const Contact = () => {
    return(
        <>
        <div className="Container">
            <h1 className="Highlight">Contact Us</h1>
            <p>DJS CodeStars is the official Competitive Programming (CP) Club of Dwarkadas J. Sanghvi College of Engineering, renowned as one of India's largest and most active CP communities.</p>

            <div className="Container-Contact">
                <div className="Details-Part">
                    <div className="Contact-Details">
                        <img src="public/Logo/Location Logo.png" alt="" />
                        <p>SVKM's Dwarkadas J. Sanghvi College of Engineering, Vile Parle West, Mumbai-400056</p>
                    </div>

                    <div className="Contact-Details">
                        <img src="public/Logo/Phone Logo.png" alt="" />
                        <p>7977101454</p>
                    </div>

                    <div className="Contact-Details">
                        <img src="public/Logo/Email Logo.png" alt="" />
                        <p>djscodestars@svkm.com</p>
                    </div>
                </div>
                <div className="Contact-Form">
                    <form>
                        <label htmlFor="Username">Username</label>
                        <input type="text" name="name" placeholder="Enter Your Name " required/>

                        <label htmlFor="email">Email ID</label>
                        <input type="email" name="email" placeholder="Enter Your Email ID" required/>

                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder="Enter Your Message..." required></textarea>

                        <button className="Toggle-Button">Send Message</button>
                    </form>
                </div>
            </div>
            <GoogleMap/>
        </div>
        </>
    );
};
