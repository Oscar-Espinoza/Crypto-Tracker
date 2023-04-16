import React from 'react';
import {FlatList} from 'react-native';
import CryptoItem from './CryptoItem';
import {useDispatch, useSelector} from 'react-redux';
import {removeCrypto} from '../redux/actions/cryptoActions';

type CryptoListProps = {
  data: Array<{
    id: string;
    name: string;
    symbol: string;
    price: number;
    percentageChange: number;
  }>;
  onRemove: (id: string) => void;
};

const CryptoList: React.FC = () => {
  const cryptos = useSelector((state: CryptoListProps) => state.crypto.cryptos);

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
