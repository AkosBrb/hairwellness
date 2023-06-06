import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './components/Contact/Contact';
import Gallery from './Gallery/Gallery';
import Prices from './Prices/Prices';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"
import Main from './Main/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/kapcsolat", element: <Contact /> },
      { path: "/galeria", element: <Gallery /> },
      { path: "/arak", element: <Prices /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
