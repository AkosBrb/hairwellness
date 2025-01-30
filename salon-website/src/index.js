import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Services from './components/Services';
import App from "./App"
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/kapcsolat", element: <Contact /> },
      { path: "/galeria", element: <Gallery /> },
      { path: "/szolgaltatasok", element: <Services /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
