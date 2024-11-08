import '../Style.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdLocalPhone, MdAlternateEmail } from "react-icons/md";
import logo from "../assets/img/logo.png";

function Footer() {
    return (
        <div className="footer--container">
            <footer>
                <div className="brand--logo footer--brand--logo"><img src={logo} className="logo" alt="logo" /></div>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.238176523339!2d18.728595312446824!3d47.71862627108012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a646ae35c2357%3A0x8ce2dd995a57c6c1!2zRG9yb2csIELDqWNzaSDDunQgNTMsIDI1MTA!5e0!3m2!1shu!2shu!4v1729850659426!5m2!1shu!2shu" width="600" height="450" loading="lazy"></iframe>
                <div className='footer--contact--container'>
                    <p>Kapcsolat</p>
                    <div>
                        <FaMapMarkerAlt />
                        <div className='footer--address'>
                            <p>Edit Hajwellness és Fodrászat</p>
                            <p>2510 Dorog, Bécsi út 53.</p>
                        </div>
                    </div>
                    <div>
                        <MdLocalPhone />
                        <p>+ 36 70 266 2221</p>
                    </div>
                    <div>
                        <MdAlternateEmail />
                        <p>hajwellness@hajwellness.hu</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer