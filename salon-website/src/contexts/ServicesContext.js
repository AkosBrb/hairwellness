import { createContext, useEffect, useState } from "react";
import getServicesData from "../services/fetchServicesData";


export const ServicesContext = createContext();

export function ServicesProvider({ children }) {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServicesData().then(data => setServices(data));
  }, [])

  console.log(services)

  return <ServicesContext.Provider value={{ services, setServices }}>{children}</ServicesContext.Provider>
}