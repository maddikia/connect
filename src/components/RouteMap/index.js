import React from "react";
import { FlatList, Image } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from "../../assets/data/cars"
import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAPS_APIKEY = 'AIzaSyBiY31OQQVHUxPKAV5TeylFTWEhsKRwfs0'

const RouteMap = ({origin, destination}) => {

    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng 
    };


    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng 
    };
    const getImage = (type) => {
        if (type === 'UberX') {
          return require('../../assets/images/top-UberX.png');
        }
        if (type === 'Comfort') {
          return require('../../assets/images/top-Comfort.png');
        }
        return require('../../assets/images/top-UberXL.png');
      };

    return (
        <MapView
            style={{width: '100%', height: '100%'}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
            latitude: 37.7857,
            longitude: -122.4011,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
            }}
        > 
            <MapViewDirections
                origin={originLoc}
                destination={destinationLoc}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />
            <Marker coordinate={origin} title={'Origin'}/>
            <Marker coordinate={destination} title={'Destination'}/>
        </MapView>
    );
};

export default RouteMap;