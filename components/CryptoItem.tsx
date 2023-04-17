import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {removeCrypto} from '../redux/actions/cryptoActions';

type CryptoItemProps = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  percentageChange: number;
};

const CryptoItem: React.FC<CryptoItemProps> = ({
  id,
  name,
  symbol,
  price,
  percentageChange,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCrypto(symbol));
  };

  return (
    <View>
      <Text>{name}</Text>
      <Text>{symbol}</Text>
      <TouchableOpacity onPress={handleRemove}>
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CryptoItem;
