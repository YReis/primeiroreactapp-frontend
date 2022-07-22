import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./Pages/Books";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Matriz from "./Components/Matriz/Matriz";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Matriz>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/home" exact element={<Home />} />
              <Route path="/books" exact element={<Books />} />
              <Route path="/movies" exact element={<Movies />} />
              <Route path="/login" exact element={<Login />} />
            </Routes>
          </BrowserRouter>
        </Matriz>
      </header>
    </div>
  );
}

export default App;
