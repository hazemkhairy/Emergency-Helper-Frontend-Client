import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubHeaderText = ({ SubHeaderText ,props}) => {
    return (
        <View style={styles.container}  {...props}>
           
            <Text style={styles.text} >
                {SubHeaderText}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    // container: {
    //     width: '70%',
    //     margin: '5%'
    // },
    text: {
        marginLeft:'8%',
        marginTop:'5%',
        marginBottom:'3%',
        color: '#132641',
        fontSize: 24,
        fontFamily: "Montserrat_SemiBold",
    },
});

export default SubHeaderText;