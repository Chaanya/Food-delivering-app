import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

function Login(){
    return(
      <View style={styles.container3}>
        <Text>This is my Login page</Text>
        <StatusBar style="auto" />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container3: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default Login