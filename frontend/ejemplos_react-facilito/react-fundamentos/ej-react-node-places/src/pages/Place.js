import React, { Component } from 'react'
import Container from '../components/Container'
import {Card} from '@material-ui/core'

export default class Place extends Component {

    constructor(props){
        super(props)
        this.state = {
            place: {}
        }
    }

    render() {
        return (
            <div className="Place-container">
                <header className="Place-cover" style={{backgroundImage: `url("${this.state.place.coverImage}")`}}></header>
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <Card className="Place-card">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-3 col-lg-2">
                                        <img alt="avatar" src={this.state.place.avatarImage} style={{maxWidth: '100%'}}/>
                                    </div>
                                    <div className="col-xs">
                                        <h1>{this.state.place.title}</h1>
                                        <address>{this.state.place.address}</address>
                                        <p>{this.state.place.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
