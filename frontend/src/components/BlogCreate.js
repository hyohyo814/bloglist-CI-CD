import { useState } from 'react'

const BlogCreate = ({ handle }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    handle({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    })
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

  return (
    <>
      <form onSubmit={addBlog}>
        <h2>create new</h2>
        <div>
          title:
          <input
            type="text"
            value={newTitle}
            name="Title"
            onChange={(event) => setNewTitle(event.target.value)}
            id='titleinp'
          />
        </div>
        <div>
          author:
          <input
            type="text"
            value={newAuthor}
            name="Author"
            onChange={(event) => setNewAuthor(event.target.value)}
            id='authorinp'
          />
        </div>
        <div>
          url:
          <input
            type="text"
            value={newUrl}
            name="Url"
            onChange={(event) => setNewUrl(event.target.value)}
            id='urlinp'
          />
        </div>
        <button type="submit" id="submitblog">create</button>
      </form>
    </>
  )
}

export default BlogCreate
