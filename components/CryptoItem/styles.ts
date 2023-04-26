import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.5px;
  border-color: ${({theme}) => theme.borderColor};
  padding: 20px 0;
  z-index: 1;
`;

export const CryptoInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CircleIcon = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({theme}) => theme.backgroundColor};
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrencyIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const NameAndSymbol = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.primaryTextColor};
`;

export const Symbol = styled.Text`
  font-size: 14px;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.primaryTextColor};
  font-weight: bold;
`;

export const PercentageChange = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`;

export const Percentage = styled.Text<{isPositive: boolean}>`
  color: ${({isPositive, theme}) =>
    isPositive ? theme.positiveColor : theme.negativeColor};
  font-size: 14px;
`;

export const IconContainer = styled.View`
  background-color: ${({theme}) => theme.negativeColor};
  border-radius: 4px;
  padding: 4px;
`;
