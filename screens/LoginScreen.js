import React, { useEffect, useState } from 'react'
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const LoginScreen = () => {
    const navigation = useNavigation()
    const handleHome = () => {
        navigation.navigate("Home")
    }

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={handleHome}>
                <Text>Login Screen</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default LoginScreen;