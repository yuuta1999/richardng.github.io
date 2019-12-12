import React from 'react'
import { render, waitForElement, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import Brand from '../brand'

afterEach(cleanup)

test('it works', async () => {

  const { getByText, container } = render(<Brand>Richardng.com</Brand>)


  expect(container.firstChild).toMatchSnapshot()

  await waitForElement(() => getByText(/Richardng.com/i))
})
