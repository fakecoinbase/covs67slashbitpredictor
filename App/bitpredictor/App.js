/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//importing necessary libraries
import React from 'react';

import HomeScreen from './screens/HomeScreen/HomeScreen';
//loading homescreen
const App: () => React$Node = () => {
  return (
    <HomeScreen/>
  );
};



export default App;
