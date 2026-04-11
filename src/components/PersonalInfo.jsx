import { useState } from "react"

const PersonalInfo = ({onEditClick, isEditing, onSubmit, info, inputChange}) => {

  const {firstName, lastName, email, phoneNumber, address, city} = info

  if(!isEditing) {
    return(
      <>
        <h1>{firstName} {lastName}</h1>
        <div className="personal-details">
          <p>{phoneNumber}</p>
          <p>{email}</p>
          <p>{address}{address && city ? "," : ""} {city}</p>
        </div>
        <button onClick={onEditClick}>Edit</button>
      </>
    )
  }
  return (
    <div className="personal-container">
        <div className="head">
            <h2>Personal Details</h2>
        </div>
        <form className="personal-form" onSubmit={onSubmit}>
            <div className="field-wrapper">
              <label htmlFor="firstName">First name: </label>
              <input onChange={inputChange} value={firstName} type="text"  id="firstName" name="firstName" required/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="lastName">Last name: </label>
              <input onChange={inputChange} value={lastName} type="text"  id="lastName" name="lastName" required/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="email">E-mail: </label>
              <input onChange={inputChange} value={email} type="email" placeholder="E-mail" id="email" name="email" required/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="phoneNumber">Phone number: </label>
              <input onChange={inputChange} value={phoneNumber} type="tel" id="phoneNumber" name="phoneNumber" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" inputMode="numeric"/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="address">Address: </label>
              <input onChange={inputChange} value={address} type="text" placeholder="" id="address" name="address"/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="city">City: </label>
              <input onChange={inputChange} value={city} type="text" placeholder="" id="city" name="city"/>
            </div>
            
            <button type="submit" >Save</button>
        </form>
    </div>
  )
}

export default PersonalInfo