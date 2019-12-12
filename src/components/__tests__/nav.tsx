import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Nav from '../nav'

afterEach(cleanup)

it('it works', () => {
  const { container } = render(<Nav />)

  expect(container.firstChild).toMatchSnapshot()
})
