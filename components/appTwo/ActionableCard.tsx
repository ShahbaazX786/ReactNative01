import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const ActionableCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <Text style={styles.headingText}>Actionable Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's up my G?</Text>
                </View>
                <Image style={styles.cardImage} source={{
                    uri: 'https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg',
                }} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.bodyText} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem eius minima natus obcaecati, molestias aperiam numquam ipsum recusandae laborum animi suscipit quae asperiores enim nostrum, corporis deleniti dolore cum tempore commodi similique officia. Veniam quasi veritatis totam laborum non consequuntur illo odio ullam. Itaque hic laudantium sapiente incidunt voluptate impedit?</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://www.youtube.com/watch?v=cHqfk5lMw-E&ab_channel=FamilleMusulmane')}>
                        <Text numberOfLines={3} style={styles.socialLinks}>Click this button</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')}>
                        <Text numberOfLines={3} style={styles.socialLinks}>Now check this</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ActionableCard;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 380,
        height: 360,
        marginHorizontal: 16,
        marginVertical: 12,
        paddingVertical:10,
    },
    cardImage: {
        height: 180,
    },
    cardElevated: {
        backgroundColor: '#E07C24',
        elevation: 3,
        borderRadius: 6,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
    },
    bodyText: {},
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 8,
    },
    socialLinks: {
        fontSize: 14,
        color: '#000000',
        backgroundColor: '#fff',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
});
