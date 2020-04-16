import React, { Component } from 'react'
import {TextField, Button} from '@material-ui/core'
import { yellow } from '@material-ui/core/colors';
import Modal from 'react-modal';
import Container from '../Container'
import Title from '../Title'

export default class VisitModal extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Modal
                isOpen={true}
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
                            ref="observacionField" 
                            />
                            <div style={{marginTop: '1em'}}>
                            <Button variant="contained" color="secondary" >Enviar</Button>
                            <Button variant="contained" style={{marginLeft: '2em'}}>Cancelar</Button>
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
