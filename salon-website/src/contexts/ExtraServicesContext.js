import { createContext, useEffect, useState } from "react";
import getExtraServices from "../services/fetchExtraServices";

export const ExtraServicesContext = createContext();

export function ExtraServicesProvider({ children }) {
  const [extraServices, setExtraServices] = useState({});

  useEffect(() => {
    getExtraServices().then(data => setExtraServices(data));
  }, [])

  return <ExtraServicesContext.Provider value={{ extraServices, setExtraServices }}>{children}</ExtraServicesContext.Provider>
}