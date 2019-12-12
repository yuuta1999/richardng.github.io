import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import NavItem from '../nav-item'

afterEach(cleanup)

it('Navbar works', () => {
  const { container } = render(<NavItem />)

  expect(container.firstChild).toMatchSnapshot()
})
