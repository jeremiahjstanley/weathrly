import React, { Component } from 'react';

const CurrentWeather = ({ city, condition, day, temperature, high, low, summary }) => {
  return (
    <div> 
      <h2> { city } </h2>
      <h3> { condition } </h3>
      <h1> { temperature } </h1>
      <h3> { day } TODAY</h3>
      <h3> { high },{ low } </h3>
      <p> { summary } </p>
    </div> 
    )
} 

export default CurrentWeather;