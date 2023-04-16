/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import * as reactRedux from 'react-redux';
import store from './redux/store';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CryptoListScreen from './screens/ListScreen';
import AddCryptoScreen from './screens/AddCryptoScreen';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <reactRedux.Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="CryptoList"
              component={CryptoListScreen}
              options={{title: 'Crypto Tracker'}}
            />
            <Stack.Screen
              name="AddCrypto"
              component={AddCryptoScreen}
              options={{title: 'Add Cryptocurrency'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </reactRedux.Provider>
  );
}

export default App;
