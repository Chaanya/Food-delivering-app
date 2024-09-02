import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

function Welcome({navigation}){
    return(
      <View style={styles.container2}>
        <Text>This is my welcome page</Text>
        <Button title='Sign in' onPress={()=>navigation.navigate('Login')}/>
        <Button title='Sign up' onPress={()=>navigation.navigate('Login')}/>
        <StatusBar style="auto" />
      </View>
    )
  }

  const styles = StyleSheet.create({ 
    container2: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  export default Welcome