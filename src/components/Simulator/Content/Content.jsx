import React, {useState} from 'react';
import s from "./Content.module.css";

function Content() {

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  const cifStyle = {
    backgroundColor: isActive ? "#008fff" : "#82c8ff"
  }

  const dapStyle = {
    backgroundColor: isActive? "#82c8ff" : "#008fff"
  }

  return (
    <section className={s.content}>
      <div className={s.tabs}>
        <button type="button" className={s.cif} style={cifStyle} onClick={handleClick}>CIF</button>
        <button type="button" className={s.dap} style={dapStyle} onClick={handleClick}>DAP</button>
      </div>

      <div className={s.searchBar}>
        <div className={s.inputs}>
          <div className={s.allInput}>
            <div>
              <label className={s.simLabel} htmlFor="port_of_shipment">Port of Shipment
                <input className={s.simInput} id="port_of_shipment"/>
              </label>
            </div>
            <div>
              <label className={s.simLabel} htmlFor="destination">Destination
                <input className={s.simInput} id="destination"/>
              </label>
            </div>
            <div>
              <label className={s.simLabel} htmlFor="date">Date
                <input className={s.simInput} id="date"/>
              </label>
            </div>
            <div>
              <label className={s.simLabel} htmlFor="container_types">Container Types
                <input className={s.simInput} id="container_types"/>
              </label>
            </div>
          </div>
        </div>
        <button type="button" className={s.search} id="search" style={{fontWeight: "bold"}}>Search</button>
      </div>
    </section>
  );
};

export default Content;