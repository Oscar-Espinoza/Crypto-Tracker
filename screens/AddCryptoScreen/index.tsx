import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {addCrypto} from '../../redux/actions/cryptoActions';
import {RootState, RootStackParamList} from '../../utils/types/crypto';
import {AppDispatch} from '../../redux/store';
import {
  Container,
  AddCryptoContainer,
  BackLink,
  AddCryptoInput,
  Title,
  InputContainer,
  AddButton,
  AddButtonText,
  Warning,
} from './styles';

const AddCryptoScreen = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const [warning, setWarning] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = React.useRef<TextInput>(null);
  const {cryptoCurrenciesList, userCryptoList} = useSelector(
    (state: RootState) => state.crypto,
  );
  const dispatch: AppDispatch = useDispatch();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'AddCrypto'>>();

  const handleAddCrypto = () => {
    const trimmedSearch = search.trim().toLowerCase();
    const selectedCrypto = Object.entries(cryptoCurrenciesList).find(
      ([name, symbol]) =>
        name.toLowerCase() === trimmedSearch ||
        symbol.toLowerCase() === trimmedSearch,
    );

    if (
      selectedCrypto &&
      !userCryptoList.includes(selectedCrypto[1].toLowerCase())
    ) {
      const [_, symbol] = selectedCrypto;
      dispatch(addCrypto(symbol));
      navigation.navigate('CryptoList');
    } else if (
      selectedCrypto &&
      userCryptoList.includes(selectedCrypto[1].toLowerCase())
    ) {
      setWarning('You already have this currency in your list');
    } else {
      setWarning('Please write a correct currency symbol or name');
    }
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('CryptoList')}>
        <BackLink>{'<'} Back to list</BackLink>
      </TouchableOpacity>
      <AddCryptoContainer>
        <Title>Add a Cryptocurrency</Title>
        <InputContainer>
          <AddCryptoInput
            placeholder="Use a name or ticker symbol..."
            onChangeText={setSearch}
            ref={inputRef}
            value={search}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            isFocused={isFocused}
          />
          {warning ? <Warning>{warning}</Warning> : null}
        </InputContainer>
        <AddButton onPress={() => handleAddCrypto()}>
          <AddButtonText isFocused={isFocused}>Add</AddButtonText>
        </AddButton>
      </AddCryptoContainer>
    </Container>
  );
};

export default AddCryptoScreen;
