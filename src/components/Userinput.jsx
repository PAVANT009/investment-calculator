import React from 'react'

export default function Userinput({value,text,handleChange,name}) {
  return (
    <div className="input-group">
      <label htmlFor="userInput1">{text}</label>
      <input type="number" name={name} value={value} id="userInput1" onChange={handleChange}/>
    </div>
  )
}
