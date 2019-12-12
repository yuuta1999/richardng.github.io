import { ThemeMode } from '../types'

type Modes = {
  [key in ThemeMode]: string | number
}

export const getTheme = (mode: ThemeMode, obj: Modes) => {
  const theme = obj[mode]
  return theme
}
