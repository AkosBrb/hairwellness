import About from "./About";
import Services from "./Services";
import "../Style.css";

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