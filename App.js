import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/views/Home'
import Media from './src/views/Media'
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {
  
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: 'Calculo Consumo!',
                headerTitleAlign: "center"
              }}
            ></Stack.Screen>

             <Stack.Screen
              name="Media"
              component={Media}
              options={{
                title: 'Veja a Média do seu veículo!',
                headerTitleAlign: "center"
              }}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

