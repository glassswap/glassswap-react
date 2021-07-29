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
    pid: 1,
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
    pid: 2,
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
  
  

]

export default farms