import React from 'react';
import { StyleSheet} from 'react-native';

const styleslight = StyleSheet.create({
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
        color:'black'
    },
    disttext:{
        color:'black'
    },
    row: { padding: 20 },
    text:{fontSize:15},
    textquate:{fontSize:20},
    homecontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      Button: {
        margin: 10,
        width: 200,
      },
      Buttonhome:{
        color:'#3D4854',
      },
      mapcontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      Newscontainer: {
        flex: 2,
        backgroundColor: '#fff',
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
        backgroundColor: '#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
      },
      Mode:{
          color:'white'
      }
  });

  
  export default styleslight;