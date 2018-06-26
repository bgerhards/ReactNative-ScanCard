/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from './src/screens/Home'
import Camera from './src/screens/Camera'
import CaptureFrontAndBack from "./src/screens/CaptureFrontAndBack";
import ViewAllCards from "./src/screens/ViewAllCards";

const App = StackNavigator({
  Home: {screen: Home},
  CaptureFrontAndBack: {screen: CaptureFrontAndBack},
  Camera: {screen: Camera},
  ViewAllCards: {screen: ViewAllCards}
});

export default App;
