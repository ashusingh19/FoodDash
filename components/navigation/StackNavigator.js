import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import CartScreen from '../screens/CartScreen'
import LoadingScreen from '../screens/LoadingScreen'
import OrderScreen from '../screens/OrderScreen'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const Stack = createStackNavigator();
const StackNavigator = () => {
    
  return (
    <SafeAreaProvider style={{flex:1}}>
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='RegisterScreen'>
            <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='MenuScreen' component={MenuScreen}/>
            <Stack.Screen name='CartScreen' component={CartScreen}/>
            <Stack.Screen name='LoadingScreen' component={LoadingScreen}/>
            <Stack.Screen name='OrderScreen' component={OrderScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})