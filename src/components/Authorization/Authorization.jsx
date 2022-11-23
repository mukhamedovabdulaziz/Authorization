import React from "react";
import 'normalize.css';
import './Authorization.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Activation from "../Register/Activation/Activation";
import NewPass from "../NewPass/NewPass";
import Reset from "../NewPass/Reset/Reset";

function Authorization() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <div className="image"/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
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

export default Authorization;
