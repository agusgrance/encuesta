import React, {useContext, useEffect} from 'react'
import AnswerContext  from '../../Context/AnswerContext'
import Slide from '../Slide/Slide'
import "./Preguntas.css"
  
function Preguntas({question, tipo, counter}) {
    const { setSliderVal, inputVal, setInputVal } = useContext(AnswerContext);
    useEffect(()=>{
        setSliderVal(null);
        setInputVal('');
      },[counter]);


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