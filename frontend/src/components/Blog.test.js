import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import BlogBasic from './BlogBasic'
import userEvent from '@testing-library/user-event'

test('renders content', () => {
  const blog = {
    title: 'Hello World',
    author: 'John',
    url: 'http://example.com',
    likes: 7,
    user: {
      name: 'Adam',
    },
  }

  render(<BlogBasic blog={blog} />)
  const titleElement = screen.getByText('Hello World')
  const authorElement = screen.getByText('John')

  expect(titleElement).toBeDefined()
  expect(authorElement).toBeDefined()
})