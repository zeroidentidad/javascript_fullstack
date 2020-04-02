import React from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useMutation, gql } from '@apollo/client';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

// GraphQL mutation
const SIGNUP_USER = gql`
mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
}
`;

const SignUp = props => {
    
    // almacenar token con clave `token`
    // después almacenar token, navegar a pantalla principal
    const storeToken = token => {
        AsyncStorage.setItem('token', token).then(
            props.navigation.navigate('App')
        );
    };

    // signUp mutation hook
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            storeToken(data.signUp);
        }
    });

    // si loading, indicator
    if (loading) return <Loading />;

    return (
        <React.Fragment>
            {error && <Text>Error al registrarse!</Text>}
            <UserForm
                action={signUp}
                formType="signUp"
                navigation={props.navigation}
            />
        </React.Fragment>
    );
};

SignUp.navigationOptions = {
    title: 'Registrarse'
};

export default SignUp;