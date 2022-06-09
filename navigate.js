import * as React from 'react';
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
  Alert,
  Image,
  //SafeAreaView,
} from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Home from './components/Home';
import List from './components/List';
import Register from './components/Register';



const Stack = createStackNavigator();

const Navigate =()=>{

  return (
  <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Home} options={{title: 'Home'}}/>
          <Stack.Screen name="List" component={List} options={{title: 'List'}} />
          <Stack.Screen name="Register" component={Register} options={{title: 'Register'}} />
        </Stack.Navigator>
      </NavigationContainer>

  );
};


export default Navigate;

