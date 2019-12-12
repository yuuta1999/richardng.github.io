import * as colors from './components/themes/colors'

export type ThemeMode = 'light' | 'dark'
export type Colors = typeof colors
export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Direction = 'top' | 'right' | 'bottom' | 'left'
export type Padding = { [key in Direction]: string | number }
export type Margin = { [key in Direction]: string | number }

export type Container = {
  padding: Padding
  margin: Margin
}

export type Navbar = {
  padding: Padding
  margin: Margin,
  color: string,
  background: string,
  boxShadow: string,
  border: string
}
