import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cover from './screen/Cover'
import Welcome from './screen/Welcome'
import Login from './screen/Login'




const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <stack.Navigator>
           <stack.Screen name='Cover' component={Cover}/> 
           <stack.Screen name='Welcome' component={Welcome}/> 
           <stack.Screen name='Login' component={Login}/> 
        </stack.Navigator>
    </NavigationContainer>
  );
}
