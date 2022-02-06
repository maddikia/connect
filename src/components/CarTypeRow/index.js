import React from "react";
import { View, Image, Text } from "react-native";
import styles from './styles.js';

import Ionicons from "react-native-vector-icons/Ionicons";

const CarTypeRow = (props) => {
    console.log(props)  // lol i added a print and now it work v nice
    const {type} = props; 

    const getImage = () => {
      if (type.type === 'Solo Riders') {
        return require(`../../assets/images/UberX.jpeg`)
      } if (type.type === 'Small Group') {
        return require(`../../assets/images/Comfort.jpeg`)
      }
      return require(`../../assets/images/UberXL.jpeg`)
    }

    return (
        <View style={styles.container}>

            {/* Image */}
            
            <Image 
            style={styles.image} 
            source={getImage()} 
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}{' '}
                </Text>
                <Text style={styles.time}>
                    8:03 drop off
                </Text>
            </View>

            <View style={styles.rightContainer}>
                <Ionicons name={'person'} size={18} />
                <Text style={styles.price}>
                    {type.price} 
                </Text>
            </View>

        </View>
    );
};

export default CarTypeRow;
