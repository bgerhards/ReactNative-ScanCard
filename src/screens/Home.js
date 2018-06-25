import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import CaptureFrontAndBack from "./CaptureFrontAndBack";

export default class Home extends Component {

  state = {
    theNumber: 1
  };

  onPress = () => {
    this.props.navigation.navigate('CaptureFrontAndBack');
  };

  incrementNumber = () => {
    this.setState({theNumber: this.state.theNumber + 1})
  };

  render() {
    return <View>
      <TouchableHighlight style={styles.button} onPress={this.onPress}>
        <Text>Capture Image</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}>
        <Text>View Image</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={this.incrementNumber}>
        <Text>{this.state.theNumber}</Text>
      </TouchableHighlight>
    </View>;
  }
}

const yellowishColor = '#ffb500';

const styles = new StyleSheet.create({
  button: {
    backgroundColor: yellowishColor,
    padding: 20,
    borderColor: '#e6a300',
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 20
  }
})