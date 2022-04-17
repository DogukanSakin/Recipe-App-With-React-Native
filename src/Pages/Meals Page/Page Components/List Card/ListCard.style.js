import { StyleSheet,Dimensions } from 'react-native';
const deviceSize=Dimensions.get('window');

export default StyleSheet.create({
  
    image:{
        margin: 10,
        width:deviceSize.width/1.05,
        height: deviceSize.height/3,
        borderRadius:20
    },
    title:{
        fontSize:25,
        position:'absolute',
        bottom:20,
        color:'white',
        fontWeight:'bold',
        marginLeft:20,
       
    },
    titleBackground:{
        opacity:0.7,
        width:Dimensions.get('screen').width/1.05,
        height:50,
        position:'absolute',
        bottom:10,
        backgroundColor: 'black',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginLeft:10        
    }


});