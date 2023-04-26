import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {View, Animated} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components/native';
import {CryptoCurrency} from '../../utils/types/crypto';
import {removeCrypto} from '../../redux/actions/cryptoActions';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
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
}: CryptoCurrency & {onDelete: (symbol: string) => void}): JSX.Element => {
  const theme = useTheme();
  const isPositive = percent_change_usd_last_24_hours >= 0;
  const dispatch = useDispatch();

  const translateX = useRef(new Animated.Value(0)).current;

  const handleGesture = ({nativeEvent}) => {
    const {translationX, state} = nativeEvent;

    // Adjust the threshold value as needed
    const swipeThreshold = -150;

    if (state === State.ACTIVE) {
      translateX.setValue(translationX);
    } else if (state === State.END) {
      if (translationX < swipeThreshold) {
        dispatch(removeCrypto(symbol));
      } else {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={handleGesture}
      onHandlerStateChange={handleGesture}>
      <Animated.View style={{transform: [{translateX}]}}>
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
      </Animated.View>
    </PanGestureHandler>
  );
};

export default CryptoItem;
