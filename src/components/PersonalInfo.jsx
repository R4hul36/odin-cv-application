import { useState } from "react"

const PersonalInfo = ({info, inputChange}) => {
  return (
    <div className="personal-container">
        <div className="head">
            <h2>Personal Details</h2>
        </div>
        <form className="personal-form">
            <div className="field-wrapper">
              <label htmlFor="firstName">First name: </label>
              <input onChange={inputChange} value={info.firstName} type="text"  id="firstName" name="firstName" required/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="lastName">Last name: </label>
              <input onChange={inputChange} value={info.lastName} type="text"  id="lastName" name="lastName" required/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="email">E-mail: </label>
              <input onChange={inputChange} value={info.email} type="email" placeholder="E-mail" id="email" name="email" required/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="phoneNumber">Phone number: </label>
              <input onChange={inputChange} value={info.phoneNumber} type="tel" id="phoneNumber" name="phoneNumber" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" inputMode="numeric"/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="address">Address: </label>
              <input onChange={inputChange} value={info.address} type="text" placeholder="" id="address" name="address"/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="zipCode">Zip code: </label>
              <input onChange={inputChange} value={info.zipCode} type="text" placeholder="" id="zipCode" name="zipCode" inputMode="numeric"/>
            </div>
            <div className="field-wrapper">
              <label htmlFor="city">City: </label>
              <input onChange={inputChange} value={info.city} type="text" placeholder="" id="city" name="city"/>
            </div>
            
            <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default PersonalInfo