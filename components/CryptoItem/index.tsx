import React from 'react';
import {useDispatch} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components/native';
import {CryptoCurrency} from '../../utils/types/crypto';
import {removeCrypto} from '../../redux/actions/cryptoActions';
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
  IconContainer,
} from './styles';

const CryptoItem = ({
  name,
  symbol,
  price_usd,
  percent_change_usd_last_24_hours,
}: CryptoCurrency): JSX.Element => {
  const theme = useTheme();
  const isPositive = percent_change_usd_last_24_hours >= 0;

  const dispatch = useDispatch();

  const [showDeleteButton, setShowDeleteButton] = React.useState(false);

  const toggleDeleteButton = () => {
    setShowDeleteButton(!showDeleteButton);
  };

  const handleDeleteCrypto = () => {
    dispatch(removeCrypto(symbol));
  };

  return (
    <TouchableOpacity onPress={toggleDeleteButton}>
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
        {showDeleteButton && (
          <View>
            <TouchableOpacity onPress={handleDeleteCrypto}>
              <IconContainer>
                <MaterialIcons name="delete" size={20} color="#fff" />
              </IconContainer>
            </TouchableOpacity>
          </View>
          )}
      </Container>
    </TouchableOpacity>
  );
};

export default CryptoItem;
