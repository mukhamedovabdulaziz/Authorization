import React from 'react';
import Navigation from "./NavigationBar/Navigation";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";

function Simulator() {
  return (
    <div>
      <Navigation/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default Simulator;