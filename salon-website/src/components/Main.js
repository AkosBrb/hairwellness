import "../Style.css";
import Introduction from "./Introduction";
import LandingPageList from "./LandingPageList";
import ServiceCards from "./ServiceCards";

function Main() {

    return (
        <section className="landing--page--container">
            <Introduction />
            <ServiceCards />
            <LandingPageList />
        </section>
    )
}

export default Main