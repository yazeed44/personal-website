import React, { useEffect, useState } from 'react'
import jsonFetch from 'simple-json-fetch'
import styled from 'styled-components'
import loadable from '@loadable/component'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'

const Layout = loadable(() => import('../components/layout'))

const endpoint = `https://random-404-api.herokuapp.com/random-image`

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`

const Image = styled.div`
  img {
    width: 90%;
    height: 600px;
  }
`

const Text = styled.p`
  text-align: center;
`

const TurnHome = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: currentColor;
  }
`

const NotFoundPage = ({ location }) => {
  const [image, setImage] = useState()

  useEffect(() => {
    async function fetchData() {
      const imageNotFound = await jsonFetch(endpoint)
      if (imageNotFound.json?.src) {
        setImage(imageNotFound.json.src)
      }
    }
    fetchData()
  }, [setImage])

  return (
    <>
      <SEO title="Page Not Found" />
      <Layout location={location.pathname} noCover={true}>
        <Wrapper>
          <MainTitle>404 Page Not Found</MainTitle>
          <Image>
            <img src={image} alt="random 404" />
          </Image>
          <Text>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </Text>
          <TurnHome>
            <a href="/">Turn to homepage</a>
          </TurnHome>
        </Wrapper>
      </Layout>
    </>
  )
}

export default NotFoundPage
