import About from "../components/About/About"
import Services from "../components/Services/Services"
import "./Main.css"
function Main() {
    return (
        <div className="main--background">
            <About />
            <hr />
            <Services />
        </div>
    )
}

export default Main