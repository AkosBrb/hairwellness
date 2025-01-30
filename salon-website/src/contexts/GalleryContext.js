import { createContext, useState } from "react";

export const GalleryContext = createContext();

export function GalleryProvider({ children }) {
  const [gallery, setGallery] = useState([]);

  return <GalleryContext.Provider value={{ gallery, setGallery }}>{children}</GalleryContext.Provider>
}