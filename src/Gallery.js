import React, { Component } from 'React';
import Masonry from 'react-native-masonry';

import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const GalleryContainer = styled.View`
  alignSelf: stretch
  display: flex
  flex-direction: column
  justify-content: space-around;
  flex-grow: 1
  padding-top: 20
`

export default class Gallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/wallpapers/top/.json?sort=top&t=week&limit=30')
      .then(data => data.json())
      .then(data => {
        const allowed = value => ['.png', '.jpg'].some(element => value.includes(element));
        const foundImages = data.data.children.map(a => {
          const url = a.data.thumbnail;
          return url;
        }).filter(allowed);
        this.setState({
          images: foundImages,
          loading: false
        });
      })
      .catch(e => console.log(e))
  }

  render() {
      return (
          <GalleryContainer>
            {this.state.loading ? (
              <Text>'Loading'</Text>
            ) : ( <ScrollView>
                <Masonry
                  bricks={
                    this.state.images.map(image => (
                      { uri: image }
                    ))
                    }
                  columns={2}
                />
              </ScrollView>
            )
            }
          </GalleryContainer>

      );
  }
};
