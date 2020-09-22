import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity, Dimensions, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getCurrentLocation } from '../../Utils/MapUtils';

const MapDisplay = ({ submitLocation }) => {
    let mounted = true;
    const getUserLocation = async () => {
        const location = await getCurrentLocation()
        if (!mounted)
            return;
        setPickedLocation({ location: location.coords, name: 'Picked location' })
        if (!mounted)
            return;
        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0221,
        })
    }
    const handleSelect = () => {
        submitLocation(pickedLocation)
    }
    const [pickedLocation, setPickedLocation] = useState(null);
    const [region, setRegion] = useState(null);
    const [buttonV, setButtonV] = useState(true)
    useEffect(
        () => {
            getUserLocation();
            return () => mounted = false
        }, []
    )
    if (!region) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <Text>Getting your location</Text>
            </View>
        )
    }
    const handleMapPress = (e) => {
        setPickedLocation({ location: e.coordinate, name: 'Picked location' })
        setRegion({
            latitude: e.coordinate.latitude,
            longitude: e.coordinate.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0221,
        })
        setButtonV(true)
    }
    return (
        <View style={styles.container}>

            <MapView
                region={region}
                style={styles.mapStyle}
                onPress={(e) => {
                    if (e.nativeEvent.action != 'marker-press')
                        handleMapPress(e.nativeEvent)
                }}
            >
                {
                    <Marker

                        coordinate={region}
                        title={"Picked Location"}
                        onPress={(e) => {
                            setButtonV(true)
                        }
                        }
                    >
                    </Marker>
                }
            </MapView>
            {
                buttonV ?
                    <TouchableOpacity
                        style={styles.selectButton}
                        onPress={handleSelect}
                    >
                        <Text style={styles.selectText}>Select</Text>
                    </TouchableOpacity> :
                    null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',

        flex: 1,
    },
    mapStyle: {
        flex: 1,
        width: '100%'
    },
    selectButton: {
        width: '80%',
        borderRadius: 35,
        position: 'absolute',
        backgroundColor: '#132641EE',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('screen').height * 0.07,
        bottom: '5%'
    },
    selectText: {
        fontFamily: 'Montserrat_SemiBold',
        fontSize: 16 * (812 / Dimensions.get('screen').height),
        color: '#FFF',
        textAlignVertical: 'center'
    }
}
);

export default MapDisplay;