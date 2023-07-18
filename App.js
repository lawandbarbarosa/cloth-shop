import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home/Home';
import Detail from './details/Detail';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F5EFE6',
  }
});
