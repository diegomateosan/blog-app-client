import { useEffect, useState } from 'react'
import { getSinglePost } from '../services/post.service'
import { getCategories } from '../services/category.service'
import { useLocation } from 'react-router-dom'

export const usePost = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState([])
  const [categoryValues, setCategoryValues] = useState([])
  const [post, setPost] = useState([])

  useEffect(() => {
    getSinglePost({ path }).then((res) => {
      setPost(res.data)
      setTitle(res.data.title)
      setDescription(res.data.description)
      setCategoryValues(res.data.categories)
    })
  }, [path])

  useEffect(() => {
    try {
      getCategories().then((res) => setCategories(res.data))
    } catch (error) {
      console.log(error)
    }
  }, [setCategories])

  return { title, setTitle, description, setDescription, categories, categoryValues, setCategoryValues, post }
}
