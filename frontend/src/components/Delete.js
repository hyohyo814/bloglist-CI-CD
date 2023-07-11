import blogService from '../services/blogs.js';
import PropTypes from 'prop-types';

const Delete = ({ blog }) => {
  const handleDel = async (event) => {
    event.preventDefault();
    // console.log(target);
    const userJSON = window.localStorage.getItem('loggedUser');
    const user = JSON.parse(userJSON);
    // console.log(user);
    // console.log(user.username)
    console.log(blog.user.username);
    if (!user || user.username !== blog.user.username) {
      return window.alert('You are not authorized to delete selected post');
    }
    try {
      const res = await blogService.get(blog.id);
      console.log(res);
      const confirm = window.confirm(
        `Remove blog ${res.title} by ${res.author}`
      );
      if (confirm === true) {
        // console.log('confirmation access')
        console.log(blog.id);
        return await blogService.remove(blog.id);
      }
      console.log('Deletion cancelled');
      return;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <button onClick={handleDel}>remove</button>
    </>
  );
};

Delete.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Delete;
