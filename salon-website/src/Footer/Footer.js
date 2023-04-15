import './Footer.css'
function Footer() {
    return (
        <div className="footer--background">
            <div className="footer--blur"></div>
            <footer className="footer--container">
                <div className="open--hours">
                    <h3>Nyitva tartás</h3>
                    <span>Hétfő:</span><span>10-16-ig</span>
                    <span>Kedd:</span><span>9-14-ig</span>
                    <span>Szerda:</span><span>9-14-ig</span>
                    <span>Csütörtök:</span><span>12-18-ig</span>
                    <span>Péntek:</span><span>12-18-ig</span>
                    <span>Szombat:</span><span>ZÁRVA</span>
                    <span>Vasárnap:</span><span>ZÁRVA</span>
                </div>
                <div className="contacts">
                    <h3>Elérhetőségek:</h3>
                    <p>Dorog - 2510</p>
                    <p>Bécsi út 53.</p>
                    <div className='phone'>
                        <span>Telefonszám:</span> <span>+ 36 70 266 2221</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer