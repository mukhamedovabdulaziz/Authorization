import React from "react";
import 'normalize.css';
import './App.css';
// import Authorization from "./components/Authorization/Authorization";
// import {NavLink} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        {/* eslint-disable-next-line global-require */}
        <img src={require("./images/logo.png")} alt="logo" id="logo" style={{height: "50px"}}/>
        {/*<div className="navigation"><NavLink className="navLink" to="/input_form">INPUT FORM</NavLink></div>*/}
        {/*<div className="navigation"><NavLink className="navLink" to="/charges_form">CHARGES FORM</NavLink></div>*/}
        {/*<div className="navigation"><NavLink className="navLink" to="/inland_carrier">INLAND CARRIER</NavLink></div>*/}
        {/*<div className="navigation"><NavLink className="navLink" to="/cc_destination">CC DESTINATION</NavLink></div>*/}
        {/*<div className="navigation"><NavLink className="navLink" to="/forwarder_rates">FORWARDER RATES</NavLink></div>*/}
        {/*<div className="navigation"><NavLink className="navLink" to="/il_inland">IL INLAND SUPPLIER</NavLink></div>*/}
        {/*<div className="navigation"><NavLink className="navLink" to="/local_charges">LOCAL CHARGES</NavLink></div>*/}
        <div className="profile" id="profile">Name Surname</div>
      </div>

      <div className="content">
        <div className="tabs">
          <div className="cif" id="cif">CIF</div>
          <div className="dap" id="dap">DAP</div>
        </div>

        <div className="searchBar">
          <div className="inputs">
            <div className="allinp">
              <div className="input">
                <label htmlFor="port_of_shipment">Port of Shipment
                  <input className="port" id="port_of_shipment"/>
                </label>
              </div>
              <div className="input">
                <label htmlFor="destination">Destination
                  <input className="destination" id="destination"/>
                </label>
              </div>
              <div className="input">
                <label htmlFor="date">Date
                  <input className="date" id="date"/>
                </label>
              </div>
              <div className="input">
                <label htmlFor="container_types">Container Types
                  <input className="container" id="container_types"/>
                </label>
              </div>
            </div>
          </div>
          <button type="button" className="search" id="search" style={{fontWeight: "bold"}}>Search</button>
        </div>
      </div>

      <div className="footer">
        <div className="footer-cont">
          <div className="text">
            <p>Info</p>
            <div>
              Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras
              redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
              inde.
            </div>
          </div>

          <div className="pages">
            <p>Pages</p>
            <div>Lörem ipsum</div>
            <div>Lörem ipsum</div>
            <div>Lörem ipsum</div>
            <div>Lörem ipsum</div>
          </div>

          <div className="Service">
            <p>Service</p>
            <div>Lörem ipsum</div>
            <div>Lörem ipsum</div>
            <div>Lörem ipsum</div>
          </div>

          <div className="map">
            <p>Maps Location</p>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.81500159905!2d76.94109341534657!3d43.25529887913699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836fb1fd99714f%3A0xb14acabfcaa5120f!2sKazakhstano-Britanskiy%20Tekhnicheskiy%20Universitet!5e0!3m2!1sen!2skz!4v1661422389067!5m2!1sen!2skz"
              width="570" height="155" style={{border: "0"}} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
