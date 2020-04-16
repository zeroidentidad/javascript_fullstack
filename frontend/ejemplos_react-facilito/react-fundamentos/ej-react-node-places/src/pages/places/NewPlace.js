import React, { Component } from 'react'
import {connect} from 'react-redux'
import { TextField, Button, Card } from '@material-ui/core';
import { push } from 'react-router-redux'
import Title from '../../components/Title'
import Container from '../../components/Container'
import * as requests from '../../requests/places.js'

class NewPlace extends Component {
    
    titleField = React.createRef();
    addressField = React.createRef();
    descriptionField = React.createRef();        

    createPlace = e =>{
        const data = {
            title: this.titleField.value,
            address: this.addressField.value,
            description: this.descriptionField.value
        }
        if (data.title===""||data.address===""||data.description==="") {
            alert('Todos todos los campos son requeridos');
            return "";
        }

        requests.createPlace(data, this.props.user.jwt)
        .then(data=>{
            this.props.dispatch(push('/'))
        })
        .catch(console.log)
    }

    render() {
        return (
            <div>
                <Container>
                    <Card style={{textAlign: 'left', padding: '20px'}}>
                    <header style={{borderBottom: 'solid 2px #eee'}}>
                    <Title/>
                    </header>
                    <div>
                    <TextField 
                    name="name"
                    label="Nombre"
                    type="text"
                    fullWidth
                    inputRef={e=>(this.titleField=e)}
                    />                    
                    <TextField 
                    name="address"
                    label="Dirección"
                    type="text"
                    fullWidth
                    inputRef={e=>(this.addressField=e)}
                    />                    
                    <TextField 
                    name="description"
                    label="Descripción"
                    type="text"
                    fullWidth
                    multiline={true}
                    inputRef={e=>(this.descriptionField=e)} 
                    />                    
                    </div>
                    <div style={{textAlign: 'right', marginTop: '1em'}}>
                    <Button variant="contained" color="secondary" onClick={this.createPlace}>Enviar</Button>
                    </div>
                    </Card>                
                </Container>
            </div>
        )
    }
}

const mapStateToProps=(state, props) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(NewPlace)