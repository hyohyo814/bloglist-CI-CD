import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Likes from './Likes'

test('register like button clicks', async () => {
  const mockHandler = jest.fn()
  render(<Likes handle={mockHandler} />)

  const user = userEvent.setup()

  const likebtn = screen.getByPlaceholderText('likebtn')
  await user.click(likebtn)
  await user.click(likebtn)

  expect(mockHandler.mock.calls).toHaveLength(2)
})
