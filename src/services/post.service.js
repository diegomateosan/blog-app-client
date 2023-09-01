import axios from 'axios'

export const fetchPosts = async ({ search }) => {
  return await axios.get(`/api/posts${search}`)
}

export const createPost = async ({ username, title, description, categories, file }) => {
  const newPost = {
    username,
    title,
    description,
    categories
  }
  // upload image
  if (file) {
    const data = new FormData()
    const filename = Date.now() + file.name
    data.append('name', filename)
    data.append('file', file)
    newPost.photo = filename
    try {
      await axios.post('/api/upload', data)
    } catch (error) {
      console.log(error)
    }
  }

  try {
    return await axios.post('/api/posts', newPost)
  } catch (error) {
    console.log(error)
  }
}

export const getSinglePost = async ({ path }) => {
  return await axios.get(`/api/posts/${path}`)
}

export const deletePost = async ({ post, username }) => {
  await axios.delete(`/api/posts/${post._id}`, {
    data: { username }
  })
}

export const updatePost = async ({ post, username, title, description, categories }) => {
  await axios.put(`/api/posts/${post._id}`, {
    username,
    title,
    description,
    categories
  })
}
