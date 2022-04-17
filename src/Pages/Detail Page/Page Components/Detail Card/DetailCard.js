import React from 'react';
import { View,Text,Image,TouchableHighlight,Linking} from 'react-native';
import styles from './DetailCard.style';
const DetailCard=({meals})=>{
    return(
        <View>
            <Image source={{uri:meals.strMealThumb}} style={styles.image}></Image>
            <View style={styles.titleBackground}>
                <Text style={styles.title}>{meals.strMeal}</Text>
                <Text style={styles.area}>{meals.strArea}</Text>
            </View>
            <Text style={styles.description}>{meals.strInstructions}</Text>
            {meals.strYoutube!=null && <TouchableHighlight style={styles.watchButton} onPress={()=> Linking.openURL(meals.strYoutube)}><Text style={styles.buttonText}>Watch on Youtube </Text></TouchableHighlight>}
        </View>
    )
}
export default DetailCard;