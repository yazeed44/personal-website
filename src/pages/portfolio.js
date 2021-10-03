import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from 'gatsby'
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 4px 7px 9px -9px rgb(0 0 0 / 51%);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) =>
    href &&
    css`
      &:hover ${Image} {
        transition: transform 0.5s;
        transform: translateY(-5px);
      }
    `}
`

const Portfolio = ({ className, location }) => {
  const title = 'Portfolio'
  const { keywords, portfolio } = siteConfig
  return (
    <>
      <SEO title={title} keywords={keywords} />
      <Layout location={location.pathname}>
        <Hero
          heroImg={withPrefix('/images/pexels-jonas-svidras-785418.jpg')}
          title={title}
        />

        <Wrapper className={className}>
          <Container className="page-content" fluid>
            <Row>
              {portfolio.map(job => (
                <Col key={job.description} align="center">
                  <JobCard
                    as={job.url ? 'a' : 'div'}
                    href={job.url}
                    target="_blank"
                  >
                    <Image src={withPrefix(job.image)} />
                    <p>{job.description}</p>
                  </JobCard>
                </Col>
              ))}
            </Row>
          </Container>
        </Wrapper>
      </Layout>
    </>
  )
}

export default styled(Portfolio)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
`
