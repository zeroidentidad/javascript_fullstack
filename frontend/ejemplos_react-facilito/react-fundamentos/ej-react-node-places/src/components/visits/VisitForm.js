import React, { Component } from 'react'
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import * as actions from '../../redux/actions/visitsActions';
import VisitModal from './VisitModal'
import gravatarmd5 from './util/gravatarmd5'

class VisitForm extends Component {

   constructor(props){
      super(props);
      
      this.modalRef = React.createRef();
      this.openVisitsModal = this.openVisitsModal.bind(this);
      this.add = this.add.bind(this);
   }

    openVisitsModal(){
        this.modalRef.current.openModal();
    }

   add(observation, reaction = "love"){
       const gravatar = gravatarmd5(this.props.user.email)
       const name = this.props.user.name || this.props.email.split("@")[0]
       this.props.dispatch(actions.addVisit(this.props.place, observation, reaction, gravatar, name));    
   }      

    render() {
        return (
         <div>
            <VisitModal 
            place={this.props.place} 
            visits={this.getVisit} 
            ref={this.modalRef} 
            el={this.props.parent} 
            onSubmit={this.add} />
            <Button 
            color="secondary"
            onClick={this.openVisitsModal}
            >
            Agregar experiencia
            </Button>
         </div> 
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        places: state.places,
        user: state.user
    }
}

export default connect(mapStateToProps)(VisitForm);