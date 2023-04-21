import styled from 'styled-components/native';

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background: #fff;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const AddCryptoContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const BackLink = styled.Text`
  color: #385775;
  font-size: 16px;
`;

export const AddCryptoInput = styled.TextInput.attrs({
  placeholderTextColor: '#b7c0c6',
})<{isFocused: boolean}>`
  border: ${({isFocused}) => (isFocused ? '2px #fbd24d' : '1px #c8cfd3')};
  border-radius: 5px;
  padding: 12px;
  color: black;
  background: #fafbfc;
  font-size: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #fbd24d;
  padding: 10px;
  align-items: center;
  width: 50%;
  align-self: flex-end;
  border-radius: 5px;
  margin-top: 20px;
`;

export const AddButtonText = styled.Text<{isFocused: boolean}>`
  font-size: 18px;
  font-weight: bold;
  color: #445f73;
  opacity: ${({isFocused}) => (isFocused ? '1' : '0.2')};
`;

export const Warning = styled.Text`
  color: red;
`;
