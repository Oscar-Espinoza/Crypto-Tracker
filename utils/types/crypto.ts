import {
  ADD_CRYPTO,
  REMOVE_CRYPTO,
  SET_LOADING,
  REFRESH_CRYPTO,
} from '../../redux/actions/cryptoActions';
export type CryptoCurrency = {
  id: string;
  symbol: string;
  name: string;
  price_usd: number;
  percent_change_usd_last_24_hours: number;
};

export type CryptoListItem = {
  name: string;
  symbol: string;
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

export type CryptoAction =
  | {
      type: typeof ADD_CRYPTO | typeof REFRESH_CRYPTO;
      payload: {symbol: string; data: CryptoCurrency};
    }
  | {type: typeof REMOVE_CRYPTO; payload: string}
  | {type: typeof SET_LOADING; payload: boolean};
