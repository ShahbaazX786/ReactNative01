import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/appTwo/FlatCards';

export default function AppTwo(): JSX.Element {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards />
            </ScrollView>
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({});
