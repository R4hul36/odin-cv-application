import React from 'react'

const Education = ({info, inputChange}) => {

  const {degree, school, startYear, endYear} = info
  const start = 1960
  const length = 71
  const years = Array.from({length}, (_, i) => start + i)
  return (
    <div className="education-container">
      <div className="head">
        <h2>Education</h2>
      </div>
      <form  className="education-form">
        <div className="field-wrapper">
          <label htmlFor="degree">Degree </label>
          <input onChange={inputChange} value={degree} type="text"  id="degree" name="degree" required/>
        </div>
        <div className="field-wrapper">
          <label htmlFor="school">School </label>
          <input onChange={inputChange} value={school} type="text"  id="school" name="school" required/>
        </div>
        <div className="field-wrapper">
          <label htmlFor="start">Start </label>
          <select id='start' value={startYear} onChange={inputChange} name="startYear">
            {years.map(year => <option key={year} value={year}>{year}</option>)}
          </select>
        </div>
      </form>
    </div>
  )
}

export default Education