import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Calibri';
        src: url('../assets/fonts/calibri-regular.woff') format('woff');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    @font-face {
        font-family: 'SourceSerifPro';
        src: url('../assets/fonts/SourceSerifPro-Regular.woff') format('woff');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyles
