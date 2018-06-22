import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default class Camera extends Component {
  state = {
    imageSource: 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <TouchableHighlight style={{flex: 1, marginTop: 20}} onPress={this.captureImage}>
          <Text style={{fontSize: 50, backgroundColor: 'white'}}>Capture Image</Text>
        </TouchableHighlight>
        <Image source={{uri: `data:image/png;base64,${this.state.imageSource}`}} style={{flex: 2}}/>
      </View>
    );
  };

  captureImage = async () => {
    const options = { quality: 1, base64: true };
    const data = await this.camera.takePictureAsync(options);
    console.log(data);
    this.setState({imageSource: data.base64});
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
