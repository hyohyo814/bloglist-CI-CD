import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogCreate from './BlogCreate'

test('Verify contents from submitting form', async () => {
  const mockHandler = jest.fn()
  const user = userEvent.setup()

  render(<BlogCreate handle={mockHandler}/>)

  const title = screen.getByPlaceholderText('Title input')
  const author = screen.getByPlaceholderText('Author input')
  const url = screen.getByPlaceholderText('Url input')
  const submit = screen.getByPlaceholderText('submitBlog')

  await user.type(title, 'title test')
  await user.type(author, 'author test')
  await user.type(url, 'url test')
  await user.click(submit)

  expect(mockHandler.mock.calls[0][0].title).toBe('title test')
  expect(mockHandler.mock.calls[0][0].author).toBe('author test')
  expect(mockHandler.mock.calls[0][0].url).toBe('url test')
})