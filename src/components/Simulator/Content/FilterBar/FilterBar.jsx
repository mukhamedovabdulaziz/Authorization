import React from 'react';
import s from "./FilterBar.module.css";

function FilterBar() {
  return (
    <div className={s.filterBar}>
      <h3>Activity</h3>
      <div>
        <label htmlFor="current">
          <input className={s.filterInput} type="checkbox" value="current"/>
          Current
        </label>
      </div>
      <div>
        <label htmlFor="active">
          <input className={s.filterInput} type="checkbox" value="active"/>
          Active
        </label>
      </div>
      <div>
        <label htmlFor="expired">
          <input className={s.filterInput} type="checkbox" value="expired"/>
          Expired
        </label>
      </div>
      <div>
        <label htmlFor="future">
          <input className={s.filterInput} type="checkbox" value="future"/>
          Future
        </label>
      </div>
      <div>
        <label htmlFor="archived">
          <input className={s.filterInput} type="checkbox" value="archived"/>
          Archived
        </label>
      </div>

        <h3>Offer ID</h3>
        <input className={s.offer} type="text"/>

        <h3>Shipping Lines</h3>
        <button type="button" className={s.shipping}>MSC</button>

      <div>
        <label htmlFor="archived">
          <input className={s.filterInput} type="checkbox" value="direct"/>
          Direct
        </label>
      </div>
    </div>
  );
}

export default FilterBar;