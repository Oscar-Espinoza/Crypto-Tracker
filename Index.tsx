/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from './redux/store';
import {addCrypto} from './redux/actions/cryptoActions';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CryptoListScreen from './screens/ListScreen';
import AddCryptoScreen from './screens/AddCryptoScreen';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const userCryptoList = useSelector(
    (state: any) => state.crypto.userCryptoList,
  );
  const cryptoData = useSelector((state: any) => state.crypto.cryptoData);

  useEffect(() => {
    const fetchData = async () => {
      await userCryptoList.forEach((symbol: string) =>
        dispatch(addCrypto(symbol)),
      );
    };

    if (Object.keys(cryptoData).length === 0) {
      fetchData();
    }
  }, [dispatch, userCryptoList, cryptoData]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CryptoList" component={CryptoListScreen} />
        <Stack.Screen name="AddCrypto" component={AddCryptoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
