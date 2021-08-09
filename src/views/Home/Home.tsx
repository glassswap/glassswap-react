import React from 'react'
import styled from 'styled-components'
import { Heading, BaseLayout, Button } from 'glassswap-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import Countdown from 'react-countdown'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

// const Hero = styled.div`
//   align-items: center;
//   background-repeat: no-repeat;
//   background-position: top center;
//   display: flex;
//   flex-direction: column;
//   margin: auto;
//   margin-bottom: 22px;
//   padding-top: 60px;

//   ${({ theme }) => theme.mediaQueries.lg} {
//     background-position: left center, right center;
//     height: 165px;
//     padding-top: 0;
//   }
// `

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

// const CTACards = styled(BaseLayout)`
//   align-items: start;
//   margin-bottom: 32px;

//   & > div {
//     grid-column: span 6;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     & > div {
//       grid-column: span 4;
//     }
//   }
// `

const Header = styled.div`
  padding: 32px 0px;
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const TokenImage = styled.img`
  margin-left: 5px;
  margin-right: 5px;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <>
      <Header>
        <Heading as="h1" size="xl" color="secondary" mb="24px">
          {TranslateString(578, 'The Best Yield farm on Binance Smartchain')}
          <Countdown
            date={new Date('August 12, 2021 16:44:06')}
            intervalDelay={0}
            precision={3}
            renderer={({ formatted }) => (
              <div>
                {formatted.days}:{formatted.hours}: {formatted.minutes}:{formatted.seconds} until farming starts
              </div>
            )}
          />
        </Heading>
        <Heading size="lg" color="text">
          <a href="https://pancakeswap.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xc0699dcAf5AE66D36881cae93120c851dB6986c1">
            <Button variant="primary">
              {TranslateString(733, 'BUY')}{' '}
              <TokenImage src="/images/farms/wine.png" alt="WINE Token" width="70" height="70" />{' '}
              {TranslateString(734, 'WINE Token Now!')}
            </Button>
          </a>
        </Heading>
      </Header>
      <Page>
        <div>
          <Cards>
            <FarmStakingCard />
            <TwitterCard />
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
          {/* <Cards>
            <EarnAssetCard />
            <AuditCard />
          </Cards>
          <Cards>
            <ListedOn />
          </Cards> */}
        </div>
      </Page>
    </>
  )
}

export default Home
