import axios from 'axios';

interface CryptoMetrics {
  id: string;
  symbol: string;
  name: string;
  priceUsd: number;
  changePercent24Hr: number;
}

const fetchCryptoData = async (currency: string): Promise<CryptoMetrics> => {
  try {
    const API_BASE_URL = `https://data.messari.io/api/v1/assets/${currency}/metrics`;
    const response = await axios.get(API_BASE_URL);

    if (response.status === 200) {
      const data = response.data.data;

      const cryptoMetrics: CryptoMetrics = {
        id: data.id,
        symbol: data.symbol,
        name: data.name,
        priceUsd: data.market_data.price_usd,
        changePercent24Hr: data.market_data.percent_change_usd_last_24_hours,
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
export type {CryptoMetrics};
