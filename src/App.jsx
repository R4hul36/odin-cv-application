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

    return <main>
        <PersonalInfo />
        <Education />
        <Experience />
    </main>
}

export default App