import { DefaultTheme, BaseTheme } from 'styled-components'

const base: BaseTheme<'blueGray' | 'orange'> = {
  colors: {
    blueGray: {
      '50': '#ECEFF1',
      '500': '#607D8B',
      '700': '#455A64',
      '900': '#263238',
    },
    orange: {
      '500': '#FF9800',
      '700': '#F57C00',
      '900': '#E65100',
    },
  },
}

const light: DefaultTheme = {
  ...base,
  button: {
    primary: {
      backgroundColor: base.colors.orange[500],
      color: base.colors.blueGray[900],
      hover: {
        backgroundColor: base.colors.orange[700],
      },
      focus: {
        borderColor: base.colors.orange[700],
      },
    },
    secondary: {
      backgroundColor: base.colors.blueGray[500],
      color: base.colors.blueGray[50] ?? '#fff',
      hover: {
        backgroundColor: base.colors.blueGray[700],
      },
      focus: {
        borderColor: base.colors.blueGray[700],
      },
    },
  },
}

// const dark: DefaultTheme = {
//   ...base,
//   button: {
//     primary: {
//       backgroundColor: base.colors.primary.dark,
//       color: base.colors.text.dark,
//     },
//     secondary: {
//       backgroundColor: base.colors.secondary.dark,
//       color: base.colors.text.light,
//       hover: {
//         backgroundColor: base.colors,
//       },
//     },
//   },
// }

export { light }
