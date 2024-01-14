import React from 'react';
import { styles } from './Styles.js';
import { View, Text, StyleSheet, Platform, StatusBar, Appearance, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Roommates = () => (
    <View style={styles.screenContainer}>
        <Text>Screen 1</Text>
    </View>
);