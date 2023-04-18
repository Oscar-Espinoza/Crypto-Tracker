/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CryptoListScreen from './screens/ListScreen';
import AddCryptoScreen from './screens/AddCryptoScreen';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CryptoList"
          component={CryptoListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddCrypto"
          component={AddCryptoScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
