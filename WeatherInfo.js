import { StyleSheet, Text, View,SafeAreaView,Image,Dimensions } from 'react-native'
import React from 'react'

const WeatherInfo = ({weatherData}) => {
    const {
        name,
        visibility,
        weather:[{icon,description}],
        main:{temp,humidity,feels_like,},
        wind:{speed},
        sys:{sunrise,sunset},
    }=weatherData;
  return (
    <SafeAreaView styles={styles.container}>
        <View style={{alignItems:"center"}}>
        <Text style={styles.title}>{name}</Text>
        </View>
       <View style={styles.logo}>
       <Image
            style={styles.largeIcon}
            source={{uri:`http://openweathermap.org/img/wn/${icon}.png`}}
        />
       <Text style={styles.currentTemp}>{temp}°C</Text>
       <Text style={styles.description}>{description}</Text>
       <View style={styles.extraInfo}>
         <View style={styles.info}>
         <Image
            style={styles.smallIcon}
            source={require('./assets/temp.png')}
        />
           <Text style={styles.infoText}>{feels_like}°C</Text>
           <Text style={styles.infoText}>Feel Like</Text>
         </View>
         <View style={styles.info}>
         <Image
            style={styles.smallIcon}
            source={require('./assets/temp.png')}
        />
           <Text style={styles.infoText}>{humidity}%</Text>
           <Text style={styles.infoText}>Humidity</Text>
         </View> 
       </View>
       
       
       </View>
       
    </SafeAreaView>
  )
}

export default WeatherInfo

const styles = StyleSheet.create({
    continue:{
        flex:1,
        marginTop:15,
    },
    title:{
        width:"100%",
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold",
        color:"#ef9303",  
        marginTop:10,
    },
    logo:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    largeIcon:{
        width:200,
        height:200
    },
    currentTemp:{
        fontSize:32,
        fontWeight:"bold",
        textAlign:"cenetr",
    },
    description:{
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold",
        marginBotton:10
    },
    extraInfo:{
        flexDirection:"row",
        justifyContent:"space-around",
         padding:7,
    },
    info:{
        width:Dimensions.get('screen').width/2.5,
        backgroundColor:"#d0eafa",
        padding:10,
        borderRadius:15,
        justifyContent:"center",
    },
    smallIcon:{
        height:40,
        width:40,
        borderRadius:40/2,
        marginLeft:50
    },
    infoText:{
        textAlign:"center",
        fontSize:18
    }
})