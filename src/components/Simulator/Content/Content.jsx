import React from 'react';
import s from "./Content.module.css";
import Tabs from "./Tabs/Tabs";
import SearchBar from "./SearchBar/SearchBar";
import FilterBar from "./FilterBar/FilterBar";

function Content() {

  return (
    <section className={s.content}>
      <Tabs/>
      <SearchBar/>
      <FilterBar/>
    </section>
  );
}

export default Content;