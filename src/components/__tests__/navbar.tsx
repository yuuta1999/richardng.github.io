import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import Navbar from '../navbar'

afterEach(cleanup)

it('Navbar works with no transparency', () => {
  const { container } = render(<Navbar transparent={false}/>)

  expect(container.firstChild).toMatchSnapshot()
})


it('Navbar works with transparency', () => {
  const { container } = render(<Navbar transparent={true}/>)

  expect(container.firstChild).toMatchSnapshot()
})
