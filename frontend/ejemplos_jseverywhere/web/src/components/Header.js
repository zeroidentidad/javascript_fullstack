import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

// nuevas dependencias
import { useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';
// import ButtonAsLink component
import ButtonAsLink from './ButtonAsLink';
import { IS_LOGGED_IN } from '../gql/query';

const HeaderBar = styled.header`
width: 100%;
padding: 0.5em 1em;
display: flex;
height: 64px;
position: fixed;
align-items: center;
background-color: #fff;
box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
z-index: 1;
`;

const LogoText = styled.h1`
margin: 0;
padding: 0;
display: inline;
`;

const UserState = styled.div`
margin-left: auto;
`;

const Header = props => {

    // query hook user logged en state
    const { data, client } = useQuery(IS_LOGGED_IN);    

    return (
        <HeaderBar>
            <img src={logo} alt="Notasocial Logo" height="40" />
            <LogoText>Notasocial</LogoText>
            <UserState>
                {data.isLoggedIn ? (
                    <ButtonAsLink
                        onClick={() => {
                            // remover token
                            localStorage.removeItem('token');
                            // limpiar cache
                            client.resetStore();
                            // update local state
                            client.writeData({ data: { isLoggedIn: false } });
                            // redirect a home page
                            props.history.push('/');
                        }}                    
                    >
                        <b>Salir</b>
                    </ButtonAsLink>
                ) : (
                        <p>
                            <Link to={'/signin'}>Ingresar</Link> ó{' '}
                            <Link to={'/signup'}>Registrarse</Link>
                        </p>
                    )}
            </UserState>            
        </HeaderBar>
    );
};

// envolver componente en withRouter higher-order component
export default withRouter(Header);