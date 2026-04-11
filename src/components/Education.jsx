import React from 'react'

const Education = ({info, inputChange}) => {
  return (
    <div className="education-container">
      <div className="head">
        <h2>Education</h2>
        <div className="field-wrapper">
          <label htmlFor="degree">Degree </label>
          <input onChange={inputChange} value={info.degree} type="text"  id="degree" name="degree" required/>
        </div>
        <div className="field-wrapper">
          
        </div>
        <div className="field-wrapper">
          
        </div>
      </div>
    </div>
  )
}

export default Education