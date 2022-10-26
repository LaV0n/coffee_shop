import {Image, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Text, View} from '../components/Themed';
import {StoreSVG} from "../components/svgIcons/StoreSVG";
import {SearchSVG} from "../components/svgIcons/SearchSVG";
import {useState} from "react";
import {DotSVG} from "../components/svgIcons/DotSVG";
import {CapOfCoffee} from "../components/CapOfCoffee/CapOfCoffee";
import { useAppSelector} from '../bll/store';

export function MainScreen() {

    const [coffeeType, setCoffeeType] = useState<'Espresso' | 'Latte' | 'Cappuccino' | 'Cafetière'>('Espresso')
    const [value, setValue] = useState('')
    const startState=useAppSelector(state => state.coffee.startData)
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
                <View>
                    <Image source={{
                        uri: 'data:image/png;base64,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'
                    }} style={styles.avatar}/>
                </View>
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
        height: 50
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
