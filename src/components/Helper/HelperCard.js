import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from 'react-native-normalize';
import HelperModal from '../Request/HelperModal';
const HelperCard = ({ item }) => {


    let containerStyle = styles.container
    const [active, setActive] = useState(false)
    const [HelperModall, setHelperModall] = useState(false);

    const helper = () => {
        setHelperModall(true);
        

    };
    const closeHelperModal = () => {
        setHelperModall(false);
    };

    return (
        <View style={containerStyle}>

            <HelperModal
                modalVisible={HelperModall}
                close={() => closeHelperModal()}
                HelperPicture={item.helperInfo.profilePicture}
                HelperName={item.helperInfo.name}
                HelperPriceFrom={item.offer.price.from}
                HelperPriceto={item.offer.price.to}
                HelperSkills={item.helperInfo.skills}
                HelperCategory={item.helperInfo.category}
                HelperOffer={item.offer.description}
                HelperNumber={item.helperInfo.mobile}
            />
            <View style={styles.expandButton}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Image source={{ uri: item.helperInfo.profilePicture }} style={styles.img}></Image>
                    <View style={{ marginTop: '4%' }}>
                        <View style={{ marginLeft: normalize(10) }}>
                            <Text style={styles.name}>{item.helperInfo.name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.price}>Price visit: {item.offer.price.from}~{item.offer.price.to}</Text>
                                <TouchableOpacity style={styles.buttonStyle} onPress={() => { helper() }}>
                                    <Text style={styles.buttonText}>Select</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => setActive(!active)}>
                    <Icon name={'angle-down'} color={'#78849E'} size={20} />
                </TouchableOpacity>
            </View>

            {active == true ? <View style={{ margin: 15 }}>
                <View style={styles.textContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.category}>Category:</Text>
                        <View>
                            <Text style={styles.categoryItem}> {item.helperInfo.category}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '3%' }}>
                        <Text style={styles.Skills}>Skills: </Text>
                        <View>
                            <Text style={styles.SkillsItem}>{item.helperInfo.skills}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: '3%' }}>
                        <Text style={styles.Offer}>Offer: </Text>
                        <View>
                            <Text style={styles.offerItem}>{item.offer.description}</Text>
                        </View>
                    </View>
                </View>
            </View> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: normalize(40),
        shadowOpacity: 0.3,
        shadowRadius: 5,
        backgroundColor: '#FFFFFF',
        marginBottom: '3%',
        marginTop: '3%',
        paddingBottom: '2%',
        shadowOffset: {
            width: 4,
            height: 2,
        },
        elevation: 10,
       
    },

    img: {
        height: normalize(60),
        width: normalize(65),
        borderRadius: normalize(45),
        marginLeft: normalize(-15),

    },
    name: {
        fontSize: 16,
        fontFamily: 'Montserrat_bold',
        color: '#132641',
        marginBottom: normalize(5)
    },
    price: {
        fontSize: normalize(12),
        fontFamily: 'Montserrat',
        color: '#132641',
    },
    textContainer: {
        marginRight: '15%',
        marginLeft: '5%'
    },
    category: {
        fontFamily: 'Montserrat_Medium',
        fontSize: normalize(12),
        opacity: 0.7
    },
    categoryItem: {

        fontSize: normalize(12),
        fontFamily: 'Montserrat',
        color: '#132641',
        opacity: 0.5
    },
    Skills: {
        fontFamily: 'Montserrat_Medium',
        fontSize: 12,
        opacity: 0.7

    },
    SkillsItem: {

        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#132641',
        opacity: 0.5


    },
    Offer: {
        fontFamily: 'Montserrat_Medium',
        fontSize: 12,
        opacity: 0.7

    },
    offerItem: {

        fontSize: normalize(12),
        fontFamily: 'Montserrat',
        color: '#132641',
        opacity: 0.5

    },
    expandButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        alignSelf: 'center',
        marginTop: '3%',
    },
    buttonStyle: {
        backgroundColor: '#132641',
        borderRadius: 35,
        marginLeft: 20,
        width: normalize(60),
        padding: '1%'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: normalize(14),
        fontFamily: "Montserrat_SemiBold",
        alignSelf: "center"
    }


})

export default HelperCard