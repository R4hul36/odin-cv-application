import { useState } from "react"
import Education from "./components/Education"
import Experience from "./components/Experience"
import PersonalInfo from "./components/PersonalInfo"


const App = () => {

    // Personal components state and handler functions
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName:'',
        email: '',
        phoneNumber: '',
        address: '',
        city: ''
    })
    const [personalEditMode, setPersonalEditMode] = useState(true)
    const handlePersonalInfoChange = (e) => {
        setPersonalInfo((prevInfo) => ({...prevInfo, [e.target.name]: e.target.value}))
    }
    const handlePersonalFormSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted")
        setPersonalEditMode(false)
        
    }

    const onPersonalEditClick = () => {
        setPersonalEditMode(true)
    }


    // Education state and handle functions
    const [educationInfo, setEducationInfo] = useState({
        degree:'',
        school:'',
        startYear: new Date().getFullYear().toString(),
        endYear: ''
    })

    const [educationEditMode, setEducationEditMode] = useState(true)

    const handleEducationalInfoChange = (e) => {
        setEducationInfo((prevInfo) => ({...prevInfo, [e.target.name]: e.target.value}))
    }

    const handleEducationFormSubmit = (e) => {
        e.preventDefault()
        setEducationEditMode(false)
    }

    const onEducationEditClick = () => {
        setEducationEditMode(true)
    }

    
    
    return <main>
        <PersonalInfo onEditClick = {onPersonalEditClick} isEditing = {personalEditMode} onSubmit={handlePersonalFormSubmit} info= {personalInfo} inputChange = {handlePersonalInfoChange}/>
        <Education onEditClick = {onEducationEditClick} isEditing={educationEditMode} onSubmit = {handleEducationFormSubmit} info = {educationInfo} inputChange = {handleEducationalInfoChange}/>
        <Experience />
    </main>
}

export default App