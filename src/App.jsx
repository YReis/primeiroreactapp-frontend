import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sports from "./Pages/Sports";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/sports" exact element={<Sports />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
