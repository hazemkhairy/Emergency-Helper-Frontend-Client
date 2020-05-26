import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getCurrentLocation } from '../../Utils/MapUtils';
import { ActivityIndicator } from 'react-native-paper';


const MapDisplay = () => {
    const getUserLocation = async () => {
        const location = await getCurrentLocation();
        setUserLocation(location.coords)
        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0221,
        })
    }
    const [userLocation, setUserLocation] = useState(null);
    const [region, setRegion] = useState(null);
    useEffect(
        () => { getUserLocation() }, []
    )
    if (!userLocation) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <Text>Getting your location</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>

            <MapView region={region} style={styles.mapStyle}>
                <Marker coordinate={userLocation}

                    title="Your Location"
                    icon={require('../../../assets/Images/Maps/mark2.png')}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    mapStyle: {
        flex: 1,
        width: '100%'
    }
}
);

export default MapDisplay;