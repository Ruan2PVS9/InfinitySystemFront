import React from "react";
import { Products } from "./pages/Products/index";
import GlobalStyleProvider from "./global/globalStyles";


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
      <GlobalStyleProvider />
      <Products />
      
    </>
  );
}

export default App;