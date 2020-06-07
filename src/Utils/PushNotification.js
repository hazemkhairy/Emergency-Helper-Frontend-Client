import { Notifications } from 'expo';
import { AsyncStorage, Vibration } from 'react-native';
import * as Permissions from 'expo-permissions'
import backendAxios from '../services/backendAxios'

export const registerPushNotification = async () => {

    const {status}=await Permissions.getAsync(Permissions.NOTIFICATIONS)
    let finalSatus =status
    if(status!='granted'){
        const {status}=await Permissions.askAsync(Permissions.NOTIFICATIONS)
     finalSatus =status
    }
    if(finalSatus != 'granted') 
    {
        return
    }
    let token =await Notifications.getExpoPushTokenAsync();

    await backendAxios.post('', { token: token }).then(
        async () => {
            await AsyncStorage.setItem('', token);
        }
    )
        .catch(
            (err) => {
            }
        )

}


export const listenForNotifications = async (navigation) => {

    Notifications.addListener((notification) => {
        Vibration.vibrate();
        navigation.navigate('', { id: notification.data.id })

    })
}