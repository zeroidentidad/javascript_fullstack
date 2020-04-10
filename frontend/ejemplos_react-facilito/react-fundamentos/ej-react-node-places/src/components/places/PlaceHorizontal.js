import React, { Component } from 'react'
import { Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

export default class PlaceHorizontal extends Component {
    render() {
        const {place}=this.props
        return (
            <Card style={{marginTop: '1em', overflow: 'hidden'}}>
                <div className="row">
                    <div className="PlaceH-avatar">
                        <img alt="place" src={place.avatarImage} />
                    </div>
                    <div className="col-xs" style={{ textAlign: 'left' }}>
                        <CardHeader 
                        title={place.title}
                        subheader={place.address}
                        />
                        <div className="row middle-xs">
                            <div className="col-xs-6 col-sm-8 col-md-8 col-lg-9">
                                <CardContent>{place.description}</CardContent>
                            </div>
                            <div className="col-xs">
                                <CardActions>
                                    <Link to={`/lugares/${place.slug}`}>
                                    <Button color="secondary">Ver más</Button>
                                    </Link>
                                </CardActions>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}
