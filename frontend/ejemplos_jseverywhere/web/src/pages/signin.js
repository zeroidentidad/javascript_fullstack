import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/UserForm';

const SIGNIN_USER = gql`
mutation signIn($email: String, $password: String!) {
signIn(email: $email, password: $password)
}
`;

const SignIn = props => {
    
    useEffect(() => {
        // update the document title
        document.title = 'Ingresar — Notasocial';
    });

    const client = useApolloClient();

    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            // guardar token
            localStorage.setItem('token', data.signIn);
            // update local cache
            client.writeData({ data: { isLoggedIn: true } });
            // redirect a homepage
            props.history.push('/');
        }
    });

    return (
        <React.Fragment>
            <UserForm action={signIn} formType="signIn" />
            {/* si data loading, mostrar loading message*/}
            {loading && <p>Cargando...</p>}
            {/* si error, mostrar error message*/}
            {error && <p>Error ingresando!</p>}   
        </React.Fragment>
    );
};

export default SignIn;