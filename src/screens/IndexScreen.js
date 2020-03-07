import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
const IndexScreen = ({ navigation }) => {

    return (
        <View>
            {/* <Text>Index Screen</Text>
            <Button title="Posts" onPress={() => { navigation.navigate('Home') }} /> */}
            {navigation.navigate('Home')}
        </View>
    )
}

const styles = StyleSheet.create({

})


export default IndexScreen;