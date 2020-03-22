import React, { Component } from 'react'
import { Card, CardContent, CardMedia, CardHeader, CardActions, Button } from '@material-ui/core';
import CSSTransition from 'react-transition-group/CSSTransition'

export default class PlaceCard extends Component {  

    constructor(props){
        super(props)
        this.state = {
            show: true
        }

        /*setInterval(() => {
            this.setState({show: !this.state.show})
        }, 1000);*/
    }

    render() {
        const {place, key} = this.props
        return (
            <CSSTransition in={this.props.in} timeout={1000} classNames="fade-scale" key={key}>
            <div className="col-xs-12 col-sm-4">
                <Card>
                    <CardMedia>
                        <img alt="place" src={place.imageUrl} height="350" />
                    </CardMedia>
                    <CardHeader title={place.title}></CardHeader>
                    <CardContent>{place.description}</CardContent>
                    <CardActions style={{textAlign: 'right'}}>
                        <Button color="secondary">Ver más</Button>
                        <Button color="secondary" onClick={()=>this.props.onRemove(this.props.place)}>Ocultar</Button>
                    </CardActions>
                </Card>
            </div>
            </CSSTransition>
        )
    }
}
