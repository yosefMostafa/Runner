import React from 'react';
import { StyleSheet} from 'react-native';

const stylesDark = StyleSheet.create({
    appcontainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    timerview:
    {
        justifyContent:'center'
    },
    timertext:{
        fontSize:75,
        color:'white'
    },
    disttext:{
        color:'white'
    },
    row: { padding: 20 },
    text:{fontSize:15,color:'white'},
    textquate:{fontSize:20,color:'white'},
    homecontainer: {
        flex: 1,
        backgroundColor: '#242631',
        alignItems: 'center',
        justifyContent: 'center',
      },
      Button: {
        margin: 10,
        width: 200,
      },
      Buttonhome:{
        color:'#000'
      },
      mapcontainer: {
        flex: 1,
        backgroundColor: '#242631',
        alignItems: 'center',
        justifyContent: 'center',
      },
      Newscontainer: {
        flex: 2,
        backgroundColor: '#242631',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        // marginTop: 20,
        // marginHorizontal: 20,
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        paddingTop:25,
        borderRadius: 3,
      },
      settingcontainer: {
        flex: 1,
        backgroundColor: '#242631',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
      },
      Text:{
          color:'white'
      },
      Mode:{
        color:'black'
    }
  });

  
  export default stylesDark;