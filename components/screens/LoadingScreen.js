import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const LoadingScreen = () => {
    const navigation= useNavigation();
    useEffect(()=>{
      setTimeout(()=>{
         navigation.replace('OrderScreen')
      },3000)
    },[])
  return (
    <SafeAreaView>
        <LottieView
          source={require('../assets/animations/Thumbs up.json')}
          style={{
            height:moderateScale(260),
            width:moderateScale(300),
            alignSelf:'center',
            marginTop:verticalScale(40),
            justifyContent:'center'
          }}
          autoPlay
          speed={1}
        />
        <Text style={{
            marginTop:verticalScale(20),
            textAlign:'center',
            fontWeight:'700',
            fontSize:moderateScale(19)
        }}>Your order have out for delivery</Text>
        <LottieView
          source={require('../assets/animations/Partynkl.json')}
          style={{
            height:moderateScale(300),
            width:moderateScale(300),
            alignSelf:'center',
           position:'absolute'
          }}
          autoPlay
          speed={0.7}
        />

    </SafeAreaView>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})