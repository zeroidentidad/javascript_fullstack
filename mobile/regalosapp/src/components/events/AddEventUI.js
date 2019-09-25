import React, {Component} from 'react';
import { View } from 'react-native';
import {Title, TextInput, Button, withTheme, Paragraph} from 'react-native-paper';
import DatePicker from 'react-native-datepicker'

class AddEventUI extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            date: (new Date()).toJSON()
        }
    }

    submit=()=>{
        this.props.add(this.state)
    }

    render(){
        return (
            <View>
                <Title>Organiza evento</Title>
                <TextInput
                    label="Nombre del evento"
                    value={this.state.title}
                    onChangeText={(titulo) => this.setState({title: titulo})}
                />
                <View>
                    <Paragraph>Fecha:</Paragraph>
                    <DatePicker 
                    style={{ width: '100%' }}
                    date={this.state.date}
                    onDateChange={(date) => this.setState({date: date})}
                    />
                </View>
                <View style={{width: '90%', marginTop: 20, alignSelf:'center'}}>
                    <Button
                        mode='contained'
                        color={this.props.theme.colors.accent}
                        onPress={this.submit}
                    >Crear</Button>
                </View>
            </View>
        )
    }
}

export default withTheme(AddEventUI)
