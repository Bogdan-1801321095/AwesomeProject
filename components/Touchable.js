import React,{useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  Image,
  //SafeAreaView,
} from 'react-native';

const Touchable = ({el, delNote}) => {


 return (
             <TouchableOpacity onPress={()=>delNote(el.key)}>
                 <Text style={styles.text}>{el.text} {'\n'} Scheduled date: {el.data} </Text>
             </TouchableOpacity>
 );

};

const styles = StyleSheet.create({
text: {
padding: 20,
textAlign: 'center',
borderRadiuse: 5,
borderWidth: 1,
marginTop: 10,
width: '95%',
marginLeft: '2%',
backgroundColor: '#f3f9ee',
},

});

export default Touchable;