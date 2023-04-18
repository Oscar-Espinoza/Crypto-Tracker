import React from 'react';
import {Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  CryptoInfo,
  CircleIcon,
  CurrencyIcon,
  NameAndSymbol,
  Name,
  Symbol,
  PriceAndPercentage,
  Price,
  PercentageChange,
} from './styles';

type CryptoItemProps = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  percentageChange: number;
};

const CryptoItem = ({
  name,
  symbol,
  price,
  percentageChange,
}: CryptoItemProps): JSX.Element => {
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
