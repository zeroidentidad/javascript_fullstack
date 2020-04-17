import React, { Component } from 'react'
import { red, lightBlue, amber } from '@material-ui/core/colors';
import { Card, CardContent, Grid } from '@material-ui/core';
import heart from '../images/heart.png'
import no_internet from '../images/no_internet.png'
import star from '../images/star.png'

export default class Benefits extends Component {
    render() {
        return (
            <Grid container direction="row">
                <Card className="Header-benefit">
                    <CardContent>
                        <div className="Header-benefit-image" style={{ backgroundColor: red['A400'] }}>
                            <img alt="icon" src={heart} />
                        </div>
                        <div className="Header-benefit-content">
                            <h3>Calificar lugares</h3>
                            <p>Reacciona con emoción a experiencias de lugares</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="Header-benefit">
                    <CardContent>
                        <div className="Header-benefit-image" style={{ backgroundColor: lightBlue['A400'] }}>
                            <img alt="icon" src={no_internet} />
                        </div>
                        <div className="Header-benefit-content">
                            <h3>Fluidez en conexion lenta</h3>
                            <p>La app puede seguir funcionando con perdida de conexión</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="Header-benefit">
                    <CardContent>
                        <div className="Header-benefit-image" style={{ backgroundColor: amber['A400'] }}>
                            <img alt="icon" src={star} />
                        </div>
                        <div className="Header-benefit-content">
                            <h3>Guardar lugares</h3>
                            <p>Hacer lista de sitios favoritos</p>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}
