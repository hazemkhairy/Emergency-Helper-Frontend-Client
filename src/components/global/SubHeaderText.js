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
   
    text: {
        marginLeft:'10%',
        marginTop:'5%',
        marginBottom:'3%',
        color: '#132641',
        fontSize: 24,
        fontFamily: "Montserrat_SemiBold",
    },
});

export default SubHeaderText;