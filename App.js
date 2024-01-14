import React from 'react';
import { styles } from './Styles.js';
import { Home } from './Home.js';
import { Chores } from './Chores.js';
import { Friends } from './Friends.js';
import { Profile } from './Profile.js';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { View, Text, StyleSheet, Platform, StatusBar, Appearance, ScrollView, FlatList} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <NavigationContainer theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: '#116627',
          background: '#bfaca4',
          card: '#917467',
          text: 'black',
          border: '#744535',
        }
      }}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            activeTintColor: '#3498db',
            inactiveTintColor: '#bdc3c7',
            "tabBarStyle": [
              {
                "display": "flex",
              },
              null
            ],  
            style: {
              backgroundColor: '#ecf0f1',
            },
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Chores" component={Chores} />
          <Tab.Screen name="Friends" component={Friends} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor="#bfaca4"/>
    </SafeAreaView>
  );
};
export default App;