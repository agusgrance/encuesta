import React, { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card/Card";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import AnswerContext  from './Context/AnswerContext'


function App() {
  
  const { login } = useContext(AnswerContext);
  return (
    <div className="App">
      
        <header className="App-header">
          <Nav />
        </header>
        {!login ? <Login />: <Card /> }
      
    </div>
  );
}

export default App;
