import { createContext, useEffect, useState } from "react";
import fetchGallery from "../services/fetchPhotos";

export const GalleryContext = createContext();

export function GalleryProvider({ children }) {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery(setGallery)
  }, [])

  return <GalleryContext.Provider value={{ gallery, setGallery }}>{children}</GalleryContext.Provider>
}