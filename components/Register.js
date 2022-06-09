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
  TextInput,
  FlatList,
  Alert,
  Image,
  //SafeAreaView,
} from 'react-native';

const Register = ({}) => {

const [text, setValue]= useState('');
const [data, setValue2]= useState('');

const onChange= (text)=>{
setValue(text);
};

const onChange2= (data)=>{
setValue2(data);
};

const LogIn=()=> alert('this feature will be implemented later');


 return (
         <View style={{ flex: 1, }}>

              <TextInput style={styles.input} onChangeText={onChange} placeholder='Enter Name'/>
              <TextInput style={styles.input} onChangeText={onChange2} placeholder='Enter Password'/>
              <Button onPress={()=> LogIn()} title='log in'/>
               <Button onPress={()=> LogIn()} title='register'/>
               <Text style={styles.text2}> We're sorry but registration is not available at the moment. </Text>

         </View>

 );

};




const styles = StyleSheet.create({
text2: {
padding: 20,
marginTop: 20,
textAlign: 'center',
borderRadiuse: 5,
color: 'red',
},

input:{
    borderBottomWidth: 1,
    padding: 5,
    marginVertical: 15,
    marginHorizontal: '10%',
    width: '80%',
    }

});

export default Register;