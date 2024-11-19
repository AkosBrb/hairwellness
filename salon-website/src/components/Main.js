import "../Style.css";
import Introduction from "./Introduction";
import ServiceCards from "./ServiceCards";

function Main() {
    return (
        <section className="landing--page--container">
            <Introduction />
            <ServiceCards />
        </section>
    )
}

export default Main