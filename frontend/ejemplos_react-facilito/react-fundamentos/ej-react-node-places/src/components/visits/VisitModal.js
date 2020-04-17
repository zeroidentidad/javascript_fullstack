import React, { Component } from 'react'
import {TextField, Button} from '@material-ui/core'
import { yellow } from '@material-ui/core/colors';
import Modal from 'react-modal';
import Container from '../Container'
import Title from '../Title'

export default class VisitModal extends Component {

    constructor(props){
        super(props)
        this.state = {open: false}

        this.closeModal=this.closeModal.bind(this)
        this.submit = this.submit.bind(this);
    }

    openModal(){
        this.setState({open: true})
    }

    closeModal(){
        this.setState({open: false})
    }
    
    observationRef = React.createRef();

	submit(e){
		const observation = this.observationRef.value;
		this.props.onSubmit(observation);

		this.closeModal();
	}    

    render() {
        return (
            <div>
                <Modal
                isOpen={this.state.open}
                appElement={this.props.el}
                ariaHideApp={false}
                contentLabel="Agregar nuevo comentario"
                >
                <Container>
                    <div style={{textAlign: 'left', marginTop: '2em'}}>
                        <header>
                        <Title />
                        <h3>Describe experiencia de tu visita a {` `}
                        <span style={{backgroundColor: yellow['A700']}}>
                        {this.props.place.title}
                        </span>
                        </h3>
                        </header>
                        <div className="row">
                            <div className="col-xs-4 col-sm-2 col-lg-1"></div>
                            <div className="col-xs">
                            <TextField 
                            name="comentario"
                            label="Que te pareció este lugar?"
                            type="text"
                            fullWidth
                            multiline={true}
                            size="medium"
                            inputRef={e=>(this.observationRef=e)}
                            />
                            <div style={{marginTop: '1em'}}>
                            <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={this.submit}
                            >
                            Enviar
                            </Button>
                            <Button 
                            variant="contained" 
                            style={{marginLeft: '2em'}}
                            onClick={this.closeModal}
                            >
                            Cancelar
                            </Button>
                            </div>
                            </div>
                        </div>
                    </div>
                </Container>
                </Modal>                
            </div>
        )
    }
}
