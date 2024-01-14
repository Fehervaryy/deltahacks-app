import { useState, useEffect } from 'react';
import axios from 'axios';
import { styles } from './Styles.js';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [userData, setUserData] = useState('');

  const handleSignup = async e => {
    try {
      await axios.post("https://41dd-130-113-151-227.ngrok-free.app/register", {email, username, password});
      console.log("pressed!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={{alignSelf: 'center', justifyContent: 'center', marginTop: 80}}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  )
};