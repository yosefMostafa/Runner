import React from 'react';
import { StyleSheet} from 'react-native';
import styleslight from './styleslight'
import stylesDark from './stylesdark'


const fethstyles=(light)=>{
   if(light) return styleslight
   return stylesDark
}
export default fethstyles;