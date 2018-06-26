import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

export default class InsuranceCardPreview extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.props.card.id}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={{
              flex: 1,
              resizeMode: Image.resizeMode.center,
              backgroundColor: 'white'
            }}
            source={{uri: `data:image/png;base64,${this.props.card.frontImage}`}}/>
          <Image
            style={{
              flex: 1,
              resizeMode: Image.resizeMode.center,
              backgroundColor: 'white'
            }}
            source={{uri: `data:image/png;base64,${this.props.card.backImage}`}}/>
        </View>
      </View>
    )
  }
}