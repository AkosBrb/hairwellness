import { useContext } from "react";
import { ServicesContext } from "../contexts/ServicesContext";
import { ExtraServicesContext } from "../contexts/ExtraServicesContext";
import { AdditionalServicesContext } from "../contexts/AdditionalServicesContext";

function ServicesPriceTable() {
  const { services } = useContext(ServicesContext);
  const { extraServices } = useContext(ExtraServicesContext);
  const { additionalServices } = useContext(AdditionalServicesContext);

  return (
    <section className="table--container">
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
          <tr className="section--name">
            <th colSpan={4}>Női</th>
          </tr>
          {services.map((singleService, i) => {
            const { service, r: short, f: halfLong, h: long } = singleService;
            return (
              <tr key={i}>
                <th>{service}</th>
                <td>{`${short} Ft`}</td>
                <td>{`${halfLong} Ft`}</td>
                <td>{`${long} Ft`}</td>
              </tr>
            )
          })}
          <tr className="section--name">
            <th colSpan={4}>Extra szolgáltatások</th>
          </tr>
          {additionalServices.extras?.map((extraService, i) => {
            const { service, f: halfLong, h: long } = extraService;
            return (
              <tr key={i}>
                <th>{service}</th>
                <td></td>
                <td>{`${halfLong} Ft`}</td>
                <td>{`${long} Ft`}</td>
              </tr>
            )
          })}
          <tr className="section--name">
            <th colSpan={4}>Férfi</th>
          </tr>
          {additionalServices.man?.map((manService, index) => {
            const { service, price } = manService;
            return (
              <tr key={index}>
                <th>{service}</th>
                <td>{`${price} Ft`}</td>
              </tr>
            )
          })}
          <tr className="section--name">
            <th colSpan={4}>Gyermek</th>
          </tr>
          <tr className="section--name">
            <th colSpan={4}>Kisfiú</th>
          </tr>
          {extraServices.boy?.map((boyService, index) => {
            const { service, price } = boyService;
            return (
              <tr key={index}>
                <th>{service}</th>
                <td>{`${price} Ft`}</td>
              </tr>
            )
          })}
          <tr className="section--name">
            <th colSpan={4}>Kislány</th>
          </tr>
          {extraServices.girl?.map((girlService, index) => {
            const { service, price } = girlService;
            return (
              <tr key={index}>
                <th>{service}</th>
                <td>{`${price} Ft`}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default ServicesPriceTable