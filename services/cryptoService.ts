import {CryptoCurrency} from '../utils/types/crypto';
import axios from 'axios';

const fetchCryptoData = async (currency: string): Promise<CryptoCurrency> => {
  try {
    const API_BASE_URL = `https://data.messari.io/api/v1/assets/${currency}/metrics`;
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

export {fetchCryptoData};
