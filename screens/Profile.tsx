import {Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from '../components/Themed';
import {Images} from "../constants/Images";
import {EvilIcons} from "@expo/vector-icons";
import {useState} from "react";

export function Profile() {

    const profileImg = Images.profileImg
    const profileName = 'User'
    const cardNumber = 1234567891234566
    const hiddenCardNumber= `**** **** **** ${cardNumber.toString().slice(12)}`
    const address = 'Aleja Rzeczypospolitej 6-142'

    const [visibility,setVisibility]=useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.login}>
                <Button title={'logout'} color={'#967259'}/>
            </View>
            <View style={styles.profileBlock}>
                <Image source={{uri: profileImg}} style={styles.image}/>
                <Text style={styles.name}>
                    Name: {profileName}
                </Text>
            </View>
            <TouchableOpacity style={styles.card} onPress={()=>setVisibility(!visibility)}>
                <EvilIcons name={'credit-card'} size={50}/>
                <Text style={styles.text}>
                    {visibility?cardNumber:hiddenCardNumber}
                </Text>
            </TouchableOpacity>
            <View style={styles.card}>
                <EvilIcons name={'location'} size={50}/>
                <Text style={styles.text}>
                    {address}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileBlock: {
        borderWidth: 1,
        marginTop: 40,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderColor: 'rgba(128,115,115,0.42)'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        marginRight: 50
    },
    login: {
        justifyContent: 'flex-end',
        width: 80,
        position: "absolute",
        right: 30,
        top: 40
    },
    card: {
        borderWidth: 1,
        width: '90%',
        marginTop: 20,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'rgba(128,115,115,0.42)',
        borderRadius: 5,
        alignItems:"center"
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        paddingRight:10
    }
});
