import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => (
    <View style={styles.screenContainer}>
        <Text>Screen 1</Text>
    </View>
);

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});