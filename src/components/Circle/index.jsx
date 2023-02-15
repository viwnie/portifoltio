import React from 'react'
import './styles.css';

export const Circle =({circleColor,circlePosition ,circleHeight,circleWidth,circleMargin, circleAnimation,text,fontSize,img,altImg, onClick, opacity}) => {
  return (
    <div className="circle" onClick={onClick} style={{background:circleColor,height: circleHeight, width:circleWidth,marginTop:circleMargin  , animation: circleAnimation ,position: circlePosition ,opacity:opacity}}> <h1 style={{fontSize:fontSize}} >{text}</h1> <img src={img} alt={altImg} /> </div>
  );
}
