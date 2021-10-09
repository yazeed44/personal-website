import React from 'react'
import styled from 'styled-components'
import { FiHeart, FiCoffee } from 'react-icons/fi'
import { config } from 'react-awesome-styled-grid'

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      {`© ${new Date().getFullYear()}`} Made with{' '}
      <FiCoffee css={{ marginLeft: '7px', marginRight: '7px' }} size={22} /> and{' '}
      <FiHeart css={{ marginLeft: '7px' }} size={22} />
    </footer>
  )
}

export default styled(Footer)`
  min-height: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(960px + 48px);
  margin: 0 auto;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};

  ${props => config(props).media.sm`
    flex-direction: row;
  `}
`
