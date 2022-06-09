import 'react-native-gesture-handler';
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
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import List from './components/List';
import Home2 from './navigate';



const App: () => Node = () => {

  return (
     <Home2 />

  );
};




const styles = StyleSheet.create({


});

export default App;
