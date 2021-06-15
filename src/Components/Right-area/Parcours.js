import React from 'react'
import About from './Components/About'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Achievements from './Components/Achievements'
import Hobbies from './Components/Hobbies'
function Parcours() {
    return (
        <div className="col-12 col-md-8 right-area py-3">
            <About /> 
            <Experience />
            <Education />
            <Achievements />
            <Hobbies />
        </div>
    )
}

export default Parcours
