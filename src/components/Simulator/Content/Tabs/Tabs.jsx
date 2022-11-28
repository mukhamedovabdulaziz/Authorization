import React, {useState} from 'react';
import s from "./Tabs.module.css";

function Tabs() {

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  const cifStyle = {
    backgroundColor: isActive ? "#008fff" : "#82c8ff"
  }

  const dapStyle = {
    backgroundColor: isActive ? "#82c8ff" : "#008fff"
  }

  return (
    <div className={s.tabs}>
      <button type="button" className={s.cif} style={cifStyle} onClick={handleClick}>CIF</button>
      <button type="button" className={s.dap} style={dapStyle} onClick={handleClick}>DAP</button>
    </div>
  );
}

export default Tabs;