import React from 'react'
import Home from './Home'
import Toolbar from './Toolbar'

function getScene(scene) {
    switch (scene) {
        case 'Home':
            return Home
        case 'Toolbar':
            return Toolbar
        default:
            return Home
    }
}

const Main = (props) => {

    const Scene = getScene(props.scene)
    
    return (
        <Scene openDrawer={props.openDrawer} jump={props.jump} />
    )
}

export default Main