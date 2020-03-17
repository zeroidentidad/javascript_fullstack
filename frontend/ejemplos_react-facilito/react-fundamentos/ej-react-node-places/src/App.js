import React, {Component} from 'react';
import './App.css'
import Title from './components/Title';
import Pin from './images/top_background.png'
import { ThemeProvider } from '@material-ui/core/styles';
import { indigo, red, lightBlue, amber } from '@material-ui/core/colors';
import { Button, Card, CardContent, CardMedia, CardHeader, Grid} from '@material-ui/core';
import heart from './images/heart.png'
import no_internet from './images/no_internet.png'
import star from './images/star.png'

import data from './requests/places'

class App extends Component{

  constructor(props){
    super(props)

  } 

  places(){
    return data.places.map(place=>{
      return(
        <div className="col-xs-12 col-sm-4">
          <Card>
            <CardMedia>
              <img alt="place" src={place.imageUrl} height="450"/>
            </CardMedia>
            <CardHeader title={place.title}></CardHeader>
            <CardContent>{place.description}</CardContent>
          </Card>
        </div>
      )
    })
  }

  render(){
    return (
      <ThemeProvider>
        <div className="Header-background">
            <div className="Header-main">
            <Title />
            <Button variant="contained" color="secondary" onClick={() => alert('kepedo')} >Crear cuenta</Button>
            <img className="Header-ilustration" src={Pin} alt="Pin" height="200" />
            </div>
        </div>
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
                    <h3>Experiencia offline o conexion lenta</h3>
                    <p>La app puede seguir funcionando si internet o perdida de conexión</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="Header-benefit">
                <CardContent>
                  <div className="Header-benefit-image" style={{ backgroundColor: amber['A400'] }}>
                    <img alt="icon" src={star} />
                  </div>
                  <div className="Header-benefit-content">
                    <h3>Calificar lugares</h3>
                    <p>Hacer lista de sitios favoritos</p>
                  </div>
                </CardContent>
              </Card>
          </Grid>
        <div style={{ backgroundColor: indigo['A400'], padding: '50px', color: 'white' }}>
          <h3 style={{ fontSize: '24px'}}>Sitios pupulares</h3>
          <di className="row">
            {this.places()} 
          </di>        
        </div>          
      </ThemeProvider>
    );
  }

}

export default App;
