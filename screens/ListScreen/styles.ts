import styled from 'styled-components/native';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const TopBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #385774;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const AddCryptoContainer = styled.View`
  padding: 20px;
  align-items: center;
`;

export const AddCryptoText = styled.Text`
  color: #385774;
  font-weight: bold;
  font-size: 16px;
`;
