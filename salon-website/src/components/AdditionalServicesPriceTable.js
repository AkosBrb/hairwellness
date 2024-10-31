import { useContext } from "react"
import { AdditionalServicesContext } from "../contexts/AdditionalServicesContext"

function AdditionalServicesPriceTable() {
  const { additionalServices } = useContext(AdditionalServicesContext);
  const { férfi: man, gyermek: child } = additionalServices;
  const { kisfiú: boy, kislány: girl } = child;

  console.log(additionalServices)

  return (
    <div className="table--container">
      <h4>Férfi</h4>
      <table>
        <thead>
          <tr>
            <th>Szolgáltatás</th>
            <th>Ár</th>
          </tr>
        </thead>
        <tbody>
          {man.map((manService, index) => {
            const { service, price } = manService;
            return (
              <tr>
                <th>{service}</th>
                <td>{price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AdditionalServicesPriceTable;