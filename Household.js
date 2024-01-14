import React from 'react';
import { styles } from './Styles.js';
import { View, Text, StyleSheet, Platform, StatusBar, Appearance, ScrollView, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState, useEffect } from 'react';
import { ProfilePicture } from './ProfilePicture.js';

export const Household = () => {

  const [people, setPeople] = useState([]);

  const Person = ({name, userid}) => {
    <View>
      <ProfilePicture userid={userid} />
      <Text>{name}</Text>

    </View>
  }


  function renderHousehold() {
    people.map((person) => {
      return(
        <Person name={person.name} userid={person.id}/>
      );
      
    })
  }

  return ( 
    <renderHousehold />
   );
}
 
