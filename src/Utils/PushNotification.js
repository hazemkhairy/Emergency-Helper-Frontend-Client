import { Notifications } from 'expo';
import { AsyncStorage, Vibration } from 'react-native';
import * as Permissions from 'expo-permissions'
import backendAxios from '../services/backendAxios'

export const registerPushNotification = async () => {
    let token = await AsyncStorage.getItem('pushtoken');
    if (token) {
        return;
    }
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    let finalSatus = status
    if (status != 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        finalSatus = status
    }
    if (finalSatus != 'granted') {
        return
    }
    token = await Notifications.getExpoPushTokenAsync();

    await backendAxios.post('api/Account/PushToken', { token: token }).then(
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
    })
}