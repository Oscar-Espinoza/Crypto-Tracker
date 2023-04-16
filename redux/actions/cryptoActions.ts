export const ADD_CRYPTO = 'ADD_CRYPTO';
export const REMOVE_CRYPTO = 'REMOVE_CRYPTO';
export const SET_CRYPTO_DATA = 'SET_CRYPTO_DATA';

import {fetchCryptoData} from '../../services/cryptoService';

export const addCrypto = (symbol: string) => ({
  type: ADD_CRYPTO,
  payload: symbol,
});

export const removeCrypto = (symbol: string) => ({
  type: REMOVE_CRYPTO,
  payload: symbol,
});

export const setCryptoData = (symbol: string) => {
  return async (dispatch: any) => {
    try {
      const data = await fetchCryptoData(symbol);
      dispatch({
        type: SET_CRYPTO_DATA,
        payload: {symbol, data},
      });
    } catch (error) {
      console.error(error);
    }
  };
};
