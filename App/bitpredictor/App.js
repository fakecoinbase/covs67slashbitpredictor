/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//importing necessary libraries
import React from 'react';
import Otherscreen from './screens/OtherScreen/Otherscreen';

import HomeScreen from './screens/HomeScreen/HomeScreen';

const App: () => React$Node = () => {
  const [redirect, setredirect] = React.useState(false)
  //wait for 3 seconds and switch screens
  React.useEffect(() => {
    setTimeout(() => {
      setredirect(true)
    }, 3000);
  }, []);
  if (redirect) {
    return (
    //loading homescreen
      <HomeScreen/> 
      //<Otherscreen/>
    );
  } else {
    return (
    //loading otherscreen
      //<HomeScreen/> 
      <Otherscreen/>
    );
  }
  
};



export default App;
