import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

import Container from './Container';
import Gallery from './Gallery';

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const StyledButton = styled.Button`
  width: 300
  background: #6DECAF
  alignSelf: stretch
`

export default class Hot extends Component {
  static navigationOptions = {
    tabBarLabel: 'Hot',
    title: `Hottest Wallpapers`
  };

  render() {
      return (
        <Container>
          <Gallery />
        </Container>
      );
  }
};
