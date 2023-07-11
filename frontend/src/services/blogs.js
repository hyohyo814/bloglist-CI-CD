import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const get = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

const create = async (newObj) => {
  // console.log(token);
  const config = {
    headers: { Authorization: token },
  }
  // console.log(config);

  const res = await axios.post(baseUrl, newObj, config)
  return res.data
}

const update = async (updObj, id) => {
  // console.log(updObj);
  // console.log(id);
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.put(`${baseUrl}/${id}`, updObj, config)
  // console.log(res.data)
  return res.data
}

const remove = async (id) => {
  const check = await axios.get(`${baseUrl}/${id}`)
  console.log(check)
  const config = {
    headers: { Authorization: token },
  }
  // console.log(baseUrl)
  // console.log(id)
  // console.log(config)
  await axios.delete(`${baseUrl}/${id}`, config)
  return console.log('deletion successful')
}

export default { getAll, get, create, update, remove, setToken }
