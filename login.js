// LoginScreen.js
import React, { useState, useEffect } from 'react';
import { styles } from './Styles.js';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [userData, setUserData] = useState('');
    
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //         const res = await axios.get("/register");
  //         setBooks(res.data);
  //     } catch(err) {
  //         console.log(err);
  //     }
  // }
  // console.log(books);
  // fetchAllBooks();
  // }, []);

  const handleLogin = () => {
    // Implement your authentication logic here
    if (username === 'demo' && password === 'password') {
      // Successful login, navigate to the home screen
      
    } else {
      // Display an error message or handle unsuccessful login
      alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>Login</Text>
      <TextInput
        style={styles.loginInput}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.loginInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
