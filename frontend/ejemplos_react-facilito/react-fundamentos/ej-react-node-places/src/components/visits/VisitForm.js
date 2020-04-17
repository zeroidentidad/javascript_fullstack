import React, { Component } from 'react'
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import * as actions from '../../redux/actions/visitsActions';
import VisitModal from './VisitModal'

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
      this.props.dispatch(actions.addVisit(this.props.place, observation, reaction));    
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
            Agregar comentario
            </Button>
         </div> 
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        places: state.places
    }
}

export default connect(mapStateToProps)(VisitForm);