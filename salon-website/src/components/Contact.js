import { sendEmail } from "../services/sendEmail";
import { useFormik } from 'formik';
import contactImg from '../assets/img/blonde-female-getting-new-hairstyle-hair-salon.jpg';
import { useState } from "react";

function Contact() {

    const [messageSent, setMessageSent] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: ""
        },
        onSubmit: (values) => {
            sendEmail(values);
            setMessageSent(true);
        }
    })

    return (
        <section className="contact--page">
            {messageSent ?
                <div className="message--sent--container"><h2>Köszönjük az üzenete elküldésre került! Hamarosan felveszem Önnel a kapcsolatot.</h2></div>
                :
                <div className="container">
                    <div className="form--container">
                        <h2>Kérdése van? Írjon üzenetet!</h2>
                        <div className="contact--header">
                            <div className="contact--info--container">
                                <h4>CÍM:</h4>
                                <p>2510 Dorog</p>
                                <p>Bécsi út 53.</p>
                            </div>
                            <div className="contact--info--container">
                                <h4>EMAIL:</h4>
                                <p>hajwellness@hajwellness.hu</p>
                            </div>
                            <div className="contact--info--container">
                                <h4>TELEFON:</h4>
                                <p>+ 36 70 266 2221</p>
                            </div>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="contact--form">
                            <div className="input--container">
                                <label htmlFor="name-input">Név</label>
                                <input onChange={formik.handleChange} value={formik.values.name} id="name-input" name="name" type="text" />
                            </div>
                            <div className="input--container">
                                <label htmlFor="phone-input">Telefonszám</label>
                                <input onChange={formik.handleChange} value={formik.values.phone} id="phone-input" name="phone" type="tel" />
                            </div>
                            <div className="input--container">
                                <label htmlFor="email-input">Email cím</label>
                                <input onChange={formik.handleChange} value={formik.values.email} id="email-input" name="email" type="email" />
                            </div>
                            <div className="input--container textarea--container">
                                <label htmlFor="message-input">Üzenet</label>
                                <textarea onChange={formik.handleChange} value={formik.values.message} id="message-input" name="message" />
                            </div>
                            <button className="btn" type="submit">Küldés</button>
                        </form>
                    </div>
                    <img src={contactImg} alt="contact-img" />
                </div>
            }
        </section>
    )
}

export default Contact