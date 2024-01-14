// LoginScreen.js
import React, { useState, useEffect } from 'react';
import { styles } from './Styles.js';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [userData, setUserData] = useState('');
    
  useEffect(() => {
    const fetchUserData = async () => {
      try {
          const res = await axios.get("https://41dd-130-113-151-227.ngrok-free.app/register");
          setUserData(res.data);
      } catch(err) {
          console.log(err);
      }
  }
  fetchUserData();
  }, []);

  const handleLogin = () => {
    axios.post('https://41dd-130-113-151-227.ngrok-free.app/signin', { username, password })
    .then(response => {
        
    })
    .catch(error => {
        console.log('Credentials didn\'t match');
    });
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

