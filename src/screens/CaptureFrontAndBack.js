import React, {Component} from 'react';
import {AsyncStorage, Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default class CaptureFrontAndBack extends Component {
  defaultImage = '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';
  state = {
    frontImage: this.defaultImage,
    backImage: this.defaultImage
  };

  onPress = (onPressFunction) => {
    this.props.navigation.navigate('Camera', {cameraUpdateFunction: onPressFunction});
  };

  updateFrontImage = (frontImage) => {
    this.setState({frontImage: frontImage})
  };

  updateBackImage = (backImage) => {
    this.setState({backImage: backImage})
  };

  validateImages = () => {
    return this.state.frontImage !== this.defaultImage
      && this.state.backImage !== this.defaultImage
  };

  goBackToMenu = () => {
    this.props.navigation.pop();
  };

  saveImages = async () => {
    if (!this.validateImages()) {
      return;
    }
    const newId = {
      id: new Date(),
      frontImage: this.state.frontImage,
      backImage: this.state.backImage
    };
    const currentIds = JSON.parse(await AsyncStorage.getItem('@RNScan:ids'));
    const newIds = JSON.stringify([newId, ...currentIds]);
    AsyncStorage.setItem('@RNScan:ids', newIds)
      .then(this.goBackToMenu)
      .catch(error => {
        console.log('shit broke');
        console.error(error)
      });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.headerText}>
          Capture Insurance Card
        </Text>

        <Text style={{margin: 20}}>
          Take photos of the front and back of the insurance card. Make sure all details are clear.
        </Text>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.thumbnailContainer}>
            <Text style={styles.thumbnailText}>Front</Text>
            <TouchableHighlight style={{flex: 1}} onPress={() => this.onPress(this.updateFrontImage.bind(this))}>
              <Image
                style={{
                  flex: 1,
                  resizeMode: Image.resizeMode.center,
                  backgroundColor: 'white'
                }}
                source={{uri: `data:image/png;base64,${this.state.frontImage}`}}/>
            </TouchableHighlight>
          </View>
          <View style={styles.thumbnailContainer}>
            <Text style={styles.thumbnailText}>Back</Text>
            <TouchableHighlight style={{flex: 1}} onPress={() => this.onPress(this.updateBackImage.bind(this))}>
              <Image
                style={styles.thumbnails}
                source={{uri: `data:image/png;base64,${this.state.backImage}`}}/>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.submitButtonView}>
          <TouchableHighlight style={styles.submitButton}
                              onPress={this.saveImages}>
            <Text>Save Insurance Cards</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const yellowishColor = '#ffb500';

const styles = new StyleSheet.create({
  thumbnailContainer: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: 150,
    margin: 20
  },
  thumbnails: {
    flex: 1,
    resizeMode: Image.resizeMode.center,
    backgroundColor: 'white'
  },
  thumbnailText: {
    alignSelf: 'center'
  },
  headerText: {
    fontSize: 30,
    margin: 30,
    alignSelf: 'center'
  },
  submitButtonView: {
    position: 'absolute',
    bottom: '20%',
    alignSelf: 'center'
  },
  submitButton: {
    backgroundColor: yellowishColor,
    padding: 20,
    borderColor: '#e6a300',
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 20
  }
})
