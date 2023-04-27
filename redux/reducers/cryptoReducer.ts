import {
  ADD_CRYPTO,
  SET_LOADING,
  REFRESH_CRYPTO,
  REMOVE_CRYPTO,
} from '../actions/cryptoActions';
import {CryptoState, CryptoAction} from '../../utils/types/crypto';
import {saveUserCryptoList} from '../../services/cryptoService';

const cryptoCurrenciesList = {
  Bitcoin: 'BTC',
  Ethereum: 'ETH',
  BinanceCoin: 'BNB',
  Cardano: 'ADA',
  Dogecoin: 'DOGE',
  Ripple: 'XRP',
  Solana: 'SOL',
  Polkadot: 'DOT',
  Chainlink: 'LINK',
  Litecoin: 'LTC',
  BitcoinCash: 'BCH',
  Stellar: 'XLM',
  Algorand: 'ALGO',
  Cosmos: 'ATOM',
  EOS: 'EOS',
  TRON: 'TRX',
  Uniswap: 'UNI',
  Filecoin: 'FIL',
  BitcoinSV: 'BSV',
  Monero: 'XMR',
  Zcash: 'ZEC',
  Dash: 'DASH',
  Neo: 'NEO',
  EthereumClassic: 'ETC',
  Tezos: 'XTZ',
  VeChain: 'VET',
  IOTA: 'MIOTA',
  Avalanche: 'AVAX',
  ShibaInu: 'SHIB',
  Polygon: 'MATIC',
  Terra: 'LUNA',
  PancakeSwap: 'CAKE',
  Aave: 'AAVE',
  Maker: 'MKR',
  Compound: 'COMP',
  SushiSwap: 'SUSHI',
  FTXToken: 'FTT',
  HuobiToken: 'HT',
  KuCoinToken: 'KCS',
  BitTorrent: 'BTT',
  Holo: 'HOT',
  ThetaToken: 'THETA',
  Decentraland: 'MANA',
  TheGraph: 'GRT',
  Synthetix: 'SNX',
  YearnFinance: 'YFI',
  Ren: 'REN',
  OceanProtocol: 'OCEAN',
  EnjinCoin: 'ENJ',
  BasicAttentionToken: 'BAT',
  '0x': 'ZRX',
  Golem: 'GLM',
  CurveDAO: 'CRV',
  RenBTC: 'RENBTC',
  CompoundUSD: 'CUSDC',
  CompoundDAI: 'CDAI',
  WrappedBitcoin: 'WBTC',
  TrueUSD: 'TUSD',
  PaxosStandard: 'PAX',
  Dai: 'DAI',
  USDCoin: 'USDC',
  Tether: 'USDT',
};

const initialState: CryptoState = {
  cryptoCurrenciesList,
  userCryptoList: [],
  cryptoData: {},
  loading: true,
};

const cryptoReducer = (
  state: CryptoState = initialState,
  action: {type: string; payload?: CryptoCurrency},
) => {
  switch (action.type) {
    case ADD_CRYPTO:
      const newUserCryptoListAdd = state.userCryptoList.includes(
        action.payload.symbol,
      )
        ? state.userCryptoList
        : [...state.userCryptoList, action.payload.symbol];
      saveUserCryptoList(newUserCryptoListAdd);
      return {
        ...state,
        cryptoData: {
          ...state.cryptoData,
          [action.payload.symbol]: action.payload.data,
        },
        userCryptoList: newUserCryptoListAdd,
      };
    case REMOVE_CRYPTO:
      const newUserCryptoListRemove = state.userCryptoList.filter(
        cryptoSymbol => cryptoSymbol !== action.payload,
      );
      saveUserCryptoList(newUserCryptoListRemove);
      const newCryptoData = {...state.cryptoData};
      delete newCryptoData[action.payload];
      return {
        ...state,
        userCryptoList: newUserCryptoListRemove,
        cryptoData: newCryptoData,
      };
    case SET_LOADING:
      return {...state, loading: action.payload};
    case REFRESH_CRYPTO:
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
