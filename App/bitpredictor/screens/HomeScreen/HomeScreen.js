import React from 'react';
import {StyleSheet,View,Text,Image,ImageBackground,Dimensions,TouchableOpacity} from "react-native";
import Icon from './resources/SvgIcons/Icon';
import GeneralStatusBarColor from "../components/GeneralStatusBarColor";
import bg from './resources/assets/bg.png';
import smileys1 from './resources/assets/smileys1_1x.png';
import smileys2 from './resources/assets/smileys2_1x.png';
import {firebaseConfig} from './firebase/FirebaseConfig';
import * as firebase from 'firebase'; 
import SplashScreen from 'react-native-splash-screen';

const {height, width} = Dimensions.get('window');
const MonthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
 'August', 'September', 'October', 'November', 'December']
 const Advice = [{symbol:smileys1, Text:'Good for Buying'}, {symbol:smileys2, Text:'Good for Selling'}]
 const HomeScreen = () => {
     console.disableYellowBox = true;
     const [topMenu, setTopMenu] = React.useState([{icon:'Contact', active:false, width:25, color: 'rgba(53,150,178,0.251)' }, {icon:'Analysis', active:false, width:70, color: 'rgba(53,150,178,1)' }, {icon:'FAQ', active:false, width:25, color: 'rgba(53,150,178,0.251)' }])
     const [advice, setAdvice] = React.useState (Advice[1])
     const [month, setMonth] = React.useState (MonthName[0])
     const [currentPrice, setCurrentPrice] = React.useState(0)
     //React.useEffect(()=> setTimeout(()=> {SplashScreen.hide()}, 1000 ) )
     React.useEffect(()=> {
         if (!firebase.apps.length)
         {
             firebase.initializeApp(firebaseConfig)
             firebase.database().ref('/').once('value').then(function(snapshot){
                console.log(snapshot.val())
            })
        }
         
    
    }, [])
    React.useEffect(()=> {
        setMonth(MonthName[new Date().getMonth()])
   }, [advice]) 
   const getBitCoinPrice= async() => {
       var price = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
       price = await price.json()
       setCurrentPrice(price.bpi.USD.rate);

   }
   React.useEffect(()=> {
    getBitCoinPrice()

}) 
return (
    <ImageBackground source={bg} style = {styles.container}>
        <GeneralStatusBarColor backgroundColor = {'transparent'}
        barStyle="dark-content"
        />
        <View style = {styles.row}>
            {
                topMenu.map((element,index)=>(
                    <TouchableOpacity key={index}>
                        <Icon name={element.icon} 
                        fill={element.color}
                        width={element.width} />
                        </TouchableOpacity>

                         
                ))
            }
            </View> 
        <View style = {{...styles.row, marginTop: height*0.035}}>
            <Text style={styles.title}> Analysis </Text>
            
            </View>
            <View style = {{...styles.row, flexDirection:'column'}}>
            <Text style={styles.title}> Current Price </Text>
            <Text style={styles.priceTxt}>{'~$'+currentPrice}</Text>
            </View>
            <View style = {styles.footer}>
                <Image source={advice.symbol} style={styles.smileysStyles} />
            <Text style={styles.adviceTxt}> {advice.Text} </Text>
            <View style = {styles.monthContainer}>
            <Text style={styles.monthTxt}> {month} </Text>
            
            </View>
            </View>
            
    </ImageBackground>
)
 }
const styles = StyleSheet.create({
    container:{
        flex:1, 
        width:'100%',
        alignItems: "center"
    },
    row:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '85%',
        marginTop: 30,

    },
    title: {
        fontSize:width*0.06,
        fontFamily: 'Montserrat-Bold',
        
    },
    label:{
        fontSize:width*0.04,
        fontFamily: 'Montserrat-Medium',
    },
    priceTxt:{
        fontSize:width*0.03,fontFamily: 'Montserrat-Medium'
    },
    footer: {
        position: "absolute",
        bottom: height*0.03,
        justifyContent: "center",
        alignItems: "center"
    },
    smileysStyles: {
        width:width*0.2,
        height:width*0.2
    },

adviceTxt:{
    fontSize:width*0.06,
    color:'white',
    marginTop:height*0.02,
    fontFamily: 'Montserrat-Bold',
},
monthTxt:{fontSize:width*0.065,
    fontFamily: 'Montserrat-Bold',
    color: '#4f0c9c',
    paddingVertical: 5,
    paddingHorizontal: width*0.08
},
monthContainer:{
    marginTop:height*0.015,
    alignItems:'center',
    borderRadius:height*0.05,
    backgroundColor: 'white'
}
})
export default HomeScreen;