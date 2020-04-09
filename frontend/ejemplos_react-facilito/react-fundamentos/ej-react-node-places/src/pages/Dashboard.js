import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';
import data from '../requests/places';


export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            places: []
        }

        setTimeout(() => {
            this.setState({ places: data.places })
        }, 3000);
    }

    places(){
        return this.state.places.map((place, index)=>{
            return <PlaceHorizontal place={place} key={index} />
        })
    }

    render() {
        return (
            <div>
                <Link to='/new' className="FAB">
                    <Fab color="secondary">
                        <AddIcon />
                    </Fab>                    
                </Link>
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-md-2" style={{textAlign: 'left'}}>
                            <Button color="primary">Explorar</Button>
                            <Button color="primary">Favoritos</Button>
                            <Button color="primary">Visitas</Button>
                        </div>
                        <div className="col-xs-12 col-md-10">
                            {this.places()}
                        </div>  
                    </div>                  
                </Container>
            </div>
        )
    }
}
