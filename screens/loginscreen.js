import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default class loginscreen  extends React.Component {

    switchtohome =()=>{
        this.props.navigation.navigate('main')
    }

    render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="go to homepage" onPress={this.switchtohome} />
        <StatusBar style="auto" />
      </View>
    );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });