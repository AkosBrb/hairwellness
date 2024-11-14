import profileImg from "../assets/img/Edit-Pap.jpg";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

function Introduction() {
  return (
    <>
      <div className="title">
        <h2>Bemutatkozás</h2>
        <div className="underline"></div>
      </div>
      <div className="introduction">
        <img src={profileImg} alt="pic" />
        <div>
          <BiSolidQuoteAltLeft size={35} className="introduction--quote--mark" />
          <p>
            Pap Edit vagyok, 2007-ben végeztem fodrászként, korábban az egészségügyben dolgoztam, ami mindig is közel állt a szívemhez. Hosszú ideje foglalkoztatott a gondolat, hogy ötvözzem az ápolás, gyógyítás szeretetét a fodrászattal. Ezért kezdtem el a hajgyógyászat iránt érdeklődni, hogy vendégeimnek ne csak szép, hanem egészséges hajjal is tudjak segíteni.
            <br />
            <br />
            Nemrég egy remek lehetőségnek köszönhetően megnyithattam saját fodrászatomat. Végtelenül hálás vagyok ezért és örömmel tölt el, hogy egy barátságos, természetközeli hangulatú szalont hozhattam létre. Szolgáltatásaim között a klasszikus fodrászati szolgáltatások mellett mikrokamerás hajgyógyászat is szerepel. Emellett gőzbúrás kezeléseket is kínálok, amelyek igazi wellness élményt nyújtanak a hajnak. Fodrászatomban kizárólag prémium termékekkel dolgozom. Számomra a legfontosabb, hogy vendégeim elégedetten, mosolyogva távozzanak. A szalonomban nemcsak a frizurád újulhat meg, de egy kis pihenésre, feltöltődésre is lehetőséged lesz.
            <br />
            <br />
            Ha szeretnéd szebbé és egészségesebbé varázsolni a hajad, vagy egyszerűen csak megújulnál, szeretettel várlak! A szolgáltatásokról és árakról bővebben az oldalamon tájékozódhatsz.
          </p>
          <BiSolidQuoteAltRight size={35} className="introduction--quote--mark second--mark" />
        </div>
      </div>
    </>
  )
}

export default Introduction;