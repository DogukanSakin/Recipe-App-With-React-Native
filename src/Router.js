import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesPage from './Pages/Categories Page/CategoriesPage';
import DetailPage from './Pages/Detail Page/DetailPage';
import MealPage from './Pages/Meals Page/MealsPage';
const Stack = createNativeStackNavigator();
const Router = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign:'center', headerStyle:{backgroundColor:'#ffcb1f'} ,headerTitleStyle:{color:'white'}}}>
        <Stack.Screen name='Categories' component={CategoriesPage}  options={{ 
          title: 'Meal Categories',   
        }}></Stack.Screen>
        <Stack.Screen name='Detail' component={DetailPage} options={{ 
          title: 'Details',   
        }}></Stack.Screen>
        <Stack.Screen name='Meal' component={MealPage} options={{ 
          title: 'Meals',   
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Router;