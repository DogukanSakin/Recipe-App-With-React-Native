import React from 'react';
import {View,FlatList } from 'react-native';
import styles from './MealsPage.style';
import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../General Components/Loading Animation/Loading';
import Error from '../../General Components/Error Animation/Error';
import ListCard from './Page Components/List Card/ListCard';
const Meal = ({route,navigation}) =>{
    const {categoryName}=route.params; // get category name data from Categories Page
    const {data,loading,error}=useFetch(`${Config.API_MEALS}${categoryName}`); //Get data and load/error status with fetchData Custom Hook
    const renderMeals=({item})=><ListCard meals={item} onSelect={()=>handleMealSelect(item.idMeal)}></ListCard>;
    const handleMealSelect=(mealID)=>{
        navigation.navigate("Detail",{mealID});
    }
    //loading -- error animations:
    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }

    return(
        <View style={styles.container}>
            <FlatList
            data={data.meals}
            renderItem={renderMeals}>
            
            </FlatList>
        </View>
    )
}
export default Meal;