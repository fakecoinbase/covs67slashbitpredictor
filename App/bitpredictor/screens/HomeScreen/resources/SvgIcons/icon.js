import React from 'react';
import SvgIcon from "react-native-svg-icon";
import svgs from "./svgs";

const icon = (props) => <SvgIcon {...props} svgs={svgs}/>

export default icon;