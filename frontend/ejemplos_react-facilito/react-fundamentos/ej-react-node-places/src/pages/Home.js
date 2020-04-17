import React, {Component} from 'react'
import { indigo } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import Title from '../components/Title';
import Pin from '../images/top_background.png'
import Benefits from '../components/Benefits'
import PlaceCard from '../components/places/PlaceCard'
import Container from '../components/Container'
import * as actions from '../redux/actions/placesActions'

class Home extends Component {

    constructor(props){
        super(props)

        this.hidePlace = this.hidePlace.bind(this)
        this.loadPlaces()
    }
    
    loadPlaces(){
        this.props.dispatch(actions.loadAll())
    }   

    places() {
        return this.props.places.map((place, index) => {
            return (
                <PlaceCard place={place} key={index} onRemove={this.hidePlace} />
            )
        })
    }

    hidePlace(place){
        this.setState({
            places: this.props.places.filter(el=>el!==place)
        })
    }

    render(){
        return(
            <section>
            <div className="Header-background">
            <Container>
                <div className="Header-main">
                    <Title />
                    <Link to="/signup">
                    <Button variant="contained" color="secondary" >Crear cuenta</Button>
                    </Link>
                    <img className="Header-ilustration" src={Pin} alt="Pin" height="200" />
                </div>
                <Benefits />
            </Container>                
            </div>
            <div style={{ backgroundColor: indigo['A400'], padding: '50px', color: 'white' }}>
                <h3 style={{ fontSize: '24px' }}>Sitios recientes</h3>
                <TransitionGroup className="row">
                    {this.places()}
                </TransitionGroup>
            </div>
            </section>            
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        places: state.places.slice(0, 3)
    }
}

export default connect(mapStateToProps)(Home)