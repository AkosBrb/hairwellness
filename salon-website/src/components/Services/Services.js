import chair from "../../assets/img/salon-chair.png"
import cutting from "../../assets/img/hair-cutting.png"
import woman from "../../assets/img/woman.png"
import scissor from "../../assets/img/scissor-and-comb.png"
import laminal from "../../assets/img/laminal.jpg"
import men from "../../assets/img/men.jpg"
import kid from "../../assets/img/kid.jpg"
import womanService from "../../assets/img/shutterstock_1452287459.jpg"
function Services() {
    return (
        <main className="main--container">
            <img alt="IMG" className="service--img" src={laminal}></img>
            <div className="service--one">
                <img className="main--icon" alt="Kép helye.." src={chair} />
                <h2>Hajszerkezet újjáépítés</h2>
                <p>1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatum temporibus quidem perspiciatis dolorem libero corrupti perferendis molestiae quibusdam odit. Odit eveniet commodi quidem adipisci. Architecto nobis laudantium cumque placeat dolorem sunt autem cum illum, eius rerum fugiat voluptates, numquam natus? Ut dolores distinctio recusandae cum officiis molestiae ipsa adipisci!</p>
            </div>
            <img alt="IMG" className="service--img" src={men}></img>
            <div className="service--two">
                <img className="main--icon" alt="Kép helye.." src={cutting} />
                <h2>Férfi hajvágás</h2>
                <p>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatum temporibus quidem perspiciatis dolorem libero corrupti perferendis molestiae quibusdam odit. Odit eveniet commodi quidem adipisci. Architecto nobis laudantium cumque placeat dolorem sunt autem cum illum, eius rerum fugiat voluptates, numquam natus? Ut dolores distinctio recusandae cum officiis molestiae ipsa adipisci!</p>
            </div>
            <img alt="IMG" className="service--img" src={kid}></img>
            <div className="service--three">
                <img className="main--icon" alt="Kép helye.." src={woman} />
                <h2>Gyermek hajvágás</h2>
                <p>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatum temporibus quidem perspiciatis dolorem libero corrupti perferendis molestiae quibusdam odit. Odit eveniet commodi quidem adipisci. Architecto nobis laudantium cumque placeat dolorem sunt autem cum illum, eius rerum fugiat voluptates, numquam natus? Ut dolores distinctio recusandae cum officiis molestiae ipsa adipisci!</p>
            </div>
            <img alt="IMG" className="service--img" src={womanService}></img>
            <div className="service--four">
                <img className="main--icon" alt="Kép helye.." src={scissor} />
                <h2>Hajgyógyászati kezelés</h2>
                <p>4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatum temporibus quidem perspiciatis dolorem libero corrupti perferendis molestiae quibusdam odit. Odit eveniet commodi quidem adipisci. Architecto nobis laudantium cumque placeat dolorem sunt autem cum illum, eius rerum fugiat voluptates, numquam natus? Ut dolores distinctio recusandae cum officiis molestiae ipsa adipisci!</p>
            </div>
        </main>
    )
}

export default Services