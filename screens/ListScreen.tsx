import React from 'react';
import {View} from 'react-native';
import CryptoList from '../components/CryptoList';
import {useDispatch, useSelector} from 'react-redux';
import {removeCrypto} from '../redux/actions/cryptoActions';

// ListScreen component definition
const ListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const cryptoData = useSelector((state: any) => state.crypto.data);

  const handleRemove = (id: string) => {
    dispatch(removeCrypto(id));
  };

  return (
    <View>
      <CryptoList data={cryptoData} onRemove={handleRemove} />
    </View>
  );
};

export default ListScreen;
