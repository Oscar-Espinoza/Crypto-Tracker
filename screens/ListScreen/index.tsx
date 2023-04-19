import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import CryptoItem from '../../components/CryptoItem';
import {
  SafeAreaContainer,
  TopBarContainer,
  Title,
  AddCryptoContainer,
  AddCryptoText,
  CryptoListWrapper,
  CryptoList,
} from './styles';
import {ThemeProvider} from 'styled-components/native';

type RootStackParamList = {
  CryptoList: undefined;
  AddCrypto: undefined;
};

const theme = {
  background: '#fff',
  primary: '#385774',
  text: '#fff',
};

const ListScreen = (): JSX.Element => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'CryptoList'>>();

  const cryptoData = useSelector((state: any) => state.crypto.cryptoData);
  const userCryptoList = useSelector(
    (state: any) => state.crypto.userCryptoList,
  );

  const cryptos = userCryptoList
    .map((symbol: string) => {
      const item = cryptoData[symbol];
      if (item) {
        return {
          id: item.id,
          name: item.name,
          symbol: item.symbol,
          price: item.priceUsd,
          percentageChange: item.changePercent24Hr,
        };
      }
      return null;
    })
    .filter((item: any) => item !== null);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaContainer>
        <TopBarContainer>
          <Title>CryptoTracker Pro</Title>
          <MaterialIcons name="account-circle" size={55} />
        </TopBarContainer>
        <CryptoListWrapper>
          <CryptoList
            data={cryptos}
            renderItem={({item}: any) => (
              <CryptoItem
                id={item.id}
                name={item.name}
                symbol={item.symbol}
                price={item.price}
                percentageChange={item.percentageChange}
              />
            )}
            keyExtractor={(item: any) => item.id}
          />
          <TouchableOpacity onPress={() => navigation.navigate('AddCrypto')}>
            <AddCryptoContainer>
              <AddCryptoText>+ Add CryptoCurrency</AddCryptoText>
            </AddCryptoContainer>
          </TouchableOpacity>
        </CryptoListWrapper>
      </SafeAreaContainer>
    </ThemeProvider>
  );
};

export default ListScreen;
