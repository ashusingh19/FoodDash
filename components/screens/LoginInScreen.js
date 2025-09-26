import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { moderateScale } from 'react-native-size-matters';
const LoginInScreen = () => {
    
     const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Success Alert
        Alert.alert('Login Successful', `Welcome ${userCredential.user.email}`);
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Login Failed', 'User not found!');
        } else if (error.code === 'auth/wrong-password') {
          Alert.alert('Login Failed', 'Incorrect password!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Login Failed', 'Invalid email!');
        } else {
          Alert.alert('Login Failed', error.message);
        }
      });
  }
  return (
    <View style={{ padding: 20 }}>
        <Text>LoginScreen</Text>
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Login" onPress={handleSignup} />
      <View style={{alignItems:'center',marginTop:moderateScale(10)}}>
        <Text>Create a account ? 
        <TouchableOpacity>
            <Text style={{color:'blue',top:moderateScale(7)}}>Register</Text>
        </TouchableOpacity>
      </Text>
      </View>
    </View>
  )
}

export default LoginInScreen

const styles = StyleSheet.create({})