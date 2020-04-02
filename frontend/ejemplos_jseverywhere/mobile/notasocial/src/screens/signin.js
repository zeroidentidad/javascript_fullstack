import React from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useMutation, gql } from '@apollo/client';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNIN_USER = gql`
mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
}
`;

const SignIn = props => {

    // almacenar token con un valor clave de `token`
    // después de almacenar token, navegar a pantalla principal
    const storeToken = token => {
        AsyncStorage.setItem('token', token).then(
            props.navigation.navigate('App')
        );
    };

    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            storeToken(data.signIn)
        }
    });

    // si loading, indicator
    if (loading) return <Loading />;

    return (
        <React.Fragment>
            {error && <Text>Error ingresando!</Text>}
            <UserForm
                action={signIn}
                formType="signIn"
                navigation={props.navigation}
            />
        </React.Fragment>
    );
}

SignIn.navigationOptions = { 
    title: 'Ingresar'
 }

export default SignIn;