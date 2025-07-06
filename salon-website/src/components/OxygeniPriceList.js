import line from "../assets/img/line.png";
import oxyLogo from "../assets/img/oxigeny.png";

function OxygeniPriceList() {
    return (
    <div className="oxy--price--list--container">
        <div className="first--section">
            <img src={oxyLogo} alt="oxy-pic" />
            <h4 className="oxy--price--sub--title">Hajlaminálás / CURLY / METHOD / METAL Detox + OXY terápia</h4>
            <div className="oxy--service--container">
                <span>Félhosszú</span>
                <span>34 000 Ft / alkalom</span>
            </div>
            <div className="oxy--service--container">
                <span>5 alkalmas bérlet</span>
                <span>145 000 Ft</span>
            </div>
            <p>A bérletben kedvezményesebb a terápia ami 29 000 Ft / alkalom</p>
            <div className="oxy--service--container">
                <span>Hosszú</span>
                <span>37 000 Ft / alkalom</span>
            </div>
            <div className="oxy--service--container">
                <span>5 alkalmas bérlet</span>
                <span>157 000 Ft</span>
            </div>
            <p>A bérletben kedvezményesebb a terápia ami 31 400 Ft / alkalom</p>
            <hr />
            <div className="oxy--service--container hair--analyze">
                <span>Hajszövet elemzés</span>
                <span>67 800 Ft</span>
            </div>
        </div>
        <img src={line} alt="line" />
        <div className="second--section">
            <h4 className="oxy--price--sub--title">Hajgyógyászati kezelések</h4>
            <p>Az ár tartalmazza a konzultációt, diagnózist és a tanácsadást</p>
            <div className="oxy--service--container">
                <div>
                    <span>Hajgyógyászati tanácsadás <br /> - mikrokamerás fejbőr és hajdiagnózis</span>
                    <span></span>
                </div>
                <span>6000 Ft</span>
            </div>
            <hr />
            <div className="oxy--service--container">
                <span>Oxygén terápia rövid hajra és férfiak részére</span>
                <span>24 000 Ft</span>
            </div>
            <div className="oxy--service--container">
                <span>5 alkalmas bérlet</span>
                <span>100 000 Ft</span>
            </div>
            <div className="oxy--service--container">
                <span>10 alkalmas bérlet</span>
                <span>200 000 Ft</span>
            </div>
            <p>A bérletben kedvezményesebb a terápia ami 20 000 Ft / alkalom plusz minden 5. kezelés mellé 1 ajándék hajvágás is jár!</p>
            <hr />
            <div className="oxy--service--container">
                <span>Oxygén terápia félhosszú hajra és hosszú hajra</span>
                <span>27 000 Ft</span>
            </div>
            <div className="oxy--service--container">
                <span>5 alkalmas bérlet</span>
                <span>115 000 Ft</span>
            </div>
            <div className="oxy--service--container">
                <span>10 alkalmas bérlet</span>
                <span>230 000 Ft</span>
            </div>
            <p>A bérletben kedvezményesebb a terápia ami 23 000 Ft / alkalom plusz minden 5. kezelés mellé 1 ajándék hajvágás is jár!</p>
        </div>
        <img src={line} alt="line" />
        <div className="third--section">
            <h4 className="oxy--price--sub--title">Oxygeni kisrutin kezelések</h4>
            <div className="section--three--sub--container">
                <div className="oxy--service--container--three">
                    <span>Zsíros fejbőr problémára</span>
                    <span>5000 Ft</span>
                </div>
                <div className="oxy--service--container--three">
                    <span>Száraz fejbőr problémára</span>
                    <span>5000 Ft</span>
                </div>
                <div className="oxy--service--container--three">
                    <span>Hajhullás ellen/hajdúsításra</span>
                    <span>5000 Ft</span>
                </div>
                <div className="oxy--service--container--three">
                    <span>Érzékeny/normál fejbőrre</span>
                    <span>5000 Ft</span>
                </div>
            </div>
            <div className="section--three--sub--container">
                <p>A kezelés menete:</p>
                <ol>
                    <li>Hajmosás a hajtípusnak megfelelő samponnal</li>
                    <li>Fejbőr pakolás mély hidratálás</li>
                    <li>Gőzbúra {'(15 perc)'}</li>
                    <li>Anyagok kiöblítése a hajból és a fejbőrből</li>
                    <li>Gyulladáscsökkentő, tápláló fejbőr permet</li>
                    <li>Hajvégápolás</li>
                    <li>Hajszárítás és formázás</li>
                </ol>
                <p>A kezelések ára nem tartalmazza a hajszárítást, pluszban fizetendő a hajhossztól függően.</p>
            </div>
        </div>
    </div>
    )
}

export default OxygeniPriceList;