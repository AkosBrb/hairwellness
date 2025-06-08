import { NavLink } from "react-router-dom"

function ContactPageModal({loading, messageSent}) {
    console.log(loading, messageSent)
    return (
        <div className={`${(!loading && messageSent) ? "modal--container" : "modal--container--off"}`}>
            <button className="close--modal--btn">
                X
            </button>
            <h2>
                Köszönöm, az üzenete elküldésre került! Hamarosan felveszem Önnel a kapcsolatot.
            </h2>
            <button className="btn">
                <NavLink to={"/"}>Vissza a főoldalra</NavLink>
            </button>
        </div>
    )
}

export default ContactPageModal;