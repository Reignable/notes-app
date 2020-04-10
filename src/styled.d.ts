import 'styled-components'

type Color = {
  light: string
  main: string
  dark: string
}

declare module 'styled-components' {
  export type Color = {
    light: string
    main: string
    dark: string
  }

  export type BaseTheme = {
    colors: {
      primary: Color
      secondary: Color
    }
  }

  export interface DefaultTheme extends BaseTheme {
    button: {
      primary: {
        backgroundColor: string
      }
      secondary: {
        backgroundColor: string
      }
    }
  }
}
