import { useState } from "react"
import Education from "./components/Education"
import Experience from "./components/Experience"
import PersonalInfo from "./components/PersonalInfo"


const App = () => {

    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName:'',
        email: '',
        phoneNumber: '',
        address: '',
        city: ''
    })

    const [educationInfo, setEducationInfo] = useState({
        degree:'',
        school:'',
        startYear: new Date().getFullYear().toString(),
        endYear: ''
    })


    const [personalEditMode, setPersonalEditMode] = useState(true)
    const [educationEditMode, setEducationEditMode] = useState(true)

    const handlePersonalInfoChange = (e) => {
        setPersonalInfo((prevInfo) => ({...prevInfo, [e.target.name]: e.target.value}))
    }
    const handleEducationalInfoChange = (e) => {
        setEducationInfo((prevInfo) => ({...prevInfo, [e.target.name]: e.target.value}))
    }

    const handlePersonalFormSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted")
        setPersonalEditMode(false)
        

    }

    const onEditBtnClick = () => {
        setPersonalEditMode(true)
    }
    
    
    return <main>
        <PersonalInfo onEditClick = {onEditBtnClick} isEditing = {personalEditMode} onSubmit={handlePersonalFormSubmit} info= {personalInfo} inputChange = {handlePersonalInfoChange}/>
        <Education info = {educationInfo} inputChange = {handleEducationalInfoChange}/>
        <Experience />
    </main>
}

export default App