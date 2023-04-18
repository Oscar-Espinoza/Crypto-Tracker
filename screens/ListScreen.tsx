import React from 'react';
import CryptoList from '../components/CryptoList';
import styled from 'styled-components/native';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const ListScreen: React.FC = () => {
  return (
    <SafeAreaContainer>
      <CryptoList />
    </SafeAreaContainer>
  );
};

export default ListScreen;
