import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import CaptureFrontAndBack from "./CaptureFrontAndBack";

export default class Home extends Component {

  state = {
    theNumber: 1
  };

  onPress = (screen) => {
    this.props.navigation.navigate(screen);
  };

  render() {
    return <View>
      <TouchableHighlight style={styles.button} onPress={() => this.onPress('CaptureFrontAndBack')}>
        <Text>Capture Image</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}>
        <Text>View Image</Text>
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