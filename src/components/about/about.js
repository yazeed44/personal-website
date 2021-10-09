import React from 'react'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

const IntroText = styled.div`
  a {
    color: #000;
  }
`

export default ({ title = 'about', text = '' }) => {
  return (
    <IntroText>
      <h2>{title}</h2>
      <p>
        I'm a frontend developer focused on JavaScript. Most of the time I'm
        working with Typescript, React and Vue.{' '}
      </p>
      <p>
        When I discover something exciting I write a new article about. I like
        helping other devs on{' '}
        <a
          href="https://stackoverflow.com/users/5572406/the-previ"
          target="_blank"
          rel="noreferrer"
        >
          StackOverflow
        </a>
        .
        <br />
        When I have time I love to contribute to open source, if you're logged
        in GitHub, you can see{' '}
        <a
          href={`https://github.com/pulls?q=is%3Apr+author%3A${siteConfig.githubUsername}+-user%3A${siteConfig.githubUsername}+is%3Amerged+is%3Apublic+`}
          target="_blank"
          rel="noreferrer"
        >
          all my contributions
        </a>
        .
      </p>
    </IntroText>
  )
}
