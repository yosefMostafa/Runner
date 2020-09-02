import React from 'react';

import 'react-native-gesture-handler';

import {createAppContainer,createSwitchNavigator,DarkTheme } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Ionicons from "react-native-vector-icons/Ionicons"
import { AppLoading } from 'expo';

import Homepage from './screens/Homepage'
import settingsScreen from './screens/settingsScreen'
import Mapscreen from './screens/mapscreen'
import Quates from './screens/News'

import store from './store/store'
import {Provider} from 'react-redux'



const RunINt=createStackNavigator({
  run:Homepage,
  map:Mapscreen,
},{
initialRouteName:'run',
})
const Main=createBottomTabNavigator({
  Home:RunINt,
  Quate:Quates,
  Settings:settingsScreen,
})

const app=createSwitchNavigator({
  main:Main,
}
)
RunINt.navigationOptions={
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={'ios-home'}
      size={25}
      color={tintColor}
    />
  )
}

const Appcontainer=createAppContainer(app)


export default class App  extends React.Component {
  state={
    isReady:false
  }
  render(){
    if (!this.state.isReady) {
      return (
        <AppLoading
         startAsync={this._temp}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      ); }

  return (
    <Provider store={store}>
       <Appcontainer />
    </Provider>
  );
  }

  async _temp() {
    const temp = []
    return Promise.all(temp);
  }
}

