import ServicesComponent from "./ServicesComponent"
import ServicesPriceTable from "./ServicesPriceTable"
function Services() {
    return (
        <section className="services--page">
            <ServicesComponent />
            <ServicesPriceTable />
        </section>
    )
}

export default Services