import React from "react";
import { View, Dimensions } from "react-native";

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
    return (
        <View>
            <View style={{height: Dimensions.get('window').height - 300}}>
                <HomeMap />
            </View>
           
            {/* Covid Message */}
            {/* <CovidMessage /> */}
            {/* Bottom Component */}
            {/* <HomeSearch /> */}
            <HomeSearch />
        </View>
    );
};

export default HomeScreen;