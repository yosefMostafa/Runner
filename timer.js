import React from 'react';
import {Text, View } from 'react-native';
import {connect} from 'react-redux'

import {addfinatime} from './store/actions'

class Timer extends React.Component{
state = {
       count:0,
       count2:0,
       text:0,
       text2:0,
       realstatus:false,
        };
      
      componentDidMount(){
        this.interval=setInterval(this.incre,1000)
      }
      incre=()=> {
        this.clock()
        this.setState(prevState=>({
          count:prevState.count+1,}))
      }
         clock(){
           if(this.state.count==60){
               this.setState(this.state={count:0})
             this.setState(prevState=>({
              count2:prevState.count2+1,}))
           }
         }
      componentWillUnmount(){
          this.props.addfinatime({'sec':this.state.count,'min':this.state.count2})
        clearInterval(this.interval)
      }
    render(){
        return(
        <View style={this.props.Styles.timerview}>
                <Text style={this.props.Styles.timertext}>{this.state.count2}:{this.state.count}</Text>
        </View>
        )
    }
}
const timerstate=(state)=>({
  Styles:state.Style
})
export default connect(timerstate,{addfinatime})(Timer)