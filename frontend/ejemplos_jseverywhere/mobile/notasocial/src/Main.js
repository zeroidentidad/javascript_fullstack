import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
import Screens from './screens';

const StyledView = styled.View`
flex: 1;
justify-content: center;
`;
const H1 = styled.Text`
font-size: 48px;
font-weight: bold;
`;
const P = styled.Text`
margin: 24px 0;
font-size: 18px;
`;

const Main = () => {
  return <Screens />;
};

export default Main;
