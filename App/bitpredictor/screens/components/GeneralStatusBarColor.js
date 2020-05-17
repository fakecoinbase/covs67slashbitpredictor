import React from "react";
import {StatusBar, Platform, View} from "react-native";

const StatusBar_Height = Platform.OS === "ios"?20:statusbar.currentheight;
const sttBar={statusBar:{height:StatusBar_Height}};
const GeneralStatusBarColor = ({backgroundColor, ...props})=>(
    <View style={[sttBar.statusBar,{backgroundColor}]}>
       <StatusBar translucent backgroundColor = {backgroundColor} {...props}/>
       </View>
);
export default GeneralStatusBarColor; 