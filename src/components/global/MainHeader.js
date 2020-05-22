import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
const MainHeader = ({ headerText, props, name }) => {
    return (
        <View style={styles.container}>
            <View style={styles.Header} >
                <Text style={styles.text}>
                    {headerText}
                </Text>
                <FontAwesome style={styles.Icon} name={name} size={30}></FontAwesome>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#7598BA',
        height: Dimensions.get('window').height * 0.23,
        borderBottomLeftRadius: 70
    },
    Header: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '7%',

    },
    text: {
        color: 'white',
        fontSize: 40,
        marginLeft: '5%',
        fontFamily:'Montserrat_bold'
        
    },

    Icon: {
        color: '#FFFFFF',
        marginTop: '3%'
    }
});

export default MainHeader;