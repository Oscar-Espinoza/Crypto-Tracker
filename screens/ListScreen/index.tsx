import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import CryptoItem from '../../components/CryptoItem';
import {loadUserCryptoList} from '../../services/cryptoService';
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
import {
  addCrypto,
  refreshCrypto,
  setLoading,
} from '../../redux/actions/cryptoActions';

const ListScreen = (): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'CryptoList'>>();

  const {cryptoData, userCryptoList, loading} = useSelector(
    (state: RootState) => state.crypto,
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

  //In case the user's list is not empty, we run this useEffect only once to get the info for the user currencies.
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      const storedUserCryptoList = await loadUserCryptoList();
      dispatch(setLoading(false));
      if (storedUserCryptoList.length > 0) {
        storedUserCryptoList.forEach((symbol: string) =>
          dispatch(addCrypto(symbol)),
        );
      }
    };

    if (Object.keys(cryptoData).length === 0) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      userCryptoList.forEach((symbol: string) =>
        dispatch(refreshCrypto(symbol)),
      );
    }, 600 * 1000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [dispatch, userCryptoList]);

  const onRefresh = () => {
    setRefreshing(true);
    userCryptoList.forEach((symbol: string) =>
      dispatch(addCrypto(symbol, () => setRefreshing(false))),
    );
  };

  return (
    <SafeAreaContainer>
      <TopBarContainer>
        <Title>CryptoTracker Pro</Title>
        <MaterialIcons name="account-circle" size={55} />
      </TopBarContainer>
      <CryptoListWrapper>
        {loading ? (
          <AddCryptoText>Loading...</AddCryptoText>
        ) : cryptos.length === 0 ? (
          <AddCryptoText>You have no currencies in your list</AddCryptoText>
        ) : (
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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
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
