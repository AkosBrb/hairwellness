import "../Style.css"
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Header() {
    return (
        <div className="header--background">
            <header className="header--container">
                <div className="first--header--container">
                    <div className="contact--infos--header">
                        <span>+ 36 70 266 2221</span>
                        <span>hajwellness@hajwellness.hu</span>
                        <span>2510 Dorog, Bécsi út 53.</span>
                    </div>
                    <div className="social--container">
                        <a href="https://www.facebook.com/profile.php?id=100090432196857"><MdOutlineFacebook /></a>
                        <a href="/"><FaInstagram /></a>
                        <a href="/"><IoLogoTiktok /></a>
                    </div>
                </div>
                <hr />
                <div className="second--header--container">
                    <div className="brand--logo"><img src={logo} className="logo" alt="logo" /></div>
                    <nav className="navbar--container">
                        <ul className="list--container">
                            <li className="nav--link"><NavLink to={"/"}>Főoldal</NavLink></li>
                            <li className="nav--link"><NavLink to={"/galeria"}>Termékek</NavLink></li>
                            <li className="nav--link"><NavLink to={"/szolgaltatasok"}>Szolgáltatások</NavLink></li>
                            <li className="nav--link"><NavLink to={"/kapcsolat"}>Kapcsolat</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="main--title">
                    <h1>Hajwellness & </h1><span>fodrászat</span>
                </div>
            </header>
            <div className="header--blur"></div>
        </div>
    )
}

export default Header