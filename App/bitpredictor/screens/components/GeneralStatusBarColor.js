//importing necessary libraries
import React from "react";
import {StatusBar, Platform, View} from "react-native";
//check for the appropriate platform
const StatusBar_Height = Platform.OS === "ios"?20:StatusBar.currentheight;
const sttBar={statusBar:{height:StatusBar_Height}};
//setting statusBarColor
const GeneralStatusBarColor = ({backgroundColor, ...props})=>(
    <View style={[sttBar.statusBar,{backgroundColor}]}>
       <StatusBar translucent backgroundColor = {backgroundColor} {...props}/>
       </View>
);
export default GeneralStatusBarColor; 