import React, { useState, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card/Card";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import AnswerContext  from './Context/AnswerContext'
import EndQuiz from "./Components/EndQuiz/EndQuiz";


function App() {
  
  const { login, endQuiz } = useContext(AnswerContext);
  return (
    <div className="App">
      
        <header className="App-header">
          <Nav />
        </header>
  
        {endQuiz ? <EndQuiz/>
        
        :login
         ? <Login />
         : <Card /> }
      
    </div>
  );
}

export default App;
