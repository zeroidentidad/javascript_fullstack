import React, { useContext } from 'react'
import {ThemeContext} from '../App'

 const Card = () => {
     
    const context = useContext(ThemeContext)

    return (
        <div style={context/*.dark*/}>
            <p>Hola mundo</p>
        </div>
    )
}

export default Card