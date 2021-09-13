import React from "react";
import { Routes } from "./routes/routes"
import GlobalStyleProvider from "./global/globalStyles";
import { ProductsProvider } from "./provider/Contexts/ProductsContext";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <ProductsProvider>
      <GlobalStyleProvider />
      <Routes />
    </ProductsProvider>

      
    </>
  );
}

export default App;