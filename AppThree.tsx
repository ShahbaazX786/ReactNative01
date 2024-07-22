import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passwordSchema = Yup.object().shape({
    password: Yup.number()
        .min(4, 'Should be a min of 4 characters')
        .max(16, 'Should be a max of 16 characters')
        .required('This is a required field'),
});

export default function AppThree() {

    const [password, setPassword] = useState('');
    const [isPassGenerated, setIsPassGenerated] = useState(false);

    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);


    const generatePassword = (passwordLength: number) => {
        let characterList = '';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const digits = '0123456789';
        const specialChars = '!@#$%^&*()_-+';

        if (upperCase) {
            characterList += upperCaseChars;
        }
        if (lowerCase) {
            characterList += lowerCaseChars;
        }
        if (symbols) {
            characterList += digits;
        }
        if (numbers) {
            characterList += specialChars;
        }

        const result = createPassword(characterList, passwordLength);
        setPassword(result);
        setIsPassGenerated(true);
    };

    const createPassword = (characters: string, passwordLength: number) => {
        let result = '';
        for (let i = 0; i < characters.length; i++) {
            const characterIndex = Math.round(Math.random() * characters.length);
            result += characters.charAt(characterIndex);
        }
        return result;
    };

    const resetPassword = () => {
        setPassword('');
        setIsPassGenerated(false);
        setLowerCase(true);
        setUpperCase(false);
        setNumbers(false);
        setSymbols(false);
    };

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.appContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Password Generator</Text>
                    <Formik
                        initialValues={{ passwordLength: '' }}
                        validate={passwordSchema}
                        onSubmit={values => {
                            generatePassword(Number(values.passwordLength));
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            isValid,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            handleReset,
                        }) => (
                            <>
                                <View style={styles.inputWrapper}>
                                    <View style={styles.inputColumn}>
                                        <TextInput style={styles.inputStyle} value={values.passwordLength} onChangeText={handleChange('passwordLength')} />
                                    </View>
                                </View>
                                <View style={styles.inputWrapper} />
                                <View style={styles.inputWrapper} />
                                <View style={styles.inputWrapper} />
                                <View style={styles.inputWrapper} />
                                <View style={styles.formActions}>
                                    <TouchableOpacity>
                                        <Text>Generate Password</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text>Reset</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>

                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    formContainer: {
        margin: 8,
        padding: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 2,
    },
    description: {
        color: '#758283',
        marginBottom: 8,
    },
});
