import React, { Component } from 'react'
import {connect} from 'react-redux'
import { TextField, Button, Card } from '@material-ui/core';
import { push } from 'react-router-redux'
import Title from '../../components/Title'
import Container from '../../components/Container'
import * as requests from '../../requests/places.js'
import Uploader from '../../components/uploader/Uploader';

class NewPlace extends Component {

    constructor(props){
        super(props);

        this.state = {
            uploading: false
        };

        this.createPlace = this.createPlace.bind(this);
        this.getFile = this.getFile.bind(this);
    }    
    
    titleField = React.createRef();
    addressField = React.createRef();
    descriptionField = React.createRef();        

    createPlace(e) {
        const data = {
            title: this.titleField.value,
            address: this.addressField.value,
            description: this.descriptionField.value
        }
        if (data.title===""||data.address===""||data.description==="") {
            alert('Todos todos los campos son requeridos');
            return "";
        }

        if(this.state.avatar) data.avatar = this.state.avatar;
        if(this.state.cover) data.cover = this.state.cover; 

        this.setState({uploading:true});       

        requests.createPlace(data, this.props.user.jwt)
        .then(data=>{
            this.setState({uploading:false});
            this.props.dispatch(push('/'))
        })
        .catch(console.log)
    }

    getFile(type, file){
        let state = {};
        state[type] = file;
        
        this.setState(state);
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
                    <div style={{'marginTop':'1em'}} >
                    <Uploader 
                    type="avatar"
                    label="Subir avatar"
                    getFile={this.getFile} 
                    />
                    </div>
                    <div style={{'marginTop':'1em'}} >                    
                    <Uploader 
                    type="cover"
                    label="Subir cover"
                    getFile={this.getFile} 
                    />
                    </div>                   
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
                    <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={this.createPlace}
                    disabled={this.state.uploading}
                    >
                    Enviar
                    </Button>
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