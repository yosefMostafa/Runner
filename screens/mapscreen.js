import React from 'react';
import MapView,{Marker,Polyline } from 'react-native-maps';

import {updateCurrent} from '../store/actions'
import {connect} from 'react-redux'

class Mapscreen extends React.Component{
    static navigationOptions=({navigation})=>{
        return{
            headerTitle:"Map",
            headerStyle:{
                backgroundColor: '#000',
              }
              ,
              headerTintColor: '#fff',
              };
      };
      getmapstartregion=()=>({
          latitude:  this.props.start.latitude,
          longitude: this.props.start.longitude,
          latitudeDelta: latdelta,
           longitudeDelta: logdelta
      })
      getmapregion=()=>({
        latitude:  this.props.current.latitude,
        longitude: this.props.current.longitude,
        latitudeDelta: latdelta,
         longitudeDelta: logdelta
    })
   getarraycurrent=()=> {
      return  this.props.current
   }   

    render(){
        return(
         
            <MapView style={{flex:1}}
            initialRegion={this.getmapstartregion()}
             // provider={PROVIDER_GOOGLE}
            >
                <Polyline 
                coordinates={this.props.current}
                strokeWidth={5}
                strokeColor="red"
                fillColor="rgba(255,0,0,0.5)"
                />
                 
                <Marker
                     coordinate={this.props.current[0]}
                     title={'Starting point'}
                    />

            </MapView>
       
        )
    }

}
  const latdelta=  0.009
  const logdelta=  0.009
  
  const mapstate=(state)=>({
    start:state.Start,
    current:state.Current,
  })

  export default connect(mapstate,{updateCurrent})(Mapscreen)