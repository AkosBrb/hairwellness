function Contact() {
    return (
        <section className="contact--page--container">
            <div className="form--container">
                <h2>Kérdése van? írjon üzenetet!</h2>
                <form onSubmit={(e) => e.preventDefault()} className="contact--form">
                    <input required type="text" placeholder="Név" />
                    <input required type="tel" placeholder="Telefonszám" />
                    <input required type="email" placeholder="Email" />
                    <input required type="text" placeholder="Üzenet" />
                    <button className="btn">Küldés</button>
                </form>
            </div>
        </section>
    )
}

export default Contact