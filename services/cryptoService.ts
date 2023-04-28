import {CryptoCurrency} from '../utils/types/crypto';
import axios from 'axios';
import {CRYPTO_API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchCryptoData = async (
  currency: string,
): Promise<CryptoCurrency> => {
  try {
    const API_BASE_URL = `${CRYPTO_API_URL}/${currency}/metrics`;
    const response = await axios.get(API_BASE_URL);
    if (response.status === 200) {
      const data = response.data.data;
      const cryptoMetrics: CryptoCurrency = {
        id: data.id,
        symbol: data.symbol,
        name: data.name,
        price_usd: data.market_data.price_usd,
        percent_change_usd_last_24_hours:
          data.market_data.percent_change_usd_last_24_hours,
      };

      return cryptoMetrics;
    } else {
      throw new Error('Error fetching cryptocurrency data.');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const saveUserCryptoList = async (userCryptoList: string[]) => {
  try {
    await AsyncStorage.setItem(
      'userCryptoList',
      JSON.stringify(userCryptoList),
    );
  } catch (error) {
    console.error('Error saving userCryptoList:', error);
  }
};

export const loadUserCryptoList = async (): Promise<string[]> => {
  try {
    const storedUserCryptoList = await AsyncStorage.getItem('userCryptoList');
    if (storedUserCryptoList) {
      return JSON.parse(storedUserCryptoList);
    }
  } catch (error) {
    console.error('Error loading userCryptoList:', error);
  }
  return [];
};
