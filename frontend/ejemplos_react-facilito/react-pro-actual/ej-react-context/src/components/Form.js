import React, { useState } from 'react'
import MainInfo from './MainInfo'
import Skills from './Skills'

export const FormContext = React.createContext()

const Form = () => {

    const [email, setEmail] = useState('default@email.com')
    const [password, setPassword] = useState('')
    const [skills, setSkills] = useState('')

    return (
        <form>
            <FormContext.Provider value={{ email, password, skills, setEmail, setPassword, setSkills}}>
            <MainInfo />
            <Skills />
            </FormContext.Provider>
            <div>
                <p>Email: {email}</p>
                <p>Contraseña: {password}</p>
                <p>Skills: {skills}</p>
            </div>
        </form>
    )
}

export default Form
