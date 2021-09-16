import React from 'react'
import styled from 'styled-components'

const IntroText = styled.p`
  line-height: 30px;
  a {
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #000;
    padding-bottom: 4px;
  }
`

export default ({ title = 'about', text = '' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <IntroText dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}
