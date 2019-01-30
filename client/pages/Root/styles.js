// @flow
import styled, { createGlobalStyle } from 'styled-components'
import { typography, colors } from 'constants'

export default createGlobalStyle`
   @font-face {
    font-family: ‘Guillon’;
    src:    
            url("${require('../../assets/Fonts/woff/Guillon-Regular.woff')}") format('woff'),
            url("${require('../../assets/Fonts/WOFF2/Guillon-Regular.woff2')}") format('woff2'),
    font-weight: normal;
    font-style: normal;
}

  html {
    margin: 0;
    padding: 0;
    font-size: ${typography.baseFontSize};
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    appearance: none;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    line-height: 1.4em;
    background-color: ${colors.white};
    color: ${colors.shadeDark};
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    height: 100vh;
    box-sizing: border-box;
    user-select: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
`

export const Main = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar navbar navbar'
    'sidebar content content'
    'sidebar content content';
  grid-template-columns: 252px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
  background-color: #f4f5fa;
`
export const NavbarContainer = styled.div`
  grid-area: navbar;
`

export const SidebarContainer = styled.div`
  grid-area: sidebar;
`
