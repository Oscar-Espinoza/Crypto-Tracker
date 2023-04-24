export type CryptoCurrency = {
  id: string;
  symbol: string;
  name: string;
  price_usd: number;
  percent_change_usd_last_24_hours: number;
};

export type CryptoData = {
  [key: string]: CryptoCurrency;
};

export type CryptoState = {
  cryptoCurrenciesList: Record<string, string>;
  userCryptoList: string[];
  cryptoData: CryptoData;
  loading: boolean;
};

export type RootState = {
  crypto: CryptoState;
};

export type RootStackParamList = {
  CryptoList: undefined;
  AddCrypto: undefined;
};
