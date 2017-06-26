import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Layout = styled.View`
  display: flex;
  height: 100%;
  background: #FAFCFC;
  align-items: center;
  height: 100%;

`
const Header = styled.Text`
  font-size: 40;
  margin-top: 45;
  color: #6DECAF
`

const Tagline = styled.Text`
  font-size: 12;
`

const Content = styled.View`
  flex: 1
`

export default class Container extends Component {

  render() {
      const windowWidth = Dimensions.get('window').width;

      return (
          <Layout>
            <Header>
              Wallio
            </Header>
            <Tagline>
              The best wallpapers for your device
            </Tagline>
            <Content style={{width: windowWidth}}>
              {this.props.children}
            </Content>
          </Layout>
      );
  }
};
