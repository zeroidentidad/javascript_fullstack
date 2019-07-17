/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Button, Icon, Item, Label, Input } from "native-base";

export default class Login extends Component {

    registro = ()=>{
        this.props.navigation.navigate('Registro')
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.content}>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.textCenter}>Inicio sesión</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body style={styles.body}>
                                <Item floatingLabel>
                                    <Icon active name='md-person'></Icon>
                                    <Label>Username</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel last>
                                    <Icon active name='md-key'></Icon>
                                    <Label>Password</Label>
                                    <Input />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button primary onPress={this.registro}>
                                <Text> Registrarse </Text>
                            </Button>                            
                            <Button success style={styles.boton}>
                                <Text> Acceder </Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textCenter: {
        width: '100%',
        textAlign: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    boton: {
        marginLeft: '40%'
    },
    body: {
        paddingVertical: 30
    }
});
