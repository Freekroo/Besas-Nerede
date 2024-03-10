import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import BesasMap from "./Components/BesasMap";

function App() {
  return (
    <>
      <NavigationBar />
      <BesasMap />
      <Footer className="footer-style" />
    </>
  );
}
export default App;
