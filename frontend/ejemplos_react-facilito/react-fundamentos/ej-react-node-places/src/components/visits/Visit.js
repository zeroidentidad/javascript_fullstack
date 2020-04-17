import React, { Component } from 'react'
import { Card, CardHeader, Avatar } from '@material-ui/core';
import FadeAndScale from '../animations/FadeAndScale';
import Emoji from './emoji_picker/Emoji';
import { relationInverse } from './emoji_picker/emojis';

export default class Visit extends Component {

   getShortCode(){
      if(!this.props.visit.reaction) return relationInverse["love"];

      return relationInverse[this.props.visit.reaction];
   }

    render() {
        return (
           <FadeAndScale in={this.props.in}>
            <div>
               <Card style={{textAlign:'left', marginTop:'1em'}} >
                  <div className="row middle-xs">
                     <div className="col-xs">
                        <CardHeader 
                           title={this.props.visit.name}
                           avatar={<Avatar alt="avatar" src={this.props.visit.gravatar}/>}
                           subheader={this.props.visit.observation}
                        ></CardHeader>
                     </div>
                     <div className="col-xs-3 col-sm-2">
                     <Emoji code={this.getShortCode()} />
                     </div>
                  </div>
               </Card>                
            </div>
            </FadeAndScale>
        )
    }
}
