import React from 'react'
import styled from 'styled-components'

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
        Hi there! I'm Yazeed, a Blockchain and Backend developer focused on
        JavaScript, Python and Solidity. I build APIs in Node.js that interacts
        with smart contracts using ethers.js and decentralized storage such as
        IPFS.{' '}
      </p>
    </IntroText>
  )
}
