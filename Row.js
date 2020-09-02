import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View ,Button,Image} from 'react-native';


const Row=props=>(
    <TouchableOpacity style={props.Styles.row}
    onPress={() => props.onSelectedquate(props)}
    >
        <Image source={{uri:props.image}}  style={{width: 100, height: 100}}/>
        {/* <Text>{props.id}</Text> */}
        <Text style={props.Styles.text}>Name:{props.name}</Text>
        <Text style={props.Styles.textquate}>Quate:</Text>
        <Text style={props.Styles.textquate}>{props.quote}</Text>
        {/* <Text>{props.url}</Text> */}
    </TouchableOpacity>
);

export default Row;