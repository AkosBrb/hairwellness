import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ServicesProvider } from './contexts/ServicesContext';
import { AdditionalServicesProvider } from './contexts/AdditionalServicesContext';
import { ExtraServicesProvider } from './contexts/ExtraServicesContext';

function ContentLayout() {
  return (
    <ExtraServicesProvider>
      <AdditionalServicesProvider>
        <ServicesProvider>
          <Header />
          <Outlet />
          <Footer />
        </ServicesProvider>
      </AdditionalServicesProvider>
    </ExtraServicesProvider>
  )
}

export default ContentLayout
