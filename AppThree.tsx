// A logical app that generates password and utilizes external libraries like formik, bouncy checkbox etc.

import { Formik } from 'formik';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(8, 'Should be a min of 8 characters')
        .max(255, 'Should be a max of 255 characters')
        .required('Length is a required field'),
});

export default function AppThree() {
    const [password, setPassword] = useState('');
    const [isPassGenerated, setIsPassGenerated] = useState(false);

    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const [crackTime, setCrackTime] = useState('');

    const calculateEntropy = (pwd) => {
        let charSetSize = 0;

        if (/[a-z]/.test(pwd)) {charSetSize += 26;}
        if (/[A-Z]/.test(pwd)) {charSetSize += 26;}
        if (/[0-9]/.test(pwd)) {charSetSize += 10;}
        if (/[^a-zA-Z0-9]/.test(pwd)) {charSetSize += 32;}

        return pwd.length * Math.log2(charSetSize);
    };

    const estimateCrackTime = (entropy) => {
        const guessesPerSecond = 1e12; // 1 trillion guesses per second
        const totalGuesses = Math.pow(2, entropy);
        const seconds = totalGuesses / guessesPerSecond;
        return numberToEnglish(seconds);
    };

    const numberToEnglish = (number) => {
        const units = ['seconds', 'minutes', 'hours', 'days', 'years'];
        const values = [60, 60, 24, 365, Number.MAX_VALUE];
        let unitIndex = 0;

        while (number >= values[unitIndex] && unitIndex < units.length - 1) {
            number /= values[unitIndex];
            unitIndex++;
        }

        const suffixes = ['', 'thousand', 'million', 'billion', 'trillion'];
        let suffixIndex = 0;

        while (number >= 1000 && suffixIndex < suffixes.length - 1) {
            number /= 1000;
            suffixIndex++;
        }

        return `${number.toFixed(1)} ${suffixes[suffixIndex]} ${units[unitIndex]}`;
    };


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
        if (numbers) {
            characterList += digits;
        }
        if (symbols) {
            characterList += specialChars;
        }

        const result = createPassword(characterList, passwordLength);
        setPassword(result);
        setIsPassGenerated(true);
        const entropy = calculateEntropy(result);
        const timeToCrackPassword = estimateCrackTime(entropy);
        setCrackTime(timeToCrackPassword);
    };

    const createPassword = (characters: string, passwordLength: number) => {
        let result = '';
        for (let i = 0; i < passwordLength; i++) {
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
        const entropy = calculateEntropy('');
        const timeToCrackPassword = estimateCrackTime(entropy);
        setCrackTime(timeToCrackPassword);
    };

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.appContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Password Generator</Text>
                    <Formik
                        initialValues={{ passwordLength: '' }}
                        validationSchema={PasswordSchema}
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
                            handleReset,
                        }) => (
                            <>
                                <View style={styles.inputWrapper}>
                                    <View style={styles.inputColumn}>
                                        <Text style={styles.heading}>Password Length</Text>
                                        {touched.passwordLength && errors.passwordLength && (
                                            <Text style={styles.errorText}>
                                                {errors.passwordLength}
                                            </Text>
                                        )}

                                    </View>
                                    <TextInput
                                        style={styles.inputStyle}
                                        value={values.passwordLength}
                                        onChangeText={handleChange('passwordLength')}
                                        placeholder="0 - 255"
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>Include lowercase</Text>
                                    <BouncyCheckbox
                                        disableBuiltInState
                                        isChecked={lowerCase}
                                        onPress={() => setLowerCase(!lowerCase)}
                                        fillColor="#29AB87"
                                    />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>Include Uppercase letters</Text>
                                    <BouncyCheckbox
                                        disableBuiltInState
                                        isChecked={upperCase}
                                        onPress={() => setUpperCase(!upperCase)}
                                        fillColor="#FED85D"
                                    />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>Include Numbers</Text>
                                    <BouncyCheckbox
                                        disableBuiltInState
                                        isChecked={numbers}
                                        onPress={() => setNumbers(!numbers)}
                                        fillColor="#C9A0DC"
                                    />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>Include Symbols</Text>
                                    <BouncyCheckbox
                                        disableBuiltInState
                                        isChecked={symbols}
                                        onPress={() => setSymbols(!symbols)}
                                        fillColor="#FC80A5"
                                    />
                                </View>
                                <View style={styles.formActions}>
                                    <TouchableOpacity
                                        disabled={!isValid}
                                        style={styles.primaryBtn}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.secondaryBtn}
                                        onPress={() => {
                                            handleReset();
                                            resetPassword();
                                        }}
                                    >
                                        <Text style={styles.secondaryBtnTxt}>Reset</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
                {isPassGenerated ? (
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.subTitle}>Estimated Crack Time: {crackTime} </Text>
                        <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
                    </View>
                ) : null}
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
    heading: {
        fontSize: 15,
    },
    inputWrapper: {
        marginBottom: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputColumn: {
        flexDirection: 'column',
    },
    inputStyle: {
        padding: 8,
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
    errorText: {
        fontSize: 12,
        color: '#ff0d10',
    },
    formActions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    primaryBtn: {
        flex: 1,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 150,
        borderRadius: 8,
        backgroundColor: '#5DA3FA',
    },
    primaryBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    secondaryBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 150,
        borderRadius: 8,
        backgroundColor: '#CAD5E2',
    },
    secondaryBtnTxt: {
        textAlign: 'center',
    },
    card: {
        padding: 12,
        borderRadius: 6,
        marginHorizontal: 12,
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    generatedPassword: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 12,
        color: '#000',
        backgroundColor:'palegreen',
        paddingVertical:15,
        paddingHorizontal:10,
    },
});

