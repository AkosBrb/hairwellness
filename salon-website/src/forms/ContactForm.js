function ContactForm({ formik, img, loading, messageSent }) {
  const { email, message, name, phone } = formik.errors;
  const { touched } = formik;

  return (
    <div className={`container ${(!loading && messageSent) ? "blur--container" : ""}`}>
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
            <input
              onBlur={formik.handleBlur}
              className={name && touched.name ? "input--error" : ""}
              onChange={formik.handleChange}
              value={formik.values.name}
              id="name-input"
              name="name"
              type="text"
              disabled={(!loading && messageSent) ? true : false} />
            {name && touched.name && <p className="error--message">{name}</p>}
          </div>
          <div className="input--container">
            <label htmlFor="phone-input">Telefonszám</label>
            <input
              onBlur={formik.handleBlur}
              className={phone && touched.phone ? "input--error" : ""}
              onChange={formik.handleChange}
              value={formik.values.phone} placeholder="0620/30/70..."
              id="phone-input"
              name="phone"
              type="tel"
              disabled={(!loading && messageSent) ? true : false} />
            {phone && touched.phone && <p className="error--message">{phone}</p>}
          </div>
          <div className="input--container">
            <label htmlFor="email-input">Email cím</label>
            <input
              onBlur={formik.handleBlur}
              className={email && touched.email ? "input--error" : ""}
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email-input"
              name="email"
              type="email"
              disabled={(!loading && messageSent) ? true : false} />
            {email && touched.email && <p className="error--message">{email}</p>}
          </div>
          <div className="input--container textarea--container">
            <label htmlFor="message-input">Üzenet</label>
            <textarea
              onBlur={formik.handleBlur}
              className={message && touched.message ? "input--error" : ""}
              onChange={formik.handleChange}
              value={formik.values.message}
              id="message-input"
              name="message"
              disabled={(!loading && messageSent) ? true : false} />
            {message && touched.message && <p className="error--message">{message}</p>}
          </div>
          <button
            className="btn"
            disabled={(!loading && messageSent) ? true : false}
            type="submit">Küldés
          </button>
        </form>
      </div>
      <img src={img} alt="contact-img" />
    </div>
  )
}

export default ContactForm;