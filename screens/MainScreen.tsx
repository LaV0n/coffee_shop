import {Image, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Text, View} from '../components/Themed';
import {StoreSVG} from "../components/svgIcons/StoreSVG";
import {SearchSVG} from "../components/svgIcons/SearchSVG";
import {useState} from "react";
import {DotSVG} from "../components/svgIcons/DotSVG";
import {CapOfCoffee} from "../components/CapOfCoffee/CapOfCoffee";
import { useAppSelector} from '../bll/store';
import {CoffeeType} from "../bll/coffeeReducer";
import {Images} from "../constants/Images";
import {RootTabScreenProps} from "../types";

export function MainScreen({navigation}:RootTabScreenProps<'MainScreen'>) {

    const [coffeeType, setCoffeeType] = useState<'Espresso' | 'Latte' | 'Cappuccino' | 'Cafetière'>('Espresso')
    const [value, setValue] = useState('')
    const startState=useAppSelector<CoffeeType[]>(state => state.coffee.startData)
    const [coffeePack, setCoffeePack] = useState(startState)


    const SearchButtonHandler = () => {
        setCoffeePack(startState.filter(c => c.name.includes(value)))
    }
    const ClearSearch = () => {
        setValue('')
        setCoffeePack(startState)
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileBlock}>
                <View>
                    <StoreSVG/>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Image source={{
                        uri: Images.profileImg}} style={styles.avatar}/>
                </TouchableOpacity>
            </View>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Find the best </Text>
                <Text style={styles.title}>Coffee to your taste</Text>
            </View>
            <View style={styles.searchBlock}>
                <TextInput value={value} style={styles.search} placeholder={'Find your coffee'}
                           onChangeText={setValue}/>
                {value !== '' && <TouchableOpacity style={styles.cleanButton} onPress={ClearSearch}>
                    <Text>X</Text>
                </TouchableOpacity>}
                <TouchableOpacity onPress={SearchButtonHandler}>
                    <SearchSVG/>
                </TouchableOpacity>
            </View>
            <View style={styles.itemsBlock}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        setCoffeeType('Espresso')
                    }}>
                        <View style={styles.coffeeType}>
                            <Text
                                style={[styles.headerTitle, coffeeType === 'Espresso' && {color: '#967259'}]}>Espresso</Text>
                            {coffeeType === 'Espresso' && <DotSVG style={styles.dot}/>}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setCoffeeType('Latte')
                    }}>
                        <View style={styles.coffeeType}>
                            <Text
                                style={[styles.headerTitle, coffeeType === 'Latte' && {color: '#967259'}]}>Latte</Text>
                            {coffeeType === 'Latte' && <DotSVG style={styles.dot}/>}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setCoffeeType('Cappuccino')
                    }}>
                        <View style={styles.coffeeType}>
                            <Text
                                style={[styles.headerTitle, coffeeType === 'Cappuccino' && {color: '#967259'}]}>Cappuccino</Text>
                            {coffeeType === 'Cappuccino' && <DotSVG style={styles.dot}/>}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setCoffeeType('Cafetière')
                    }}>
                        <View style={styles.coffeeType}>
                            <Text
                                style={[styles.headerTitle, coffeeType === 'Cafetière' && {color: '#967259'}]}>Cafetière</Text>
                            {coffeeType === 'Cafetière' && <DotSVG style={styles.dot}/>}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.caps}>
                    {coffeePack.map(c => c.type === coffeeType ? <CapOfCoffee key={c.id} data={c}/> : null)}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    profileBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70,
        marginHorizontal: 23
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius:25
    },
    titleBlock: {
        marginTop: 30,
        marginLeft: 23
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#444444',
    },
    searchBlock: {
        marginHorizontal: 23,
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    search: {
        width: '80%',
        paddingLeft: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    cleanButton: {
        position: "absolute",
        right: 90,
        bottom: 15
    },
    itemsBlock: {
        marginHorizontal: 19,
        marginTop: 25
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontWeight: '600',
        fontSize: 16,
    },
    dot: {
        marginTop: 5,
    },
    coffeeType: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    caps: {
        marginTop: 25,
        flexDirection: 'row',
        flexWrap: 'wrap'

    }
});
