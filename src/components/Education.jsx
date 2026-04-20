import React from 'react'
import '../styles/education.css'


const Education = ({onEditClick, isEditing, onSubmit, info, inputChange}) => {

  const {degree, school, startYear, endYear} = info
  const start = 1960
  const length = 71
  const years = Array.from({length}, (_, i) => start + i)

  {if(!isEditing){
    return(
      <div >
        <div className="head"></div>
       <h2>Education</h2>
       <p>{degree} {startYear}-{endYear}</p>
       <button onClick={onEditClick}>Edit</button>
      </div>
    )
  }}

  return (
    <div className="education-container">
      <div className="head">
        <h2>Education</h2>
      </div>
      <form  className="education-form" onSubmit={onSubmit}>
        <div className="field-wrapper">
          <label htmlFor="degree">Degree </label>
          <input onChange={inputChange} value={degree} type="text"  id="degree" name="degree" required/>
        </div>
        <div className="field-wrapper">
          <label htmlFor="school">School </label>
          <input onChange={inputChange} value={school} type="text"  id="school" name="school" required/>
        </div>
        <div className="date-selectors">
          <div className="field-wrapper">
            <label htmlFor="start">Start </label>
            <select id='start' value={startYear} onChange={inputChange} name="startYear">
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
          <div className="field-wrapper">
            <label htmlFor="end">End </label>
            <select id='end' value={endYear}  onChange={inputChange} name="endYear">
              {years.filter(year => year>=startYear).map(year => <option key={year}  value={year}>{year}</option>)}
            </select>
          </div>
        </div>
        <button type="submit" className='submit-btn'>Save</button>
      </form>
    </div>
  )
}

export default Education