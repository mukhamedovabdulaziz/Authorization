import React from "react";
import 'normalize.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Activation from "./components/Register/Activation/Activation";
import NewPass from "./components/NewPass/NewPass";
import Reset from "./components/NewPass/Reset/Reset";
import Simulator from "./components/Simulator/Simulator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/activation" element={<Activation/>}/>
            <Route path="/new_pass" element={<NewPass/>}/>
            <Route path="/reset" element={<Reset/>}/>
            <Route path="/simulator" element={<Simulator/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
