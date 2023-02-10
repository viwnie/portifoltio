import React from 'react'
import './styles.css';

export const Circle =({circleColor,circleHeight,circleWidth,circleMargin, circleDelay,text,fontSize,img,altImg}) => {
  return (
    <div className="circle" style={{backgroundColor:circleColor,height: circleHeight, width:circleWidth,marginTop:circleMargin , animationDuration: circleDelay }}> <h1 style={{fontSize:fontSize}} >{text}</h1> <img src={img} alt={altImg} /> </div>
  );
}
