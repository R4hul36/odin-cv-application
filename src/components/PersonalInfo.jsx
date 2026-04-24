import '../styles/personal.css'

const PersonalInfo = ({onEditClick, isEditing, onSubmit, info, inputChange}) => {

  const {firstName, lastName, email, phoneNumber, address, city, zipCode, summary} = info
  let fullName
  if(firstName && lastName){
    fullName = firstName[0].toUpperCase() + firstName.slice(1) + " " + lastName[0].toUpperCase() + lastName.slice(1)
  }

  if(!isEditing) {
    return(
      <>
        <header className="header">
          <h1>{fullName}</h1>
          <button onClick={onEditClick} className='edit-btn'>Edit</button>
        </header>
        
        <div className="personal-details">
          <p>{phoneNumber} | {email} | {address}{address && city ? ", " : ""}{city}{city && zipCode ? ", " : ""}{zipCode}</p>
        </div>
        {summary.trim().length>0 && 
          <div className='summary-section'>
            <h2>Summary</h2>
            <p>{summary}</p>
          </div>
        }
      </>
    )
  }
  return (
    <div className="personal-container">
        <div className="head">
            <h2>Personal Details</h2>
        </div>
        <form className="personal-form" onSubmit={onSubmit}>
            <div className="full-name">
              <div className="field-wrapper">
                <label htmlFor="firstName">First name *</label>
                <input onChange={inputChange} value={firstName} type="text"  id="firstName" name="firstName" required/>
              </div>
              <div className="field-wrapper">
                <label htmlFor="lastName">Last name *</label>
                <input onChange={inputChange} value={lastName} type="text"  id="lastName" name="lastName" required/>
              </div>
            </div>
            <div className="field-wrapper">
              <label htmlFor="email">E-mail</label>
              <input onChange={inputChange} value={email} type="email" placeholder="E-mail" id="email" name="email" required/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="phoneNumber">Phone</label>
              <input onChange={inputChange} value={phoneNumber} type="tel" id="phoneNumber" name="phoneNumber" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" inputMode="numeric"/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="address">Address</label>
              <input onChange={inputChange} value={address} type="text" placeholder="" id="address" name="address"/>
            </div>
            <div className="location-group">
              <div className="field-wrapper">
                <label htmlFor="city">City</label>
                <input onChange={inputChange} value={city} type="text" placeholder="" id="city" name="city"/>
              </div>
              <div className="field-wrapper">
                <label htmlFor="zipCode">Zip Code</label>
                <input onChange={inputChange} value={zipCode} type="text" inputMode="numeric" id="zipCode" name="zipCode" pattern='\d{5}'/>
              </div>
            </div>
            <div className="field-wrapper">
              <label htmlFor="city">Summary</label>
              <textarea onChange={inputChange} value={summary} placeholder="" id="summary" name="summary" rows="5" cols="50"></textarea>
            </div>
            
            <button className="submit-btn" type="submit" >Save</button>
        </form>
    </div>
  )
}

export default PersonalInfo