import React, { createContext, useState } from "react";

const AnswerContext = createContext();

export function AnswerProvider({ children }) {
    const [login, setLogin] = useState(true);
  const [encuestado, setEncuestado] = useState({
    nombre: '',
    empresa:'',
    email:'',
    telefono:'',
  });
  const[sliderVal, setSliderVal] = useState(null);
  const[inputVal, setInputVal] = useState('');
  const [answers, setAnswers] = useState([]);
  const [endQuiz, setEndQuiz] = useState(false);

    return (
      <AnswerContext.Provider
        value={{
            answers, setAnswers,login, setLogin, encuestado, setEncuestado,sliderVal, setSliderVal,inputVal, setInputVal, 
            endQuiz, setEndQuiz
        }}
      >
        {children}
      </AnswerContext.Provider>
    );
  }
  
  export default AnswerContext;