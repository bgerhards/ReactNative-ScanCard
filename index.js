import {AppRegistry, AsyncStorage} from 'react-native';
import App from './App';

AsyncStorage.setItem('@RNScan:ids', JSON.stringify([])).catch((error) =>
  console.log(error));

AppRegistry.registerComponent('ReactNativeScanCard', () => App);
