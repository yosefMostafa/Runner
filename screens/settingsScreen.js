import React from 'react';
import { Switch, Text, View } from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";

import { connect } from 'react-redux'
import {addStyle} from '../store/actions'
import fethstyles from '../styles'

const darmode='Dark Mode'
const lightmode='Light Mode'

class settingsScreen extends React.Component{
  state={
    Mode:false,
  }

   static navigationOptions={
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons
            name={'ios-settings'}
            size={25}
            color={tintColor}
          />
        )
      }
      SwitchMode=()=>{
        this.setState(prevState=>({Mode:!prevState.Mode}))
        this.props.addStyle(fethstyles(this.state.Mode))
      }
      getmodestring=()=>{
        if(!this.state.Mode)return darmode
        return lightmode
      }
    render(){
        return(
            <View style={this.props.Styles.settingcontainer}>
              <Text style={this.props.Styles.disttext}>{`${this.getmodestring()}`}</Text>
              <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={this.state.Mode ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.SwitchMode}
                  value={this.state.Mode}
              />
              {/* <Text style={this.props.Styles.Text}>Welcome to settings</Text> */}
            </View>
        )
    }

}

const settingstatte=(state)=>({
  Styles:state.Style
})

export default connect(settingstatte,{addStyle})(settingsScreen)
