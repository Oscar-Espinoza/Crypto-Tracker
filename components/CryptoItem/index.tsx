import React from 'react';
import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components/native';
import {CryptoCurrency} from '../../utils/types/crypto';
import {
  Container,
  CryptoInfo,
  CircleIcon,
  CurrencyIcon,
  NameAndSymbol,
  Name,
  Symbol,
  Price,
  PercentageChange,
  Percentage,
} from './styles';

const CryptoItem = ({
  name,
  symbol,
  price_usd,
  percent_change_usd_last_24_hours,
}: CryptoCurrency): JSX.Element => {
  const theme = useTheme();
  const isPositive = percent_change_usd_last_24_hours >= 0;

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
      <View>
        <Price>${price_usd.toFixed(2)}</Price>
        <PercentageChange>
          <MaterialIcons
            name={isPositive ? 'north-east' : 'south-west'}
            size={14}
            color={isPositive ? theme.positiveColor : theme.negativeColor}
          />
          <Percentage isPositive={isPositive}>
            {Math.abs(percent_change_usd_last_24_hours).toFixed(2)}%
          </Percentage>
        </PercentageChange>
      </View>
    </Container>
  );
};

export default CryptoItem;
