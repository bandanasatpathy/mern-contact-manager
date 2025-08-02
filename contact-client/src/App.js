import React from "react";
import ContactPage from "./pages/contactPage";
import "./styles/contact.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ContactPage />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
