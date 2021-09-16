import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from 'react-icons/fa'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from 'gatsby'
import loadable from '@loadable/component'

import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'
import Articles from '../components/articles'

const Layout = loadable(() => import('../components/layout'))

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  opacity: 0.2;
`

const Home = ({ className, location }) => {
  const {
    keywords,
    siteTitle,
    introText,
    authorAvatar,
    social,
    siteCover,
    authorDescription,
    githubUsername,
    devtoUsername,
  } = siteConfig
  return (
    <Layout location={location.pathname}>
      <SEO title={siteTitle} keywords={keywords} />

      <Hero heroImg={siteCover} title={introText} />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            <Col xs={4} className="avatar">
              <img
                className="avatar__image"
                src={withPrefix(authorAvatar)}
                alt="user avatar"
              />
              <div className="social">
                {social.devto && (
                  <a
                    className="social-link devto"
                    href={social.devto}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaDev className="social-icon" size="32" />
                  </a>
                )}
                {social.github && (
                  <a
                    className="social-link github"
                    href={social.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="social-icon" size="32" />
                  </a>
                )}
                {social.linkedin && (
                  <a
                    className="social-link linkedin"
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="social-icon" size="32" />
                  </a>
                )}
                {social.twitter && (
                  <a
                    className="social-link twitter"
                    href={social.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="social-icon" size="32" />
                  </a>
                )}
                {social.email && (
                  <a
                    className="social-link email"
                    href={`mailto:${social.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaEnvelope className="social-icon" size="32" />
                  </a>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <About title="About" text={authorDescription} />
            </Col>
          </Row>
          <Separator />
          <Timeline />
          <Separator />
          {githubUsername && <Repositories />}
          {devtoUsername && <Articles />}
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`
