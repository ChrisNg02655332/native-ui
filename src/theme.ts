import * as colors from './colors'

export type Color = {
  primary: typeof colors.blue
  neutral: typeof colors.gray
  danger: typeof colors.red
  warning: typeof colors.yellow
  success: typeof colors.green
  background?: string
  card?: string
  text?: string
  border?: string
  notification?: string
  disabled?: string
  black?: string
  white?: string
}

export type Theme = {
  colors: Color
  fontFamily?: {
    bold?: string
    regular?: string
    medium?: string
    semibold?: string
  }
  fontSize: {
    sm: number
  }
}

export const DefaultTheme: Theme = {
  colors: {
    primary: colors.blue,
    neutral: colors.gray,
    danger: colors.red,
    warning: colors.yellow,
    success: colors.green,
    white: colors.white,
    black: colors.black,
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: colors.gray[200],
    notification: 'rgb(255, 69, 58)',
    disabled: '#ccc',
  },
  fontSize: {
    sm: 16,
  },
}
