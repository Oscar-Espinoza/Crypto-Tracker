import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addCrypto} from '../redux/actions/cryptoActions';

const AddScreen: React.FC = () => {
  const [symbol, setSymbol] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCrypto(symbol));
    setSymbol('');
  };

  return (
    <View>
      <TextInput
        value={symbol}
        onChangeText={setSymbol}
        placeholder="Enter cryptocurrency symbol"
      />
      <Button title="Add Cryptocurrency" onPress={handleAdd} />
    </View>
  );
};

export default AddScreen;
