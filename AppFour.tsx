// Background color changing app.

import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function AppFour() {
    const [bg, setBg] = useState('#FFFFFF');

    const generateColor = () => {
        const hexRange = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)];
        }

        setBg(color);
    };

    return (
        <>
            <StatusBar backgroundColor={'#000000'} />
            <View style={[styles.container, { backgroundColor: bg }]}>
                <TouchableOpacity onPress={generateColor}>
                    <View style={[styles.actionBtn]}>
                        <Text style={styles.actionBtnText}>Click Me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtn: {
        borderRadius: 12,
        backgroundColor: '#6A1B4D',
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    actionBtnText: {
        fontSize: 24,
        color: 'white',
        textTransform: 'capitalize',
    },
});
