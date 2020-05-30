import 'styled-components'

type Color = {
  50?: string
  100?: string
  200?: string
  300?: string
  400?: string
  500: string
  600?: string
  700: string
  800?: string
  900: string
}

declare module 'styled-components' {
  export type BaseTheme<C> = {
    colors: {
      [K in C]: Color
    }
  }

  type ButtonVariation = {
    backgroundColor: string
    color: string
    hover: {
      backgroundColor: string
    }
    focus: {
      borderColor: string
    }
  }

  export interface DefaultTheme extends BaseTheme {
    button: {
      primary: ButtonVariation
      secondary: ButtonVariation
      destructive: ButtonVariation
    }
  }
}
