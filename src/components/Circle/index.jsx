import React from 'react'
import './styles.css';

export const Circle =({circleColor,circleHeight,circleWidth,circleMargin}) => {
  return (
    <div className="circle" style={{backgroundColor:circleColor,height: circleHeight, width:circleWidth,marginTop:circleMargin}}/>
  );
}
