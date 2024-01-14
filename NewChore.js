import React from 'react';
import { styles } from './Styles.js';
import { View, Text, StyleSheet, Platform, StatusBar, Appearance, ScrollView, FlatList, Button, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState, useEffect } from 'react';
import axios from 'axios';

export const NewChore = () => {
  const [choreName, setChoreName] = useState();
  const [choreAssignment, setChoreAssignment] = useState();
  const [choreFrequency, setChoreFrequency] = useState();
  const [choreCategory, setChoreCategory] = useState();

  const submitChore = async e => {
    try {
      await axios.post("https://ab00-130-113-151-227.ngrok-free.app/chores", {name: choreName, frequency: choreFrequency, assignedto: choreAssignment, category: choreCategory});
      console.log("pressed!");
    } catch (err) {
      console.log(err);
    }
  }

  return ( 
    <View style={{justifySelf: 'center', alignSelf:'center', marginTop: 80}}>
      <TextInput 
      placeholder='Chore Name'
      onChangeText={(text) => setChoreName(text)}/>
      <TextInput 
      placeholder='Frequency'
      onChangeText={(text) => setChoreFrequency(text)}/>
      <TextInput 
      placeholder='Category'
      onChangeText={(text) => setChoreCategory(text)}/>
      <TextInput 
      placeholder='Assignment'
      onChangeText={(text) => setChoreAssignment(parseInt(text))}/>
      <Button title="Assign Chore" onPress={submitChore}></Button>
    </View>
   );
}