import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';


const AboutUsCard = ({ props }) => {

   
    return (
        <View>
            <Text style={styles.title} >{props.title} </Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat_Medium',
        fontSize: 22,
        marginLeft: '6%',
        color: '#132641',
        position: 'absolute'
    },
    description: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        marginLeft: '8%',
        marginRight: '8%',
        color: '#132641',
        position: 'absolute'

    }

})
export default AboutUsCard;