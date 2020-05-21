import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native'
import LoadingModal from '../components/global/LoadingModal'
import image from '../images/image.png';
import { validateToken } from '../Utils/Client'
import { token } from '../Utils/LocalStorage';

export default ({ navigation }) => {
    const [stillLoading, setStillLoading] = useState(true)
    useEffect(
        () => {

            const myFun = async () => {
                try {
                    
                    const validToken = await validateToken();
                 
                    if (validToken == false)
                        navigation.navigate('AuthenticationNavigation');
                        
                    else {
                        navigation.navigate('AppNavigation')
                    }
                } catch (error) {
                    return err
                }
            }
            myFun();
        }
        , []
    )
    return (
        <ImageBackground source={image} style={styles.Backgroundstyle} >
            <LoadingModal modalVisible={stillLoading} />
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    Backgroundstyle: {
        flex: 1,
        resizeMode: 'stretch',
        height: '100%',
        backgroundColor: '#241332'
    }
})