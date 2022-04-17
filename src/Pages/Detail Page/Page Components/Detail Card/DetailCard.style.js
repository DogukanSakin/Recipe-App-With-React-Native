import { StyleSheet,Dimensions } from 'react-native';
const deviceSize=Dimensions.get('window');
export default StyleSheet.create({
    image:{
        width:deviceSize.width,
        height:deviceSize.height/3,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    titleBackground:{
        opacity:0.7,
        width:deviceSize.width,
        backgroundColor: 'black',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        alignItems:'center'
        
    },
    title:{    
        fontWeight:'bold',
        fontSize:25,
        color:'white',
        textAlign:'center'
    },
    area:{
        fontSize:20,
        color:'white'
    },
    description:{
        margin:10,
        fontSize:17
    },
    watchButton:{
        flex:1,
        backgroundColor:'red',
        alignItems: 'center',
        margin:10,
        borderRadius:5,
        height:40,
        justifyContent: 'center',

    },
    buttonText:{
        color:'white',
        fontSize:20,

    }
   
});