import React, { Component } from 'react'
import { Card, CardContent, CardMedia, CardHeader } from '@material-ui/core';

export default class PlaceCard extends Component {  

    render() {
        const {place, index} = this.props
        return (
            <div className="col-xs-12 col-sm-4" key={index}>
                <Card>
                    <CardMedia>
                        <img alt="place" src={place.imageUrl} height="450" />
                    </CardMedia>
                    <CardHeader title={place.title}></CardHeader>
                    <CardContent>{place.description}</CardContent>
                </Card>
            </div>
        )
    }
}
