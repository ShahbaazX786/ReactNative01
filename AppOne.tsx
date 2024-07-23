// Hello world like App.

import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

function AppOne(): JSX.Element {
    const isDarkMode = useColorScheme() === 'light';
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Bismillah</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'skyblue',
    },
    darkText: {
        fontSize: 50,
        fontWeight: 'bold',
        backgroundColor: 'darkblue',
        color: 'green',
    },
});

export default AppOne;
