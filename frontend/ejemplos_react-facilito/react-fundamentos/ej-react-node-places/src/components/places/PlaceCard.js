import React, { Component } from 'react'
import { Card, CardContent, CardMedia, CardHeader, CardActions, Button } from '@material-ui/core';
import CSSTransition from 'react-transition-group/CSSTransition'
import {Link} from 'react-router-dom'

export default class PlaceCard extends Component {  

    constructor(props){
        super(props)
        this.state = {
            show: true
        }
    }

    render() {
        const {place, key} = this.props
        return (
            <CSSTransition in={this.props.in} timeout={1000} classNames="fade-scale" key={key}>
            <div className="col-xs-12 col-sm-4">
                <Card>
                    <CardMedia>
                        <img alt="place" src={place.avatarImage} height="350" />
                    </CardMedia>
                    <CardHeader title={place.title}></CardHeader>
                    <CardContent>{place.description}</CardContent>
                    <CardActions style={{textAlign: 'right'}}>
                        <Link to="/login">
                        <Button color="secondary">Ver más</Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
            </CSSTransition>
        )
    }
}
