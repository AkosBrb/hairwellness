import "../Style.css";
import Introduction from "../components/Introduction";
import LandingPageList from "../components/LandingPageList";
import ServicesComponent from "../components/ServicesComponent";

function LandingPage() {

    return (
        <section className="landing--page--container">
            <Introduction />
            <ServicesComponent />
            <LandingPageList />
        </section>
    )
}

export default LandingPage