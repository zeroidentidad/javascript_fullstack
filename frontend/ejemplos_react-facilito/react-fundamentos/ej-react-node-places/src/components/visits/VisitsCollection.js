import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Visit from './Visit';

export default class VisitsCollection extends Component {
   visits(){
      if(this.props.visits.length < 1) return;
      
      return this.props.visits.map(visit => <Visit visit={visit} key={visit._id} />)        
      
   }     
   render(){ 
      return(
         <div>
            <TransitionGroup>
               {this.visits()} 
            </TransitionGroup>
         </div>
      );
   }
}
