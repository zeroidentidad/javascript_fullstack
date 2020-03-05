import React, { Component } from 'react'

class Title extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Descubrir lugares de manera simple</p>
            </div>
        )
    }
}

export default Title