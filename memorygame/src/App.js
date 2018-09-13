import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MemContainer from "./components/MemContainer";
import Footer from "./components/Footer";
import icons from "./icons.json";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <MemContainer 
      // Ref variable icons in curly. left is name the property.
      list={icons}
    />
    <Footer />
  </div>
);



export default App;
