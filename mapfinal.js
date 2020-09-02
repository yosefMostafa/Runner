import React from 'react';
import MapView,{Marker,Polyline} from 'react-native-maps';

const latdelta=  0.009
const logdelta=  0.009

export default class Mapfinal extends React.Component{
    state={
        end:{
            latitude:0,
            longitude:0
        }
    }
    componentDidMount(){
        const length=this.props.current.length
        if(length>0){
      this.setState({end:{
        latitude:this.props.current[length-1].latitude,
        longitude:this.props.current[length-1].longitude}})
      }
    }
      getmapstartregion=()=>({
          latitude:  this.props.start.latitude,
          longitude: this.props.start.longitude,
          latitudeDelta: latdelta,
           longitudeDelta: logdelta
      })
      getmapregion=(n)=>({
            latitude:  this.props.current[n].latitude,
            longitude: this.props.current[n].longitude,
            latitudeDelta: latdelta,
            longitudeDelta: logdelta
         })
   

    render(){
        return(
         
            <MapView style={{width:500,height:200}}
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
                     coordinate={{latitude:this.props.start.latitude, longitude:this.props.start.longitude }}
                     title={'Starting point'}
                    />
                 <Marker
                     coordinate={this.state.end}
                     title={'End point'}
                    />

            </MapView>

        )
    }

}

  