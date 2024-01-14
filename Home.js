import React from 'react';
import { styles } from './Styles.js';
import { View, Text, StyleSheet, Platform, StatusBar, Appearance, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export const Home = () => {
    const choresData = [
        { key: '1', task: 'Task 1' },
        { key: '2', task: 'Task 2' },
        { key: '3', task: 'Task 3' },
        { key: '4', task: 'Task 4' },
        { key: '5', task: 'Task 5' },
        { key: '6', task: 'Task 6' },
        // Add more data as needed
    ];

    const roommatesData = [
        { key: '1', name: 'Roommate 123123123123' },
        { key: '2', name: 'Roommate 2' },
        { key: '3', name: 'Roommate 3' },
        { key: '4', name: 'Roommate 4' },
        // Add more data as needed
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* First View Segment */}
            <ScrollView>
                <View style={styles.segment1}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Welcome back, bruh</Text>
                    </View>
                    <View style={styles.blankView}>
                        <Text style={{ fontSize: 30 }}>
                            100ϟ
                        </Text>
                    </View>

                </View>

                {/* Second View Segment */}
                <View style={styles.segment2}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.headingText}>Your Chores</Text>
                    </View>
                    {/* FlatList for chores goes here */}
                    <FlatList
                        nestedScrollEnabled
                        data={choresData}
                        renderItem={({ item }) => (
                            <View style={styles.roommateItem}>
                                <BouncyCheckbox
                                    fillColor="red"
                                    unfillColor="#FFFFFF"
                                    text={item.task}
                                    iconStyle={{ borderColor: "white" }}
                                    innerIconStyle={{ borderWidth: 3 }}
                                    onPress={(isChecked) => { }}
                                />
                            </View>
                        )}
                        keyExtractor={(item) => item.key}
                        numColumns={2}
                    />
                </View>

                {/* Third View Segment */}
                <View style={styles.segment3}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.headingText}>Your Roommates</Text>
                    </View>
                    {/* FlatList for roommates goes here */}
                    <FlatList
                        nestedScrollEnabled
                        data={roommatesData}
                        renderItem={({ item }) => (
                            <View style={styles.roommateItem}>
                                <BouncyCheckbox
                                    fillColor="red"
                                    unfillColor="#FFFFFF"
                                    text={item.task}
                                    iconStyle={{ borderColor: "white" }}
                                    innerIconStyle={{ borderWidth: 3 }}
                                    onPress={(isChecked) => { }}
                                />
                            </View>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginHorizontal: 10, }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};