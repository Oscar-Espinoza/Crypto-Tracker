import {CryptoState, CryptoCurrency} from '../../utils/types/crypto';
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
  cryptoData: {
    btc: {
      id: '1e31218a-e44e-4285-820c-8282ee222035',
      symbol: 'BTC',
      name: 'Bitcoin',
      price_usd: 29507.173920765475,
      percent_change_usd_last_24_hours: -2.612249968274451,
    },
    eth: {
      id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
      symbol: 'ETH',
      name: 'Ethereum',
      price_usd: 2079.0698780898338,
      percent_change_usd_last_24_hours: 1.9186090358561458,
    },
    xrp: {
      id: '21c795f5-1bfd-40c3-858e-e9d7e8200',
      symbol: 'XRP',
      name: 'XRP',
      price_usd: 1512.4123413,
      percent_change_usd_last_24_hours: -1.412312,
    },
  },
  loading: false,
};

const cryptoReducer = (
  state: CryptoState = initialState,
  action: {type: string; payload?: CryptoCurrency},
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cryptoReducer;
