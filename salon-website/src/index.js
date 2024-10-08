import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Prices from './components/Prices';
import App from "./App"
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
