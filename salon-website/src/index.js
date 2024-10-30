import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './components/Contact';
import Products from './components/Products';
import Services from './components/Services';
import App from "./App"
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsProvider } from './contexts/ProductsContexts';
import 'react-toastify/dist/ReactToastify.css';
import { ServicesProvider } from './contexts/ServicesContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/kapcsolat", element: <Contact /> },
      { path: "/galeria", element: <Products /> },
      { path: "/szolgaltatasok", element: <Services /> }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ServicesProvider>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </ServicesProvider>
);
