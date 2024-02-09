import React, { useState } from 'react'
import './Card.css'
import {AnimateSharedLayout}  from
'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card= (props) =>{

  const [expended, setexpended] = useState(false)
  return (
    <AnimateSharedLayout>
      {
        expended ? (
          'Expanded'
        ):
        <CompactCard param = {props}/>
      }

    </AnimateSharedLayout>
  )
}

//compactCard
function CompactCard({param}){
  const Png = param.png;
  return(
    <div className="CompactCard"
    style={{
      background : param.color.backGround,
      boxShadow : param.color.boxShadow
    }}>
      <div className="radialBar">
        <CircularProgressbar value={param.barValue}
        text={`${param.barValue}%`}
        /> 
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png/>
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  )
}




export default Card