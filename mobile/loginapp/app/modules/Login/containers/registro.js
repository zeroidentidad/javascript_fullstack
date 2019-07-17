/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Button, Icon, Item, Label, Input } from "native-base";

export default class Registro extends Component {

    constructor(props){
        super(props);
        this.state = {
            titulo: this.props.navigation.getParam('titulo')
        }
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.content}>
                    <KeyboardAvoidingView behavior="padding" enabled>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.textCenter}>{this.state.titulo}</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body style={styles.body}>
                                <Item floatingLabel>
                                    <Icon active name='md-mail'></Icon>
                                    <Label>Email</Label>
                                    <Input />
                                </Item>                                
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
                            <Button success style={styles.boton}>
                                <Text> Guardar </Text>
                            </Button>
                        </CardItem>
                    </Card>
                    </KeyboardAvoidingView>
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
