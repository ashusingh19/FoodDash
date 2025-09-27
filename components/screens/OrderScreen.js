import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import moment from 'moment'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import MapView from 'react-native-maps'
const OrderScreen = () => {
    const time= moment().format('LT');
    const mapView = useRef(null);
  return (
    <SafeAreaView>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            height:moderateScale(80),
            backgroundColor:'#fc8019',
           padding:moderateScale(10)
        }}>
            <View style={{marginLeft:moderateScale(10)}}>
                <Text style={{fontSize:17,fontWeight:'600',color:'white'}}>Delivery in 20mins</Text>
                <Text style={{fontSize:17,fontWeight:'600',color:'white',top:verticalScale(4)}}>Order place at {time}</Text>
            </View>
            <Text style={{fontSize:17,fontWeight:'600',color:'white'}}>Help</Text>
        </View>
        {/* <MapView
        ref={mapView}
        style={{height:moderateScale(400),width:'100%'}}
           initialRegion={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421,
         }}
    /> */}
    </SafeAreaView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})