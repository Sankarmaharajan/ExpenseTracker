import React, { useState } from 'react';
import { Text , TextInput, StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Register from './Register';

export default function Login() {
    const navigation = useNavigation();
    const [Username, setUsername] = useState(''); 
    const [Password, setPassword] = useState('');
    
    function registerUser()
    {
        navigation.navigate('Register')
    }
    function handlePress() {
        if (Username === "user" && Password === "password") {
            navigation.navigate('Home');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}> LOGIN </Text>
            <TextInput style={styles.inputbox}
                placeholder="Username"
                value={Username}
                onChangeText={setUsername}
            />
            <TextInput style={styles.inputbox}
                placeholder='Password'
                value={Password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button
                title="Login"
                onPress={handlePress}
                color="palevioletred"
            />
            <TouchableOpacity onPress={registerUser}>
                <Text style={styles.text}> Sign up </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "seashell"
    },
    heading : {
        fontSize : 40,
        fontWeight: "bold",
        paddingTop : 150,
        textAlign : 'center'
    },
    inputbox :
    {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text : {
        textAlign : 'center',
        padding : 20,
        color : 'blue'
    }
});
