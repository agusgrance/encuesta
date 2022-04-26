import React, {useContext, useEffect} from 'react'
import AnswerContext  from '../../Context/AnswerContext'
import Slide from '../Slide/Slide'
import "./Preguntas.css"
  
function Preguntas({question, tipo, counter}) {
    const {answers, setAnswers, sliderVal, setSliderVal, inputVal, setInputVal } = useContext(AnswerContext);
    useEffect(()=>{
        handleAnswers();
        setSliderVal(null);
        setInputVal('');
        
      },[counter]);

      function handleAnswers(){
        let obj = { pregunta: question , input: inputVal, slider: sliderVal };
        setAnswers([...answers, obj]);
        // console.log(answers);
      }

    const handleInput = (e) =>{
        setInputVal(e.target.value);
    }
    return (<>
        
                <div className='pregunta-left'>
                {question}
    
                </div>
                <div className='pregunta-right'>
                    {tipo == "slider" ? <Slide /> : <input type={tipo} onChange={handleInput} value={inputVal}/> }
                </div>
            </> 
      )
}

export default Preguntas