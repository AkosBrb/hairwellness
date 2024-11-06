import { createContext, useEffect, useState } from "react";
import getAdditionalServices from "../services/fetchAdditionalServices";

export const AdditionalServicesContext = createContext();

export function AdditionalServicesProvider({ children }) {
  const [additionalServices, setAdditionalServices] = useState({});

  useEffect(() => {
    getAdditionalServices().then(data => setAdditionalServices(data));
  }, [])

  return <AdditionalServicesContext.Provider value={{ additionalServices, setAdditionalServices }}>{children}</AdditionalServicesContext.Provider>
}