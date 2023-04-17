import React from 'react';
import {SafeAreaView} from 'react-native';
import CryptoList from '../components/CryptoList';

const ListScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <CryptoList />
    </SafeAreaView>
  );
};

export default ListScreen;
