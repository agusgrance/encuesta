import React, { useState, useEffect, useContext } from "react";
import Preguntas from "../Preguntas/Preguntas";
import questionsEncuesta from "../../Api/questionsEncuesta";
import AnswerContext  from '../../Context/AnswerContext'
import { ProgressBar } from "react-bootstrap";
import axios from "axios";
import "./Card.css";
function Card() {
  const {answers, setAnswers, sliderVal, inputVal, encuestado, setEndQuiz } = useContext(AnswerContext);

  const [question, setQuestion] = useState(questionsEncuesta[0].question);
  const [tipo, setTipo] = useState(questionsEncuesta[0].type);
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);
  const[finish, setFinish] = useState(false);

  useEffect(() => {
    handleProgress();
    if(counter == (questionsEncuesta.length)-1)
    {
      setFinish(true);
      
    }
    else
    {
      setFinish(false);
    }
  }, [counter]);

  function handleProgress() {
    let p = (counter * 100) / (questionsEncuesta.length -1);
    setProgress(p);
  }

  function handleSiguiente() {
    setCounter(counter + 1);
    if (counter < questionsEncuesta.length) {
      setQuestion(questionsEncuesta[counter + 1].question);
      setTipo(questionsEncuesta[counter + 1 ].type);
        let obj = { pregunta: question , input: inputVal, slider: sliderVal };
        setAnswers([...answers, obj]);
        console.log(answers);
    }
   
  }
 
  function handleVolver() {
    if(counter != 0)
    {
      setCounter(counter - 1);
      setQuestion(questionsEncuesta[counter - 1].question);
      setTipo(questionsEncuesta[counter - 1].type);
    }
    
  }
  function handleFinish() {
    let obj = { pregunta: question , input: inputVal, slider: sliderVal };
    setAnswers([...answers, obj]);

       
      setEndQuiz(true); 
      console.log(answers);
  }
  return (
    <div className="card">
      <div className="card-content">
        <div className="pregunta">
          <div className="pregunta-content">
            <div className="top">
              <h5>
                Pregunta {counter + 1 } / {questionsEncuesta.length}
              </h5>
              <ProgressBar animated now={progress} />
            </div>

            <Preguntas question={question} tipo={tipo} counter={counter}/>
          </div>
        </div>

        <div className="botones">
          {counter && (
            <button onClick={()=>handleVolver()} className="btn left">
              Volver
            </button>
          )}
          {!finish ? <button onClick={handleSiguiente} className="btn right">
            Siguiente
          </button> : <button className="btn right" onClick={()=>handleFinish()}>
           Finalizar
          </button>}
          
        </div>
      </div>
    </div>
  );
}

export default Card;
