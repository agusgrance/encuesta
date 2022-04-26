import React, { createContext, useState } from "react";

const AnswerContext = createContext();

export function AnswerProvider({ children }) {
    const [login, setLogin] = useState(true);
  const [encuestado, setEncuestado] = useState({
    nombre: '',
    empresa:'',
    email:'',
    telefono:''
  });
  const[sliderVal, setSliderVal] = useState(null);
  const[inputVal, setInputVal] = useState('');
    const [answers, setAnswers] = useState([{
        pregunta:'',
        input:'',
        slider:0,
    }]);
    return (
      <AnswerContext.Provider
        value={{
            answers, setAnswers,login, setLogin, encuestado, setEncuestado,sliderVal, setSliderVal,inputVal, setInputVal
        }}
      >
        {children}
      </AnswerContext.Provider>
    );
  }
  
  export default AnswerContext;