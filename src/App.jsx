import React from "react";
import 'normalize.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Activation from "./components/Register/Activation/Activation";
import NewPass from "./components/NewPass/NewPass";
import Reset from "./components/NewPass/Reset/Reset";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <div className="image"/>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/activation" element={<Activation/>}/>
            <Route path="/new_pass" element={<NewPass/>}/>
            <Route path="/reset" element={<Reset/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
