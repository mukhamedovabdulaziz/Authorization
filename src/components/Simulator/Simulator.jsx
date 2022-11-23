import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Simulator.module.css';

function Simulator() {
  return (
    <div>
      <header className={s.header}>
        {/* eslint-disable-next-line global-require */}
        <img src={require("../../images/logo.png")} alt="logo" id="logo" style={{height: "50px"}}/>
          <div className={s.navigation}><NavLink className={s.navLink} to="#">INPUT FORM</NavLink></div>
          <div className={s.navigation}><NavLink className={s.navLink} to="#">CHARGES FORM</NavLink></div>
          <div className={s.navigation}><NavLink className={s.navLink} to="#">INLAND CARRIER</NavLink></div>
          <div className={s.navigation}><NavLink className={s.navLink} to="#">CC DESTINATION</NavLink></div>
          <div className={s.navigation}><NavLink className={s.navLink} to="#">FORWARDER RATES</NavLink></div>
          <div className={s.navigation}><NavLink className={s.navLink} to="#">IL INLAND SUPPLIER</NavLink></div>
          <div className={s.navigation}><NavLink className={s.navLink} to="#">LOCAL CHARGES</NavLink></div>
          <div id="profile">Name Surname</div>
      </header>

      <section className={s.content}>
        <div className={s.tabs}>
          <div className={s.cif} id="cif">CIF</div>
          <div className={s.dap} id="dap">DAP</div>
        </div>

        <div className={s.searchBar}>
          <div className={s.inputs}>
            <div className={s.allInput}>
              <div>
                <label className="simLabel" htmlFor="port_of_shipment">Port of Shipment
                <input className="simInput" id="port_of_shipment"/>
                </label>
              </div>
              <div>
                <label className="simLabel" htmlFor="destination">Destination
                <input className="simInput" id="destination"/>
                </label>
              </div>
              <div>
                <label className="simLabel" htmlFor="date">Date
                <input className="simInput" id="date"/>
              </label>
              </div>
              <div>
                <label className="simLabel" htmlFor="container_types">Container Types
                <input className="simInput" id="container_types"/>
                </label>
              </div>
            </div>
          </div>
          <button type="button" className={s.search} id="search" style={{fontWeight: "bold"}}>Search</button>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={s.footerCont}>
          <div className={s.text}>
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

          <div className="service">
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
      </footer>
    </div>
  );
}

export default Simulator;