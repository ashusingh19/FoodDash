import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './components/navigation/StackNavigator'
import { Provider } from 'react-redux'
import Store from './redux/Store'
const App = () => {
  return (
    <>
      <Provider store={Store}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'}/>
        <StackNavigation/>
      </Provider>
    </>
      
    
  )
}

export default App

const styles = StyleSheet.create({})











// App.js
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import RegisterScreen from "./components/screens/RegisterScreen";
// import LoginScreen from "./components/screens/LoginScreen";
// import HomeScreen from "./components/screens/HomeScreen"; 

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Register">
//         <Stack.Screen name="Register" component={RegisterScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

