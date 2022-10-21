import { FlatList, Image, ListRenderItem, StyleSheet} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Text, View} from '../components/Themed';
import {useAppDispatch, useAppSelector} from "../bll/store";
import {addCoffee, CapsType, deleteAll, deleteCoffee} from "../bll/coffeeReducer";
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {TrashSVG} from "../components/svgIcons/trashSVG";
import {RootTabScreenProps} from "../types";

export function Cart({navigation}: RootTabScreenProps<'Cart'>) {

    const caps = useAppSelector(state => state.coffee.data)
    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useAppDispatch()

    const renderItem: ListRenderItem<CapsType> = ({item}) => {
        return (
            <TouchableOpacity onPress={() => {
            }} onLongPress={() => {
            }} style={styles.block} key={item.cap.id}>
                <BouncyCheckbox onPress={(isChecked: boolean) => {
                    setIsChecked(isChecked)
                }}/>
                <Image source={{uri: item.cap.img}} style={styles.image}/>
                <View>
                    <Text style={styles.name}>
                        {item.cap.name}
                    </Text>
                    <Text style={styles.price}>
                        US$ {item.cap.price * item.count}
                    </Text>
                    <Text style={styles.delivery}>
                        Delivery fee US $3
                    </Text>
                </View>
                <View style={styles.counter}>
                    <TouchableOpacity style={styles.button} onPress={() => dispatch(deleteCoffee({id: item.cap.id}))}>
                        <Text> - </Text>
                    </TouchableOpacity>
                    <Text>
                        {item.count}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => dispatch(addCoffee({cap: item.cap}))}>
                        <Text> + </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text onPress={()=>navigation.navigate('MainScreen')}>
                    back
                </Text>
                <Text style={styles.title}>Cart</Text>
                <TouchableOpacity onPress={()=>dispatch(deleteAll())}>
                    <TrashSVG/>
                </TouchableOpacity>
            </View>
            <Text style={styles.count}> Items: {caps.length}</Text>
            <FlatList data={caps} renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    block: {
        width: 320,
        height: 100,
        borderWidth: 1,
        margin: 5,
        borderColor: "#c9b8b8",
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 5
    },
    price: {
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 5,
    },
    delivery: {
        fontSize: 10,
        fontWeight: '400',
        color: '#F37E33',
        marginTop: 10,
        marginLeft: 10
    },
    counter: {
        width: 70,
        position: 'absolute',
        bottom: 5,
        right: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        width: 20,
        height: 20,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 5
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        marginTop:40
    },
    count:{
        marginTop:10,
        fontSize:16,
        fontWeight:'600'

    }
});
