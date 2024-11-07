import { useContext } from "react";
import { ServicesContext } from "../contexts/ServicesContext";
import { ExtraServicesContext } from "../contexts/ExtraServicesContext";
import { AdditionalServicesContext } from "../contexts/AdditionalServicesContext";
import woman from "../assets/icons/woman.png";
import boy from "../assets/icons/boy.png";
import girl from "../assets/icons/girl.png";
import shortHair from "../assets/icons/female-short-hair-variant.png";
import halfLongHair from "../assets/icons/woman-hair.png";
import longHair from "../assets/icons/long-wavy-hair-variant.png";
import man from "../assets/icons/young-man.png";

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
            <th className="table--head">Rövid</th>
            <th className="table--head">Félhosszú</th>
            <th className="table--head">Hosszú</th>
          </tr>
        </thead>
        <tbody>
          <tr className="section--name">
            <th colSpan={4}>
              <div className="price--categories">
                <span>Női</span>
                <img className="price--table--icon" src={woman} alt="icon" />
              </div>
            </th>
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
                <td>{long && `${long} Ft`}</td>
              </tr>
            )
          })}
          <tr className="section--name">
            <th colSpan={4}>
              <div className="price--categories">
                <span>Férfi</span>
                <img className="price--table--icon" src={man} alt="icon" />
              </div>
            </th>
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
            <th colSpan={4}>
              <div className="price--categories">
                <span>Kisfiú</span>
                <img src={boy} alt="icon" />
              </div>
            </th>
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
            <th colSpan={4}>
              <div className="price--categories">
                <span>Kislány</span>
                <img className="price--table--icon" src={girl} alt="icon" />
              </div>
            </th>
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