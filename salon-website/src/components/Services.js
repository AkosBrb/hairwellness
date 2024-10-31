import AdditionalServicesPriceTable from "./AdditionalServicesPriceTable"
import ExtraServicesPriceTable from "./ExtraServicesPriceTable"
import ServicesComponent from "./ServicesComponent"
import WomanServicesPriceTable from "./WomanServicesPriceTable"
function Services() {
    return (
        <>
            <ServicesComponent />
            <section className="price--tables">
                <WomanServicesPriceTable />
                <ExtraServicesPriceTable />
                <AdditionalServicesPriceTable />
            </section>
        </>
    )
}

export default Services