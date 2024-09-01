import "./Header.css"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <div className="Container-Header">
                <div className="Codestars-Logo">
                    <NavLink to = "/"> <img src="public\Logo\Logo-Main.jpg" alt="Logo" /> </NavLink>
                    <span className="Logo-Name">DJS CODESTARS</span>
                </div>

                <nav>
                    <ul>
                        <li><NavLink to = "/"> Home </NavLink></li>
                        <li><NavLink to = "/event"> Events </NavLink></li>
                        <li><NavLink to = "/teams"> Teams </NavLink></li>
                        <li><NavLink to = "/sponsers"> Sponsers </NavLink></li>
                    </ul>
                </nav>

                <div className="Contact-Us">
                    <button className="Toogle-Button"> <NavLink to= "/contact">Contact Us </NavLink></button>
                </div>
            </div>
        </>
    );
};