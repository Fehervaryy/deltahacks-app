import React from 'react';
import { styles } from './Styles.js';
import { View, Text, StyleSheet, Platform, StatusBar, Appearance, ScrollView, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const Chores = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* First Segment */}
                <View style={styles.segment1}>
                    <Text style={styles.titleText}>Chores</Text>
                </View>

                {/* Second Segment */}
                <View style={styles.segment2}>
                    <Text style={styles.headingText}>Daily Chores</Text>
                    <FlatList
                        nestedScrollEnabled
                        data={choresData}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
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

                {/* Third Segment */}
                <View style={styles.segment2}>
                    <Text style={styles.headingText}>Weekly Chores</Text>
                    <FlatList
                        nestedScrollEnabled
                        data={choresData}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Text>{item.task}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.key}
                        numColumns={2}
                    />
                </View>

                {/* Fourth Segment */}
                <View style={styles.segment}>
                    <Text style={styles.headingText}>Bi-weekly Chores</Text>
                    <FlatList
                        nestedScrollEnabled
                        data={choresData}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Text>{item.task}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.key}
                        numColumns={2}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

(
    <View style={styles.screenContainer}>
        <Text>Screen 1</Text>
    </View>
);