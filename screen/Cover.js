import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


function Cover({navigation}){
    return(
      <View style={styles.container}>
        <Text>This is my cover page</Text>
        <Text>Hii there..</Text>
        <Button title='Get started' onPress={()=>navigation.navigate('Welcome')}/>
        <StatusBar style="auto" />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default Cover