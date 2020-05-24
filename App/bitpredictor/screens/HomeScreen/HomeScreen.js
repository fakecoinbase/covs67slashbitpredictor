//importing required files
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

//getting screen height and width
const {height, width} = Dimensions.get('window'); 
//creating an array for months
const MonthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
 'August', 'September', 'October', 'November', 'December']
 //creating an array for advice
 const Advice = [{symbol:smileys1, Text:'Good for Buying'}, {symbol:smileys2, Text:'Good for Selling'}]
 //component for homescreen
 const HomeScreen = () => {
     console.disableYellowBox = true;
     console.log('check')
     const [topMenu, setTopMenu] = React.useState([{icon:'Contact', active:false, width:25, color: 'rgba(53,150,178,0.251)' }, {icon:'Analysis', active:false, width:70, color: 'rgba(53,150,178,1)' }, {icon:'FAQ', active:false, width:25, color: 'rgba(53,150,178,0.251)' }])
     //setting initial values for advice, month and price
     const [advice, setAdvice] = React.useState (Advice[1])
     const [month, setMonth] = React.useState (MonthName[0])
     const [currentPrice, setCurrentPrice] = React.useState(0)
     //React.useEffect(()=> setTimeout(()=> {SplashScreen.hide()}, 1000 ) )
     //initializing firebase
     React.useEffect(()=> {
         if (!firebase.apps.length)
         {
             firebase.initializeApp(firebaseConfig)
           
        }
         
    
    }, [])
    React.useEffect(()=> {
        //setting current month
        setMonth(MonthName[new Date().getMonth()])
        //getting firebase data
        firebase.database().ref('/').once('value').then(function(snapshot){
            //console.log(snapshot.val())
            var date = new Date();
            var data = snapshot.val();
           // console.log('loaded==', data[1])
            //console.log('data==', data)
            //Set advice based on the results received from firebase
            if (data[date.getMonth()]!='buy') {
                setAdvice(Advice[1])
                
            } else {
                setAdvice(Advice[0])
                
            }
        })
   }, [advice]) 
   //getting bitcoin current price
   const getBitCoinPrice= async() => {
       var price = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
       price = await price.json()
       setCurrentPrice(price.bpi.GBP.rate);

   }
   React.useEffect(()=> {
    getBitCoinPrice()

}) 
return (
    <ImageBackground source={bg} style = {styles.container}>
        {/* setting statusBarColor to transparent */}
        <GeneralStatusBarColor backgroundColor = {'transparent'}
        barStyle="dark-content"
        />
        {/* creating top menu bar */}
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
            {/* View for analysis */}
            <Text style={styles.title}> Analysis </Text>
            
            </View>
            {/* View for currentPrice */}
            <View style = {{...styles.row, flexDirection:'column'}}>
            <Text style={styles.title}> Current Price </Text>
            <Text style={styles.priceTxt}>{'~£'+currentPrice}</Text>
            </View>
            {/* View for Advice */}
            <View style = {styles.footer}>
                {/* Image for Advice */}
                <Image source={advice.symbol} style={styles.smileysStyles} />
                {/* Text for advice */}
            <Text style={styles.adviceTxt}> {advice.Text} </Text>
            <View style = {styles.monthContainer}>
            <Text style={styles.monthTxt}> {month} </Text>
            
            </View>
            </View>
            
    </ImageBackground>
)
 }
 //styles for homescreen
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
        
        
    },
    label:{
        fontSize:width*0.04,
        
    },
    priceTxt:{
        fontSize:width*0.03
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
    
},
monthTxt:{fontSize:width*0.065,
   
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