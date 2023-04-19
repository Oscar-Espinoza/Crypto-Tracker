import styled from 'styled-components/native';

export const SafeAreaContainer = styled.SafeAreaView`
  background: ${props => props.theme.background};
`;

export const TopBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${props => props.theme.primary};
  height: 100px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

export const AddCryptoContainer = styled.View`
  padding: 20px;
  align-items: center;
`;

export const AddCryptoText = styled.Text`
  color: ${props => props.theme.primary};
  font-weight: bold;
  font-size: 16px;
`;

export const CryptoListWrapper = styled.View`
  flex-grow: 1;
`;

export const CryptoList = styled.FlatList``;
