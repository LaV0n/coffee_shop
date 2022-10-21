import {Image, Modal, StyleSheet, TouchableOpacity, View} from "react-native";
import {addCoffee, CoffeeType} from "../../bll/coffeeReducer";
import {Text} from "../Themed";
import {StarSVG} from "../svgIcons/StarSVG";
import {useAppDispatch} from "../../bll/store";
import {useState} from "react";
import {Cap} from "../Cap/Cap";

type DataType = {
    data: CoffeeType
}

export const CapOfCoffee = ({data}: DataType) => {

    const dispatch = useAppDispatch()
    const [visibility, setVisibility] = useState(false)

    return (
        <TouchableOpacity onLongPress={() => setVisibility(true)}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibility}
            ><Cap setVisibility={setVisibility}
                  data={data}
            />
            </Modal>
            <View style={styles.container}>
                <View>
                    <Image
                        source={{uri: data.img}}
                        style={styles.image}/>

                    <View style={styles.rating}>
                        <StarSVG/>
                        <Text style={styles.ratingTitle}>
                            {data.rating}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.typeTitle}>
                        {data.type}
                    </Text>
                </View>
                <View>
                    <Text style={styles.nameTitle}>
                        {data.name}
                    </Text>
                </View>
                <View>
                    <Text style={styles.priceTitle}>
                        $ {data.price}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => dispatch(addCoffee({cap: data}))}>
                    <Text style={styles.addButton}>+</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 220,
        borderWidth: 1,
        margin: 10,
        borderRadius: 20,
        borderColor: '#d0bebe'
    },
    image: {
        width: 140,
        height: 123,
        borderRadius: 30,
        margin: 5,

    },
    rating: {
        backgroundColor: "#696767",
        position: 'absolute',
        right: 0,
        width: "50%",
        height: '20%',
        borderBottomStartRadius: 40,
        borderTopEndRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingTitle: {
        color: 'white',
        marginLeft: 5
    },
    typeTitle: {
        marginLeft: 13,
        fontSize: 16,
        fontWeight: '500'
    },
    nameTitle: {
        marginLeft: 13,
        fontSize: 10,
        fontWeight: '400',
        opacity: 0.6
    },
    priceTitle: {
        marginLeft: 13,
        marginTop: 15,
        fontWeight: '600',
        fontSize: 14
    },
    addButton: {
        width: 52,
        height: 52,
        fontSize: 40,
        textAlign: 'center',
        borderWidth: 1,
        position: 'absolute',
        right: 0,
        bottom: -15,
        backgroundColor: '#967259',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        color: 'white'
    }
})