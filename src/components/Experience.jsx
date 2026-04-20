import '../styles/experience.css'

const Experience = ({onEditClick, isEditing, onSubmit, info, inputChange}) => {
  
  const {position, company, startYear, endYear} = info
  const start = 1960
  const length = 71
  const years = Array.from({length}, (_, i) => start + i)
  
  return (
    <div className="experience-container">
      <div className="head">
        <h2>Work Experience</h2>
      </div>
      {isEditing ? 
      (
        <form  className="experience-form" onSubmit={onSubmit}>
          <div className="field-wrapper">
            <label htmlFor="position">Position </label>
            <input onChange={inputChange} value={position} type="text"  id="position" name="position" required/>
          </div>
          <div className="field-wrapper">
            <label htmlFor="company">Company</label>
            <input onChange={inputChange} value={company} type="text"  id="company" name="company" required/>
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
          <button type="submit" className='submit-btn' >Save</button>
        </form>
      ) : 
      (
        <>
          <p>{position} {startYear}-{endYear}</p>
        <button onClick={onEditClick}>Edit</button>
        </>
    )}
      
    </div>
  )
}

export default Experience