import React from 'react';
import { styles } from './Styles.js';
import { View, Text, StyleSheet, Platform, StatusBar, Appearance, ScrollView, FlatList, Pressable} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ProfilePicture } from './ProfilePicture.js';

export const Roommates = () => {
    const roommatesData = [
        { key: '1', name: 'Roommate 123123123123' },
        { key: '2', name: 'Roommate 2' },
        { key: '3', name: 'Roommate 3' },
        { key: '4', name: 'Roommate 4' },
        // Add more data as needed
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* First Segment */}
                <View style={styles.segment1}>
                    <Text style={styles.titleText}>Roommates</Text>
                    <ProfilePicture id={2}></ProfilePicture>
                </View>

                {/* Second Segment */}
                <View style={styles.segment2}>
                    <FlatList
                        nestedScrollEnabled
                        data={roommatesData}
                        renderItem={({ item }) => (

                            <Pressable onPress={()=>{console.log("ha")}} android_ripple={{ color: 'white' }}>
                                <View style={styles.roommateItem}>
                                    <Text>{item.name}</Text>
                                </View>
                            </Pressable>
                        )}
                        keyExtractor={(item) => item.key}
                        numColumns={2}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};