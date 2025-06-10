import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import PriceListPage from './pages/PriceListPage';
import GalleryPage from './pages/GalleryPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/kapcsolat", element: <ContactPage /> },
      { path: "/galeria", element: <GalleryPage /> },
      { path: "/arlista", element: <PriceListPage /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
