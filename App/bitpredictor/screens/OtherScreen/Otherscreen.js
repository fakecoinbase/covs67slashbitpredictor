import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function Otherscreen() {
  var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        height:null,
        width:null
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
});
console.disableYellowBox=true;
  return (
    <View style={ styles.container }>
            <Image source={require('../HomeScreen/resources/assets/Welcome_screen.png')} style={styles.backgroundImage}>
            </Image>
        </View>

  )
}
export default Otherscreen;