import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Screen1 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 1</Text>
  </View>
);

const Screen2 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 2</Text>
  </View>
);

const Screen3 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 3</Text>
  </View>
);

const Screen4 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 4</Text>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#3498db',
          inactiveTintColor: '#bdc3c7',
          style: {
            backgroundColor: '#ecf0f1',
          },
        }}>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
        <Tab.Screen name="Screen4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;