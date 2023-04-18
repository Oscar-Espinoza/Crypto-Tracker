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

const CryptoInfo = styled.View``;

const NameAndSymbol = styled.View`
  display: flex;
  flex-direction: column;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Symbol = styled.Text`
  font-size: 16px;
`;

const PriceAndPercentage = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Price = styled.Text`
  font-size: 18px;
`;

const PercentageChange = styled.Text<{isPositive: boolean}>`
  font-size: 16px;
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
        <NameAndSymbol>
          <Name>{name}</Name>
          <Symbol>{symbol}</Symbol>
        </NameAndSymbol>
      </CryptoInfo>
      <PriceAndPercentage>
        <Price>{price.toFixed(2)}$</Price>
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
