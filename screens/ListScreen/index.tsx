import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
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

import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {addCrypto} from '../../redux/actions/cryptoActions';

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

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      userCryptoList.forEach((symbol: string) => dispatch(addCrypto(symbol)));
    };

    if (Object.keys(cryptoData).length === 0) {
      fetchData();
    }
  }, [dispatch, userCryptoList, cryptoData]);

  return (
    <SafeAreaContainer>
      <TopBarContainer>
        <Title>CryptoTracker Pro</Title>
        <MaterialIcons name="account-circle" size={55} />
      </TopBarContainer>
      <CryptoListWrapper>
        <FlatList
          data={cryptos}
          style={{maxHeight: '83%'}}
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
