import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeProvider} from 'styled-components/native';
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
  Percentage,
} from './styles';

type CryptoItemProps = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  percentageChange: number;
};

const theme: any = {
  borderColor: '#ccc',
  backgroundColor: '#fff',
  primaryTextColor: '#0e0e0d',
  positiveColor: 'green',
  negativeColor: 'red',
};

const CryptoItem = ({
  name,
  symbol,
  price,
  percentageChange,
}: CryptoItemProps): JSX.Element => {
  const isPositive = percentageChange >= 0;

  return (
    <ThemeProvider theme={theme}>
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
          <PercentageChange>
            <MaterialIcons
              name={isPositive ? 'north-east' : 'south-west'}
              size={14}
            />
            <Percentage isPositive={isPositive}>
              {Math.abs(percentageChange).toFixed(2)}%
            </Percentage>
          </PercentageChange>
        </PriceAndPercentage>
      </Container>
    </ThemeProvider>
  );
};

export default CryptoItem;
