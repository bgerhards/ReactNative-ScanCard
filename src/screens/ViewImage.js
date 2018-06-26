import React, {Component} from 'react';
import {View, Text, Image, AsyncStorage} from 'react-native';
import InsuranceCardPreview from "../Component/InsuranceCardPreview";

export default class ViewImage extends Component {
  getItems = async () => {
    return await AsyncStorage.getItem('@RNScan:ids');
  };

  render() {
    const cards = this.getItems();
    return(
      <View>
        <Text>Insurance Cards</Text>
        <Text>Latest Card</Text>
        {cards.map(card => <InsuranceCardPreview card={card}/>)}
      </View>
    )
  }
}