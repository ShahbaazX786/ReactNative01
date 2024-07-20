import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {

    const contacts = [
        {
            uid: '1',
            name: 'John One',
            status: 'Online',
            imageUrl: 'https://picsum.photos/101',
        },
        {
            uid: '2',
            name: 'John Two',
            status: 'Online 5 hours ago',
            imageUrl: 'https://picsum.photos/202',
        },
        {
            uid: '3',
            name: 'Three San',
            status: 'Online',
            imageUrl: 'https://picsum.photos/303',
        },
        {
            uid: '4',
            name: 'Yon Four',
            status: 'Online 2 Minutes ago',
            imageUrl: 'https://picsum.photos/404',
        },
        {
            uid: '5',
            name: 'Ich Five',
            status: 'Online',
            imageUrl: 'https://picsum.photos/505',
        },
    ];

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView scrollEnabled={false} style={styles.container}>
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image style={styles.userImage} source={{
                            uri: imageUrl,
                        }} />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        gap: 16,
        backgroundColor: '#8D3DAF',
        borderRadius: 8,
        marginVertical: 5,
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    userStatus: {
        fontSize: 12,
        color: 'white',
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        borderWidth: 2,
    },
});
