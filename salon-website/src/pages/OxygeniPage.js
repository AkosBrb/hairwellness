import oxygeniPic1 from "../assets/img/oxi-intro.JPG";
import oxygeniPic2 from "../assets/img/oxygeni-description.JPG";

function OxygeniPage() {
    return (
        <section className="oxygeni--page">
            <div className="oxygeni--container">
            <p className="oxygeni--intro">
                Manapság tízből kilenc ember valamilyen fejbőrrel kapcsolatos panasztól szenved. Ezek kialakulásához hozzájárulhatnak a nem megfelelő kozmetikumok, a fokozott stressz, egészségtelen étkezési szokások, környezeti szennyeződések, a városi életmód vagy akár öröklött hajlamok is.
                <br />
                <br />
                Az oxigénterápia az immunrendszer támogatásával fejti ki hatását, így szinte bármilyen fejbőrt érintő probléma esetén eredményesen alkalmazható. A kezelés teljes mértékben biztonságos, természetes összetevőkre épül, és mellékhatásoktól mentes. A hajhagymák oxigénnel, vitaminokkal és ásványi anyagokkal való feltöltése révén a hajszálak megerősödnek, növekedésük serken, a fejbőr megtisztul, és visszanyeri optimális állapotát.
                <br />
                <br />
                Ezen az innovatív és egyedülálló módszer során tiszta, orvosi oxigént alkalmazok, amellyel nagy nyomáson juttatom el az értékes hatóanyagokat közvetlenül a fejbőr mélyére, egészen a hajhagymák gyökeréig, ezzel biztosítva a maximális regeneráló hatást.
            </p>
            <div className="oxy--img--container">
            <img className="oxy--img oxy--intro--img" src={oxygeniPic1} alt="pic"/>
            </div>
            </div>
            <h4>Fontos tudnivalók kezelés előtt:</h4>
            <div className="oxygeni--container">
                <div className="oxygeni--iframe--container">
                    <iframe src="https://www.youtube.com/embed/QvpW-BvWjdc?si=IDgVowcHXi1H2nGh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p className="oxygeni--description">
                A terápiás eljárás során nem csupán friss oxigént juttatok a fejbőr mélyebb rétegeibe, hanem az oxigént hordozóként is használom: segít bejuttatni a hatóanyagokat pontosan oda, ahol a legnagyobb szükség van rájuk. Az egyik legnagyobb előnye ennek a módszernek, hogy mindezt tű vagy bármilyen invazív beavatkozás nélkül végzem. Az oxigént és a bőrproblémák kezelésére összeállított szérumokat a sejtek közötti térbe irányítom – oda, ahol a nyirokfolyadék kering, és biztosítja a sejtek tápanyagellátását.
                <br />
                <br />
                A magas nyomás hatására az oxigén és a hatóanyagok egyenletesen oszlanak el ebben a közegben, ezzel látványosan feltöltik, kisimítják és megfiatalítják a kezelt területet. A kezelés során újraélesztem a bőr természetes folyamatait, és támogatom a sejtek regenerációját.
                <br />
                <br />
                Az oxigénterápiát mindazoknak ajánlom, akik kisebb vagy akár komolyabb fejbőrproblémával küzdenek. Legyen szó hajhullásról, túlzott zsírosodásról, szárazságról, korpáról vagy irritációról – a kezelés hatékony megoldást nyújt. Emellett azoknak is segítek, akik szeretnék serkenteni hajnövekedésüket, vagy visszaadnák hajszálaik életerejét és fényét.
                </p>
            </div>
            <div className="oxygeni--container">
            <div className="oxy--img--container">
            <img className="oxy--img" src={oxygeniPic2} alt="pic"/>
            </div>
            <div className="oxygeni--list--container">
                <h4>Milyen problémákra nyújt megoldást a kezelés?</h4>
                <ul>
                    <li>Post-COVID hajhullás</li>
                    <li>Hormonális hajhullás</li>
                    <li>Alopecia</li>
                    <li>Autoimmun hajhullás</li>
                    <li>Férfias kopaszodás</li>
                    <li>Ritkuló haj pl. hajdúsítás a Nagy Nap előtt menyasszonyoknak</li>
                    <li>Kemoterápia, sugárkezelés után hajvesztés</li>
                    <li>Hajbeültetés előtt/után fejbőr stimulálásra</li>
                    <li>Fejbőrbetegségek: pikkelysömör, seborrhea</li>
                    <li>Zsíros, korpás fejbőr</li>
                    <li>Száraz, viszkető fejbőr</li>
                    <li>Gyulladt, irritált fejbőr</li>
                </ul>
            </div>
            </div>
            <h4>Otthoni hajápolás az oxigénterápia kiegészítésére és felerősítésére</h4>
            <div className="oxygeni--home--description--container">
            <p className="oxygeni--home--description">
                A szakszerű otthoni hajápolás elengedhetetlen része annak, hogy az oxigénterápiás kezelések igazán hatékonyak legyenek. Azokat a termékeket, amelyeket a kezelések során használok, otthoni változatban is elérhetővé teszem, hiszen ezek tovább erősítik és felgyorsítják a terápiás hatást. Az Oxygeni Hair otthoni készítményeit úgy ajánlom, hogy azok tökéletes összhangban állnak a kezelés során alkalmazott hatóanyagokkal. Ezek segítik a vitaminok, ásványi anyagok és egyéb tápanyagok mélyebb felszívódását, és támogatják a hajhagymák regenerálódását. Mivel ezek a termékek ugyanazokat a természetes hatóanyagokat tartalmazzák, mint amiket a kezelés során is használok, hozzájárulnak az eredmények hosszabb távú megőrzéséhez. Ezért kizárólag az Oxygeni Hair saját hajápoló termékeit javaslom otthoni használatra, ha valóban szeretnél látványos és tartós javulást elérni.
            </p>
            </div>
        </section>
    )
}

export default OxygeniPage;