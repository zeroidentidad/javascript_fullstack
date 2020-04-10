import React, { Component } from 'react'
import { Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';

export default class PlaceHorizontal extends Component {
    render() {
        return (
            <Card style={{marginTop: '1em', overflow: 'hidden'}}>
                <div className="row">
                    <div className="PlaceH-avatar">
                        <img alt="place" src={this.props.place.avatarImage} />
                    </div>
                    <div className="col-xs" style={{ textAlign: 'left' }}>
                        <CardHeader 
                        title={this.props.place.title}
                        subheader={this.props.place.address}
                        />
                        <div className="row middle-xs">
                            <div className="col-xs-6 col-sm-8 col-md-8 col-lg-9">
                                <CardContent>{this.props.place.description}</CardContent>
                            </div>
                            <div className="col-xs">
                                <CardActions>
                                    <Button color="secondary">Ver más</Button>
                                </CardActions>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}
