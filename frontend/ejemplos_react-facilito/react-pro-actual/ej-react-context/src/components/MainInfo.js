import React, { useContext } from 'react'
import {FormContext} from './Form'

const MainInfo = () => {

    const ctx = useContext(FormContext)

    return (
        <div>
            <input type="email" value={ctx.email} onChange={(e) => ctx.setEmail(e.target.value)}/>
            <input type="password" value={ctx.password} onChange={(e) => ctx.setPassword(e.target.value)}/>
        </div>
    )
}

export default MainInfo
