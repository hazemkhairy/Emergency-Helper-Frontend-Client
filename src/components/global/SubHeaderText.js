import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubHeaderText = ({ SubHeaderText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {SubHeaderText}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: '5%'
    },
    text: {
        color: '#132641',
        fontSize: 24,
        fontFamily: "Montserrat_SemiBold",
    },
});

export default SubHeaderText;