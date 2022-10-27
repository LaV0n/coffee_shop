import { Image, StyleSheet} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {Text, View} from '../components/Themed';
import {useAppDispatch, useAppSelector} from "../bll/store";
import {
    addCoffee,
    CapsType,
    deleteAll,
    deleteCoffee,
    setIsCheckedAllData,
    setIsCheckedData
} from "../bll/coffeeReducer";
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {TrashSVG} from "../components/svgIcons/trashSVG";
import {RootTabScreenProps} from "../types";
import {ScrollView} from 'react-native';
import {CheckBox} from "react-native-btr"

export function Cart({navigation}: RootTabScreenProps<'Cart'>) {

    const caps = useAppSelector(state => state.coffee.data)
    const [isAll, setIsAll] = useState(false)

    const dispatch = useAppDispatch()

    const ItemCart = ({isChecked, cap, count}: CapsType) => {

        const setIsCheckedHandler = () => {
            dispatch(setIsCheckedData({id: cap.id}))
            setIsAll(false)
        }

        return (
            <View style={styles.block}>
                <BouncyCheckbox isChecked={isChecked} onPress={setIsCheckedHandler}/>
                <Image source={{uri: cap.img}} style={styles.image}/>
                <View>
                    <Text style={styles.name}>
                        {cap.name}
                    </Text>
                    <Text style={styles.price}>
                        US$ {cap.price * count}
                    </Text>
                    <Text style={styles.delivery}>
                        Delivery fee US $3
                    </Text>
                </View>
                <View style={styles.counter}>
                    <TouchableOpacity style={styles.button} onPress={() => dispatch(deleteCoffee({id: cap.id}))}>
                        <Text> - </Text>
                    </TouchableOpacity>
                    <Text>
                        {count}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => dispatch(addCoffee({cap: cap}))}>
                        <Text> + </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const setIsCheckedAllHandler = () => {
        dispatch(setIsCheckedAllData({isAll: !isAll}))
        setIsAll(!isAll)
    }
    const BuyButtonHandler = ()=>{
        alert('order has been sent')
        dispatch(deleteAll())
        setIsAll(false)
    }

    const totalPrice=caps.filter(c => c.isChecked).reduce((acc, c) => acc + c.cap.price * c.count, 0)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text onPress={() => navigation.navigate('MainScreen')}>
                    back
                </Text>
                <Text style={styles.title}>Cart</Text>
                <TouchableOpacity onPress={() => dispatch(deleteAll())}>
                    <TrashSVG/>
                </TouchableOpacity>
            </View>
            <Text style={styles.count}> Items: {caps.length}</Text>
            <ScrollView>
                {caps.map(c => <ItemCart id={c.id} cap={c.cap} isChecked={c.isChecked ? c.isChecked : false}
                                         count={c.count} key={c.id}/>)}
            </ScrollView>
            <View style={styles.buyBlock}>
                <View style={styles.selectBlock}>
                    <CheckBox checked={isAll} onPress={setIsCheckedAllHandler} color={'#F37E33'} />
                    <Text style={{marginLeft:10}}>select All </Text>
                </View>
                <View style={styles.total}>
                    <Text>
                        Total: {totalPrice}
                    </Text>
                </View>
                <TouchableOpacity onPress={BuyButtonHandler} disabled={totalPrice===0}>
                    <Text style={[styles.buyButton,totalPrice===0 && {backgroundColor:'#c9b8b8'}]}>BUY</Text>
                </TouchableOpacity>
            </View>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 40
    },
    count: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600'
    },
    buyBlock: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(150,114,89,0.18)'
    },
    selectBlock: {
        flexDirection: 'row',
        backgroundColor: 'rgba(150,114,89,0)'
    },
    buyButton: {
        height: 50,
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        backgroundColor: '#967259',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 40
    },
    total: {
        backgroundColor: 'rgba(150,114,89,0)',
    }
});
