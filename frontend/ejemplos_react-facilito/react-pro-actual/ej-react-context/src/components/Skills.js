import React, {useContext} from 'react'
import {FormContext} from './Form'

const Skills = () => {

    const ctx = useContext(FormContext)

    const addSkills = (value, list) => {
        ctx.setSkills([value].concat(ctx.skills))
    }

    const removeSkills = (value, list) => ctx.setSkills(ctx.skills.filter(v=>v!==value))

    return (
        <div>
            <p>{ctx.email}</p>
            <label htmlFor="">
                <input type="checkbox" name="likes[]" 
                onChange={(e)=>e.target.checked ? addSkills("Golang") : removeSkills("Golang")}
                />
                Golang
            </label>
            <label htmlFor="">
                <input type="checkbox" name="likes[]" 
                onChange={(e)=>e.target.checked ? addSkills("JavaScript") : removeSkills("JavaScript")}
                />
                JavaScript
            </label>
        </div>
    )
}

export default Skills
