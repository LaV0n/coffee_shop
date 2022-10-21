import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CoffeeType} from "../../bll/coffeeReducer";
import {BackSVG} from "../svgIcons/BackSVG";
import {useState} from "react";
import {HeartSVG} from "../svgIcons/HeartSVG";
import {StarSVG} from "../svgIcons/StarSVG";
import {CoffeeTypeSVG} from "../svgIcons/coffeeTypeSVG";
import {ChocoSVG} from "../svgIcons/ChocoSVG";

type CapType = {
    setVisibility: (value: boolean) => void
    data: CoffeeType
}

export const Cap = ({setVisibility, data}: CapType) => {

    const [favorite, setFavorite] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.imageBlock}>
                <TouchableOpacity onPress={() => setVisibility(false)} style={styles.back}>
                    <BackSVG/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFavorite(!favorite)
                }} style={styles.favorite}>
                    <HeartSVG color={favorite ? '#f60000' : '#918b8b'}/>
                </TouchableOpacity>
                <View style={styles.nameBlock}>
                    <View style={{height: '100%'}}>
                        <Text style={styles.type}>
                            {data.type}
                        </Text>
                        <Text style={styles.name}>
                            {data.name}
                        </Text>
                        <Text style={styles.rating}>
                            <StarSVG/>{data.rating}
                        </Text>
                    </View>
                    <View style={styles.addBlock}>
                        <CoffeeTypeSVG/>
                        {data.choco && <ChocoSVG style={{marginLeft: 10}}/>}
                    </View>
                </View>
                <Image source={{uri: data.img}} style={styles.image}/>
            </View>
            <View style={styles.descriptionBlock}>
                <Text style={styles.titleDescription}>
                    Description
                </Text>
                <Text style={styles.description}>
                    {data.description}
                </Text>
                <Text style={styles.additionChoco}>
                    Choice of chocolate
                </Text>
                <View style={styles.chocoBlock}>
                    <TouchableOpacity>
                        <Text style={[styles.chocoType, data.choco === 'white' && {
                            backgroundColor: '#967259',
                            color: '#fff'
                        }]}>
                            White
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.chocoType, data.choco === 'milk' && {
                            backgroundColor: '#967259',
                            color: '#fff'
                        }]}>
                            Milk
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.chocoType, data.choco === 'dark' && {
                            backgroundColor: '#967259',
                            color: '#fff'
                        }]}>
                            Dark
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.sizeQuantityBlock}>
                    <View>
                        <Text style={styles.additionChoco}>
                            Size
                        </Text>
                        <View style={styles.sizeBlock}>
                            <TouchableOpacity>
                                <Text style={[styles.size, data.size === 'small' && {
                                    backgroundColor: '#967259',
                                    color: '#fff'
                                }]}>
                                    S
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.size, data.size === 'medium' && {
                                    backgroundColor: '#967259',
                                    color: '#fff'
                                }]}>
                                    M
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.size, data.size === 'large' && {
                                    backgroundColor: '#967259',
                                    color: '#fff'
                                }]}>
                                    L
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.additionChoco]}>
                            Quantity
                        </Text>
                        <View style={styles.sizeBlock}>
                            <TouchableOpacity>
                                <Text style={[styles.size, {
                                    backgroundColor: '#967259',
                                    color: '#fff'
                                }]}>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <Text>
                                1
                            </Text>
                            <TouchableOpacity>
                                <Text style={[styles.size, {
                                    backgroundColor: '#967259',
                                    color: '#fff'
                                }]}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.buyBlock}>
                    <View>
                        <Text style={{fontSize: 14, fontWeight: '400'}}>
                            Price
                        </Text>
                        <Text style={{fontSize: 24, fontWeight: '700'}}>
                            $ {data.price}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.buyButton}>
                            Buy now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageBlock: {
        width: '100%',
        height: '50%'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    back: {
        position: 'absolute',
        zIndex: 2,
        left: 20,
        top: 20
    },
    favorite: {
        paddingTop: 8,
        paddingHorizontal: 5,
        position: 'absolute',
        zIndex: 2,
        right: 20,
        top: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    nameBlock: {
        width: '100%',
        height: 130,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.75)',
        zIndex: 2,
        borderRadius: 60,
        alignItems: "center",
        padding: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    type: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 24
    },
    name: {
        color: 'rgba(255,255,255,0.75)',
        fontWeight: '400',
        fontSize: 12,
        marginTop: 7
    },
    rating: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18,
        position: 'absolute',
        bottom: 0,
    },
    addBlock: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '35%'
    },
    descriptionBlock: {
        width: '100%',
        height: '50%',
        padding: 10,
    },
    titleDescription: {
        fontSize: 16,
        fontWeight: '700',
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 10,
        color: '#444444',
        lineHeight: 22
    },
    additionChoco: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10
    },
    chocoType: {
        borderColor: '#967259',
        borderWidth: 1,
        textAlign: 'center',
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 20,
        color: '#ab9f9f'
    },
    chocoBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    sizeQuantityBlock: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    sizeBlock: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        width: '55%'
    },
    size: {
        backgroundColor: '#D9D9D9',
        textAlign: 'center',
        paddingVertical: 7,
        paddingHorizontal: 13,
        borderRadius: 20,
        color: '#777777'
    },
    buyBlock: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    buyButton: {
        height: 50,
        fontSize:16,
        fontWeight:'600',
        color:'#fff',
        backgroundColor:'#967259',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius:40
    }
});