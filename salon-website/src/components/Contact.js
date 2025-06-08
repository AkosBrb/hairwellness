import { sendEmail } from "../services/sendEmail";
import { useFormik } from 'formik';
import contactImg from '../assets/img/blonde-female-getting-new-hairstyle-hair-salon.jpg';
import { useState } from "react";
import { contactValidationSchema } from "../schema/validationSchema";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import ContactForm from "../forms/ContactForm";
import ContactPageModal from "./ContactPageModal";

function Contact() {

    const [messageSent, setMessageSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: ""
        },
        validationSchema: contactValidationSchema,
        onSubmit: async (values) => {
            setLoading(true);
            let response = await sendEmail(values);
            if (response === 200) {
                setMessageSent(true);
                setLoading(false)
            } else {
                toast.error('Hoppá! Hiba történt az üzenet küldésekor.')
                setLoading(false)
            }
        }
    })

    return (
        <section className="contact--page">
            <ToastContainer
                position="top-center"
                closeOnClick
                theme="dark"
                transition={Bounce}
            />
            {loading && <div className="loading"></div>}
            <ContactPageModal loading={loading} messageSent={messageSent}/>
            {!loading && <ContactForm loading={loading} messageSent={messageSent} formik={formik} img={contactImg} />}
        </section>
    )
}

export default Contact