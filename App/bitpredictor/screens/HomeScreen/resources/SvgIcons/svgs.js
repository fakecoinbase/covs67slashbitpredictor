import React from 'react';
import {G,Path,Circle,Rect,Polygon,Defs,LinearGradient,Stop} from "react-native-svg";

//Setting SVG style properties
export default svgs = {
    Analysis: {
        svg:<Path d="M54.32 0.91C51.72 0.3 49.11 1.93 48.51 
        4.54C48.31 5.41 48.38 6.28 48.63 
        7.08L39.11 13.02C38.5 12.45 37.76 12.01 36.88 11.8C35.4 
        11.46 33.93 11.86 32.82 12.73L27.4 9.73C27.41 9.7 27.43 9.66 
        27.43 9.62C28.04 7.02 26.41 4.41 23.8 3.81C21.2 3.21 18.59 4.84 
        17.99 7.44C17.83 8.13 17.83 8.81 17.96 9.46L9.22 13.65C8.6 13.03 
        7.82 12.56 6.9 12.35C4.3 11.75 1.69 13.37 1.09 15.98C0.49 18.58 
        2.12 21.19 4.72 21.79C7.33 22.4 9.94 20.77 10.54 18.16C10.73 17.33 
        10.67 16.51 10.45 15.74L19.02 11.64C19.67 12.42 20.56 13.01 21.62 
        13.26C23.35 13.66 25.07 13.06 26.22 11.85L31.33 14.68C31.22 14.92 31.13 
        15.17 31.07 15.44C30.47 18.04 32.1 20.65 34.7 21.25C37.31 21.85 39.91 
        20.22 40.52 17.62C40.72 16.75 40.65 15.88 40.4 15.08L49.92 9.13C50.52 
        9.71 51.27 10.15 52.14 10.35C54.75 10.95 57.36 9.32 57.96 6.72C58.56 
        4.11 56.93 1.51 54.32 0.91Z" />
    },
    Rect: {
        svg: <G>
            <Defs>
                <LinearGradient id="grd1" gradientUnits="userSpaceOnUse" x1="1.5" y1="0" x2="1.5" y2="46">
                    <Stop offset="0" stopColor="#42e8e0"/>
                    <Stop offset="0.022" stopColor="#40ddda"/>
                    <Stop offset="1" stopColor="#24126a"/>
                </LinearGradient>
            </Defs>
            <Path fill='url(#grd1)' d="M1.5 0L1.5 0C2.33 0 3 0.67 3 1.5L3 44.5C3 45.33 2.33 46 1.5 46L1.5 46C0.67 46 0 45.33 0 44.5L0 1.5C0 0.67 0.67 0 1.5 0Z" />
        
        </G>,
        ViewBox:"0 0 3 46"
    },
ActualIcon:{
    svg: <G>
        <Defs>
        <LinearGradient id="grd1" gradientUnits="userSpaceOnUse" x1="1.286" y1="0.815" x2="12.833" y2="17.51">
                    <Stop offset="0" stopColor="#42e8e0"/>
                    <Stop offset="0.022" stopColor="#40ddda"/>
                    <Stop offset="1" stopColor="#24126a"/>
                </LinearGradient>
        </Defs>
        <Path fill='url(#grd1)' d="M5 10C2.23 10 0 7.76 0 5C0 2.23 2.23 0 5 0C7.76 0 10 2.23 10 5C10 7.76 7.76 10 5 10Z" />
    
    </G>,
    viewBox:"0 0 10 10" 
},
PredictedIcon:{
    svg: <G>
        <Defs>
        <LinearGradient id="grd1" gradientUnits="userSpaceOnUse" x1="1.286" y1="0.815" x2="12.833" y2="17.51">
                    <Stop offset="0" stopColor="#5656ff"/>
   
                    <Stop offset="1" stopColor="#fe6e9d"/>
                </LinearGradient>
        </Defs>
        <Path fill='url(#grd1)' d="M5 10C2.23 10 0 7.76 0 5C0 2.23 2.23 0 5 0C7.76 0 10 2.23 10 5C10 7.76 7.76 10 5 10Z" />
    
    </G>,
    viewBox:"0 0 10 10" 
}
    }


export const IconList=Object.keys(svgs)