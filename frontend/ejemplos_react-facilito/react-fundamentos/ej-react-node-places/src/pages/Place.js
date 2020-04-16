import React, { Component } from 'react'
import {Card, Button} from '@material-ui/core'
import {withRouter} from 'react-router-dom'
import {getPlace} from '../requests/places'
import Container from '../components/Container'
import VisitModal from '../components/visits/VisitModal'

class Place extends Component {

    constructor(props){
        super(props)
        const slug = props.match.params.slug
        this.loadPlace(slug)
        this.state = {
            place: {}
        }
    }

    loadPlace(slug){
        getPlace(slug).then(json=>{
            this.setState({place: json})
        })
    }

    render() {
        const {place} = this.state
        return (
            <div className="Place-container">
                <VisitModal place={place}/>
                <header className="Place-cover" style={{backgroundImage: `url("${place.coverImage}")`}}></header>
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <Card className="Place-card">
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
                                <Button color="secondary">Agregar comentario</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default withRouter(Place)