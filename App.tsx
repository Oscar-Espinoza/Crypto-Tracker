import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components/native';

import CryptoListScreen from './screens/ListScreen';
import AddCryptoScreen from './screens/AddCryptoScreen';

import {theme} from './utils/theme';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </Provider>
);

export default App;
