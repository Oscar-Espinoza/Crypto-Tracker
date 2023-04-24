import styled from 'styled-components/native';

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${({theme}) => theme.background};
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
  color: ${({theme}) => theme.primary};
  font-size: 16px;
`;

export const AddCryptoInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.placeholder,
}))<{isFocused: boolean}>`
  border: ${({isFocused, theme}) =>
    isFocused
      ? `2px ${theme.inputBorderFocused}`
      : `1px ${theme.inputBorderUnfocused}`};
  border-radius: 5px;
  padding: 12px;
  color: ${({theme}) => theme.primaryTextColor};
  background: ${({theme}) => theme.background};
  font-size: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.primaryTextColor};
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.addButtonBackground};
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
  color: ${({theme}) => theme.addButtonFocusedText};
  opacity: ${({isFocused}) => (isFocused ? '1' : '0.2')};
`;

export const Warning = styled.Text`
  color: ${({theme}) => theme.negativeColor};
`;
