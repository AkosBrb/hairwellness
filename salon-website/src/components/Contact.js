import { sendEmail } from "../services/sendEmail";
import { useFormik } from 'formik';

function Contact() {

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: ""
        },
        onSubmit: (values, e) => {
            sendEmail(values)
            e.preventDefatult()
        }
    })

    return (
        <section className="contact--page--container">
            <div className="contact--header">
                <h2>Kérdése van? írjon üzenetet!</h2>
                <div className="contact--page--infos--container">
                    <h4>CÍM:</h4>
                    <p>2510 Dorog</p>
                    <p>Bécsi út 53.</p>
                </div>
            </div>
            <div className="form--container">
                <form onSubmit={(e) => formik.handleSubmit(e)} className="contact--form">
                    <div className="name--input">
                        <label htmlFor="name-input">Név</label>
                        <input onChange={formik.handleChange} value={formik.values.name} id="name-input" name="name" type="text" />
                    </div>
                    <div className="phone--input">
                        <label htmlFor="phone-input">Telefonszám</label>
                        <input onChange={formik.handleChange} value={formik.values.phone} id="phone-input" name="phone" type="tel" />
                    </div>
                    <div className="email--input--container">
                        <label htmlFor="email-input">Email cím</label>
                        <input onChange={formik.handleChange} value={formik.values.email} id="email-input" name="email" type="email" />
                    </div>
                    <div className="message--input--container">
                        <label htmlFor="message-input">Üzenet</label>
                        <textarea cols={30} rows={10} onChange={formik.handleChange} value={formik.values.message} id="message-input" name="message" />
                    </div>
                    <button className="btn" type="submit">Küldés</button>
                </form>
            </div>
        </section>
    )
}

export default Contact