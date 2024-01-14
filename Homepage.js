import React from 'react';
import { styles } from './Styles.js';
import { Home } from './Home.js';
import { Chores } from './Chores.js';
import { Roommates } from './Roommates.js';
import { Profile } from './Profile.js';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { View, Text, StyleSheet, Platform, StatusBar, Appearance, ScrollView, FlatList} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { LoginScreen } from './login.js';
import { SignUp } from './signup.js';
import { NewChore } from './NewChore.js';

export const Homepage = () => {
  return ( 
    <SafeAreaView style={{backgroundColor: 'white', borderBottomWidth:1}}>
      <View style={{backgroundColor: 'white'}}>

      </View>
    </SafeAreaView>
   );
}
 
