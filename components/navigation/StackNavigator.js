import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const Stack = createStackNavigator();
const StackNavigator = () => {
    
  return (
    <SafeAreaProvider style={{flex:1}}>
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='MenuScreen' component={MenuScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})