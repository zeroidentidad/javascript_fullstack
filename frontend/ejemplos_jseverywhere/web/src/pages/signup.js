import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

// import graphql client libs
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/UserForm';

const SIGNUP_USER = gql`
mutation signUp($email: String!, $username: String!, $password: String!) {
signUp(email: $email, username: $username, password: $password)
}
`;

// incluir props para uso posterior
const SignUp = props => {

    useEffect(() => {
        // update document title
        document.title = 'Registrarse — Notasocial';
    });

    // Apollo Client
    const client = useApolloClient();

    // mutation hook
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            // cuando mutation completa JSON Web Token
            // guardar JWT in localStorage
            localStorage.setItem('token', data.signUp);
            // update local cache
            client.writeData({ data: { isLoggedIn: true } });            
            // redirect the user to the homepage
            props.history.push('/');
        }
    });

    return (
        <React.Fragment>
            <UserForm action={signUp} formType="signup" />
            {/* si data loading, mostrar loading message*/}
            {loading && <p>Cargando...</p>}
            {/* si error, mostrar error message*/}
            {error && <p>Error creando cuenta!</p>}            
        </React.Fragment>
    );
};

export default SignUp;