import React from "react";
import { View, Dimensions } from "react-native";

import RouteMap from '../../components/RouteMap';
import CarConnectTypes from '../../components/CarConnectTypes';
//import typesData from '../../assets/data/types';

import { useRoute } from '@react-navigation/native';

const SerachResults = (props) => {
    const route = useRoute();

    console.log(route.params);
    const {originPlace, destinationPlace} = route.params

    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 400}}>
                <RouteMap origin={originPlace} destination={destinationPlace}/>
            </View>
            <View style={{height: 400}}>
                <CarConnectTypes />
            </View>
        </View>
    );
};

export default SerachResults;