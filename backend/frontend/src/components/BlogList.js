import BlogDisp from './BlogDisp'
import Delete from './Delete'

const _ = require('lodash')

const BlogList = ({ blogs }) => {
  const testBlogs = _.orderBy(blogs, ['likes'], ['desc'])
  console.log('blogList function')

  const blogsList = _.map(testBlogs, (blog, key) => (
    <div key={blog.id} id={`blog${key}`}>
      <BlogDisp
        blog={blog}
        index={key}
      />
      <Delete
        blog={blog}
        index={key}
      />
    </div>
  ))
  // console.log(blogsList)
  return blogsList
}

export default BlogList
