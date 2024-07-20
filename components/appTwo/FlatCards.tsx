import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards(): JSX.Element {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.whiteText}>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.whiteText}>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.whiteText}>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text style={styles.whiteText}>Black</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginHorizontal:10,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#50DBB4',
    },
    cardThree: {
        backgroundColor: '#5DA3FA',
    },
    cardFour: {
        backgroundColor: '#000000',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    whiteText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
