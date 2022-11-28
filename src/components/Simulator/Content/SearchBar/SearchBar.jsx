import React from 'react';
import s from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={s.searchBar}>
      <div className={s.inputs}>
        <div className={s.allInput}>
          <div>
            <label className={s.simLabel} htmlFor="port_of_shipment">
              Port of Shipment
              <input className={s.simInput} id="port_of_shipment"/>
            </label>
          </div>
          <div>
            <label className={s.simLabel} htmlFor="destination">
              Destination
              <input className={s.simInput} id="destination"/>
            </label>
          </div>
          <div>
            <label className={s.simLabel} htmlFor="date">
              Date
              <input className={s.simInput} id="date"/>
            </label>
          </div>
          <div>
            <label className={s.simLabel} htmlFor="container_types">
              Container Types
              <input className={s.simInput} id="container_types"/>
            </label>
          </div>
        </div>
      </div>
      <button type="button" className={s.search} id="search" style={{fontWeight: "bold"}}>Search</button>
    </div>
  );
}

export default SearchBar;