import { View, Text, StyleSheet, Platform, StatusBar, Appearance } from 'react-native';

export const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: "#bfaca4",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    screenContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingTop: 10,
    },

    container: {
        flex: 1,
    },
    segment1: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#917467',
        borderBottomColor: '#918d8e',
        borderBottomWidth: 3,
    },
    segment2: {
        marginBottom: 20,
    },
    segment3: {
        marginBottom: 20,
    },
    titleContainer: {
        marginLeft: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flex: 3,
    },
    titleText: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    blankView: {
        marginRight: 10,
        backgroundColor: 'lightgray',
        width: 100, // Set a fixed width for the blank view
        height: 100, // Set a fixed height for the blank view
        alignSelf: 'right', // Align to the right
        flex: 1,
        padding: 15,
        borderRadius: 60,
    },
    headingContainer: {
        marginBottom: 10,
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    listItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        margin: 5,
        padding: 10,
    },
    friendItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        padding: 10,
        marginRight: 10,
    },
});