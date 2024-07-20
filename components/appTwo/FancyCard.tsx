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
                    <Text style={styles.cardLabel}>Fantasy Island, Korea</Text>
                    <Text numberOfLines={3} style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti consectetur minima excepturi, beatae ullam maiores obcaecati vel ex exercitationem accusantium.</Text>
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
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 380,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        elevation: 2,
    },
    cardElevated: {
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardImage: {
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'black',
    },
    cardLabel: {
        fontSize: 14,
        color: 'black',
        marginBottom: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardDescription: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 12,
        marginTop: 6,
    },
    cardFooter: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
