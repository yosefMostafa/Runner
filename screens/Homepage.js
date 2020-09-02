import React from 'react';
import {Text, View, Button } from 'react-native';


import { StatusBar } from 'expo-status-bar';
import { connect } from 'react-redux'

import { addstart,addStyle,addfinatime, updateCurrent, deleteCurrent, adddist,deldist } from '../store/actions'

import Timer from '../timer'
import Mapfinal from '../mapfinal'

import * as Location from 'expo-location'

import {getPreciseDistance } from 'geolib';

const options = {
  accuracy : 6,
  timeInterval: 2000,
  distanceInterval : 1,
  mayShowUserSettingsDialog:true
}
class Homepage extends React.Component {

  state = {
    start: false,
    stopped: false,
    totaldis:0,
  }
  static navigationOptions = ({ navigation }) => {
    return {
    title: "Home",
    headerStyle:{
      backgroundColor: '#000',
    }
    ,
    headerTintColor: '#fff',
    };
  };
  getlocationasync=async()=>{
    if(this.state.start){
      let location= await Location.getCurrentPositionAsync({});
      if(!(location.coords.latitude.toFixed(5)===this.props.current[this.props.current.length-1].latitude.toFixed(5)
      &&location.coords.longitude.toFixed(5)===this.props.current[this.props.current.length-1].longitude.toFixed(5))){
        const distance = getPreciseDistance({
          latitude: this.props.current[this.props.current.length - 1].latitude
          , longitude: this.props.current[this.props.current.length - 1].longitude
        },
          { latitude: location.coords.latitude, longitude:location.coords.longitude })
        this.props.adddist(distance)
        this.props.updateCurrent(location.coords)
    }
  } 
  }
 
 componentDidMount() {
    this.user_getLo()
    this.location= Location.watchPositionAsync(options, position  => {
      let coords = position.coords;
      
      if (this.state.start) {
        const distance = getPreciseDistance({
          latitude: this.props.current[this.props.current.length - 1].latitude
          , longitude: this.props.current[this.props.current.length - 1].longitude
        },
          { latitude: coords.latitude, longitude: coords.longitude })
        this.props.adddist(distance)
        this.props.updateCurrent(coords)
      }
    })
  }



  user_getLo = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      this.props.navigation.navigate('Quate')
    }
  }


  Start = async () => {
    this.props.deleteCurrent([])
    this.setState({ start: true, stopped: false })
    let location = await Location.getCurrentPositionAsync({});
    this.props.addstart({ 'latitude': location.coords.latitude, 'longitude': location.coords.longitude })
    this.props.updateCurrent(location.coords) 
  }
  Stop = () => {
    // let location = await Location.getCurrentPositionAsync({});
    // this.props.addfinatime({ 'latitude': location.coords.latitude, 'longitude': location.coords.longitude })
    this.setState({ start: false, stopped: true })
    this.setState({totaldis:this.props.Dist})
    this.props.deldist(0)
  }
componentWillUnmount(){
  this.stop
  this.location.remove
}
 getbuttoncolor=()=>{
const color=this.props.Styles.Buttonhome
if(color)return color.color
return 'white'
 }
  render() {
    return (
      <View style={this.props.Styles.homecontainer}>
        {this.state.stopped&&<Mapfinal current={this.props.current}start={this.props.start}/>}
        {this.state.start && <Timer />}
        {this.state.start && <Text style={this.props.Styles.disttext}>{this.props.Dist} m</Text>}

        {this.state.stopped && <Text style={this.props.Styles.timertext} > {this.props.Time.min}:{this.props.Time.sec} </Text>}

        {this.state.stopped && <Text style={this.props.Styles.disttext}>Total distance {this.state.totaldis} Meters</Text>}
        <View style={this.props.Styles.Button} >
          <Button title="Start Running"
           disabled={this.state.start} 
           onPress={this.Start} 
         color={this.getbuttoncolor()}
          />
          <Button title="Stop"
           disabled={!this.state.start} 
           onPress={this.Stop} 
           color={this.getbuttoncolor()}
          />
          <Button title="Go To Map" 
          disabled={!this.state.start} 
          onPress={() => this.props.navigation.navigate('map')}
          color={this.getbuttoncolor()}
         />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}




const homestate = (state) => ({
  start: state.Start,
  current: state.Current,
  End: state.End,
  Time: state.Time,
  Dist: state.Dist,
  Styles:state.Style
})

export default connect(homestate, { addstart,addStyle,addfinatime, updateCurrent, deleteCurrent, adddist,deldist })(Homepage)