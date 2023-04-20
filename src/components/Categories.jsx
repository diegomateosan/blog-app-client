import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Categories () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('/api/categories')
      setCategories(res.data)
    }
    getCategories()
  }, [])

  return (
    <section className='categories'>
      <h2>Categorías</h2>
      <ul className='category-list'>
        {categories.map(category => (
          <li className='category-item' key={category._id}>
            <Link className='link' to={`/?cat=${category.name}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
