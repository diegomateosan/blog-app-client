import { Link } from 'react-router-dom'
import { useCategories } from '../hooks/useCategories'

export function Categories () {
  const { categories } = useCategories()

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
