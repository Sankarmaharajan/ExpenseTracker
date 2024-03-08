import { StatusBar } from "expo-status-bar";
import { Text , TextInput,ScrollView,View,StyleSheet ,Button , Alert} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function Register()
{
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleButton()
    {
            if (!name.trim() || !password.trim()) {
                Alert.alert('Error', 'Name and password are required.');
                return;
            }
            else{
                navigation.navigate('Login')
            } 
    }
    return(
        <View>
            <Text style = {styles.header}> Welcome to Expense Tracker!!!</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button
                title="Register"
                onPress={handleButton}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    header : {
        fontSize : 24,
        textAlign : 'center',
        paddingTop : 10
    },
    input: {
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
})