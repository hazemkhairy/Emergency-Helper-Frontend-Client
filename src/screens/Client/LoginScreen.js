import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../../store/User/actions'
import { SignInUser } from '../../models/User/UserModel';
const LoginScreen = (props) => {
    const disptach = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoading = useSelector((state) => {
        return state.userReducer.loginStarted
    })
    const token = useSelector((state) => {
        return state.userReducer.token
    })
    console.log(isLoading)
    return (
        <View style={styles.container}>
            <View >

                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    autoCapitalize='none'
                    onChangeText={(text) => setPassword(text)} />
            </View>
            <View>
                <Button
                    title="LOGIN"
                    onPress={() => {
                        disptach(signInAction(new SignInUser(email, password)))
                    }
                    } />
                {
                    isLoading===true ? <ActivityIndicator /> : null
                }{
                token ? <Text >{token}</Text> : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    textInput: {
        borderColor: 'black',
        borderBottomWidth: 2,
        borderRadius: 2,
        height:'30%'
    }
})


export default LoginScreen;