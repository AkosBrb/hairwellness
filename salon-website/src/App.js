import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ServicesProvider } from './contexts/ServicesContext';
import { AdditionalServicesProvider } from './contexts/AdditionalServicesContext';
import { ExtraServicesProvider } from './contexts/ExtraServicesContext';
import { useState, useEffect } from "react";
import fetchGallery from "./services/fetchPhotos";
import { GalleryContext } from "./contexts/GalleryContext";

function ContentLayout() {

  const [gallery, setGallery] = useState([]);

    useEffect(() => {
      async function setUrls() {
       setGallery(await fetchGallery());
      }
      setUrls();
    }, [])

  return (
    <ExtraServicesProvider>
      <GalleryContext.Provider value={gallery}>
      <AdditionalServicesProvider>
        <ServicesProvider>
          <Header />
          <Outlet />
          <Footer />
        </ServicesProvider>
      </AdditionalServicesProvider>
      </GalleryContext.Provider>
    </ExtraServicesProvider>
  )
}

export default ContentLayout
