import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    isOldPsc: true,
    isTokenOnly: true,
    lpSymbol: 'WINE',
    lpAddresses: {
      97: '',
      56: '0xcd631c4f294f1011eb5f4a75d92f5504fa1d26aa', // WINE-BUSD LP
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0xc0699dcAf5AE66D36881cae93120c851dB6986c1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    isOldPsc: true,
    lpSymbol: 'WINE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xcd631c4f294f1011eb5f4a75d92f5504fa1d26aa',
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0xc0699dcAf5AE66D36881cae93120c851dB6986c1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    isOldPsc: true,
    lpSymbol: 'WINE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xdfff4e73ea78536e3b61401c6e7e41d85e563b2a',
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0xc0699dcAf5AE66D36881cae93120c851dB6986c1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 8,
  //   isPsc: true,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 4,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xf45cd219aef8618a92baa7ad848364a158a24f33', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x7213a321f1855cf1779f42c0cd85d3d95291d34c', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', // BNB-BUSD
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    isPsc: true,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0ed7e52944161450477ee417de9cd3a859b14fd0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 8,
    isPsc: true,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    isPsc: true,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7efaef62fddcca950418312c6c91aef321375a00',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    isPsc: true,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61eb789d75a95caa3ff50ed7e47b96c132fec082',
    },
    tokenSymbol: 'BTCB-BNB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'MATIC',
    lpAddresses: {
      97: '',
      56: '0xd903a5152999168de106cfdd051f3e8975f605c2', // MATIC-BUSD
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    isPsc: true,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0xdd5bad8f8b360d76d12fda230f8baf42fe0022cf', // DOT-BNB
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    isPsc: true,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91b974ec2af3c843270886528a9e6',
    },
    tokenSymbol: 'CAKE-BUSD',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    isPsc: true,
    lpSymbol: 'DOT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9fDaaB9312084298d210B8789629D3054230e998',
    },
    tokenSymbol: 'DOT-BUSD',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },



]

export default farms
