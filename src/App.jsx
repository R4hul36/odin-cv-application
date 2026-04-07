import { useState } from "react"
import Education from "./components/Education"
import Experience from "./components/Experience"
import PersonalInfo from "./components/PersonalInfo"


const App = () => {

    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    })

    const handlePersonalInfoChange = (e) => {
        setPersonalInfo((prevInfo) => ({...prevInfo, [e.target.name]: e.target.value}))
    }

    return <main>
        <PersonalInfo info= {personalInfo} inputChange = {handlePersonalInfoChange}/>
        <Education />
        <Experience />
    </main>
}

export default App