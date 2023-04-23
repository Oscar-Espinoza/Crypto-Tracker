import {fetchCryptoData} from '../../services/cryptoService';
import {AppThunk} from '../store';

export const ADD_CRYPTO = 'ADD_CRYPTO';
export const REMOVE_CRYPTO = 'REMOVE_CRYPTO';
export const SET_LOADING = 'SET_LOADING';
export const REFRESH_CRYPTO = 'REFRESH_CRYPTO';

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const addCrypto = (
  symbol: string,
  onComplete?: () => void,
): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const data = await fetchCryptoData(symbol);
      dispatch({
        type: ADD_CRYPTO,
        payload: {symbol, data},
      });
      dispatch(setLoading(false));
      if (onComplete) {
        onComplete();
      }
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
      if (onComplete) {
        onComplete();
      }
    }
  };
};

export const removeCrypto = (symbol: string) => ({
  type: REMOVE_CRYPTO,
  payload: symbol,
});

export const refreshCrypto = (symbol: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const data = await fetchCryptoData(symbol);
      dispatch({
        type: REFRESH_CRYPTO,
        payload: {symbol, data},
      });
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
    }
  };
};
