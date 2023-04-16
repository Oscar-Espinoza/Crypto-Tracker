import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {removeCrypto} from '../redux/actions/cryptoActions';

type CryptoItemProps = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  percentageChange: number;
  onRemove: (id: string) => void;
};

const CryptoItem: React.FC<CryptoItemProps> = ({
  id,
  name,
  symbol,
  price,
  percentageChange,
  onRemove,
}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{symbol}</Text>
      <Text>{price}</Text>
      <Text>{percentageChange}%</Text>
      <TouchableOpacity onPress={() => onRemove(id)}>
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CryptoItem;
