import chair from "../assets/img/salon-chair.png"
import cutting from "../assets/img/hair-cutting.png"
import woman from "../assets/img/woman.png"
import scissor from "../assets/img/scissor-and-comb.png"
import laminal from "../assets/img/laminal.jpg"
import men from "../assets/img/men.jpg"
import kid from "../assets/img/kid.jpg"
import womanService from "../assets/img/shutterstock_1452287459.jpg"
import { useState, useRef, useEffect } from "react";
import screenObserver from "../utils/observer";

function ServicesComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => screenObserver(setIsVisible, elementRef), []);
  return (
    <section className={`services--container card-fade-in-1 ${isVisible ? "card-visible-1" : ""}`} ref={elementRef}>
      <div className="services--title title">
        <h2>Népszerű szolgáltatások:</h2>
        <div className="underline"></div>
      </div>
      <div className="service--container">
      <img alt="IMG" className="service--img" src={laminal}></img>
      <div className="service--one service">
        <div className="service--description--container">
        <img className="service--icon" alt="service img" src={cutting} />
        <h3>Hajszerkezet újjáépítés</h3>
        </div>
        <p>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatum temporibus quidem perspiciatis dolorem libero corrupti perferendis molestiae quibusdam odit. Odit eveniet commodi quidem adipisci.</p>
      </div>
      </div>
      <div className="service--container">
      <img alt="IMG" className="service--img" src={womanService}></img>
      <div className="service--two service">
        <div className="service--description--container">
        <img className="service--icon" alt="service img" src={woman} />
        <h3>Hajgyógyászati kezelés</h3>
        </div>
        <p>4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatum temporibus quidem perspiciatis dolorem libero corrupti perferendis molestiae quibusdam odit. Odit eveniet commodi quidem adipisci.</p>
      </div>
      </div>
      <div className="service--container">
      <img alt="IMG" className="service--img" src={kid}></img>
      <div className="service--three service">
        <div className="service--description--container">
        <img className="service--icon" alt="service img" src={scissor} />
        <h3>Gyermek hajvágás</h3>
        </div>
        <p>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatum temporibus quidem perspiciatis dolorem libero corrupti perferendis molestiae quibusdam odit. Odit eveniet commodi quidem adipisci.</p>
      </div>
      </div>
      <div className="service--container">
      <img alt="IMG" className="service--img" src={men}></img>
      <div className="service--four service">
        <div className="service--description--container">
        <img className="service--icon" alt="service img" src={chair} />
        <h3>Férfi hajvágás</h3>
        </div>
        <p>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatum temporibus quidem perspiciatis dolorem libero corrupti perferendis molestiae quibusdam odit. Odit eveniet commodi quidem adipisci.</p>
      </div>
      </div>
    </section>
  )
}

export default ServicesComponent;