import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/appTwo/FlatCards';
import ElevatedCard from './components/appTwo/ElevatedCard';
import FancyCard from './components/appTwo/FancyCard';
import ActionableCard from './components/appTwo/ActionableCard';
import ContactList from './components/appTwo/ContactList';

export default function AppTwo(): JSX.Element {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards />
                <ElevatedCard />
                <FancyCard />
                <FancyCard />
                <ActionableCard />
                <ContactList />
            </ScrollView>
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({});
