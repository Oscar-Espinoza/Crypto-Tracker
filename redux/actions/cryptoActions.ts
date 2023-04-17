import {fetchCryptoData} from '../../services/cryptoService';
import {AppThunk} from '../store';

export const ADD_CRYPTO = 'ADD_CRYPTO';
export const REMOVE_CRYPTO = 'REMOVE_CRYPTO';
export const SET_LOADING = 'SET_LOADING';

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const addCrypto = (symbol: string): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const data = await fetchCryptoData(symbol);
      dispatch({
        type: ADD_CRYPTO,
        payload: {symbol, data},
      });
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
    }
  };
};

export const removeCrypto = (symbol: string) => ({
  type: REMOVE_CRYPTO,
  payload: symbol,
});
