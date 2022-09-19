import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    hemingway: '#739598',
    picasso: '#84965D',
    coffee: '#1E1F22',
    crust: '#B17B54',
    cream: '#ECDBC9',
    paper: '#FBF6EF',
  },
  device: {
    tablet: '834px',
    desktop: '1440px',
  },
  fontFamily: {
    calibri: 'Calibri',
    // sitka: 'Sitka',
  },
  fontSize: {
    desktop: {
      size: {
        h1: '40px',
        h2: '42px',
        body: '24px',
        link: '24px',
      },
    },
  },
  fontColor: {
    coffee: '#1E1F22',
    paper: '#FBF6EF',
  },
}

export default theme
