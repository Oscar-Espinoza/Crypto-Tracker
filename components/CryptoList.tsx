import React from 'react';
import {FlatList, Text} from 'react-native';
import CryptoItem from './CryptoItem';
import {useSelector} from 'react-redux';

const CryptoList: React.FC = () => {
  const cryptoData = useSelector((state: any) => state.crypto.cryptoData);
  const userCryptoList = useSelector(
    (state: any) => state.crypto.userCryptoList,
  );
  const loading: boolean = useSelector((state: any) => state.crypto.loading);

  // Transform the cryptoData object into an array for the FlatList
  const cryptos = userCryptoList.map((symbol: string) => {
    const item = cryptoData[symbol];
    return {
      id: item.id,
      name: item.name,
      symbol: item.symbol,
      price: item.priceUsd,
      percentageChange: item.changePercent24Hr,
    };
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={cryptos}
      renderItem={({item}) => (
        <CryptoItem
          id={item.id}
          name={item.name}
          symbol={item.symbol}
          price={item.price}
          percentageChange={item.percentageChange}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default CryptoList;
