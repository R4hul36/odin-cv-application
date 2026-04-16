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
        endYear: new Date().getFullYear().toString()
    })

    const [educationEditMode, setEducationEditMode] = useState(true)

    const handleEducationalInfoChange = (e) => {
        console.log(e.target.name);
        setEducationInfo((prevInfo)=> {
            if(e.target.name === "startYear"){
                if(e.target.value>prevInfo.endYear){
                    return ({...prevInfo, startYear:e.target.value, endYear: e.target.value})
                }
                
            }
            return ({...prevInfo, [e.target.name]: e.target.value})
        })
    }

    const handleEducationFormSubmit = (e) => {
        e.preventDefault()
        setEducationEditMode(false)
    }

    const onEducationEditClick = () => {
        setEducationEditMode(true)
    }

    // Experience state and handle functions

    const [experience, setExperience] = useState({
        position: '',
        company: '',
        startYear: '',
        endYear: ''
    })

    const handleExperienceInfoChange = (e) =>{
        setExperience((prevInfo) => {
            if(e.target.name === "startYear"){
                if(e.target.value>prevInfo.endYear) {
                    return {...prevInfo, startYear:e.target.value, endYear:e.target.value}
                }
            }
            return {...prevInfo, [e.target.name]: e.target.value}
        })
    }
    
    
    return <main>
        <PersonalInfo onEditClick = {onPersonalEditClick} isEditing = {personalEditMode} onSubmit={handlePersonalFormSubmit} info= {personalInfo} inputChange = {handlePersonalInfoChange}/>
        <Education onEditClick = {onEducationEditClick} isEditing={educationEditMode} onSubmit = {handleEducationFormSubmit} info = {educationInfo} inputChange = {handleEducationalInfoChange}/>
        <Experience info={experience} inputChange = {handleExperienceInfoChange}/>
    </main>
}

export default App