import React, {Component} from 'react';
import {AsyncStorage, Text, View} from 'react-native';
import InsuranceCardPreview from '../Component/InsuranceCardPreview';

export default class ViewAllCards extends Component {
  static navigationOptions = {
    title: 'Stored Insurance Cards'
  };
  getItems = async () => {
    return JSON.parse(await AsyncStorage.getItem('@RNScan:ids'));
  };

  async render() {
    const cards = await this.getItems();
    return (
      <View>
        <Text>Insurance Cards</Text>
        <Text>Latest Card</Text>
        { () => cards.map(card => <InsuranceCardPreview card={card}/>)}
      </View>
    )
  }
}