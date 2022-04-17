import React from 'react';
import { Text,View,Image,TouchableWithoutFeedback } from 'react-native';
import styles from './ListCard.style';
const ListCard = ({category,onSelect}) =>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image style={styles.categoryImage} source={{uri:category.strCategoryThumb}}></Image>
           <Text style={styles.categoryName}>{category.strCategory}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default ListCard;