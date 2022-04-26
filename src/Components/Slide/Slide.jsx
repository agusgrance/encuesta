import React, { useEffect, useState, useContext} from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import AnswerContext  from '../../Context/AnswerContext'
function Slide() {
  const { sliderVal, setSliderVal, answers} = useContext(AnswerContext);
 
  const onSliderChange = (value) => {
    setSliderVal(value);
    console.log(answers);
  
  };

  return (
    <div className='slider'>
        <Slider min={0} defaultValue={0}  value ={sliderVal} marks={{ 0: 1, 25: 2, 50: 3, 75: 4, 100: 5 }} step={25} onChange={onSliderChange}/>
    </div>
  )
}

export default Slide;