import { View, Text, StyleSheet, Platform, StatusBar, Appearance } from 'react-native';

export const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: "#b39e97",
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
        backgroundColor: '#b39e97',
        borderBottomColor: '#918d8e',
        borderBottomWidth: 5,
    },
    segment2: {
        marginBottom: 20,
        borderBottomColor: '#918d8e',
        borderBottomWidth: 5,
    },
    segment3: {
        marginBottom: 20,
    },
    titleContainer: {
        marginHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flex: 3,
    },
    titleText: {
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
    },
    blankView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: 'lightgray',
        width: 100, // Set a fixed width for the blank view
        height: 110, // Set a fixed height for the blank view
        alignSelf: 'right', // Align to the right
        flex: 1,
        padding: 15,
        borderRadius: 60,
    },
    headingContainer: {
        marginBottom: 10,
    },
    headingText: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    listItem: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#4C6444',
        borderRadius: 10,
        borderColor: '#917467',
        margin: 5,
        padding: 10,
        height: 90,
    },
    friendItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        padding: 10,
        marginRight: 10,
        borderRadius: 10,
        height: 90,
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    loginTitle: {
        fontSize: 36,
        marginBottom: 24,
    },
    loginInput: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
});