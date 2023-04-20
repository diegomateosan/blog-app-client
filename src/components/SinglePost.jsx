import '../styles/newpost.css'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../context/context'
import { PUBLIC_FOLDER } from '../consts'

export function SinglePost () {
  const { user } = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()

  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState([])
  const [updateMode, setUpdateMode] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState([])
  const [categoryValues, setCategoryValues] = useState([])

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/api/posts/${path}`)
      setPost(res.data)
      setTitle(res.data.title)
      setDescription(res.data.description)
      setCategoryValues(res.data.categories)
    }
    getPost()
  }, [path])

  useEffect(() => {
    try {
      const getCategories = async () => {
        const res = await axios.get('/api/categories')
        setCategories(res.data)
      }
      getCategories()
    } catch (error) {}
  }, [setCategories])

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post._id}`, {
        data: { username: user.username }
      })
      navigate('/')
    } catch (error) {}
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/posts/${post._id}`, {
        username: user.username,
        title,
        description,
        categories: categoryValues
      })

      setUpdateMode(false)
    } catch (error) {}
  }

  const handleChange = (event) => {
    const isChecked = event.target.checked
    const newCategory = event.target.value
    isChecked
      ? setCategoryValues([...categoryValues, newCategory])
      : setCategoryValues(categoryValues.filter(category => category !== newCategory))
  }

  return (
    <section>
      <div className='singlepost'>
        {post.photo &&
          <img src={`${PUBLIC_FOLDER}${post.photo}`} alt={post.title} />}
        <div className='singlepost-header'>
          {updateMode
            ? (<input type='text' value={title} className='singlepost-title-input' onChange={(e) => setTitle(e.target.value)} autoFocus />)
            : (
              <div className='singlepost-title-actions'>
                <h3 className='singlepost-title'>{title}</h3>
                {post.username === user?.username && (
                  <div className='singlepost-actions'>
                    <svg style={{ width: '32px', height: '32px', cursor: 'pointer', color: '#f0ad4e' }} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' onClick={() => setUpdateMode(true)}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
                    </svg>
                    <svg style={{ width: '32px', height: '32px', cursor: 'pointer', color: '#bb2124' }} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' onClick={handleDelete}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                    </svg>
                  </div>
                )}
              </div>
              )}
          {updateMode
            ? (
              <div className='categories-selection'>
                {
                categories.map((category) => (
                  <div className='category-selection' key={category._id}>
                    <input className='myCheckbox' type='checkbox' value={category.name} name={category.name} onChange={handleChange} />
                    <label className='labelCheckbox' htmlFor={category.name}>
                      {category.name}
                    </label>
                  </div>
                ))
                }
              </div>)
            : (
                categoryValues.length > 0 && (
                  <ul className='category-list'>
                    {categoryValues && categoryValues.map((category, index) => (
                      <li key={index} className='category-item'>
                        {category}
                      </li>
                    ))}
                  </ul>
                )

              )}

          <div className='singlepost-author-date'>
            <span className='singlepost-author'>Autor: <Link className='link' to={`/?user=${post.username}`}><span style={{ fontWeight: '700' }}>@{post.username}</span></Link></span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        {updateMode
          ? (<textarea className='singlepost-description-input' value={description} onChange={(e) => setDescription(e.target.value)} />)
          : (
            <p className='singlepost-description'>
              {description}
            </p>
            )}
        {updateMode && (
          <button className='singlepost-button' onClick={handleUpdate}>
            Actualizar
          </button>)}
      </div>
    </section>
  )
}
