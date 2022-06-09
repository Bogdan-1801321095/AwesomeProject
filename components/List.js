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
import Touchable from './Touchable';



const List = ({}) => {

const [text, setValue]= useState('');
const [data, setValue2]= useState('');

const onChange= (text)=>{
setValue(text);
};

const onChange2= (data)=>{
setValue2(data);
};

const addNote = ()=>{
setListofEntry((list)=>{
  return[
            { text:text, data:data, key: Math.random().toString(36).substring(7)},
            ...list
            ]
})
}

const delNote = (key)=>{
setListofEntry((list)=>{
  return list.filter(ListofEntry=> ListofEntry.key !=key)
})
}


const [ListofEntry, setListofEntry] = useState([
   {text: 'Преглед при зеболекар', data: '12.06', key: '1'},
   {text: 'Страховка', data: '28.4', key: '2'},
   {text: 'Платена е винетка', data: '20.11', key: '3'},
   {text: 'Преглед на нов апартамент', data: '18.7', key: '4'}
])

 return (
         <View style={{ flex: 1, }}>

              <TextInput style={styles.input} onChangeText={onChange} placeholder='Enter entry'/>
              <TextInput style={styles.input} onChangeText={onChange2} placeholder='Enter data'/>
              <Button onPress={()=> addNote()} title='Add a note'/>
              <Text style={styles.text2}> To delete an entry, click on it. </Text>

              <FlatList data={ListofEntry} renderItem={({item})=> (
                      <Touchable el={item} delNote={delNote}/>
               )}/>


         </View>

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

text2: {
padding: 10,
marginTop: 10,
textAlign: 'center',
borderRadiuse: 5,
backgroundColor: '#f78585',
},

input:{
    borderBottomWidth: 1,
    padding: 5,
    marginVertical: 15,
    marginHorizontal: '10%',
    width: '80%',
    }

});

export default List;