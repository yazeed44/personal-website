import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 3px;
  width: 90%;
  padding: 25px;
  max-width: 960px;
  word-wrap: break-word;
  margin: 0px auto 0 auto;

  ${props => config(props).media.sm`
    width: 80%;
    padding: 50px;
  `}
`

export default Wrapper
