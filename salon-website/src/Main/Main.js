import chair from "../assets/img/salon-chair.png"
import cutting from "../assets/img/hair-cutting.png"
import face from "../assets/img/face.png"
import scissor from "../assets/img/scissor-and-comb.png"
function Main() {
    return (
        <div className="main--container">
            <div>
                <h2>Szolgáltatás 1</h2>
                <img src={chair} />
                <p>leiras</p>
            </div>
            <div>
                <h2>Szolgáltatás 1</h2>
                <img src={cutting} />
                <p>leiras</p>
            </div>
            <div>
                <h2>Szolgáltatás 1</h2>
                <img src={face} />
                <p>leiras</p>
            </div>
            <div>
                <h2>Szolgáltatás 1</h2>
                <img src={scissor} />
                <p>leiras</p>
            </div>
        </div>
    )
}

export default Main