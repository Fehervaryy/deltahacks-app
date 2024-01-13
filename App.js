import React from 'react';
import { Home } from './Home.js';
import { Chores } from './Chores.js';
import { Goals } from './Goals.js';
import { Friends } from './Friends.js';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { View, Text, StyleSheet, Platform, StatusBar, Appearance } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const App = () => {
  SystemNavigationBar.setBarMode('light');
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            activeTintColor: '#3498db',
            inactiveTintColor: '#bdc3c7',
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ],
            style: {
              backgroundColor: '#ecf0f1',
            },
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Chores" component={Chores} />
          <Tab.Screen name="Goals" component={Goals} />
          <Tab.Screen name="Friends" component={Friends} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default App;