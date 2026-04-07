import { useState } from "react"

const PersonalInfo = ({info, inputChange}) => {
  return (
    <div className="personal-container">
        <div className="head">
            <h2>Personal Informtion</h2>
        </div>
        <form className="personal-form">
            <label htmlFor="name">Name: </label>
            <input onChange={inputChange} value={info.name}type="text" placeholder="Name" id="name" name="name"/>
            <label htmlFor="email">E-mail: </label>
            <input type="email" placeholder="E-mail" id="email"/>

        </form>
    </div>
  )
}

export default PersonalInfo