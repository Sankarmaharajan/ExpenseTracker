import { StatusBar } from "expo-status-bar";
import { Text , TextInput,ScrollView,View,StyleSheet,Button } from "react-native"; 

export default function Home()
{
return(
    <ScrollView style = {styles.container} >
      <Text> Hello </Text>
    </ScrollView>
)
}

styles = StyleSheet.create(
    {
        container :{
            flex:1
        }
    }
)