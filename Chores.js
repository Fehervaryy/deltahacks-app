import React from 'react';
import { styles } from './Styles.js';
import { View, Text, StyleSheet, Platform, StatusBar, Appearance, ScrollView, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const Chores = () => {

    const choresData = [
        { key: '1', task: 'Task 1' },
        { key: '2', task: 'Task 2' },
        { key: '3', task: 'Task 3' },
        { key: '4', task: 'Task 4' },
        { key: '5', task: 'Task 5' },
        { key: '6', task: 'Task 6' },
        // Add more data as needed
    ];

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

// import React from 'react';
// import { styles } from './Styles.js';
// import { View, Text, StyleSheet, Platform, StatusBar, Appearance, ScrollView, FlatList } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import BouncyCheckbox from "react-native-bouncy-checkbox";
// import { useState, useEffect } from 'react';

// const fetchData = async () => {
//     try {
//         const response = await fetch("https://ab00-130-113-151-227.ngrok-free.app/chores");
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// export const Chores = () => {

//     const [chores, setChores] = useState([]);
//     useEffect(() => {
//         fetchData().then(fetchedData => {
//             setChores(fetchedData);
//         });
//     }, []);

//     function RenderChores() {
//         return (
//             chores.map((chore) => {
//                 <View>
//                     <Text style={{fontSize: 40}}>{chore}</Text>
//                     <Text>Test</Text>
//                 </View>
//             })
//         );
//     }

//     return (
//         // <SafeAreaView style={styles.container}>
//         //     <ScrollView>
//         //         {/* First Segment */}
//         //         <View style={styles.segment1}>
//         //             <Text style={styles.titleText}>Chores</Text>
//         //         </View>

//         //         {/* Second Segment */}
//         //         <View style={styles.segment2}>
//         //             <Text style={styles.headingText}>Daily Chores</Text>
//         //             <FlatList
//         //                 nestedScrollEnabled
//         //                 data={choresData}
//         //                 renderItem={({ item }) => (
//         //                     <View style={styles.listItem}>
//         //                         <BouncyCheckbox
//         //                             fillColor="red"
//         //                             unfillColor="#FFFFFF"
//         //                             text={item.task}
//         //                             iconStyle={{ borderColor: "white" }}
//         //                             innerIconStyle={{ borderWidth: 3 }}
//         //                             onPress={(isChecked) => { }}
//         //                         />
//         //                     </View>
//         //                 )}
//         //                 keyExtractor={(item) => item.key}
//         //                 numColumns={2}
//         //             />
//         //         </View>

//         //         {/* Third Segment */}
//         //         <View style={styles.segment2}>
//         //             <Text style={styles.headingText}>Weekly Chores</Text>
//         //             <FlatList
//         //                 nestedScrollEnabled
//         //                 data={choresData}
//         //                 renderItem={({ item }) => (
//         //                     <View style={styles.listItem}>
//         //                         <Text>{item.task}</Text>
//         //                     </View>
//         //                 )}
//         //                 keyExtractor={(item) => item.key}
//         //                 numColumns={2}
//         //             />
//         //         </View>

//         //         {/* Fourth Segment */}
//         //         <View style={styles.segment}>
//         //             <Text style={styles.headingText}>Bi-weekly Chores</Text>
//         //             <FlatList
//         //                 nestedScrollEnabled
//         //                 data={choresData}
//         //                 renderItem={({ item }) => (
//         //                     <View style={styles.listItem}>
//         //                         <Text>{item.task}</Text>
//         //                     </View>
//         //                 )}
//         //                 keyExtractor={(item) => item.key}
//         //                 numColumns={2}
//         //             />
//         //         </View>
//         //     </ScrollView>
//         // </SafeAreaView>
//         <View>
//             <Text></Text>
//             <RenderChores />
//         </View>
        
//     );
// };

// (
//     <View style={styles.screenContainer}>
//         <Text>Screen 1</Text>
//     </View>
// );