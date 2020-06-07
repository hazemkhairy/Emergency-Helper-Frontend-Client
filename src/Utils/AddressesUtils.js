import backendAxios from '../services/backendAxios';
import axios from 'axios'
export const getAllSavedAddresses = async () => {

    const ret = await backendAxios.get('api/Client/SavedAddresses');
    return ret.data.payload.savedAddresses
}
export const getAddressesByName = async (searchValue) => {
    let ret = [];
    ret = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchValue}&inputtype=textquery&fields=formatted_address,name,geometry&key=AIzaSyAWcCeBtO6x-8_cCeugD3ShlFmjRz1WuNs`)
    ret = ret.data.candidates.map(
        address => {
            return {
                name: address.name,
                addressName: address.formatted_address,
                location: {
                    latitude: address.geometry.location.lat,
                    longitude: address.geometry.location.lng
                }
            }
        })
    return ret
}