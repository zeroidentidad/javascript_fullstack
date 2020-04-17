import React, { Component } from 'react'
import { Card, CardHeader, Avatar } from '@material-ui/core';

export default class Visit extends Component {
    render() {
        return (
            <div>
               <Card style={{textAlign:'left', marginTop:'1em'}} >
                  <div className="row middle-xs">
                     <div className="col-xs">
                        <CardHeader 
                           title="Zero"
                           avatar={<Avatar alt="avatar" src={'https://avatars2.githubusercontent.com/u/2924638'}/>}
                           subheader={this.props.visit.observation}
                        ></CardHeader>
                     </div>
                     <div className="col-xs-2 col-sm-1">
                     </div>
                  </div>
               </Card>                
            </div>
        )
    }
}
