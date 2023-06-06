import brandLogo from "../assets/img/logo.jpg"
import facebookLogo from "../assets/img/face.png"
import instaLogo from "../assets/img/insta.png"
import "./Header.css"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className="header--background">
            <header className="header--container">
                <img alt="Logo.." src={brandLogo} id="brand--logo"></img>
                <div className="nav--title--container">
                    <h1 className="main--title">Hajwellness & fodrászat</h1>
                    <nav className="navbar--container">
                        <ul className="list--container">
                            <li className="nav--link"><NavLink to={"/"}>Főoldal</NavLink></li>
                            <li className="nav--link"><NavLink to={"/galeria"}>Galéria</NavLink></li>
                            <li className="nav--link"><NavLink to={"/arak"}>Árak</NavLink></li>
                            <li className="nav--link"><NavLink to={"/kapcsolat"}>Kapcsolat</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="social--container">
                    <a href="https://www.facebook.com/profile.php?id=100090432196857"><img alt="facebook logo" src={facebookLogo} className="facebook social--logo" /></a>
                    <img src={instaLogo} alt="instagram logo" className="instagram social--logo" />
                </div>
            </header>
            <div className="header--blur"></div>
        </div>
    )
}

export default Header