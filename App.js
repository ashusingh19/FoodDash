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

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import RegisterScreen from './components/screens/RegisterScreen'
// const App = () => {
//   return (
//     <View>
//       <RegisterScreen/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
