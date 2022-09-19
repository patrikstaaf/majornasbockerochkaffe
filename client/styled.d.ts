import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      hemingway: string
      picasso: string
      coffee: string
      crust: string
      cream: string
      paper: string
    }
    device: {
      tablet: string
      desktop: string
    }
    fontFamily: {
      // sitka: string
      calibri: string
    }
    fontSize: {
      desktop: {
        size: {
          h1: string
          h2: string
          body: string
          link: string
        }
      }
    }
    fontColor: {
      coffee: string
      paper: string
    }
  }
}
