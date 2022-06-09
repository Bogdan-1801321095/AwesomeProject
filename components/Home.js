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
  FlatList,
  Alert,
  Image,
  //SafeAreaView,
} from 'react-native';



const Home =({navigation})=> {


const ButtonPres1=()=>{
    navigation.navigate('List');
}
const ButtonPres2=()=>{
    navigation.navigate('Register');
}


  return (
         <View style={{ flex: 1, backgroundColor: '#f1f1f1', }}>
              <Image style={styles.image}  source={require('../assets/myT1.jpg')}/>
              <Text style={styles.text}>WELCOME!!!</Text>
              <Text style={styles.text}>this application will help you not to forget anything!</Text>
              <Text style={styles.text}>Where do you want to start?</Text>
              <Button style={styles.b1} title={"View all entries"}  onPress={ButtonPres1}/>
              <Button style={styles.b1} title={"Login or Register"}  onPress={ButtonPres2}/>
              <Text style={styles.text}>More features will be added later</Text>
              <Image style={styles.image2}  source={require('../assets/advertisement.jpg')}/>
         </View>
  );
};


const styles = StyleSheet.create({

text: {
textAlign: 'center',
backgroundColor: '#aecae7',
padding: 3,
},

b1: {

},

image: {
width: 'auto',
height: 200,
},

image2: {
width: 'auto',
height: 200,
marginTop: 10,
},

});


export default Home;