import React, { useContext } from 'react'
import {ThemeContext} from '../App'

 const Button = () => {
     
    const context = useContext(ThemeContext)

    return (
        <button style={context.dark}>
            Click me!
        </button>
    )
}

export default Button