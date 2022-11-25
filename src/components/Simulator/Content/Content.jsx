import React from 'react';
import s from "./Content.module.css";
import Tabs from "./Tabs/Tabs";
import SearchBar from "./SearchBar/SearchBar";

function Content() {

  return (
    <section className={s.content}>
      <Tabs/>
      <SearchBar/>
    </section>
  );
}

export default Content;