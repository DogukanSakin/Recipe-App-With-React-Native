import React from 'react';
import { Text,View,Image,TouchableWithoutFeedback } from 'react-native';
import styles from './ListCard.style';
const ListCard = ({meals,onSelect}) =>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View>
            <Image style={styles.image} source={{uri:meals.strMealThumb}}></Image>
            <View style={styles.titleBackground}></View>
            <Text numberOfLines={1} style={styles.title}>{meals.strMeal}</Text>
           
        </View>
        </TouchableWithoutFeedback>
    )
}
export default ListCard;