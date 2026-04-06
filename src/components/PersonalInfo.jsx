import { useState } from "react"

const PersonalInfo = () => {
  return (
    <div className="personal-container">
        <div className="head">
            <h2>Personal Informtion</h2>
            <button className="personal-btn btn">Edit</button>
        </div>
        <form className="personal-forma">
            <label for="name">
                Name: 
            </label>
            <input type="text" placeholder="Name" id="name"/>
        </form>
    </div>
  )
}

export default PersonalInfo