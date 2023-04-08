import brandLogo from "../assets/img/logo.jpg"
import facebookLogo from "../assets/img/face.png"
import instaLogo from "../assets/img/insta.png"
import "./Header.css"

function Header() {
    return (
        <div className="header--container">
            <img src={brandLogo} id="brand--logo"></img>
            <div className="nav--title--container">
                <h1 className="main--title">Hajwellness & fodrászat</h1>
                <nav className="navbar--container">
                    <ul className="list--container">
                        <li className="nav--link"><a href="#">Főoldal</a></li>
                        <li className="nav--link"><a href="#">Rólunk</a></li>
                        <li className="nav--link"><a href="#">Galéria</a></li>
                        <li className="nav--link"><a href="#">Árak</a></li>
                        <li className="nav--link"><a href="#">Kapcsolat</a></li>
                    </ul>
                </nav>
            </div>
            <div className="social--container">
                <a href="https://www.facebook.com/profile.php?id=100090432196857"><img src={facebookLogo} className="facebook social--logo" /></a>
                <img src={instaLogo} className="instagram social--logo" />
            </div>
        </div>
    )
}

export default Header