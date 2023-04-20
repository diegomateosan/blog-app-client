import '../styles/newpost.css'
import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../context/context'
import { useNavigate } from 'react-router-dom'

export function NewPost () {
  const { user } = useContext(Context)
  const [file, setFile] = useState('')
  const [categories, setCategories] = useState([])
  const [categoryValues, setCategoryValues] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const getCategories = async () => {
        const res = await axios.get('/api/categories')
        setCategories(res.data)
      }
      getCategories()
    } catch (error) {}
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { title, description } = Object.fromEntries(new window.FormData(event.target))
    const newPost = {
      username: user.username,
      title,
      description,
      categories: categoryValues
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      newPost.photo = filename
      try {
        await axios.post('/api/upload', data)
      } catch (error) {}
    }

    try {
      const res = await axios.post('/api/posts', newPost)
      navigate(`/post/${res.data._id}`)
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
    <section className='newpost'>
      <form className='newpost-form' onSubmit={handleSubmit}>
        <div className='newpost-form-wrapper'>
          {file && (
            <img src={URL.createObjectURL(file)} alt='' />
          )}
          <label style={{ display: 'block', width: '64px', height: '64px', cursor: 'pointer' }} htmlFor='fileInputPost'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
            </svg>
          </label>
          <input type='file' id='fileInputPost' style={{ display: 'none' }} onChange={evt => setFile(evt.target.files[0])} />
          <input className='titleInput' type='text' name='title' placeholder='Título' autoFocus />
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
          </div>

          <textarea className='writingDesc' name='description' placeholder='¿Qué deseas escribir?' />
          <button type='submit'>
            Publicar
          </button>
        </div>
      </form>
    </section>
  )
}
