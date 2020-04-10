import { DefaultTheme, BaseTheme } from 'styled-components'

const base: BaseTheme = {
  colors: {
    primary: { light: '#FFB74D', main: '#FF9800', dark: '#EF6C00' },
    secondary: { light: '#b0bec5', main: '#607d8b', dark: '#37474f' },
  },
}

const light: DefaultTheme = {
  ...base,
  button: {
    primary: {
      backgroundColor: base.colors.primary.main,
    },
    secondary: {
      backgroundColor: base.colors.secondary.main,
    },
  },
}

const dark: DefaultTheme = {
  ...base,
  button: {
    primary: {
      backgroundColor: base.colors.primary.dark,
    },
    secondary: {
      backgroundColor: base.colors.secondary.dark,
    },
  },
}

export { light, dark }
