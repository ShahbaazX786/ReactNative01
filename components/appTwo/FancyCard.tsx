import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]} >
                <Image source={{
                    uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
                }} style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Chilly Mountains</Text>
                    <Text style={styles.cardLabel}>Chilly Mountains</Text>
                    <Text style={styles.cardDescription}>Chilly Mountains</Text>
                    <Text style={styles.cardFooter}>200Kms Away</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {},
    cardElevated: {},
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
        borderRadius: 4,
    },
    cardTitle:{},
    cardLabel:{},
    cardBody:{},
    cardDescription:{},
    cardFooter:{},
});
