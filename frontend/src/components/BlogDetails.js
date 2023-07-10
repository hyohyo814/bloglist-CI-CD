import { useState, useEffect } from 'react'
import Togglable from './Togglable'
import Likes from './Likes'
import blogService from '../services/blogs.js'

const BlogDetails = ({ blog, index }) => {
  const [likes, setLikes] = useState()

  useEffect(() => {
    setLikes(blog.likes)
  }, [blog])

  const handleLikes = async (event) => {
    event.preventDefault()
    // console.log(`button clicked on ${blog.id}`);
    // console.log(res.likes);

    const newBlogObj = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      user: blog.user,
      likes: likes + 1,
    }

    await blogService.update(newBlogObj, blog.id)
    setLikes(likes + 1)
  }

  return (
    <Togglable buttonLabel="view">
      <div className="urldisplay">{blog.url}</div>
      <div className="likesdisplay">
        likes: {likes}
        <Likes handle={handleLikes} />
      </div>
      {blog.user.name} <br />
    </Togglable>
  )
}

export default BlogDetails
