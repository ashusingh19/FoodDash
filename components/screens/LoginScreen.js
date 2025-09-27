import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success ", "Logged in successfully!");
      navigation.navigate("Home"); 
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        Alert.alert("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        Alert.alert("Incorrect password.");
      } else {
        Alert.alert("Error:", error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button title="Login" onPress={handleLogin} />

      <Text
        style={styles.link}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Don’t have an account? Register
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  heading: { fontSize: 24, marginBottom: 20, textAlign: "center", fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 12, borderRadius: 8 },
  link: { marginTop: 15, textAlign: "center", color: "blue" },
});
