import {ADD_CRYPTO, REMOVE_CRYPTO, SET_LOADING} from '../actions/cryptoActions';
import {CryptoState, CryptoAction} from '../../utils/types/crypto';
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
  userCryptoList: ['btc', 'eth', 'xrp'],
  cryptoData: {},
  loading: false,
};

const cryptoReducer = (
  state: CryptoState = initialState,
  action: CryptoAction,
) => {
  switch (action.type) {
    case ADD_CRYPTO:
      return {
        ...state,
        cryptoData: {
          ...state.cryptoData,
          [action.payload.symbol]: action.payload.data,
        },
      };
    case REMOVE_CRYPTO:
      return {
        ...state,
        userCryptoList: state.userCryptoList.filter(
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
    case SET_LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

export default cryptoReducer;
