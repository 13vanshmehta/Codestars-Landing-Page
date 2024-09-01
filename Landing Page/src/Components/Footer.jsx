import "./Footer.css"
import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <div className="Container-Footer">
                <div className="About-Us">
                    <h1>About Us</h1>
                    <p>The Official Competitive Programming Club of Dwarkadas J Sanghvi College of Engineering, provides a community to support learners of all ages, backgrounds and skills. For more details visit our instagram page or contact us.</p>
                </div>
                <div className="Contact-Details">
                    <div className="Address">
                        <h1>Address</h1>
                        <a href="https://www.google.com/maps/place/SVKM's+Dwarkadas+J.+Sanghvi+College+of+Engineering/@19.1073961,72.8350002,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9c676018b43:0x75f29a4205098f99!8m2!3d19.107391!4d72.8371889!16zL20vMGdtbWs0?coh=164777&entry=tt&shorturl=1" target="_blank" rel="noopener">SVKM's Dwarkadas J. Sanghvi College of Engineering, Vile Parle West, Mumbai-400056</a>

                        <h1>Contact Us</h1>
                        <a href="mailto:djscodestars@gmail.com" target="_blank" rel="noopener">djscodestars@gmail.com</a>
                        <br />
                        <a href="tel:+917977101454">7977101454</a>
                    </div>
                </div>
                <div className="Links">
                    <h1>Links</h1>
                    <ul>
                        <li><NavLink to = "/"> Home </NavLink></li>
                        <li><NavLink to = "/event"> Events </NavLink></li>
                        <li><NavLink to = "/teams"> Teams </NavLink></li>
                        <li><NavLink to = "/sponsers"> Sponsers </NavLink></li>
                    </ul>
                </div>
                <div className="Follow-Us">
                    <h1>Follow Us</h1>
                    <a href="https://www.instagram.com/djsce_codestars" target="_blank" rel = "noopener"><img src="public/Social Media Icons/Instagram.png" alt="" height="30px" width="30px"/></a>
                    <a href="https://www.linkedin.com/company/dj-codestars/" target="_blank" rel = "noopener"><img src="public/Social Media Icons/LinkedIn.png" alt="" height="30px" width="30px"/></a>
                    <a href="https://discord.com/invite/QhBAKmtprd" target="_blank" rel = "noopener"><img src="public/Social Media Icons/discord.png" alt="" height="30px" width="30px"/></a>
                    <a href="https://www.youtube.com/@DJSCodestars" target="_blank" rel = "noopener"><img src="public/Social Media Icons/Youtube.png" alt="" height="30px" width="30px"/></a>
                </div>
            </div>
        </>
    );
};