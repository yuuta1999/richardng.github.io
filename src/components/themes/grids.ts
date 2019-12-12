import { Container, Navbar } from '../../types'

export const spacing: number = 1

export const container: Container = {
  padding: {
    top: 0,
    right: 1,
    bottom: 0,
    left: 0
  },
  margin: {
    top: 0,
    right: 'auto',
    bottom: 0,
    left: 'auto'
  }
}

export const navbar: Pick<Navbar, 'margin' | 'padding'> = {
  padding: {
    top: spacing / 2,
    right: 0,
    bottom: spacing / 2,
    left: 0
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}

// It's the same
export const navbarLink: Pick<Navbar, 'margin' | 'padding'> = {
  padding: {
    top: 0,
    right: spacing / 2,
    bottom: 0,
    left: spacing /2
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}
