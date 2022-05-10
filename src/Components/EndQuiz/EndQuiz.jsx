import React, { useContext, useState } from "react";
import "./EndQuiz.css";
import questionsEncuesta from "../../Api/questionsEncuesta";
import AnswerContext from "../../Context/AnswerContext";
import { Button } from "react-bootstrap";
import axios from "axios";
function EndQuiz() {
  const { answers, encuestado } = useContext(AnswerContext);

  const [sendIt, setSendIt] = useState(false);

  function sendQuiz() {
    axios.post("http://localhost:3001/api/insert/empresa", {
      nombre: encuestado.nombre,
      empresa: encuestado.empresa,
      email: encuestado.email,
      telefono: encuestado.telefono,
    });

    answers.map((val) => {
      axios.post("http://localhost:3001/api/insert/respuesta", {
        empresa: encuestado.empresa,
        pregunta: val.pregunta,
        respuesta: val.input ? val.input : val.slider,
      });
    });
    setSendIt(true);
  }
  return (
    <div className="card">
      <div className="pregunta-content end">
       {
           !sendIt ? <>
           <h3>Respuestas Seleccionadas:</h3>
        {answers.map((val, key) => {
          return (
            <ul key={key}>
                <li>
                    <strong>Pregunta:</strong> {val.pregunta}
                </li>
                <li>
                <strong> Respuesta:</strong> {val.slider ? val.slider : val.input}
                </li>
               
            </ul>
          );
        })}

        <Button variant="primary" onClick={() => sendQuiz()}>
          Enviar
        </Button>
           </>
           :
           <>
           <h3>
               ¡Muchas Gracias por Participar en la Encuesta!
           </h3>
           </>
       }
        
        </div>
      </div>
    
  );
}

export default EndQuiz;
