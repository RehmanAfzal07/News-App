import { ActivityIndicator, StyleSheet, Text, View,Alert } from 'react-native'
import React, {useEffect} from 'react';
import WeatherInfo from './WeatherInfo';
import Constants from 'expo-constants'


const API_KEYS= 'bdad9ca5fdffb89d6eb86bfed5255802';

const Weather = () => {


  const [weatherData, setWeatherData]=React.useState(null);
  const [loaded, setLoaded]=React.useState(false);

  const fetchWeatherData = async(cityName)=>{
      try {
        setLoaded(false);
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q${cityName}&appid=${API_KEYS}&units=metric`)
        if(response.status == 200){
          const data = await response.json();
          setWeatherData(data);
        }else
        {
          setWeatherData(null);
        }
        setLoaded(true);
      } catch (error) {
        Alert.alert('Error', error.message)
      }
  }

  useEffect(()=>{
    fetchWeatherData('Karachi')
  },[])

if(!loaded){
  return(
    <View style={styles.container}>   
     <ActivityIndicator size={'large'} color="red"/>
    </View>
  )
}

  return (
      <>
      <View style={styles.container}>
     <View style={styles.header}>
     <Text style={styles.headerTitle}>Weather</Text>
     </View>
     <WeatherInfo weatherData={weatherData}/>
    </View>
     </>
  )
}

export default Weather

const styles = StyleSheet.create({
header:{

  backgroundColor:"#8957c7",
  alignItems:"center",
  textAlign:"center",
  padding:20,
  marginHorizontal:10
},
headerTitle:{
  fontWeight:"400",
  fontSize:32,
  color:"#f6f6f6",
  

}


})