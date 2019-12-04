import { css, createGlobalStyle } from 'styled-components'
import { ifProp } from 'styled-tools'
// import normalizeCSS from '!raw-loader!normalize.css'
import colors from './colors'

// --- UPDATES TO GLOBAL STYLES REQUIRES A PAGE REFRESH ---

// expand normalize.css string into css
export const normalize = css`
  ${'' /* ${normalizeCSS} */}
  
  body {
    background-color: ${ifProp('bgWhite', colors.white, colors.blue)};
    max-width: 100vw;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`
// create a global page style
export const GlobalStyle = createGlobalStyle`
  ${normalize}
`
