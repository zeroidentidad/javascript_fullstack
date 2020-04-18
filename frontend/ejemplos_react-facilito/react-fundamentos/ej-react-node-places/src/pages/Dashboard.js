import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';
import * as actions from '../redux/actions/placesActions'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.loadPlaces()
    }

    loadPlaces(){
        this.props.dispatch(actions.loadAll())
    }

    places(){
        return this.props.places.map((place, index)=>{
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
                            {/*<Button color="primary">Favoritos</Button>
                            <Button color="primary">Visitas</Button> */}
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


const mapStateToProps = (state, props) => {
    return {
        places: state.places
    }
}

export default connect(mapStateToProps)(Dashboard)