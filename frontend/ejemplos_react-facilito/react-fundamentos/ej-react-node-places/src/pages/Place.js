import React, { Component } from 'react'
import {Card, Fab} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import {getPlace} from '../requests/places'
import Container from '../components/Container'
import VisitForm from '../components/visits/VisitForm'
import * as actions from '../redux/actions/visitsActions';
import * as favactions from '../redux/actions/favoritesActions';
import VisitsCollection from '../components/visits/VisitsCollection';

class Place extends Component {

    constructor(props){
        super(props)

        const slug = props.match.params.slug
        this.loadPlace(slug)
        
        this.state = {
            place: {}
        }

        this.fav = this.fav.bind(this);
    }

    loadPlace(slug){
        this.props.dispatch(actions.loadAllForPlace(slug));
        getPlace(slug).then(json=>{
            this.setState({place: json})
        })
    }

    favBtn(){
        return(
        <div className="Fav-btn">
        <Fab color='primary' onClick={this.fav}>
            <StarBorderIcon fontSize="large"/>   
        </Fab>
        </div>
        )         
    }

    fav(){
        this.props.dispatch(favactions.add(this.state.place._id))
    }

    render() {
        const {place} = this.state
        return (
            <div className="Place-container">
                <header className="Place-cover" style={{backgroundImage: `url("${place.coverImage}")`}}></header>
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <Card className="Place-card">
                                {this.favBtn()}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-3 col-lg-2">
                                        <img alt="avatar" src={place.avatarImage} style={{maxWidth: '100%'}}/>
                                    </div>
                                    <div className="col-xs">
                                        <h1>{place.title}</h1>
                                        <address>{place.address}</address>
                                        <p>{place.description}</p>
                                    </div>
                                </div>
                                <div style={{marginTop: '1em'}}>
                                    <VisitForm place={place} />
                                </div>
                            </Card>
                        </div>
                        <div className="col-xs">
                            <VisitsCollection visits={this.props.visits}/>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        visits: state.visits
    }
}

export default connect(mapStateToProps)(withRouter(Place))