import React from 'react';
import { Text,View,Image,FlatList} from 'react-native';
import Config from 'react-native-config';
import Error from '../../General Components/Error Animation/Error';
import Loading from '../../General Components/Loading Animation/Loading';
import useFetch from '../../Hooks/useFetch';
import styles from './DetailPage.style';
import DetailCard from './Page Components/Detail Card/DetailCard';
const Details = ({route}) =>{
    const {mealID}=route.params;//Get mealID data from Meals Page
    const{data,loading,error}=useFetch(`${Config.API_DETAIL}${mealID}`); //Get data and load/error status with fetchData Custom Hook
    const renderDetail=({item})=><DetailCard meals={item}></DetailCard>;
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
            renderItem={renderDetail}>

            </FlatList>
            
        </View>
    )
}
export default Details;