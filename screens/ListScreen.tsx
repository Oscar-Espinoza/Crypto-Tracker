import React from 'react';
import CryptoList from '../components/CryptoList';
import styled from 'styled-components/native';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

const EmptyComponent = styled.View``;

const ListScreen: React.FC = () => {
  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        <CryptoList />
        <EmptyComponent />
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
};

export default ListScreen;
