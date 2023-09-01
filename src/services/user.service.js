import axios from 'axios'
import { Context } from '../context/context'
import { useContext } from 'react'

export const registerUser = async ({ username, email, password }) => {
  return await axios.post('/api/auth/register', {
    username,
    email,
    password
  })
}

export const loginUser = async ({ username, email, password }) => {
  return await axios.post('/api/auth/login', {
    username,
    password
  })
}

export const updateUser = async ({ userId, username, email, password, file }) => {
  const { updateSuccess, updateFailure } = useContext(Context)
  const updatedUser = {
    userId,
    username,
    email,
    password
  }
  if (file) {
    const data = new FormData()
    const filename = Date.now() + file.name
    data.append('name', filename)
    data.append('file', file)
    updatedUser.profilePic = filename
    try {
      await axios.post('/api/upload', data)
    } catch (error) {}
  }
  try {
    const res = await axios.put(`/api/users/${userId}`, updatedUser)
    updateSuccess(res.data)
    window.location.reload()
  } catch (error) {
    updateFailure()
  }
}
