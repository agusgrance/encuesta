import React, { useState, useEffect, useLayoutEffect } from "react";
import Preguntas from "../Preguntas/Preguntas";
import questionsEncuesta from "../../Api/questionsEncuesta";
import { ProgressBar } from "react-bootstrap";
import "./Card.css";
function Card() {
  const [question, setQuestion] = useState(questionsEncuesta[0].question);
  const [tipo, setTipo] = useState(questionsEncuesta[0].type);
  const [counter, setCounter] = useState(1);
  const [progress, setProgress] = useState(0);
  const[finish, setFinish] = useState(false);

  useEffect(() => {
    handleProgress();
    if(counter == questionsEncuesta.length)
    {
      setFinish(true);
    }
    else
    {
      setFinish(false);
    }
  }, [counter]);

  function handleProgress() {
    let p = (counter * 100) / questionsEncuesta.length;
    setProgress(p);
  }

  function handleSiguiente() {
    if (counter <= questionsEncuesta.length) {
      setCounter(counter + 1);
      setQuestion(questionsEncuesta[counter + 1].question);
    setTipo(questionsEncuesta[counter + 1].type);
    }
   
  }
 
  function handleVolver() {
    if(counter - 1 != 0)
    {
      setCounter(counter - 1);
      setQuestion(questionsEncuesta[counter - 1].question);
      setTipo(questionsEncuesta[counter - 1].type);
    }
    
  }
  return (
    <div className="card">
      <div className="card-content">
        <div className="pregunta">
          <div className="pregunta-content">
            <div className="top">
              <h5>
                Pregunta {counter} / {questionsEncuesta.length}
              </h5>
              <ProgressBar animated now={progress} />
            </div>

            <Preguntas question={question} tipo={tipo} counter={counter}/>
          </div>
        </div>

        <div className="botones">
          {counter && (
            <button onClick={handleVolver} className="btn left">
              Volver
            </button>
          )}
          {!finish ? <button onClick={handleSiguiente} className="btn right">
            Siguiente
          </button> : <button className="btn right">
           Finalizar
          </button>}
          
        </div>
      </div>
    </div>
  );
}

export default Card;
