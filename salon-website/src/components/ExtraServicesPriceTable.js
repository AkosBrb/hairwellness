import { useContext } from "react"
import { ExtraServicesContext } from "../contexts/ExtraServicesContext"

function ExtraServicesPriceTable() {
  const { extraServices } = useContext(ExtraServicesContext);

  return (
    <div className="table--container">
      <table>
        <thead>
          <tr>
            <th>Szolgáltatás</th>
            <th>Félhosszú</th>
            <th>Hosszú</th>
          </tr>
        </thead>
        <tbody>
          {extraServices.map((extraService, i) => {
            const { service, f: halfLong, h: long } = extraService;
            return (
              <tr key={i}>
                <th>{service}</th>
                <td>{halfLong}</td>
                <td>{long}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ExtraServicesPriceTable;