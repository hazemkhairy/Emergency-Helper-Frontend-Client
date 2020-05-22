import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';
import {logOut} from '../../Utils/Client';

const SideDrawer = (props) => {

    // const [userData, setUserData] = useState([]);
    // useEffect(() => {
    //     getProfileData().then((result) => {
    //         setUserData(result);
    //     });
    // }, []);

    return (
        <View>
            <View style={styles.ProfileContainer}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.img}></Image>
                        <View style={styles.TextContainer}>
                            <Text style={styles.nameText}> Aya Eissa</Text>
                        </View>
                    </View>
                    <Text style={styles.emailText}>ayaahmedeissa@gmail.com</Text>

                </View>
            </View>
            <View >
                <DrawerItems {...props} fontSize={12}>

                </DrawerItems>
                <View style={{ flexDirection: 'column-reverse' }}>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {
                        logOut();
                        props.navigation.navigate("Home");
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="ios-log-out" size={20} style={styles.logoutIcon}></Ionicons>
                            <Text style={styles.logoutText} >Log Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ProfileContainer: {
        width: '100%',
        backgroundColor: '#7598BA',
        height: Dimensions.get('window').height * 0.33,
        borderBottomLeftRadius: 70
    },
    img: {
        height: '45%',
        borderRadius: 45,
        width: '22%',
        marginLeft: 30,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: '30%'
    },
    TextContainer: {
        marginLeft: 10,
        marginTop: '35%'
    },
    nameText: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat_bold',
        fontSize: 24,
    },

    emailText: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontSize: 14,
        margin: '12%',
        opacity: 0.8
    },

    logoutButton: {
        marginLeft: '7%',
        marginTop:Dimensions.get('window').height*0.02
    },
    logoutIcon: {
        color: '#132641',
        marginRight: '2%',
        opacity:0.8
    },
    logoutText: {
        fontFamily: 'Montserrat',
        fontSize:18,
        opacity:0.8

    }
});

export default SideDrawer;