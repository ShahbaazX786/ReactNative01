import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.darkText}>Card</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.darkText}>Scrollable</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.darkText}>Oppan</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.darkText}>Gangnam</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.darkText}>Style</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.darkText}>👓🎵🎶🎵🎶</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.darkText}>Oppa</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.darkText}>Gang</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.darkText}>nam</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.darkText}>Style</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        marginHorizontal: 10,
        margin: 5,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        margin: 8,
        borderRadius: 4,
    },
    cardElevated: {
        elevation: 5,
        backgroundColor: '#CAD5E2',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    darkText: {
        color: 'black',
        fontWeight: 'bold',
    },
});
