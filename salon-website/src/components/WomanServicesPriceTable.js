import { useContext } from "react";
import { ServicesContext } from "../contexts/ServicesContext";

function WomanServicesPriceTable() {
  const { services } = useContext(ServicesContext);

  return (
    <div className="table--container">
      <h4>Női</h4>
      <table>
        <thead>
          <tr>
            <th>Szolgáltatás</th>
            <th>Rövid</th>
            <th>Félhosszú</th>
            <th>Hosszú</th>
          </tr>
        </thead>
        <tbody>
          {services.map((singleService, i) => {
            const { service, r: short, f: halfLong, h: long } = singleService;
            return (
              <tr key={i}>
                <th>{service}</th>
                <td>{`${short} HUF`}</td>
                <td>{`${halfLong} HUF`}</td>
                <td>{`${long} HUF`}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WomanServicesPriceTable