import React from 'react';
import {View ,Linking} from 'react-native';
import styles from '../styles'

import { SearchBar} from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";

import {fetchNews} from '../api'

import SectionListquates from '../Quateslist'
import { connect } from 'react-redux'

class Quates extends React.Component{
    static navigationOptions={
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons
            name={'ios-journal'}
            size={25}
            color={tintColor}
          />
        )
      }
      state={
        quates:[],
        status:false,
        word:""
      }
      getHandler = key => val => {
        this.setState({ [key]: val });
      };
      componentDidMount(){
        this.addquates()
      }
      addquates=async()=>{
       let  quates =await fetchNews(this.state.word)   
        if(quates!='Invalid request: Slow down. Requests coming too fast.'){
        this.setState({quates:quates,status:true})
        }
      }
      onSelected=quate=>{
        Linking.openURL(quate.url)
      }
      handlesearch=(val)=>{
        var index=val.length-1
        if(val[index]==='/'){
          this.addquates()
        }else{
          this.getHandler('word')(val)
        }
      }
      searchbarmode(){
        if(this.props.Styles.Mode.color=='white')return true
        return false
      }
    render(){ 
    
        return(
         
        <View style={{flex:1}}>
          <SearchBar  
         containerStyle={styles.input}
         value={this.state.word}
         onChangeText={text=>this.handlesearch(text)}
         placeholder="add / to the end to search"
         lightTheme={this.searchbarmode()}
         showCancel={true}
        // ref={search => this.search = search}
         />
         <View style={this.props.Styles.Newscontainer}>
            {this.state.status&&<SectionListquates quates={this.state.quates} onSelectedquate={this.onSelected} Styles={this.props.Styles}/>}
        </View>
        </View>
        )
    }

}

const QuatesState=(state)=>({
  Styles:state.Style
})

export default connect(QuatesState)(Quates)