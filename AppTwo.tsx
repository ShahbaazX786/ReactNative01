import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/appTwo/FlatCards';
import ElevatedCard from './components/appTwo/ElevatedCard';

export default function AppTwo(): JSX.Element {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards />
                <ElevatedCard />
            </ScrollView>
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({});
