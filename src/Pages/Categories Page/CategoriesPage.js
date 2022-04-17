import React from 'react';
import {View,FlatList } from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch';
import ListCard from './Page Components/List Card/ListCard';
import styles from './CategoriesPage.style';
import Loading from '../../General Components/Loading Animation/Loading';
import Error from '../../General Components/Error Animation/Error';
const Categories= ({navigation}) =>{
    const {data,loading,error}=useFetch(Config.API_CATEGORIES); //Get data and load/error status with fetchData Custom Hook
    const renderCategories=({item})=><ListCard category={item} onSelect={() => handleCategorySelect(item.strCategory)}></ListCard>; //Flatlist render ;
    const handleCategorySelect = (categoryName) =>{// List card press function
        navigation.navigate("Meal",{categoryName});
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
            keyExtractor={(item)=>item.idCategory}
            data={data.categories}
            renderItem={renderCategories}
            >
            </FlatList>
        </View>
    )
    
}
export default Categories;