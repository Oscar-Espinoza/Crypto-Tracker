import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import CryptoItem from '../../components/CryptoItem';
import {
  CryptoCurrency,
  RootState,
  RootStackParamList,
} from '../../utils/types/crypto';
import {
  SafeAreaContainer,
  TopBarContainer,
  Title,
  AddCryptoContainer,
  AddCryptoText,
  CryptoListWrapper,
} from './styles';

const ListScreen = (): JSX.Element => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'CryptoList'>>();

  const cryptoData = useSelector((state: RootState) => state.crypto.cryptoData);
  const userCryptoList = useSelector(
    (state: RootState) => state.crypto.userCryptoList,
  );

  const cryptos: CryptoCurrency[] = userCryptoList
    .map((symbol: string) => {
      const item = cryptoData[symbol];
      if (item) {
        return {
          id: item.id,
          name: item.name,
          symbol: item.symbol,
          price_usd: item.price_usd,
          percent_change_usd_last_24_hours:
            item.percent_change_usd_last_24_hours,
        };
      }
    })
    .filter(item => !!item) as CryptoCurrency[];

  return (
    <SafeAreaContainer>
      <TopBarContainer>
        <Title>CryptoTracker Pro</Title>
        <MaterialIcons name="account-circle" size={55} />
      </TopBarContainer>
      <CryptoListWrapper>
        <FlatList
          data={cryptos}
          renderItem={({item}: {item: CryptoCurrency}) => (
            <CryptoItem
              id={item.id}
              name={item.name}
              symbol={item.symbol}
              price_usd={item.price_usd}
              percent_change_usd_last_24_hours={
                item.percent_change_usd_last_24_hours
              }
            />
          )}
          keyExtractor={(item: CryptoCurrency) => item.id}
        />
        <TouchableOpacity onPress={() => navigation.navigate('AddCrypto')}>
          <AddCryptoContainer>
            <AddCryptoText>+ Add CryptoCurrency</AddCryptoText>
          </AddCryptoContainer>
        </TouchableOpacity>
      </CryptoListWrapper>
    </SafeAreaContainer>
  );
};

export default ListScreen;
