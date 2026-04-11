import React from 'react'

const Education = ({info, inputChange}) => {
  const start = 1960
  const length = 71
  const years = Array.from({length}, (_, i) => start + i)
  return (
    <div className="education-container">
      <div className="head">
        <h2>Education</h2>
        <div className="field-wrapper">
          <label htmlFor="degree">Degree </label>
          <input onChange={inputChange} value={info.degree} type="text"  id="degree" name="degree" required/>
        </div>
        <div className="field-wrapper">
          <label htmlFor="school">School </label>
          <input onChange={inputChange} value={info.school} type="text"  id="school" name="school" required/>
        </div>
        <div className="field-wrapper">
          <label htmlFor="start">Start </label>
          <select id='start' value="2026">
            {years.map(year => <option  >{year}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Education