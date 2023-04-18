import React from 'react';
import CryptoList from '../components/CryptoList';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  CryptoList: undefined;
  AddCrypto: undefined;
};

type ListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CryptoList'
>;

type Props = {
  navigation: ListScreenNavigationProp;
};

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const TopBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #385774;
  height: 100px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const AddCryptoContainer = styled.View`
  padding: 20px;
  align-items: center;
`;

const AddCryptoText = styled.Text`
  color: #385774;
  font-weight: bold;
  font-size: 16px;
`;

const ListScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaContainer>
      <TopBarContainer>
        <Title>CryptoTracker Pro</Title>
        <MaterialIcons name="account-circle" size={55} />
      </TopBarContainer>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
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
