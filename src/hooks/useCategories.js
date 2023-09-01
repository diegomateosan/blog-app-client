import { useEffect, useState } from 'react'
import { getCategories } from '../services/category.service'

export const useCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(res => setCategories(res.data))
  }, [])

  return { categories }
}
