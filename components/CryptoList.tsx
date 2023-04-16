import React from 'react';
import {FlatList} from 'react-native';
import CryptoItem from './CryptoItem';

// Props type definition
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

const CryptoList: React.FC<CryptoListProps> = ({data, onRemove}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <CryptoItem
          id={item.id}
          name={item.name}
          symbol={item.symbol}
          price={item.price}
          percentageChange={item.percentageChange}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default CryptoList;
