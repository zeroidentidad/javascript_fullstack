import React, {Component} from 'react'
import Title from '../components/Title';
import Pin from '../images/top_background.png'
import { indigo } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import Benefits from '../components/Benefits'
import PlaceCard from '../components/places/PlaceCard'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Container from '../components/Container'

import data from '../requests/places'

export default class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            places: []
        }

        setTimeout(() => {
            this.setState({places: data.places})
        }, 3000);

        this.hidePlace = this.hidePlace.bind(this)
    }

    places() {
        return this.state.places.map((place, index) => {
            return (
                <PlaceCard place={place} key={index} onRemove={this.hidePlace} />
            )
        })
    }

    hidePlace(place){
        this.setState({
            places: this.state.places.filter(el=>el!==place)
        })
    }

    render(){
        return(
            <section>
            <div className="Header-background">
            <Container>
                <div className="Header-main">
                    <Title />
                    <Button variant="contained" color="secondary" onClick={() => alert('kepedo')} >Crear cuenta</Button>
                    <img className="Header-ilustration" src={Pin} alt="Pin" height="200" />
                </div>
                <Benefits />
            </Container>                
            </div>
            <div style={{ backgroundColor: indigo['A400'], padding: '50px', color: 'white' }}>
                <h3 style={{ fontSize: '24px' }}>Sitios pupulares</h3>
                <TransitionGroup className="row">
                    {this.places()}
                </TransitionGroup>
            </div>
            </section>            
        )
    }
}