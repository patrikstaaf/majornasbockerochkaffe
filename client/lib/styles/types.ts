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
      mini: string
      tablet: string
      desktop: string
    }
    fontFamily: {
      calibri: string
      sourceSerifPro: string
    }
    fontColor: {
      coffee: string
      paper: string
    }
  }
}
