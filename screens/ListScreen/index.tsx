import React from 'react';
import CryptoList from '../../components/CryptoList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  SafeAreaContainer,
  TopBarContainer,
  Title,
  AddCryptoContainer,
  AddCryptoText,
} from './styles';

type RootStackParamList = {
  CryptoList: undefined;
  AddCrypto: undefined;
};

const ListScreen = (): JSX.Element => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'CryptoList'>>();

  return (
    <SafeAreaContainer>
      <TopBarContainer>
        <Title>CryptoTracker Pro</Title>
        <MaterialIcons name="account-circle" size={55} />
      </TopBarContainer>
      <ScrollView>
        <CryptoList />
        <TouchableOpacity onPress={() => navigation.navigate('AddCrypto')}>
          <AddCryptoContainer>
            <AddCryptoText>+ Add CryptoCurrency</AddCryptoText>
          </AddCryptoContainer>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default ListScreen;
