import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <section className="contact--page--container">
            <div className="form--container">
                <h2>Kérdése van? írjon üzenetet!</h2>
                <form onSubmit={(e) => e.preventDefault()} className="contact--form">
                    <input onChange={(e) => handleChange(e)} required name={"name"} type="text" placeholder="Név" />
                    <input onChange={(e) => handleChange(e)} required name={"phone"} type="tel" placeholder="Telefonszám" />
                    <input onChange={(e) => handleChange(e)} required name={"email"} type="email" placeholder="Email" />
                    <input onChange={(e) => handleChange(e)} required name={"message"} type="text" placeholder="Üzenet" />
                    <button className="btn" type="submit">Küldés</button>
                </form>
            </div>
        </section>
    )
}

export default Contact