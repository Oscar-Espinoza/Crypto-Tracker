import {
  ADD_CRYPTO,
  REMOVE_CRYPTO,
  SET_CRYPTO_DATA,
} from '../actions/cryptoActions';

const initialState = {
  cryptoList: [],
  cryptoData: {},
};

const cryptoReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_CRYPTO:
      return {...state, cryptoList: [...state.cryptoList, action.payload]};
    case REMOVE_CRYPTO:
      return {
        ...state,
        cryptoList: state.cryptoList.filter(
          (symbol: string) => symbol !== action.payload,
        ),
        cryptoData: Object.keys(state.cryptoData).reduce(
          (acc: any, key: string) => {
            if (key !== action.payload) {
              acc[key] = state.cryptoData[key];
            }
            return acc;
          },
          {},
        ),
      };
    case SET_CRYPTO_DATA:
      return {
        ...state,
        cryptoData: {
          ...state.cryptoData,
          [action.payload.symbol]: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default cryptoReducer;
