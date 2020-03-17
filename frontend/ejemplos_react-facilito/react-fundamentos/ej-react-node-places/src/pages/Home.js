import React, {Component} from 'react'
import Title from '../components/Title';
import Pin from '../images/top_background.png'
import { indigo } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import Benefits from '../components/Benefits'
import PlaceCard from '../components/places/PlaceCard'

import data from '../requests/places'

export default class Home extends Component {

    places() {
        return data.places.map((place, index) => {
            return (
                <PlaceCard place={place} index={index} />
            )
        })
    }

    render(){
        return(
            <section>
            <div className="Header-background">
                <div className="Header-main">
                    <Title />
                    <Button variant="contained" color="secondary" onClick={() => alert('kepedo')} >Crear cuenta</Button>
                    <img className="Header-ilustration" src={Pin} alt="Pin" height="200" />
                </div>
            </div>
            <Benefits />
            <div style={{ backgroundColor: indigo['A400'], padding: '50px', color: 'white' }}>
                <h3 style={{ fontSize: '24px' }}>Sitios pupulares</h3>
                <di className="row">
                    {this.places()}
                </di>
            </div>
            </section>            
        )
    }
}