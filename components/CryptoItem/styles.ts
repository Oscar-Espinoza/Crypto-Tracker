import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom-width: 1px;
  border-color: #ccc;
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
  background-color: #fff;
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
  color: #0e0e0d;
`;

export const Symbol = styled.Text`
  font-size: 14px;
`;

export const PriceAndPercentage = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: #0e0e0d;
  font-weight: bold;
`;

export const PercentageChange = styled.Text<{isPositive: boolean}>`
  font-size: 14px;
  color: ${({isPositive}) => (isPositive ? 'green' : 'red')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
