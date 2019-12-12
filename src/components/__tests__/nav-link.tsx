import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import NavLink from '../nav-link'

afterEach(cleanup)

it('Navbar works', () => {
  const { container } = render(<NavLink />)

  expect(container.firstChild).toMatchSnapshot()
})
