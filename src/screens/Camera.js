import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default class Camera extends Component {

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          flashMode={RNCamera.Constants.FlashMode.off}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <TouchableHighlight style={{position: 'absolute', bottom: 0, alignSelf: 'center'}} onPress={this.captureImage}>
          <Text style={{fontSize: 50, backgroundColor: 'white'}}>Capture Image</Text>
        </TouchableHighlight>
      </View>
    );
  };

  captureImage = async () => {
    const options = {quality: 1, base64: true};
    const data = await this.camera.takePictureAsync(options);
    const {params} = this.props.navigation.state;
    params.cameraUpdateFunction(data.base64);
    this.props.navigation.pop();
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});
