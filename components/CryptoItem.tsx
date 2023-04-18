import React from 'react';
import {Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

type CryptoItemProps = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  percentageChange: number;
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

const CryptoInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CircleIcon = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CurrencyIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const NameAndSymbol = styled.View`
  display: flex;
  flex-direction: column;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0e0e0d;
`;

const Symbol = styled.Text`
  font-size: 14px;
`;

const PriceAndPercentage = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Price = styled.Text`
  font-size: 16px;
  color: #0e0e0d;
  font-weight: bold;
`;

const PercentageChange = styled.Text<{isPositive: boolean}>`
  font-size: 14px;
  color: ${({isPositive}) => (isPositive ? 'green' : 'red')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CryptoItem: React.FC<CryptoItemProps> = ({
  id,
  name,
  symbol,
  price,
  percentageChange,
}) => {
  const handleRemove = () => {};

  const isPositive = percentageChange >= 0;

  return (
    <Container>
      <CryptoInfo>
        <CircleIcon>
          <CurrencyIcon
            source={{
              uri: `https://cryptoicons.org/api/icon/${symbol.toLowerCase()}/200`,
            }}
          />
        </CircleIcon>
        <NameAndSymbol>
          <Name>{name}</Name>
          <Symbol>{symbol}</Symbol>
        </NameAndSymbol>
      </CryptoInfo>
      <PriceAndPercentage>
        <Price>${price.toFixed(2)}</Price>
        <PercentageChange isPositive={isPositive}>
          <MaterialIcons
            name={isPositive ? 'north-east' : 'south-west'}
            size={16}
          />
          <Text>{Math.abs(percentageChange).toFixed(2)}%</Text>
        </PercentageChange>
      </PriceAndPercentage>
    </Container>
  );
};

export default CryptoItem;
